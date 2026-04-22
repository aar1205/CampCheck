'use client';

import { useState, useMemo } from 'react';
import { Post } from '@/lib/posts';
import { Category } from '@/lib/categories';
import ArticleCard from '@/components/ArticleCard';
import Breadcrumbs from '@/components/Breadcrumbs';

interface ArchivClientProps {
  posts: Post[];
  categories: Category[];
}

const POSTS_PER_PAGE = 9;

type SortOption = 'date-desc' | 'date-asc' | 'alpha';

export default function ArchivClient({ posts, categories }: ArchivClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<SortOption>('date-desc');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter & Sort
  const filteredPosts = useMemo(() => {
    let result = [...posts];

    if (selectedCategory !== 'all') {
      result = result.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    switch (sortBy) {
      case 'date-desc':
        result.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
        break;
      case 'date-asc':
        result.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
        break;
      case 'alpha':
        result.sort((a, b) => a.title.localeCompare(b.title));
        break;
    }

    return result;
  }, [posts, selectedCategory, searchQuery, sortBy]);

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, currentPage]);

  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: SortOption) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Archiv' }]} />

        {/* Header */}
        <header className="mb-10 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3 tracking-tight">
            Artikel-Archiv
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl">
            Durchsuche alle {posts.length} Camping-Guides, Tipps und Inspirationen. 
            Finde genau das, was du sucht.
          </p>
        </header>

        {/* Controls Bar */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-grow max-w-xl">
              <svg
                className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Artikel suchen..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-pine)]/20 focus:border-[var(--color-pine)] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => handleSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Sort */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500 hidden sm:inline">Sortierung:</span>
              <select
                value={sortBy}
                onChange={(e) => handleSortChange(e.target.value as SortOption)}
                className="px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-pine)]/20 focus:border-[var(--color-pine)] cursor-pointer"
              >
                <option value="date-desc">Neueste zuerst</option>
                <option value="date-asc">Älteste zuerst</option>
                <option value="alpha">Alphabetisch (A-Z)</option>
              </select>
            </div>
          </div>

          {/* Category Filter Chips */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
              <span className="text-sm text-gray-500 flex-shrink-0 mr-1">Kategorie:</span>
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
                  selectedCategory === 'all'
                    ? 'bg-gray-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Alle
              </button>
              {categories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleCategoryChange(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 ${
                    selectedCategory === cat.slug
                      ? 'bg-[var(--color-pine)] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.emoji} {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-500">
            {filteredPosts.length} {filteredPosts.length === 1 ? 'Artikel' : 'Artikel'} gefunden
            {selectedCategory !== 'all' && (
              <span className="ml-2">
                · Kategorie: <strong>{categories.find((c) => c.slug === selectedCategory)?.name}</strong>
              </span>
            )}
            {searchQuery && (
              <span className="ml-2">
                · Suche: <strong>„{searchQuery}"</strong>
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        {paginatedPosts.length > 0 ? (
          <>
            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedPosts.map((post) => (
                <ArticleCard key={post.slug} post={post} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-14 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-gray-500">
                  Seite {currentPage} von {totalPages} · {filteredPosts.length} Artikel gesamt
                </p>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    ← Zurück
                  </button>

                  <div className="flex items-center gap-1">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-xl font-medium transition-all ${
                          currentPage === page
                            ? 'bg-[var(--color-pine)] text-white shadow-md'
                            : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {page}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 font-medium hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  >
                    Weiter →
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-200">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Keine Artikel gefunden</h2>
            <p className="text-gray-600 mb-6">
              Versuche eine andere Suche oder wähle eine andere Kategorie.
            </p>
            <button
              onClick={() => {
                handleSearchChange('');
                handleCategoryChange('all');
                handleSortChange('date-desc');
              }}
              className="px-6 py-3 bg-[var(--color-pine)] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
            >
              Filter zurücksetzen
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
