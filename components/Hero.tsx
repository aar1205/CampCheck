import Link from 'next/link';

interface HeroProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
  ctaText?: string;
  ctaLink?: string;
  fullHeight?: boolean;
}

export default function Hero({
  title = 'Dein Abenteuer beginnt hier',
  subtitle = 'Entdecke die besten Tipps, Guides und Ausrüstung für unvergessliche Camping-Erlebnisse',
  backgroundImage = 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=2000&q=80',
  ctaText = 'Alle Artikel entdecken',
  ctaLink = '/blog',
  fullHeight = true,
}: HeroProps) {
  return (
    <div
      className={`relative w-full ${
        fullHeight ? 'h-[100vh]' : 'h-[60vh] md:h-[70vh]'
      } flex items-center justify-center overflow-hidden grain-overlay`}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Dark Overlay with Nordic Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-forest-deep/90 via-forest/70 to-forest-deep/85"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Heading - Dramatic Typography */}
        <h1 className="text-display-xl text-white mb-8 animate-fade-in-up">
          {title}
        </h1>

        {/* Decorative Line */}
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-amber to-transparent mx-auto mb-8 animate-fade-in-up animate-delay-200"></div>

        {/* Subheading - Editorial Serif */}
        <p className="text-xl sm:text-2xl md:text-3xl text-white/95 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animate-delay-300">
          {subtitle}
        </p>

        {/* CTA Button - Amber Accent */}
        <Link
          href={ctaLink}
          className="inline-flex items-center gap-3 px-10 py-5 bg-amber hover:bg-amber-dark text-forest-deep font-bold text-lg rounded-sm shadow-2xl transition-all duration-300 hover:scale-105 animate-fade-in-up animate-delay-400"
        >
          {ctaText}
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>

      {/* Scroll Indicator - Minimalist */}
      {fullHeight && (
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-fade-in-up animate-delay-500">
          <div className="flex flex-col items-center gap-2 text-white/60 hover:text-amber transition-colors cursor-pointer">
            <span className="text-sm uppercase tracking-wider">Scroll</span>
            <svg
              className="w-6 h-6 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
}
