import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="text-8xl mb-6">🏕️</div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Seite nicht gefunden
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Ups! Sieht so aus, als wärst du vom Weg abgekommen. 
          Diese Seite existiert leider nicht.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-pine)] text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Zurück zur Startseite
          </Link>
          <Link
            href="/archiv"
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[var(--color-pine)] font-semibold rounded-xl border-2 border-[var(--color-pine)] hover:bg-green-50 transition-colors"
          >
            Zum Archiv
          </Link>
        </div>
      </div>
    </div>
  );
}
