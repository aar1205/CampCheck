import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Über uns',
  description: 'Lerne das CampCheck-Team kennen. Erfahre mehr über unsere Mission, unsere Leidenschaft für Outdoor-Abenteuer und warum wir diesen Blog gestartet haben.',
  openGraph: {
    title: 'Über uns - CampCheck Team',
    description: 'Lerne das CampCheck-Team kennen. Erfahre mehr über unsere Mission, unsere Leidenschaft für Outdoor-Abenteuer und warum wir diesen Blog gestartet haben.',
  },
};

// Team members data
const teamMembers = [
  {
    name: 'Markus Weber',
    role: 'Gründer & Outdoor-Experte',
    bio: 'Mit über 15 Jahren Camping-Erfahrung teilt Markus seine Leidenschaft für das Leben in der Natur. Von Skandinavien bis zu den Alpen – er kennt die besten Spots und testet regelmäßig neue Ausrüstung.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Sarah Hoffmann',
    role: 'Content-Strategin & Vanlife-Enthusiastin',
    bio: 'Sarah lebt seit 3 Jahren im umgebauten Campervan und reist durch Europa. Sie schreibt über nachhaltiges Camping, Vanlife-Tipps und die schönsten Stellplätze abseits der Massen.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&auto=format',
  },
  {
    name: 'Thomas Schneider',
    role: 'Ausrüstungs-Reviewer & Bushcraft-Trainer',
    bio: 'Als zertifizierter Bushcraft-Trainer testet Thomas Camping-Equipment auf Herz und Nieren. Seine ehrlichen Reviews helfen dir, die richtige Ausrüstung für deine Bedürfnisse zu finden.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&auto=format',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Über uns' }
          ]}
        />

        {/* Page Header */}
        <header className="mb-12 mt-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Über uns
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Willkommen bei CampCheck – deiner Quelle für authentische Camping-Erlebnisse,
            ehrliche Ausrüstungs-Tests und inspirierende Outdoor-Geschichten.
          </p>
        </header>

        {/* Hero Image */}
        <div className="mb-16 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative h-64 md:h-96 w-full">
            <Image
              src="https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200&auto=format&fit=crop"
              alt="Camping am See mit Lagerfeuer"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Mission Statement Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--color-pine)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Unsere Mission
              </h2>
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Bei CampCheck glauben wir daran, dass die besten Momente im Leben draußen passieren –
                unter freiem Himmel, am knisternden Lagerfeuer, mit dem Duft von Kiefernnadeln in der Luft.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unsere Mission ist es, <strong>jedem den Zugang zur Natur zu erleichtern</strong> und
                die Faszination des Campings weiterzugeben. Egal ob du blutiger Anfänger bist oder
                erfahrener Outdoor-Veteran – wir möchten dich inspirieren, informieren und auf deinem
                Weg ins nächste Abenteuer begleiten.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Wir setzen auf <strong>ehrliche Empfehlungen, praxisnahe Tipps und authentische Erfahrungsberichte</strong>.
                Kein Marketing-Blabla, sondern echte Insights von Menschen, die ihre Zeit wirklich draußen verbringen.
              </p>
            </div>
          </div>
        </section>

        {/* Story/History Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-[var(--color-beige)] to-amber-50 rounded-xl p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[var(--color-forest)] rounded-full flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Unsere Geschichte
              </h2>
            </div>
            <div className="space-y-4 text-gray-700">
              <p className="leading-relaxed">
                CampCheck entstand 2019 aus einer einfachen Idee: Wir saßen nach einer
                dreitägigen Wandertour in den Dolomiten am Lagerfeuer und tauschten unsere
                Erfahrungen aus. Dabei stellten wir fest, wie wertvoll echte, praxiserprobte
                Tipps sind – und wie schwer sie online zu finden waren.
              </p>
              <p className="leading-relaxed">
                Die meisten Camping-Websites waren entweder reine Produktwerbung oder theoretische
                Ratgeber von Autoren, die selbst nie ein Zelt aufgebaut hatten. Das wollten wir
                ändern.
              </p>
              <p className="leading-relaxed">
                Was als kleines Hobby-Projekt begann, ist heute eine lebendige Community von
                Outdoor-Enthusiasten geworden. Über 50.000 monatliche Leser vertrauen auf
                unsere Guides, Reviews und Campingplatz-Empfehlungen.
              </p>
              <p className="leading-relaxed font-semibold text-[var(--color-forest)]">
                Und wir sind erst am Anfang unserer Reise.
              </p>
            </div>
          </div>
        </section>

        {/* What Readers Can Expect */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Was du von uns erwarten kannst
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[var(--color-pine)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ehrliche Reviews
              </h3>
              <p className="text-gray-600">
                Wir testen Ausrüstung selbst unter realen Bedingungen und sagen dir ehrlich,
                was funktioniert und was nicht.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[var(--color-pine)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Praxisnahe Guides
              </h3>
              <p className="text-gray-600">
                Von der ersten Campingtour bis zum Wintercamping – unsere Guides basieren
                auf echten Erfahrungen.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-[var(--color-pine)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Inspirierende Spots
              </h3>
              <p className="text-gray-600">
                Entdecke mit uns die schönsten Campingplätze und Outdoor-Locations in
                Europa und darüber hinaus.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Unser Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Lerne die Menschen kennen, die hinter CampCheck stecken und
              ihre Leidenschaft für das Outdoor-Leben mit dir teilen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Team Member Photo */}
                <div className="relative h-64 w-full">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Team Member Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[var(--color-pine)] font-semibold mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-[var(--color-pine)] to-[var(--color-forest)] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Lass uns in Kontakt bleiben!
              </h2>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Hast du Fragen, Anregungen oder möchtest du deine eigene Camping-Geschichte
                mit uns teilen? Wir freuen uns auf deine Nachricht!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link
                  href="/kontakt"
                  className="inline-block px-8 py-4 bg-white text-[var(--color-forest)] font-semibold text-lg rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                >
                  Kontakt aufnehmen
                </Link>
                <Link
                  href="/newsletter"
                  className="inline-block px-8 py-4 bg-transparent border-2 border-white text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-[var(--color-forest)]"
                >
                  Newsletter abonnieren
                </Link>
              </div>

              {/* Social Proof */}
              <div className="mt-10 pt-8 border-t border-white/20">
                <p className="text-white/80 text-sm mb-4">
                  Folge uns auf Social Media für tägliche Camping-Inspiration
                </p>
                <div className="flex justify-center gap-6">
                  <a
                    href="#"
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label="Instagram"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="text-white hover:text-white/80 transition-colors"
                    aria-label="YouTube"
                  >
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
