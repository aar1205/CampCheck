'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { getAllCategories } from '@/lib/categories';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const categories = getAllCategories();

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close dropdowns
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        categoriesRef.current &&
        !categoriesRef.current.contains(event.target as Node)
      ) {
        setIsCategoriesOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as HTMLElement).closest('.hamburger-button')
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close mobile menu when clicking on a link
  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsCategoriesOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-premium ${
        isScrolled
          ? 'bg-paper/95 shadow-lg'
          : 'bg-paper/90 border-b border-parchment'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Display Font */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-2xl md:text-3xl  font-extrabold text-forest-deep hover:text-amber-dark transition-colors tracking-tight"
              onClick={handleLinkClick}
            >
              CampingBlog
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-charcoal hover:text-amber-dark  font-semibold transition-colors tracking-tight"
            >
              Home
            </Link>

            <Link
              href="/blog"
              className="text-charcoal hover:text-amber-dark  font-semibold transition-colors tracking-tight"
            >
              Blog
            </Link>

            {/* Categories Dropdown */}
            <div className="relative" ref={categoriesRef}>
              <button
                onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                className="flex items-center text-charcoal hover:text-amber-dark  font-semibold transition-colors tracking-tight"
                aria-expanded={isCategoriesOpen}
                aria-haspopup="true"
              >
                Kategorien
                <svg
                  className={`ml-1 w-4 h-4 transition-transform ${
                    isCategoriesOpen ? 'rotate-180' : ''
                  }`}
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

              {isCategoriesOpen && (
                <div className="absolute top-full left-0 mt-3 w-72 bg-paper rounded-sm shadow-2xl border border-parchment py-2 backdrop-blur-premium">
                  <Link
                    href="/kategorien"
                    className="block px-4 py-3 text-charcoal hover:bg-amber/10 hover:text-amber-dark transition-colors  font-semibold border-b border-parchment"
                    onClick={handleLinkClick}
                  >
                    Alle Kategorien
                  </Link>
                  {categories.map((category) => (
                    <Link
                      key={category.slug}
                      href={`/kategorien/${category.slug}`}
                      className="block px-4 py-2.5 text-charcoal hover:bg-amber/10 hover:text-amber-dark transition-colors "
                      onClick={handleLinkClick}
                    >
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/checklisten"
              className="text-charcoal hover:text-amber-dark  font-semibold transition-colors tracking-tight"
            >
              Checklisten
            </Link>

            <Link
              href="/ueber-uns"
              className="text-charcoal hover:text-amber-dark  font-semibold transition-colors tracking-tight"
            >
              Über uns
            </Link>

            <Link
              href="/kontakt"
              className="text-charcoal hover:text-amber-dark  font-semibold transition-colors tracking-tight"
            >
              Kontakt
            </Link>

            {/* Search Icon */}
            <button
              className="text-charcoal hover:text-amber-dark transition-colors"
              aria-label="Search"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hamburger-button p-2 rounded-sm text-charcoal hover:text-amber-dark hover:bg-amber/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
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
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            ref={mobileMenuRef}
            className="md:hidden border-t border-parchment py-4"
          >
            <nav className="flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-3 text-charcoal hover:bg-amber/10 hover:text-amber-dark rounded-sm transition-colors  font-semibold"
                onClick={handleLinkClick}
              >
                Home
              </Link>

              <Link
                href="/blog"
                className="px-4 py-3 text-charcoal hover:bg-amber/10 hover:text-amber-dark rounded-sm transition-colors  font-semibold"
                onClick={handleLinkClick}
              >
                Blog
              </Link>

              {/* Mobile Categories */}
              <div>
                <button
                  onClick={() => setIsCategoriesOpen(!isCategoriesOpen)}
                  className="w-full flex items-center justify-between px-4 py-3 text-charcoal hover:bg-amber/10 hover:text-amber-dark rounded-sm transition-colors  font-semibold"
                >
                  Kategorien
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      isCategoriesOpen ? 'rotate-180' : ''
                    }`}
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

                {isCategoriesOpen && (
                  <div className="mt-2 ml-4 flex flex-col gap-1">
                    <Link
                      href="/kategorien"
                      className="block px-4 py-2 text-charcoal hover:bg-amber/10 hover:text-amber-dark rounded-sm transition-colors  text-sm"
                      onClick={handleLinkClick}
                    >
                      Alle Kategorien
                    </Link>
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/kategorien/${category.slug}`}
                        className="block px-4 py-2 text-charcoal hover:bg-amber/10 hover:text-amber-dark rounded-sm transition-colors  text-sm"
                        onClick={handleLinkClick}
                      >
                        <span className="mr-2">{category.icon}</span>
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/checklisten"
                className="px-4 py-3 text-charcoal hover:bg-amber/10 hover:text-amber-dark rounded-sm transition-colors  font-semibold"
                onClick={handleLinkClick}
              >
                Checklisten
              </Link>

              <Link
                href="/ueber-uns"
                className="px-4 py-3 text-charcoal hover:bg-amber/10 hover:text-amber-dark rounded-sm transition-colors  font-semibold"
                onClick={handleLinkClick}
              >
                Über uns
              </Link>

              <Link
                href="/kontakt"
                className="px-4 py-3 text-charcoal hover:bg-amber/10 hover:text-amber-dark rounded-sm transition-colors  font-semibold"
                onClick={handleLinkClick}
              >
                Kontakt
              </Link>

              {/* Mobile Search */}
              <button
                className="px-4 py-3 text-charcoal hover:bg-amber/10 hover:text-amber-dark rounded-sm transition-colors flex items-center  font-semibold"
                aria-label="Search"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                Suchen
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
