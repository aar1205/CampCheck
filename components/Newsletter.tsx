'use client';

import { FormEvent, useState } from 'react';

interface NewsletterProps {
  variant?: 'default' | 'compact' | 'footer';
  className?: string;
}

export default function Newsletter({
  variant = 'default',
  className = '',
}: NewsletterProps) {
  const [email, setEmail] = useState('');
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Decorative functionality - no actual backend
    if (email && accepted) {
      setSubmitted(true);
      setEmail('');
      setAccepted(false);

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    }
  };

  // Default variant - full featured with background
  if (variant === 'default') {
    return (
      <section
        className={`w-full py-16 md:py-20 bg-gradient-to-br from-[var(--color-pine)] to-[var(--color-forest)] ${className}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Bleib auf dem Laufenden
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Erhalte die neuesten Camping-Tipps, Ausrüstungs-Reviews und
              Abenteuergeschichten direkt in dein Postfach. Kostenlos und
              jederzeit abbestellbar.
            </p>
          </div>

          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-lg p-6 text-center">
              <p className="text-white text-lg font-semibold">
                ✓ Vielen Dank für deine Anmeldung!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Deine E-Mail-Adresse"
                  required
                  className="flex-1 px-6 py-4 rounded-lg border-2 border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none focus:border-white/40 focus:bg-white/20 transition-all"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-[var(--color-forest)] font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Anmelden
                </button>
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy-default"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 accent-white cursor-pointer"
                />
                <label
                  htmlFor="privacy-default"
                  className="text-sm text-white/80 cursor-pointer"
                >
                  Ich akzeptiere die Datenschutzbestimmungen und möchte den
                  Newsletter erhalten.
                </label>
              </div>
            </form>
          )}
        </div>
      </section>
    );
  }

  // Compact variant - lighter background, more subtle
  if (variant === 'compact') {
    return (
      <section
        className={`w-full py-12 bg-[var(--color-mint)] ${className}`}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl md:text-3xl font-bold text-[var(--color-forest)] mb-3">
              Bleib auf dem Laufenden
            </h3>
            <p className="text-[var(--color-forest)]/80">
              Newsletter mit Camping-Tipps und Neuigkeiten
            </p>
          </div>

          {submitted ? (
            <div className="bg-white border border-[var(--color-pine)] rounded-lg p-4 text-center">
              <p className="text-[var(--color-forest)] font-semibold">
                ✓ Erfolgreich angemeldet!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E-Mail-Adresse"
                  required
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-[var(--color-pine)]/30 bg-white focus:outline-none focus:border-[var(--color-pine)] transition-all"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[var(--color-pine)] text-white font-semibold rounded-lg hover:bg-[var(--color-forest)] transition-all"
                >
                  Anmelden
                </button>
              </div>
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacy-compact"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  required
                  className="mt-1 w-4 h-4 accent-[var(--color-pine)] cursor-pointer"
                />
                <label
                  htmlFor="privacy-compact"
                  className="text-xs text-[var(--color-forest)]/70 cursor-pointer"
                >
                  Ich akzeptiere die Datenschutzbestimmungen.
                </label>
              </div>
            </form>
          )}
        </div>
      </section>
    );
  }

  // Footer variant - minimal, horizontal layout
  if (variant === 'footer') {
    return (
      <div className={`w-full ${className}`}>
        <div className="mb-4">
          <h4 className="text-lg font-bold text-white mb-2">
            Bleib auf dem Laufenden
          </h4>
          <p className="text-sm text-white/70 mb-4">
            Newsletter mit Camping-Tipps
          </p>
        </div>

        {submitted ? (
          <div className="bg-white/10 rounded-lg p-3 text-center">
            <p className="text-white text-sm">✓ Angemeldet!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="E-Mail-Adresse"
                required
                className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white text-sm placeholder-white/50 focus:outline-none focus:border-white/40 transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-white text-[var(--color-forest)] text-sm font-semibold rounded-lg hover:bg-white/90 transition-all"
              >
                Anmelden
              </button>
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="privacy-footer"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                required
                className="mt-0.5 w-3 h-3 accent-white cursor-pointer"
              />
              <label
                htmlFor="privacy-footer"
                className="text-xs text-white/60 cursor-pointer leading-tight"
              >
                Datenschutz akzeptiert
              </label>
            </div>
          </form>
        )}
      </div>
    );
  }

  return null;
}
