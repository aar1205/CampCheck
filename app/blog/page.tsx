import { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getAllCategories } from '@/lib/categories';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Alle Camping-Artikel, Tipps und Guides für dein nächstes Outdoor-Abenteuer. Von Anfänger-Guides über Ausrüstungs-Empfehlungen bis zu den schönsten Campingplätzen.',
};

export default function BlogPage() {
  const allPosts = getAllPosts();
  const categories = getAllCategories();

  // Sort posts by published date (newest first)
  const sortedPosts = [...allPosts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Blog' }
          ]}
        />

        {/* Page Header */}
        <header className="mb-12 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Alle Artikel
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Entdecke unsere umfassende Sammlung an Camping-Artikeln, Tipps und Guides.
            Von Anfänger-Tutorials über Ausrüstungs-Tests bis zu den schönsten Campingplätzen –
            hier findest du alles für dein perfektes Outdoor-Abenteuer.
          </p>
        </header>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Category Filter */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Kategorien
              </h2>
              <nav>
                <ul className="space-y-2">
                  {/* All Posts Option */}
                  <li>
                    <a
                      href="/blog"
                      className="flex items-center gap-3 px-3 py-2 rounded-md bg-green-50 text-green-700 font-semibold hover:bg-green-100 transition-colors"
                    >
                      <span className="text-xl">📚</span>
                      <span>Alle Artikel</span>
                      <span className="ml-auto text-sm">({allPosts.length})</span>
                    </a>
                  </li>

                  {/* Category Links */}
                  {categories.map((category) => {
                    const categoryPostCount = allPosts.filter(
                      (post) => post.category === category.slug
                    ).length;

                    return (
                      <li key={category.slug}>
                        <a
                          href={`/kategorien/${category.slug}`}
                          className="flex items-center gap-3 px-3 py-2 rounded-md text-gray-700 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                        >
                          <span className="text-xl">{category.icon}</span>
                          <span className="flex-grow">{category.name}</span>
                          <span className="text-sm text-gray-500">
                            ({categoryPostCount})
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>

          {/* Main Content - Article Grid */}
          <main className="flex-grow">
            {/* Article Count */}
            <div className="mb-6 text-gray-600">
              <p className="text-sm">
                {sortedPosts.length} {sortedPosts.length === 1 ? 'Artikel' : 'Artikel'} gefunden
              </p>
            </div>

            {/* Article Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {sortedPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} variant="default" />
              ))}
            </div>

            {/* Empty State (if no posts) */}
            {sortedPosts.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">📝</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Keine Artikel gefunden
                </h2>
                <p className="text-gray-600">
                  Es wurden noch keine Artikel veröffentlicht.
                </p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
