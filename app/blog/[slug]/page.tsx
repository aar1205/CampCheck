import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts, getPostBySlug } from '@/lib/posts';
import { getCategoryBySlug } from '@/lib/categories';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import RelatedPosts from '@/components/RelatedPosts';

interface PageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

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
    // Create slug-friendly ID
    const id = text
      .toLowerCase()
      .replace(/[^a-z0-9äöüß\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .replace(/^-|-$/g, '');

    headings.push({
      id,
      text,
      level: 2,
    });
  }

  return headings;
}

// Helper function to convert markdown-style content to HTML with IDs
function parseContent(content: string) {
  // Split content by lines
  const lines = content.split('\n');
  const parsedLines = lines.map((line) => {
    // Convert H2 headings
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

    // Convert H3 headings
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

    // Convert bold text
    const boldConverted = line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');

    // Convert list items
    if (boldConverted.startsWith('- ')) {
      return `<li class="mb-2">${boldConverted.substring(2)}</li>`;
    }

    // Convert checkbox items
    if (boldConverted.startsWith('- ☐ ')) {
      return `<li class="mb-2 flex items-start gap-2"><span class="text-gray-400">☐</span><span>${boldConverted.substring(4)}</span></li>`;
    }

    // Regular paragraphs
    if (boldConverted.trim() && !boldConverted.startsWith('<')) {
      return `<p class="mb-4 text-gray-700 leading-relaxed">${boldConverted}</p>`;
    }

    return boldConverted;
  });

  // Wrap consecutive <li> elements in <ul>
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

export default function BlogArticlePage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  const category = getCategoryBySlug(post.category);
  const headings = parseHeadings(post.content);
  const htmlContent = parseContent(post.content);

  // Format date in German
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  // JSON-LD structured data for Article
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
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* Hero Image */}
        <div className="relative w-full h-[400px] md:h-[500px] bg-gray-900">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            className="object-cover opacity-90"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        {/* Main Content Container */}
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Breadcrumbs */}
          <div className="-mt-8 relative z-10">
            <div className="bg-white rounded-lg shadow-lg px-6 py-4 inline-block">
              <Breadcrumbs
                items={[
                  { name: 'Home', href: '/' },
                  { name: 'Blog', href: '/blog' },
                  ...(category ? [{ name: category.name, href: `/kategorien/${category.slug}` }] : []),
                  { name: post.title },
                ]}
              />
            </div>
          </div>

          {/* Article Header */}
          <header className="max-w-4xl mx-auto mt-8 mb-12">
            {/* Category Badge */}
            {category && (
              <Link
                href={`/kategorien/${category.slug}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-600 text-white font-semibold hover:bg-green-700 transition-colors mb-6"
              >
                <span className="text-xl">{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            )}

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author Info & Meta */}
            <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-gray-200">
              {/* Author */}
              <div className="flex items-center gap-3">
                {post.author.avatar ? (
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      sizes="56px"
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-14 h-14 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <div>
                  <div className="font-bold text-gray-900">{post.author.name}</div>
                  {post.author.bio && (
                    <div className="text-sm text-gray-600">{post.author.bio}</div>
                  )}
                </div>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 ml-auto">
                {/* Published Date */}
                <time dateTime={post.publishedAt} className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  {formatDate(post.publishedAt)}
                </time>

                {/* Reading Time */}
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  {post.readingTime} Min. Lesezeit
                </span>
              </div>
            </div>

            {/* Social Share Buttons (Decorative) */}
            <div className="flex items-center gap-4 mt-6">
              <span className="text-sm font-semibold text-gray-700">Teilen:</span>
              <div className="flex gap-3">
                {/* Facebook */}
                <button
                  className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors"
                  aria-label="Auf Facebook teilen"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                </button>

                {/* Twitter */}
                <button
                  className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors"
                  aria-label="Auf Twitter teilen"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </button>

                {/* WhatsApp */}
                <button
                  className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label="Auf WhatsApp teilen"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </button>

                {/* Link kopieren */}
                <button
                  className="w-10 h-10 rounded-full bg-gray-600 text-white flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label="Link kopieren"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </header>

          {/* Main Content Area with Sidebar */}
          <div className="flex flex-col lg:flex-row gap-8 mb-16">
            {/* Article Content */}
            <main className="flex-grow max-w-4xl">
              <div
                className="prose prose-lg max-w-none
                  prose-headings:font-bold
                  prose-h2:text-3xl prose-h2:mt-10 prose-h2:mb-4
                  prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
                  prose-p:text-gray-700 prose-p:leading-relaxed
                  prose-strong:text-gray-900 prose-strong:font-bold
                  prose-ul:my-6
                  prose-li:text-gray-700"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-sm font-semibold text-gray-700 mb-3">Tags:</h3>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </main>

            {/* Sidebar - Table of Contents (Sticky on Desktop) */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="lg:sticky lg:top-24">
                <TableOfContents items={headings} />
              </div>
            </aside>
          </div>

          {/* Related Posts Section */}
          <RelatedPosts currentSlug={post.slug} category={post.category} limit={3} />
        </div>
      </article>
    </>
  );
}
