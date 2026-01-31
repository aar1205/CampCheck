import { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Datenschutzerklärung von CampingBlog. Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten gemäß DSGVO.',
  openGraph: {
    title: 'Datenschutzerklärung - CampingBlog',
    description: 'Datenschutzerklärung von CampingBlog. Informationen zur Erhebung, Verarbeitung und Nutzung personenbezogener Daten gemäß DSGVO.',
  },
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Datenschutz' }
          ]}
        />

        {/* Page Header */}
        <header className="mb-12 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-lg text-gray-600">
            Wir nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Diese Datenschutzerklärung
            informiert Sie über die Erhebung, Verarbeitung und Nutzung Ihrer Daten gemäß der
            Datenschutz-Grundverordnung (DSGVO).
          </p>
        </header>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div className="prose prose-lg max-w-none">

            {/* 1. Verantwortlicher */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  1
                </span>
                Verantwortlicher
              </h2>
              <div className="ml-11 text-gray-700 space-y-3">
                <p>
                  Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="font-semibold mb-2">Camping Blog GmbH</p>
                  <p>Musterstraße 123</p>
                  <p>12345 Musterstadt</p>
                  <p>Deutschland</p>
                  <p className="mt-3">
                    <strong>E-Mail:</strong>{' '}
                    <a href="mailto:datenschutz@camping-blog.de" className="text-[var(--color-pine)] hover:underline">
                      datenschutz@camping-blog.de
                    </a>
                  </p>
                  <p>
                    <strong>Telefon:</strong> +49 (0) 123 456789
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Datenerfassung auf dieser Website */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  2
                </span>
                Datenerfassung auf dieser Website
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <h3 className="text-xl font-semibold text-gray-900 mt-6">
                  2.1 Server-Logfiles
                </h3>
                <p>
                  Der Provider dieser Website erhebt und speichert automatisch Informationen in
                  sogenannten Server-Logfiles, die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Browsertyp und Browserversion</li>
                  <li>Verwendetes Betriebssystem</li>
                  <li>Referrer URL (zuvor besuchte Seite)</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>
                <p>
                  Diese Daten werden nicht mit anderen Datenquellen zusammengeführt. Die Erfassung
                  dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber
                  hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der
                  Optimierung seiner Website.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-6">
                  2.2 Anfrage per E-Mail oder Telefon
                </h3>
                <p>
                  Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive
                  aller daraus hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der
                  Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten geben
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                  Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                  beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven
                  Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </div>
            </section>

            {/* 3. Cookies */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  3
                </span>
                Cookies
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <p>
                  Unsere Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem
                  Endgerät gespeichert werden und die Ihr Browser speichert. Cookies richten auf Ihrem
                  Rechner keinen Schaden an und enthalten keine Viren.
                </p>
                <p>
                  Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige
                  Elemente unserer Internetseite erfordern es, dass der aufrufende Browser auch nach
                  einem Seitenwechsel identifiziert werden kann.
                </p>
                <p>
                  Die meisten Browser akzeptieren Cookies automatisch. Sie können Ihren Browser jedoch
                  so konfigurieren, dass keine Cookies auf Ihrem Computer gespeichert werden oder stets
                  ein Hinweis erscheint, bevor ein neuer Cookie angelegt wird. Die vollständige
                  Deaktivierung von Cookies kann jedoch dazu führen, dass Sie nicht alle Funktionen
                  unserer Website nutzen können.
                </p>
              </div>
            </section>

            {/* 4. Kontaktformular */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  4
                </span>
                Kontaktformular
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <p>
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                  dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                  Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>
                <p>
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                  Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                  beruht die Verarbeitung auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) und/oder
                  auf unseren berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p>
                  Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns
                  zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck
                  für die Datenspeicherung entfällt.
                </p>
              </div>
            </section>

            {/* 5. Newsletter */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  5
                </span>
                Newsletter
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <p>
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir
                  von Ihnen eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung
                  gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse sind und mit dem
                  Empfang des Newsletters einverstanden sind.
                </p>
                <p>
                  Für die Verarbeitung der Daten wird im Rahmen des Anmeldevorgangs Ihre Einwilligung
                  eingeholt und auf diese Datenschutzerklärung verwiesen. Die Datenverarbeitung erfolgt
                  auf Grundlage Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
                <p>
                  Sie können Ihre Einwilligung jederzeit widerrufen. In jedem Newsletter findet sich
                  dazu ein entsprechender Link. Die Rechtmäßigkeit der bereits erfolgten
                  Datenverarbeitungsvorgänge bleibt vom Widerruf unberührt.
                </p>
              </div>
            </section>

            {/* 6. Hosting & Server */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  6
                </span>
                Hosting und Content Delivery
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <p>
                  Wir hosten unsere Website bei einem externen Dienstleister. Die personenbezogenen
                  Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters
                  gespeichert. Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und
                  Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
                  Daten, die über eine Website generiert werden, handeln.
                </p>
                <p>
                  Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                  potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
                  einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots
                  durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p>
                  Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
                  Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
                </p>
              </div>
            </section>

            {/* 7. Rechte der Betroffenen */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  7
                </span>
                Ihre Rechte als betroffene Person
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <p>
                  Sie haben nach der DSGVO verschiedene Rechte. Diese sind insbesondere:
                </p>

                <div className="bg-green-50 border-l-4 border-[var(--color-pine)] p-4 my-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Auskunft (Art. 15 DSGVO)</h4>
                  <p className="text-sm">
                    Sie haben das Recht, von uns eine Bestätigung darüber zu verlangen, ob wir
                    personenbezogene Daten von Ihnen verarbeiten und wenn ja, welche.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-[var(--color-pine)] p-4 my-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Berichtigung (Art. 16 DSGVO)</h4>
                  <p className="text-sm">
                    Sie haben das Recht, die Berichtigung unrichtiger oder die Vervollständigung
                    unvollständiger personenbezogener Daten zu verlangen.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-[var(--color-pine)] p-4 my-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Löschung (Art. 17 DSGVO)</h4>
                  <p className="text-sm">
                    Sie haben das Recht, die Löschung Ihrer personenbezogenen Daten zu verlangen,
                    sofern die gesetzlichen Voraussetzungen vorliegen.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-[var(--color-pine)] p-4 my-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h4>
                  <p className="text-sm">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
                    Daten zu verlangen.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-[var(--color-pine)] p-4 my-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h4>
                  <p className="text-sm">
                    Sie haben das Recht, Ihre Daten in einem strukturierten, gängigen und
                    maschinenlesbaren Format zu erhalten.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-[var(--color-pine)] p-4 my-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Widerspruchsrecht (Art. 21 DSGVO)</h4>
                  <p className="text-sm">
                    Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                    jederzeit gegen die Verarbeitung Ihrer Daten Widerspruch einzulegen.
                  </p>
                </div>

                <div className="bg-green-50 border-l-4 border-[var(--color-pine)] p-4 my-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Beschwerderecht bei der Aufsichtsbehörde</h4>
                  <p className="text-sm">
                    Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die
                    Verarbeitung Ihrer personenbezogenen Daten durch uns zu beschweren.
                  </p>
                </div>
              </div>
            </section>

            {/* 8. SSL/TLS-Verschlüsselung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  8
                </span>
                SSL- bzw. TLS-Verschlüsselung
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <p>
                  Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                  Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine
                  SSL- bzw. TLS-Verschlüsselung.
                </p>
                <p>
                  Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
                  von „http://" auf „https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
                </p>
                <p>
                  Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an
                  uns übermitteln, nicht von Dritten mitgelesen werden.
                </p>
              </div>
            </section>

            {/* 9. Änderungen der Datenschutzerklärung */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-[var(--color-pine)] font-bold text-sm">
                  9
                </span>
                Änderungen der Datenschutzerklärung
              </h2>
              <div className="ml-11 text-gray-700 space-y-4">
                <p>
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den
                  aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen
                  in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services.
                </p>
                <p>
                  Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
                </p>
              </div>
            </section>

            {/* Footer with date */}
            <div className="mt-12 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                <strong>Stand:</strong> Januar 2026
              </p>
              <p className="text-sm text-gray-500 mt-2">
                Bei Fragen zum Datenschutz wenden Sie sich bitte an:{' '}
                <a href="mailto:datenschutz@camping-blog.de" className="text-[var(--color-pine)] hover:underline">
                  datenschutz@camping-blog.de
                </a>
              </p>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-[var(--color-pine)] to-[var(--color-forest)] rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Haben Sie Fragen zum Datenschutz?
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Bei Fragen zu unseren Datenschutzbestimmungen oder zur Verarbeitung Ihrer Daten
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
