import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getCategoryBySlug, getAllCategories } from '@/lib/categories';
import { getPostsByCategory } from '@/lib/posts';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryIcon from '@/components/CategoryIcon';

interface CategoryPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Kategorie nicht gefunden',
    };
  }

  return {
    title: category.name,
    description: category.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  // If category doesn't exist, show 404
  if (!category) {
    notFound();
  }

  const posts = getPostsByCategory(slug);

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Kategorien', href: '/kategorien' },
            { name: category.name }
          ]}
        />

        {/* Category Header */}
        <header className="mb-12 mt-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="text-green-600">
              <CategoryIcon name={category.icon} size={64} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              {category.name}
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-3xl">
            {category.description}
          </p>
        </header>

        {/* Article Count */}
        <div className="mb-8 text-gray-600">
          <p className="text-sm">
            {posts.length} {posts.length === 1 ? 'Artikel' : 'Artikel'} in dieser Kategorie
          </p>
        </div>

        {/* Articles Grid */}
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <ArticleCard key={post.slug} post={post} variant="default" />
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-16">
            <div className="text-green-600 mb-4 flex justify-center">
              <CategoryIcon name={category.icon} size={64} />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Noch keine Artikel
            </h2>
            <p className="text-gray-600 mb-6">
              In dieser Kategorie wurden noch keine Artikel veröffentlicht.
              <br />
              Schau bald wieder vorbei!
            </p>
            <a
              href="/kategorien"
              className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold"
            >
              Alle Kategorien ansehen
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
