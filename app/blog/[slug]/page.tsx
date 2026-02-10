import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import { getPostBySlug, Post } from '@/lib/posts';
import { getCategoryBySlug } from '@/lib/categories';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryIcon from '@/components/CategoryIcon';
import TableOfContents from '@/components/TableOfContents';
import RelatedPosts from '@/components/RelatedPosts';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Generate static params at build time - SYNCHRONOUS for output: export
export function generateStaticParams() {
  // Read directory synchronously for static export
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const slugs = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
  
  return slugs;
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artikel nicht gefunden',
    };
  }

  const category = getCategoryBySlug(post.category);

  // Use metaTitle if available, otherwise fallback to title
  const pageTitle = post.metaTitle || post.title;
  // Use metaDescription if available, otherwise fallback to excerpt
  const pageDescription = post.metaDescription || post.excerpt;

  return {
    title: pageTitle,
    description: pageDescription,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [post.image],
    },
    keywords: post.tags,
  };
}

// Helper function to parse headings from content
function parseHeadings(content: string) {
  const headingRegex = /^##\s+(.+)$/gm;
  const headings: Array<{ id: string; text: string; level: 2 | 3 }> = [];
  let match;

  while ((match = headingRegex.exec(content)) !== null) {
    const text = match[1].trim();
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9äöüß\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    headings.push({ id, text, level: 2 });
  }

  return headings;
}

// Helper function to convert markdown-style content to HTML
function parseContent(content: string) {
  // Process content in blocks to handle code blocks properly
  const blocks: string[] = [];
  const lines = content.split('\n');
  let i = 0;
  
  while (i < lines.length) {
    const line = lines[i];
    
    // Handle code blocks (```language ... ```)
    if (line.trim().startsWith('```')) {
      const lang = line.trim().slice(3).trim();
      const codeContent: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeContent.push(lines[i]);
        i++;
      }
      const code = escapeHtml(codeContent.join('\n'));
      blocks.push(`<pre class="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm"><code class="language-${lang}">${code}</code></pre>`);
      i++;
      continue;
    }
    
    // Handle horizontal rules
    if (line.trim() === '---') {
      blocks.push('<hr class="border-gray-200 my-8" />');
      i++;
      continue;
    }
    
    // Handle h2 headings
    if (line.startsWith('## ')) {
      const text = line.substring(3).trim();
      const id = createId(text);
      blocks.push(`<h2 id="${id}" class="text-3xl font-bold mt-10 mb-4 text-gray-900 scroll-mt-20">${parseInline(text)}</h2>`);
      i++;
      continue;
    }
    
    // Handle h3 headings
    if (line.startsWith('### ')) {
      const text = line.substring(4).trim();
      const id = createId(text);
      blocks.push(`<h3 id="${id}" class="text-2xl font-bold mt-8 mb-3 text-gray-800 scroll-mt-20">${parseInline(text)}</h3>`);
      i++;
      continue;
    }
    
    // Handle h4 headings
    if (line.startsWith('#### ')) {
      const text = line.substring(5).trim();
      blocks.push(`<h4 class="text-xl font-bold mt-6 mb-2 text-gray-800">${parseInline(text)}</h4>`);
      i++;
      continue;
    }
    
    // Handle list items (collect consecutive items)
    if (line.startsWith('- ')) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        const itemLine = lines[i];
        const itemText = itemLine.substring(2).trim();
        listItems.push(`<li class="mb-2">${parseInline(itemText)}</li>`);
        i++;
      }
      blocks.push(`<ul class="list-none space-y-2 mb-6 pl-6">${listItems.join('')}</ul>`);
      continue;
    }
    
    // Handle numbered lists
    if (/^\d+\.\s/.test(line)) {
      const listItems: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        const text = lines[i].replace(/^\d+\.\s/, '');
        listItems.push(`<li class="mb-2">${parseInline(text)}</li>`);
        i++;
      }
      blocks.push(`<ol class="list-decimal space-y-2 mb-6 pl-6 marker:text-gray-500">${listItems.join('')}</ol>`);
      continue;
    }
    
    // Handle blockquotes
    if (line.startsWith('> ')) {
      const quoteLines: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        quoteLines.push(lines[i].substring(2));
        i++;
      }
      const quote = quoteLines.join('\n');
      blocks.push(`<blockquote class="border-l-4 border-green-500 pl-4 italic text-gray-600 my-6">${parseInline(quote)}</blockquote>`);
      continue;
    }
    
    // Handle empty lines
    if (line.trim() === '') {
      i++;
      continue;
    }
    
    // Regular paragraph
    blocks.push(`<p class="mb-4 text-gray-700 leading-relaxed">${parseInline(line)}</p>`);
    i++;
  }
  
  return blocks.join('\n');
}

// Helper to create URL-friendly IDs
function createId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9äöüß\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
}

// Helper to parse inline formatting (bold, italic, links)
function parseInline(text: string): string {
  // Handle links [text](url)
  let result = text.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-green-600 hover:text-green-700 underline">$1</a>');
  
  // Handle bold **text**
  result = result.replace(/\*\*(.+?)\*\*/g, '<strong class="text-gray-900 font-bold">$1</strong>');
  
  // Handle inline code `text`
  result = result.replace(/`([^`]+)`/g, '<code class="bg-gray-100 text-gray-800 px-1 py-0.5 rounded text-sm font-mono">$1</code>');
  
  return result;
}

// Escape HTML special characters for code blocks
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const category = getCategoryBySlug(post.category);
  const headings = parseHeadings(post.content);
  const htmlContent = parseContent(post.content);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      description: post.author.bio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Camping Blog',
      logo: {
        '@type': 'ImageObject',
        url: `${process.env.NEXT_PUBLIC_SITE_URL || ''}/logo.png`,
      },
    },
    articleSection: category?.name,
    keywords: post.tags?.join(', '),
    wordCount: post.content.split(/\s+/).length,
    timeRequired: `PT${post.readingTime}M`,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-16 md:pt-20">
        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-900">
          <Image src={post.image} alt={post.title} fill priority className="object-cover opacity-90" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="container mx-auto px-4 max-w-7xl">
          <div className="-mt-8 relative z-10">
            <div className="bg-white rounded-lg shadow-lg px-6 py-4 inline-block">
              <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Blog', href: '/blog' }, ...(category ? [{ name: category.name, href: `/kategorien/${category.slug}` }] : []), { name: post.title }]} />
            </div>
          </div>

          <header className="max-w-4xl mx-auto mt-8 mb-12">
            {category && (
              <Link href={`/kategorien/${category.slug}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors mb-6">
                <CategoryIcon name={category.icon} size={20} />
                <span>{category.name}</span>
              </Link>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-3">
                {post.author.avatar ? (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image src={post.author.avatar} alt={post.author.name} fill sizes="56px" className="object-cover" />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-bold text-gray-900">{post.author.name}</div>
                  {post.author.bio && <div className="text-sm text-gray-600">{post.author.bio}</div>}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 ml-auto">
                <time dateTime={post.publishedAt} className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(post.publishedAt)}
                </time>
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readingTime} Min. Lesezeit
                </span>
              </div>
            </div>
          </header>

          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            <main className="flex-grow max-w-4xl">
              <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3 prose-p:text-gray-700 prose-p:leading-relaxed prose-strong:text-gray-900 prose-strong:font-bold prose-ul:my-6 prose-li:text-gray-700" dangerouslySetInnerHTML={{ __html: htmlContent }} />
              
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors">#{tag}</span>
                    ))}
                  </div>
                </div>
              )}
            </main>

            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <TableOfContents items={headings} />
              </div>
            </aside>
          </div>

          <RelatedPosts currentSlug={post.slug} category={post.category} limit={3} />
        </div>
      </article>
    </>
  );
}
