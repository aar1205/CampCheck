'use client';

import { useState } from 'react';
import Link from 'next/link';
import CategoryIcon from './CategoryIcon';

interface Post {
  slug: string;
  title: string;
  readingTime: number;
}

interface CategoryWithPosts {
  category: {
    slug: string;
    name: string;
    description: string;
    icon: string;
  };
  posts: Post[];
  count: number;
}

interface ContentTreeProps {
  categories: CategoryWithPosts[];
  defaultExpanded?: boolean;
  showEmptyCategories?: boolean;
}

export default function ContentTree({
  categories,
  defaultExpanded = false,
  showEmptyCategories = true,
}: ContentTreeProps) {
  // Track expanded state for each category
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    () => {
      if (defaultExpanded) {
        return new Set(categories.map((c) => c.category.slug));
      }
      return new Set();
    }
  );

  const toggleCategory = (slug: string) => {
    setExpandedCategories((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
  };

  const expandAll = () => {
    setExpandedCategories(new Set(categories.map((c) => c.category.slug)));
  };

  const collapseAll = () => {
    setExpandedCategories(new Set());
  };

  // Filter categories if needed
  const visibleCategories = showEmptyCategories
    ? categories
    : categories.filter((c) => c.count > 0);

  if (visibleCategories.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
        <svg
          className="w-12 h-12 mx-auto mb-3 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        <p>Keine Kategorien vorhanden</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Control Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-gray-50 border-b border-gray-200">
        <span className="text-sm text-gray-600">
          {visibleCategories.length} {visibleCategories.length === 1 ? 'Kategorie' : 'Kategorien'}
        </span>
        <div className="flex items-center gap-2">
          <button
            onClick={expandAll}
            className="text-xs px-3 py-1.5 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
            type="button"
          >
            Alle aufklappen
          </button>
          <button
            onClick={collapseAll}
            className="text-xs px-3 py-1.5 bg-white border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-colors"
            type="button"
          >
            Alle zuklappen
          </button>
        </div>
      </div>

      {/* Tree Content */}
      <div className="divide-y divide-gray-100">
        {visibleCategories.map(({ category, posts, count }) => {
          const isExpanded = expandedCategories.has(category.slug);
          const hasPosts = count > 0;

          return (
            <div key={category.slug} className="">
              {/* Category Header (Always Visible) */}
              <button
                onClick={() => hasPosts && toggleCategory(category.slug)}
                className={`w-full flex items-center gap-3 px-4 py-4 text-left hover:bg-gray-50 transition-colors ${
                  !hasPosts ? 'cursor-default' : 'cursor-pointer'
                }`}
                type="button"
                aria-expanded={isExpanded}
                disabled={!hasPosts}
              >
                {/* Expand/Collapse Icon */}
                <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
                  {hasPosts ? (
                    <svg
                      className={`w-4 h-4 text-gray-500 transition-transform duration-200 ${
                        isExpanded ? 'rotate-90' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  ) : (
                    <span className="w-1.5 h-1.5 bg-gray-300 rounded-full" />
                  )}
                </div>

                {/* Category Icon */}
                <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center">
                  <CategoryIcon name={category.icon} size={20} className="text-white" />
                </div>

                {/* Category Info */}
                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-gray-900 truncate">
                      {category.name}
                    </span>
                    <span className="flex-shrink-0 inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
                      {count} {count === 1 ? 'Artikel' : 'Artikel'}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 truncate mt-0.5">
                    {category.description}
                  </p>
                </div>

                {/* View Category Link */}
                <Link
                  href={`/kategorien/${category.slug}`}
                  onClick={(e) => e.stopPropagation()}
                  className="flex-shrink-0 p-2 text-gray-400 hover:text-green-700 hover:bg-green-50 rounded-lg transition-colors"
                  title="Kategorie ansehen"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Link>
              </button>

              {/* Posts List (Collapsible) */}
              {hasPosts && (
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="bg-gray-50/50 px-4 pb-4">
                    {/* Tree Lines */}
                    <div className="pl-9">
                      {posts.map((post, index) => {
                        const isLast = index === posts.length - 1;
                        return (
                          <div key={post.slug} className="relative">
                            {/* Tree Connector Lines */}
                            <div className="absolute left-0 top-0 bottom-0 w-6">
                              {/* Vertical line */}
                              <div
                                className={`absolute left-3 top-0 bottom-0 w-px bg-gray-300 ${
                                  isLast ? 'h-4' : 'h-full'
                                }`}
                              />
                              {/* Horizontal line */}
                              <div className="absolute left-3 top-4 w-4 h-px bg-gray-300" />
                            </div>

                            {/* Post Link */}
                            <Link
                              href={`/kategorien/${category.slug}/${post.slug}`}
                              className="flex items-start gap-2 pl-10 py-2 group hover:bg-white rounded-lg transition-colors"
                            >
                              <svg
                                className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                />
                              </svg>
                              <div className="flex-grow min-w-0">
                                <span className="text-sm text-gray-700 group-hover:text-green-700 transition-colors line-clamp-2">
                                  {post.title}
                                </span>
                                <span className="text-xs text-gray-400 mt-0.5 block">
                                  {post.readingTime} Min. Lesezeit
                                </span>
                              </div>
                              <svg
                                className="w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </Link>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
