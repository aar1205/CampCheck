import ArticleCard from './ArticleCard';
import { getRelatedPosts } from '@/lib/posts';

interface RelatedPostsProps {
  currentSlug: string;  // to exclude current post
  category: string;     // to find related posts
  limit?: number;       // default 3
}

export default async function RelatedPosts({
  currentSlug,
  category,
  limit = 3
}: RelatedPostsProps) {
  // Get related posts based on current slug
  const relatedPosts = await getRelatedPosts(currentSlug, limit);

  // Don't render if no related posts found
  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      {/* Section Heading */}
      <h2 className="text-3xl font-bold mb-8 text-gray-900">
        Das könnte dich auch interessieren
      </h2>

      {/* Related Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <ArticleCard
            key={post.slug}
            post={post}
            variant="compact"
          />
        ))}
      </div>
    </section>
  );
}
