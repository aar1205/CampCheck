import Link from 'next/link';
import { Category } from '@/lib/categories';
import CategoryIcon from './CategoryIcon';

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
}

export default function CategoryCard({ category, articleCount }: CategoryCardProps) {
  // Get category color based on slug - Naturfarben
  const getCategoryColor = (): string => {
    const colors: Record<string, string> = {
      'camping-grundlagen': 'from-green-600 to-green-800',      // Waldgrün
      'geschenke-inspiration': 'from-amber-600 to-amber-800',   // Warmes Gold/Honig
      'vanlife-camper': 'from-stone-700 to-stone-900',          // Schiefer/Stein
      'nachhaltigkeit': 'from-emerald-700 to-emerald-900',      // Tiefes Waldgrün
      'sicherheit-gesundheit': 'from-orange-700 to-orange-900', // Lagerfeuer-Orange
      'ausruestung-gear': 'from-slate-600 to-slate-800',        // Berggrau/Schiefer
      'zelte-schlafen': 'from-indigo-900 to-slate-900',         // Nachthimmel
      'camping-kueche': 'from-amber-700 to-orange-800',         // Feuer/Sonnenuntergang
      'camping-familie': 'from-yellow-700 to-yellow-900',       // Sonnengelb/Warm
      'wildcamping': 'from-green-800 to-emerald-900',           // Urwaldgrün
      'campingplaetze': 'from-yellow-600 to-amber-700'          // Sand/Strand
    };
    return colors[category.slug] || 'from-stone-600 to-stone-800';
  };

  return (
    <Link href={`/kategorien/${category.slug}`}>
      <article
        className="
          bg-white rounded-lg shadow-md hover:shadow-xl
          transition-all duration-300 h-full flex flex-col
          hover:scale-105 hover:-translate-y-1
          cursor-pointer group
        "
      >
        {/* Icon Section with Gradient Background */}
        <div className={`
          bg-gradient-to-br ${getCategoryColor()}
          rounded-t-lg p-8 flex items-center justify-center
          group-hover:opacity-90 transition-opacity
        `}>
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 bg-white rounded-full" />

            {/* Icon with animation */}
            <div className="relative text-white transform transition-all duration-500 ease-out group-hover:scale-110 group-hover:rotate-6">
              <CategoryIcon name={category.icon} size={64} className="drop-shadow-lg" />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col flex-grow p-6">
          {/* Category Name */}
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors">
            {category.name}
          </h3>

          {/* Description */}
          <p className="text-gray-600 mb-4 flex-grow line-clamp-2">
            {category.description}
          </p>

          {/* Article Count (if provided) */}
          {articleCount !== undefined && (
            <div className="flex items-center gap-2 text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="font-medium">
                {articleCount} {articleCount === 1 ? 'Artikel' : 'Artikel'}
              </span>
            </div>
          )}

          {/* View Category Link */}
          <div className="flex items-center gap-2 text-sm font-semibold text-green-700 mt-4 group-hover:gap-3 transition-all">
            <span>Kategorie ansehen</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
