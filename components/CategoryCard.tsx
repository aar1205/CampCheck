import Link from 'next/link';
import { Category } from '@/lib/categories';
import CategoryIcon from './CategoryIcon';

interface CategoryCardProps {
  category: Category;
  articleCount?: number;
}

export default function CategoryCard({ category, articleCount }: CategoryCardProps) {
  // Get category color based on slug
  const getCategoryColor = (): string => {
    const colors: Record<string, string> = {
      'camping-grundlagen': 'from-green-500 to-green-700',
      'geschenke-inspiration': 'from-pink-400 to-pink-600',
      'vanlife-camper': 'from-gray-800 to-gray-900',
      'nachhaltigkeit': 'from-green-600 to-green-800',
      'sicherheit-gesundheit': 'from-red-500 to-red-700',
      'ausruestung-gear': 'from-blue-500 to-blue-700',
      'zelte-schlafen': 'from-purple-500 to-purple-700',
      'camping-kueche': 'from-orange-500 to-orange-700',
      'camping-familie': 'from-pink-500 to-pink-700',
      'wildcamping': 'from-emerald-600 to-emerald-800',
      'campingplaetze': 'from-teal-500 to-teal-700'
    };
    return colors[category.slug] || 'from-gray-500 to-gray-700';
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
