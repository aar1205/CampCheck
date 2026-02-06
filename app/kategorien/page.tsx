import { Metadata } from 'next';
import { getAllCategories } from '@/lib/categories';
import { getAllPosts } from '@/lib/posts';
import CategoryCard from '@/components/CategoryCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Kategorien',
  description: 'Entdecke unsere Camping-Kategorien: Von Camping-Grundlagen über Ausrüstung und Zelte bis zu Camping-Küche, Familie, Wildcamping und den schönsten Campingplätzen.',
};

export default async function KategorienPage() {
  const categories = getAllCategories();
  const allPosts = await getAllPosts();

  // Calculate article count for each category
  const categoriesWithCount = categories.map((category) => ({
    category,
    articleCount: allPosts.filter((post) => post.category === category.slug).length,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Kategorien' }
          ]}
        />

        {/* Page Header */}
        <header className="mb-12 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Kategorien
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Entdecke unsere Camping-Kategorien und finde genau die Artikel, die dich interessieren.
            Von Anfänger-Guides über Ausrüstungs-Tests bis zu den schönsten Campingplätzen –
            hier findest du alle Themen übersichtlich sortiert.
          </p>
        </header>

        {/* Category Count */}
        <div className="mb-8 text-gray-600">
          <p className="text-sm">
            {categories.length} {categories.length === 1 ? 'Kategorie' : 'Kategorien'} verfügbar
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoriesWithCount.map(({ category, articleCount }) => (
            <CategoryCard
              key={category.slug}
              category={category}
              articleCount={articleCount}
            />
          ))}
        </div>

        {/* Empty State (if no categories) */}
        {categories.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📂</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Keine Kategorien gefunden
            </h2>
            <p className="text-gray-600">
              Es wurden noch keine Kategorien erstellt.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
