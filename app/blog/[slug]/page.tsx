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

  return {
    title: post.title,
    description: post.excerpt,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
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
      title: post.title,
      description: post.excerpt,
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
  const lines = content.split('\n');
  const parsedLines = lines.map((line) => {
    if (line.startsWith('## ')) {
      const text = line.substring(3).trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9äöüß\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      return `<h2 id="${id}" class="text-3xl font-bold mt-10 mb-4 text-gray-900 scroll-mt-20">${text}</h2>`;
    }

    if (line.startsWith('### ')) {
      const text = line.substring(4).trim();
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9äöüß\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      return `<h3 id="${id}" class="text-2xl font-bold mt-8 mb-3 text-gray-800 scroll-mt-20">${text}</h3>`;
    }

    const boldConverted = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    if (boldConverted.startsWith('- ')) {
      return `<li class="mb-2">${boldConverted.substring(2)}</li>`;
    }

    if (boldConverted.startsWith('- ☐ ')) {
      return `<li class="mb-2 flex items-start gap-2"><span class="text-gray-400">☐</span><span>${boldConverted.substring(4)}</span></li>`;
    }

    if (boldConverted.trim() && !boldConverted.startsWith('<')) {
      return `<p class="mb-4 text-gray-700 leading-relaxed">${boldConverted}</p>`;
    }

    return boldConverted;
  });

  let inList = false;
  const finalLines: string[] = [];

  for (let i = 0; i < parsedLines.length; i++) {
    const line = parsedLines[i];

    if (line.startsWith('<li')) {
      if (!inList) {
        finalLines.push('<ul class="list-none space-y-2 mb-6 pl-6">');
        inList = true;
      }
      finalLines.push(line);
    } else {
      if (inList) {
        finalLines.push('</ul>');
        inList = false;
      }
      finalLines.push(line);
    }
  }

  if (inList) {
    finalLines.push('</ul>');
  }

  return finalLines.join('\n');
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
