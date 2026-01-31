'use client';

import { useState } from 'react';

interface TocItem {
  id: string;      // anchor id (e.g., "section-1")
  text: string;    // heading text
  level: 2 | 3;    // h2 or h3
}

interface TableOfContentsProps {
  items: TocItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!items || items.length === 0) {
    return null;
  }

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const element = document.getElementById(id);
    if (element) {
      // Smooth scroll to element
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update URL hash without jumping
      window.history.pushState(null, '', `#${id}`);

      // Close mobile menu after clicking
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="bg-white rounded-lg shadow-md border border-gray-200"
      aria-label="Table of Contents"
    >
      {/* Mobile Header - Collapsible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-full flex items-center justify-between p-4 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
        aria-expanded={isOpen}
      >
        <span className="flex items-center gap-2">
          <svg
            className="w-5 h-5 text-[var(--color-pine)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Inhaltsverzeichnis
        </span>
        <svg
          className={`w-5 h-5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {/* Desktop Header */}
      <div className="hidden lg:block p-4 border-b border-gray-200">
        <h2 className="flex items-center gap-2 font-semibold text-gray-900">
          <svg
            className="w-5 h-5 text-[var(--color-pine)]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Inhaltsverzeichnis
        </h2>
      </div>

      {/* Table of Contents List */}
      <div
        className={`
          ${isOpen ? 'block' : 'hidden'}
          lg:block
        `}
      >
        <ul className="p-4 flex flex-col gap-2">
          {items.map((item, index) => (
            <li
              key={`${item.id}-${index}`}
              className={`
                ${item.level === 3 ? 'ml-4' : ''}
              `}
            >
              <a
                href={`#${item.id}`}
                onClick={(e) => handleLinkClick(e, item.id)}
                className={`
                  block py-1.5 px-3 rounded-md text-sm transition-all duration-200
                  hover:bg-[var(--color-mint)] hover:text-[var(--color-forest)]
                  focus:outline-none focus:ring-2 focus:ring-[var(--color-pine)] focus:ring-offset-1
                  ${item.level === 2 ? 'font-semibold text-gray-900' : 'text-gray-700'}
                `}
              >
                {item.level === 3 && (
                  <span className="inline-block mr-2 text-[var(--color-sage)]">→</span>
                )}
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
