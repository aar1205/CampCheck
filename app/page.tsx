import Hero from '@/components/Hero';
import ArticleCard from '@/components/ArticleCard';
import CategoryCard from '@/components/CategoryCard';
import Newsletter from '@/components/Newsletter';
import { getAllPosts, getFeaturedPosts } from '@/lib/posts';
import { getAllCategories } from '@/lib/categories';
import Link from 'next/link';

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const categories = getAllCategories();

  // Get latest 6 posts for the "Neueste Artikel" section
  const latestPosts = allPosts.slice(0, 6);

  return (
    <>
      {/* Hero Section - Full Height */}
      <Hero fullHeight />

      {/* Featured/Latest Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Neueste Artikel
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Entdecke unsere aktuellsten Camping-Guides, Tipps und Ausrüstungs-Reviews
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestPosts.map(post => (
              <ArticleCard key={post.slug} post={post} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/blog"
              className="inline-block px-8 py-3 bg-[var(--color-pine)] hover:bg-[var(--color-forest)] text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              Alle Artikel ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-[var(--color-beige)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Kategorien
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Finde genau die Camping-Themen, die dich interessieren
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <Newsletter />

      {/* Checklisten Teaser Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[var(--color-pine)] to-[var(--color-forest)] rounded-2xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Text Content */}
              <div className="p-8 md:p-12">
                <div className="inline-block bg-white/20 rounded-full px-4 py-2 mb-6">
                  <span className="text-white text-sm font-semibold">
                    ✓ Kostenlose Checklisten
                  </span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Nie wieder etwas vergessen!
                </h2>

                <p className="text-lg text-white/90 mb-6">
                  Unsere praktischen Camping-Checklisten helfen dir, perfekt
                  vorbereitet in dein Abenteuer zu starten. Von der Basis-Ausrüstung
                  bis zur Luxus-Ausstattung - wir haben alles für dich zusammengestellt.
                </p>

                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-3 text-white">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Camping-Packliste für Einsteiger</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Wohnmobil-Checkliste</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Camping mit Kindern Checkliste</span>
                  </li>
                  <li className="flex items-center gap-3 text-white">
                    <svg className="w-6 h-6 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Outdoor-Küche Checkliste</span>
                  </li>
                </ul>

                <Link
                  href="/checklisten"
                  className="inline-block px-8 py-4 bg-white text-[var(--color-forest)] font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Zu den Checklisten
                </Link>
              </div>

              {/* Image/Visual Content */}
              <div className="hidden md:block relative h-full min-h-[400px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=800&auto=format&fit=crop)',
                    backgroundPosition: 'center'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[var(--color-forest)]/30"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
