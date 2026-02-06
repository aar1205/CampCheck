import Hero from '@/components/Hero';
import ArticleCard from '@/components/ArticleCard';
import CategoryCarousel from '@/components/CategoryCarousel';
import Newsletter from '@/components/Newsletter';
import { getAllPosts, getFeaturedPosts } from '@/lib/posts';
import { getAllCategories } from '@/lib/categories';
import Link from 'next/link';

export default async function Home() {
  const allPosts = await getAllPosts();
  const featuredPosts = await getFeaturedPosts();
  const categories = getAllCategories();

  // Get latest 6 posts for the "Neueste Artikel" section
  const latestPosts = allPosts.slice(0, 6);

  return (
    <>
      {/* Hero Section - Full Height */}
      <Hero fullHeight />

      {/* Featured/Latest Articles Section - Modern Redesign */}
      <section className="py-20 bg-gradient-to-b from-white via-gray-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Header with Animation */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-pine)]/10 rounded-full mb-6">
                <span className="w-2 h-2 bg-[var(--color-pine)] rounded-full animate-pulse"></span>
                <span className="text-[var(--color-pine)] text-sm font-semibold uppercase tracking-wider">
                  Frisch vom Lagerfeuer
                </span>
              </div>
              
              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 leading-tight">
                Artikel
                <span className="relative inline-block ml-3">
                  <span className="relative z-10 text-[var(--color-pine)]">entdecken</span>
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-[var(--color-amber)] -z-0" viewBox="0 0 200 9" fill="none">
                    <path d="M2.00025 6.99997C25.7501 9.49997 106.25 9.49997 198.001 2.99997" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span>
              </h2>
              
              {/* Subtitle */}
              <p className="text-xl text-gray-600 leading-relaxed">
                Tauche ein in unsere neuesten Camping-Guides, Ausrüstungs-Tests und Outdoor-Abenteuer. 
                Von Anfänger-Tipps bis zum Profi-Know-how.
              </p>
            </div>
            
            {/* Modern CTA Button */}
            <Link
              href="/blog"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-gray-900 hover:bg-[var(--color-pine)] text-white font-semibold rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 flex-shrink-0"
            >
              <span>Alle Artikel</span>
              <svg 
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Articles Grid with improved spacing */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {latestPosts.map((post, index) => (
              <div 
                key={post.slug}
                className="opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <ArticleCard post={post} />
              </div>
            ))}
          </div>

          {/* Bottom CTA - Alternative Style */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
              <span className="text-gray-600">Noch nicht gefunden, was du suchst?</span>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-beige)] hover:bg-[var(--color-amber)] text-[var(--color-forest)] font-semibold rounded-xl transition-all duration-300"
              >
                <span>Alle Artikel durchsuchen</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - 3D Carousel */}
      <section className="py-16 md:py-24 bg-[var(--color-beige)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Entdecke <span className="text-[var(--color-pine)]">Themen</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Swipe durch unsere Kategorien und finde genau das, was dich interessiert
            </p>
          </div>

          {/* 3D Carousel */}
          <CategoryCarousel categories={categories} posts={allPosts} />

          {/* Link to all categories */}
          <div className="text-center mt-8">
            <Link 
              href="/kategorien"
              className="inline-flex items-center gap-2 text-[var(--color-pine)] font-semibold hover:underline"
            >
              <span>Alle Kategorien im Überblick</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
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
