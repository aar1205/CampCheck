'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Breadcrumbs from '@/components/Breadcrumbs';
import CategoryIcon from '@/components/CategoryIcon';

interface Post {
  slug: string;
  title: string;
  excerpt?: string;
  publishedAt: string;
  category: string;
  readingTime: number;
}

interface Category {
  slug: string;
  name: string;
  icon: string;
}

interface ArchivClientProps {
  posts: Post[];
  categories: Category[];
}

// Category colors mapping
const categoryColors: Record<string, string> = {
  'camping-familie': 'bg-yellow-500',
  'campingplaetze': 'bg-amber-500',
  'vanlife-camper': 'bg-stone-600',
  'camping-grundlagen': 'bg-green-600',
  'ausruestung-gear': 'bg-slate-600',
  'zelte-schlafen': 'bg-indigo-900',
  'camping-kueche': 'bg-orange-600',
  'wildcamping': 'bg-green-800',
  'geschenke-inspiration': 'bg-pink-600',
  'sicherheit-gesundheit': 'bg-orange-700',
  'nachhaltigkeit': 'bg-emerald-700',
  'sonstiges': 'bg-purple-700',
};

export default function ArchivClient({ posts, categories }: ArchivClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter posts
  const filteredPosts = useMemo(() => {
    let result = posts;

    if (selectedCategory !== 'all') {
      result = result.filter((post) => post.category === selectedCategory);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt?.toLowerCase().includes(query)
      );
    }

    return result;
  }, [posts, selectedCategory, searchQuery]);

  // Group by year
  const postsByYear = useMemo(() => {
    return filteredPosts.reduce((acc, post) => {
      const year = new Date(post.publishedAt).getFullYear();
      if (!acc[year]) acc[year] = [];
      acc[year].push(post);
      return acc;
    }, {} as Record<number, Post[]>);
  }, [filteredPosts]);

  const years = Object.keys(postsByYear).map(Number).sort((a, b) => b - a);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Breadcrumbs */}
        <Breadcrumbs items={[{ name: 'Home', href: '/' }, { name: 'Archiv' }]} />

        {/* Header */}
        <div className="mb-6 mt-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Archiv</h1>
          <p className="text-gray-600">
            {posts.length} Artikel · Alles auf einen Blick
          </p>
        </div>

        {/* Search & Filter - Sticky */}
        <div className="sticky top-20 z-30 bg-gray-50 pb-4 mb-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-grow">
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
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
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                />
              </div>

              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500/20 sm:w-64"
              >
                <option value="all">Alle Kategorien</option>
                {categories.map((cat) => (
                  <option key={cat.slug} value={cat.slug}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Results Count */}
            <div className="mt-3 pt-3 border-t border-gray-100 text-sm text-gray-500">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'Artikel' : 'Artikel'} gefunden
            </div>
          </div>
        </div>

        {/* Quick Category Filter - Icons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
              selectedCategory === 'all'
                ? 'bg-gray-900 text-white'
                : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
            }`}
          >
            Alle
          </button>
          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setSelectedCategory(cat.slug)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                selectedCategory === cat.slug
                  ? 'bg-gray-900 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <CategoryIcon name={cat.icon} size={14} />
              <span className="hidden sm:inline">{cat.name}</span>
              <span className="sm:hidden">{cat.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Content - Compact Grid */}
        <AnimatePresence mode="wait">
          {filteredPosts.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              {years.map((year) => (
                <section key={year}>
                  {/* Year Header */}
                  <div className="flex items-center gap-3 mb-3">
                    <h2 className="text-lg font-bold text-gray-900">{year}</h2>
                    <div className="h-px flex-grow bg-gray-300" />
                    <span className="text-xs text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
                      {postsByYear[year].length}
                    </span>
                  </div>

                  {/* Compact Article Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {postsByYear[year].map((post) => {
                      const category = categories.find((c) => c.slug === post.category);
                      const colorClass = categoryColors[post.category] || 'bg-gray-500';

                      return (
                        <Link
                          key={post.slug}
                          href={`/kategorien/${post.category}/${post.slug}`}
                          className="group flex items-center gap-3 p-3 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-sm transition-all"
                        >
                          {/* Category Icon & Color */}
                          <div className={`w-10 h-10 rounded-lg ${colorClass} text-white flex items-center justify-center flex-shrink-0`}>
                            <CategoryIcon name={category?.icon || 'FileText'} size={18} />
                          </div>

                          {/* Content */}
                          <div className="flex-grow min-w-0">
                            <h3 className="text-sm font-medium text-gray-900 group-hover:text-green-700 transition-colors truncate">
                              {post.title}
                            </h3>
                            <div className="flex items-center gap-2 text-xs text-gray-500 mt-0.5">
                              <span className="truncate">{category?.name}</span>
                              <span className="text-gray-300">·</span>
                              <span className="flex-shrink-0">{post.readingTime} min</span>
                            </div>
                          </div>

                          {/* Date */}
                          <div className="text-xs text-gray-400 flex-shrink-0 hidden sm:block">
                            {new Date(post.publishedAt).toLocaleDateString('de-DE', {
                              day: '2-digit',
                              month: '2-digit',
                            })}
                          </div>

                          {/* Arrow */}
                          <svg
                            className="w-4 h-4 text-gray-300 group-hover:text-gray-500 transition-colors flex-shrink-0"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-16 bg-white rounded-xl shadow-sm border border-gray-200">
              <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-gray-500">Keine Artikel gefunden</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
