import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/lib/posts';
import { getCategoryBySlug } from '@/lib/categories';
import Link from 'next/link';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedPosts from '@/components/RelatedPosts';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post || post.category !== category) {
    return { title: 'Artikel nicht gefunden' };
  }

  return {
    title: post.metaTitle || post.title,
    description: post.metaDescription || post.excerpt,
    openGraph: {
      title: post.metaTitle || post.title,
      description: post.metaDescription || post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
      images: [{ url: post.image }],
    },
  };
}

export async function generateStaticParams() {
  const allPosts = await getAllPosts();
  return allPosts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export default async function ArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post || post.category !== category) {
    notFound();
  }

  const categoryData = getCategoryBySlug(post.category);
  const relatedPosts = await getRelatedPosts(post.slug, 3);

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24 pb-16">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: categoryData?.name || 'Kategorie', href: `/kategorien/${post.category}` },
            { name: post.title },
          ]}
        />

        <article className="mt-8">
          {/* Header */}
          <header className="mb-8">
            {categoryData && (
              <Link
                href={`/kategorien/${post.category}`}
                className="inline-block px-4 py-2 rounded-full text-sm font-semibold bg-[var(--color-pine)] text-white mb-4 hover:opacity-90 transition-opacity"
              >
                {categoryData.emoji} {categoryData.name}
              </Link>
            )}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-3">
                {post.author.avatar ? (
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-amber-400 flex items-center justify-center text-forest-deep font-bold">
                    {post.author.name.charAt(0)}
                  </div>
                )}
                <span className="font-semibold">{post.author.name}</span>
              </div>
              <time dateTime={post.publishedAt} className="editorial-number">
                {formatDate(post.publishedAt)}
              </time>
              <span className="flex items-center gap-1.5 editorial-number">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {post.readingTime} Min. Lesezeit
              </span>
            </div>

            {/* Featured Image */}
            <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-xl mb-8">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Content */}
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:hover:text-blue-800 prose-strong:text-gray-900 prose-li:text-gray-700 prose-table:text-gray-700">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>

          {/* Tags */}
          {post.tags && post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">
                Schlagwörter
              </h3>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </article>

        {/* Related Posts */}
        <RelatedPosts currentSlug={post.slug} category={post.category} limit={3} />
      </div>
    </div>
  );
}
