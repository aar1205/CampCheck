import { getPostsByCategory } from '@/lib/posts';
import ArticleCard from './ArticleCard';

interface CategoryPostsProps {
  categorySlug: string;
}

export default async function CategoryPosts({ categorySlug }: CategoryPostsProps) {
  const posts = await getPostsByCategory(categorySlug);

  if (posts.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200">
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
          Artikel in dieser Kategorie
        </h2>
        <p className="text-gray-600">
          {posts.length} {posts.length === 1 ? 'Artikel' : 'Artikel'} zum Thema
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <ArticleCard key={post.slug} post={post} variant="compact" />
        ))}
      </div>
    </section>
  );
}
