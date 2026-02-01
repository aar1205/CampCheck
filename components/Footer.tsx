'use client';

import Link from 'next/link';
import { getAllCategories } from '@/lib/categories';

export default function Footer() {
  const categories = getAllCategories();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-forest-deep text-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* About Section */}
          <div>
            <h3 className="text-2xl  font-extrabold mb-5 text-amber tracking-tight">
              CampCheck
            </h3>
            <p className="text-sm leading-relaxed text-parchment ">
              Dein Ratgeber für unvergessliche Camping-Abenteuer. Wir teilen
              Tipps, Tricks und Inspiration für Anfänger und erfahrene Camper.
              Entdecke mit uns die Schönheit der Natur!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg  font-bold mb-5 text-amber tracking-tight">
              Schnelllinks
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-parchment hover:text-amber-light transition-colors "
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/kategorien"
                  className="text-sm text-parchment hover:text-amber-light transition-colors "
                >
                  Kategorien
                </Link>
              </li>
              <li>
                <Link
                  href="/checklisten"
                  className="text-sm text-parchment hover:text-amber-light transition-colors "
                >
                  Checklisten
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="text-sm text-parchment hover:text-amber-light transition-colors "
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/kontakt"
                  className="text-sm text-parchment hover:text-amber-light transition-colors "
                >
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg  font-bold mb-5 text-amber tracking-tight">
              Kategorien
            </h3>
            <ul className="flex flex-col gap-3">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link
                    href={`/kategorien/${category.slug}`}
                    className="text-sm text-parchment hover:text-amber-light transition-colors flex items-center "
                  >
                    <span className="mr-2 text-base">{category.icon}</span>
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social Media */}
          <div>
            <h3 className="text-lg  font-bold mb-5 text-amber tracking-tight">
              Newsletter
            </h3>
            <p className="text-sm text-parchment mb-5 ">
              Erhalte die neuesten Camping-Tipps direkt in dein Postfach!
            </p>
            <form className="mb-8" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="Deine E-Mail"
                  className="px-4 py-3 rounded-sm text-charcoal bg-paper border-2 border-forest-light focus:outline-none focus:border-amber text-sm  transition-colors"
                  aria-label="E-Mail-Adresse für Newsletter"
                />
                <button
                  type="submit"
                  className="px-5 py-3 bg-amber text-[var(--color-forest-deep)] rounded-sm hover:bg-amber-light transition-colors  font-bold text-sm"
                >
                  Abonnieren
                </button>
              </div>
            </form>

            {/* Social Media */}
            <h4 className="text-sm  font-bold mb-4 text-amber">
              Folge uns
            </h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-parchment hover:text-amber transition-colors p-2 hover:bg-forest-light rounded-sm"
                aria-label="Facebook"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-parchment hover:text-amber transition-colors p-2 hover:bg-forest-light rounded-sm"
                aria-label="Instagram"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-parchment hover:text-amber transition-colors p-2 hover:bg-forest-light rounded-sm"
                aria-label="Pinterest"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-parchment hover:text-amber transition-colors p-2 hover:bg-forest-light rounded-sm"
                aria-label="YouTube"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-forest-light pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="text-sm text-parchment  editorial-number">
              © {currentYear} CampCheck. Alle Rechte vorbehalten.
            </div>

            {/* Legal Links */}
            <div className="flex gap-6">
              <Link
                href="/impressum"
                className="text-sm text-parchment hover:text-amber transition-colors "
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-sm text-parchment hover:text-amber transition-colors "
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
