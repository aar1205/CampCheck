import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum von CampCheck. Angaben gemäß § 5 TMG (Telemediengesetz) - Informationspflichten nach deutschem Recht.',
  openGraph: {
    title: 'Impressum - CampCheck',
    description: 'Impressum von CampCheck. Angaben gemäß § 5 TMG (Telemediengesetz) - Informationspflichten nach deutschem Recht.',
  },
};

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Impressum' }
          ]}
        />

        {/* Page Header */}
        <header className="mb-12 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Impressum
          </h1>
          <p className="text-lg text-gray-600">
            Angaben gemäß § 5 TMG (Telemediengesetz) und Informationspflichten nach § 5 TMG.
          </p>
        </header>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">

            {/* 1. Angaben gemäß § 5 TMG */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  1
                </span>
                Angaben gemäß § 5 TMG
              </h2>
              <div className="ml-11 text-gray-700 space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Camping Blog GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p>Deutschland</p>

                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <p><strong>Vertreten durch:</strong></p>
                    <p>Geschäftsführer: Max Mustermann</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <p><strong>Registereintrag:</strong></p>
                    <p>Eintragung im Handelsregister</p>
                    <p>Registergericht: Amtsgericht Musterstadt</p>
                    <p>Registernummer: HRB 12345</p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-300">
                    <p><strong>Umsatzsteuer-ID:</strong></p>
                    <p>Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                    <p>DE123456789</p>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. Kontakt */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  2
                </span>
                Kontakt
              </h2>
              <div className="ml-11 text-gray-700 space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p>
                    <strong>Telefon:</strong> +49 (0) 123 456789
                  </p>
                  <p>
                    <strong>Telefax:</strong> +49 (0) 123 456790
                  </p>
                  <p className="mt-3">
                    <strong>E-Mail:</strong>{' '}
                    <a href="mailto:info@camping-blog.de" className="text-[var(--color-pine)] hover:underline">
                      info@camping-blog.de
                    </a>
                  </p>
                  <p className="mt-3">
                    <strong>Website:</strong>{' '}
                    <a href="https://www.camping-blog.de" className="text-[var(--color-pine)] hover:underline">
                      www.camping-blog.de
                    </a>
                  </p>
                </div>
              </div>
            </section>

            {/* 3. Verantwortlich für den Inhalt */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  3
                </span>
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <div className="ml-11 text-gray-700 space-y-3">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold">Max Mustermann</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p>Deutschland</p>
                </div>
              </div>
            </section>

            {/* 4. Haftungsausschluss */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  4
                </span>
                Haftungsausschluss
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">

                <h3 className="text-xl font-semibold text-gray-900 mt-6">
                  4.1 Haftung für Inhalte
                </h3>
                <p>
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                  nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                  Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
                  Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
                  Tätigkeit hinweisen.
                </p>
                <p>
                  Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                  allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                  erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                  Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
                  entfernen.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6">
                  4.2 Haftung für Links
                </h3>
                <p>
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                  Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                  Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
                  Seiten verantwortlich.
                </p>
                <p>
                  Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße
                  überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
                  Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                  Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                  Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>
              </div>
            </section>

            {/* 5. Urheberrecht */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  5
                </span>
                Urheberrecht
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <p>
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                  dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                  der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                  Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
                <p>
                  Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
                  gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden
                  die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                  gekennzeichnet.
                </p>
                <p>
                  Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um
                  einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir
                  derartige Inhalte umgehend entfernen.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 my-4">
                  <p className="text-sm">
                    <strong>Bildnachweise:</strong> Alle Bilder und Grafiken auf dieser Website sind
                    urheberrechtlich geschützt. Die Bildrechte liegen bei Camping Blog GmbH oder wurden
                    von lizenzfreien Bilddatenbanken erworben.
                  </p>
                </div>
              </div>
            </section>

            {/* 6. Streitschlichtung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  6
                </span>
                Streitschlichtung
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <p>
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:
                  <a
                    href="https://ec.europa.eu/consumers/odr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--color-pine)] hover:underline ml-1"
                  >
                    https://ec.europa.eu/consumers/odr
                  </a>
                </p>
                <p>
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
                <p>
                  Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                  Verbraucherschlichtungsstelle teilzunehmen.
                </p>

                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg mt-4">
                  <p className="text-sm">
                    <strong>Hinweis gemäß Verbraucherstreitbeilegungsgesetz (VSBG):</strong> Wir sind
                    nicht verpflichtet und nicht bereit, an einem Streitbeilegungsverfahren vor einer
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </div>
            </section>

            {/* Footer with date */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Stand:</strong> Januar 2026
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Bei Fragen zum Impressum wenden Sie sich bitte an:{' '}
                <a href="mailto:info@camping-blog.de" className="text-[var(--color-pine)] hover:underline">
                  info@camping-blog.de
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-[var(--color-pine)] to-[var(--color-forest)] rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Haben Sie Fragen?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Bei Fragen zu rechtlichen Aspekten oder zu unserem Angebot
              stehen wir Ihnen gerne zur Verfügung.
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-8 py-3 bg-white text-[var(--color-forest)] font-semibold rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
            >
              Kontakt aufnehmen
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
