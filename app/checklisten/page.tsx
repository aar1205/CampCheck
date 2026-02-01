'use client';

import { Metadata } from 'next';
import { useState } from 'react';
import Breadcrumbs from '@/components/Breadcrumbs';

// Note: We can't export metadata in a 'use client' component, so we'll use next/head alternative
// For now, we'll add meta tags dynamically via useEffect if needed, or move metadata to layout

interface ChecklistItem {
  id: string;
  label: string;
}

interface ChecklistCategory {
  title: string;
  items: ChecklistItem[];
}

interface Checklist {
  id: string;
  title: string;
  description: string;
  categories: ChecklistCategory[];
}

const checklists: Checklist[] = [
  {
    id: 'allgemein',
    title: 'Allgemeine Camping-Checkliste',
    description: 'Die ultimative Packliste für jeden Camping-Trip',
    categories: [
      {
        title: 'Unterkunft',
        items: [
          { id: 'zelt', label: 'Zelt mit Heringen und Abspannleinen' },
          { id: 'plane', label: 'Zeltplane/Unterlage' },
          { id: 'hammer', label: 'Hammer/Hering-Hammer' },
          { id: 'reparatur', label: 'Reparatur-Set für Zelt' },
          { id: 'pavillon', label: 'Pavillon/Tarp (optional)' },
        ],
      },
      {
        title: 'Schlafen',
        items: [
          { id: 'schlafsack', label: 'Schlafsack (temperaturangepasst)' },
          { id: 'isomatte', label: 'Isomatte oder Luftmatratze' },
          { id: 'pumpe', label: 'Luftpumpe' },
          { id: 'kissen', label: 'Camping-Kissen' },
          { id: 'decke', label: 'Zusätzliche Decke' },
        ],
      },
      {
        title: 'Kochen & Essen',
        items: [
          { id: 'kocher', label: 'Campingkocher + Brennstoff' },
          { id: 'geschirr', label: 'Camping-Geschirr (Teller, Schüsseln)' },
          { id: 'besteck', label: 'Besteck' },
          { id: 'toepfe', label: 'Töpfe und Pfannen' },
          { id: 'messer', label: 'Küchenmesser' },
          { id: 'schneidebretter', label: 'Schneidebrett' },
          { id: 'dosen', label: 'Dosenöffner' },
          { id: 'korkenzieher', label: 'Korkenzieher' },
          { id: 'kuehlbox', label: 'Kühlbox + Kühlakkus' },
          { id: 'wasserkanister', label: 'Wasserkanister (faltbar)' },
          { id: 'spuelmittel', label: 'Spülmittel + Schwamm' },
          { id: 'geschirrtuch', label: 'Geschirrtücher' },
          { id: 'muellbeutel', label: 'Müllbeutel' },
        ],
      },
      {
        title: 'Kleidung',
        items: [
          { id: 'unterwaesche', label: 'Unterwäsche' },
          { id: 'socken', label: 'Socken' },
          { id: 'tshirts', label: 'T-Shirts' },
          { id: 'hose-lang', label: 'Lange Hosen' },
          { id: 'hose-kurz', label: 'Kurze Hosen' },
          { id: 'fleece', label: 'Fleecejacke/Pullover' },
          { id: 'regenjacke', label: 'Regenjacke' },
          { id: 'wanderschuhe', label: 'Wanderschuhe' },
          { id: 'sandalen', label: 'Sandalen/Badelatschen' },
          { id: 'muetze', label: 'Mütze/Sonnenhut' },
          { id: 'handschuhe', label: 'Handschuhe (je nach Wetter)' },
        ],
      },
      {
        title: 'Hygiene',
        items: [
          { id: 'zahnbuerste', label: 'Zahnbürste + Zahnpasta' },
          { id: 'seife', label: 'Seife/Duschgel' },
          { id: 'shampoo', label: 'Shampoo' },
          { id: 'handtuch', label: 'Handtücher (Mikrofaser)' },
          { id: 'toilettenpapier', label: 'Toilettenpapier' },
          { id: 'sonnencreme', label: 'Sonnencreme' },
          { id: 'mueckenschutz', label: 'Mückenschutz' },
          { id: 'erste-hilfe', label: 'Erste-Hilfe-Set' },
        ],
      },
      {
        title: 'Sonstiges',
        items: [
          { id: 'taschenlampe', label: 'Taschenlampe/Stirnlampe' },
          { id: 'batterien', label: 'Ersatzbatterien' },
          { id: 'feuerzeug', label: 'Feuerzeug/Streichhölzer' },
          { id: 'taschenmesser', label: 'Taschenmesser/Multitool' },
          { id: 'seil', label: 'Seil/Schnur' },
          { id: 'campingstuhl', label: 'Campingstühle' },
          { id: 'campingtisch', label: 'Campingtisch' },
          { id: 'powerbank', label: 'Powerbank/Solar-Ladegerät' },
          { id: 'landkarte', label: 'Landkarte/GPS-Gerät' },
          { id: 'dokumente', label: 'Ausweis & wichtige Dokumente' },
        ],
      },
    ],
  },
  {
    id: 'familie',
    title: 'Familien-Camping Checkliste',
    description: 'Alles für einen entspannten Camping-Urlaub mit Kindern',
    categories: [
      {
        title: 'Für die Kinder - Schlafen',
        items: [
          { id: 'kind-schlafsack', label: 'Kinderschlafsäcke' },
          { id: 'kind-isomatte', label: 'Kinderisomatten' },
          { id: 'kind-kissen', label: 'Lieblingskuscheltier & Kissen' },
          { id: 'kind-taschenlampe', label: 'Kindertaschenlampe' },
          { id: 'nachtlicht', label: 'Nachtlicht' },
        ],
      },
      {
        title: 'Für die Kinder - Kleidung',
        items: [
          { id: 'kind-wechselkleidung', label: 'Extra Wechselkleidung' },
          { id: 'kind-regensachen', label: 'Regenjacke & Regenhose' },
          { id: 'kind-gummistiefel', label: 'Gummistiefel' },
          { id: 'kind-badekleidung', label: 'Badekleidung' },
          { id: 'kind-sonnenhut', label: 'Sonnenhut' },
        ],
      },
      {
        title: 'Für die Kinder - Verpflegung',
        items: [
          { id: 'kind-geschirr', label: 'Kindergeschirr (bruchsicher)' },
          { id: 'kind-becher', label: 'Trinkflaschen/Becher' },
          { id: 'kind-snacks', label: 'Lieblings-Snacks' },
          { id: 'kind-flasche', label: 'Babyflaschen (falls nötig)' },
          { id: 'kind-nahrung', label: 'Babybrei/Babynahrung' },
        ],
      },
      {
        title: 'Für die Kinder - Hygiene',
        items: [
          { id: 'kind-windeln', label: 'Windeln & Feuchttücher' },
          { id: 'kind-creme', label: 'Wundschutzcreme' },
          { id: 'kind-sonnencreme', label: 'Kinder-Sonnencreme (LSF 50+)' },
          { id: 'kind-zahnbuerste', label: 'Kinderzahnbürste & -pasta' },
          { id: 'kind-toepfchen', label: 'Töpfchen/Reise-WC-Sitz' },
        ],
      },
      {
        title: 'Für die Kinder - Unterhaltung',
        items: [
          { id: 'kind-spielzeug', label: 'Outdoor-Spielzeug (Ball, Frisbee)' },
          { id: 'kind-spiele', label: 'Kartenspiele/Brettspiele' },
          { id: 'kind-buecher', label: 'Bücher/Hörspiele' },
          { id: 'kind-malzeug', label: 'Malzeug & Bastelsachen' },
          { id: 'kind-fahrrad', label: 'Kinderfahrrad/Laufrad' },
          { id: 'kind-schwimmsachen', label: 'Schwimmflügel/Schwimmring' },
        ],
      },
      {
        title: 'Für die Eltern - Zusätzlich',
        items: [
          { id: 'eltern-babytrage', label: 'Babytrage/Kinderwagen' },
          { id: 'eltern-reisebett', label: 'Reisebett (für Kleinkinder)' },
          { id: 'eltern-hochstuhl', label: 'Camping-Hochstuhl' },
          { id: 'eltern-laufstall', label: 'Laufstall (optional)' },
          { id: 'eltern-apotheke', label: 'Erweiterte Reiseapotheke' },
          { id: 'eltern-fieberthermometer', label: 'Fieberthermometer' },
        ],
      },
    ],
  },
  {
    id: 'wildcamping',
    title: 'Wildcamping Checkliste',
    description: 'Minimalistisch unterwegs in der Wildnis',
    categories: [
      {
        title: 'Unterkunft & Schlafen',
        items: [
          { id: 'wild-zelt', label: 'Leichtes Trekkingzelt' },
          { id: 'wild-plane', label: 'Tarp/Notfall-Plane' },
          { id: 'wild-schlafsack', label: 'Schlafsack (3-Jahreszeiten)' },
          { id: 'wild-isomatte', label: 'Leichte Isomatte' },
          { id: 'wild-biwak', label: 'Biwaksack (optional)' },
        ],
      },
      {
        title: 'Verpflegung & Wasser',
        items: [
          { id: 'wild-kocher', label: 'Leichter Gaskocher' },
          { id: 'wild-brennstoff', label: 'Gaskartuschen' },
          { id: 'wild-topf', label: 'Kompakter Kochtopf' },
          { id: 'wild-besteck', label: 'Leichtes Besteck (Spork)' },
          { id: 'wild-becher', label: 'Becher/Tasse' },
          { id: 'wild-wasserfilter', label: 'Wasserfilter/Reinigungstabletten' },
          { id: 'wild-flasche', label: 'Trinkflasche (1-2 Liter)' },
          { id: 'wild-nahrung', label: 'Trekkingnahrung/Energieriegel' },
          { id: 'wild-salz', label: 'Gewürze (Salz, Pfeffer)' },
        ],
      },
      {
        title: 'Navigation & Sicherheit',
        items: [
          { id: 'wild-karte', label: 'Topografische Karte' },
          { id: 'wild-kompass', label: 'Kompass' },
          { id: 'wild-gps', label: 'GPS-Gerät/Smartphone' },
          { id: 'wild-pfeife', label: 'Signalpfeife' },
          { id: 'wild-spiegel', label: 'Signalspiegel' },
          { id: 'wild-erste-hilfe', label: 'Erste-Hilfe-Set (kompakt)' },
          { id: 'wild-messer', label: 'Survival-Messer/Multitool' },
        ],
      },
      {
        title: 'Ausrüstung',
        items: [
          { id: 'wild-rucksack', label: 'Trekking-Rucksack (50-70L)' },
          { id: 'wild-stirnlampe', label: 'Stirnlampe + Ersatzbatterien' },
          { id: 'wild-feuerzeug', label: 'Feuerzeug/Feuerstahl' },
          { id: 'wild-seil', label: 'Paracord/Seil (10m)' },
          { id: 'wild-axt', label: 'Kleine Camping-Axt (optional)' },
          { id: 'wild-saege', label: 'Klappsäge' },
          { id: 'wild-duct-tape', label: 'Duct Tape' },
        ],
      },
      {
        title: 'Kleidung',
        items: [
          { id: 'wild-funktionskleidung', label: 'Funktionsunterwäsche' },
          { id: 'wild-fleece', label: 'Fleecejacke' },
          { id: 'wild-hardshell', label: 'Hardshell-Jacke (wasserdicht)' },
          { id: 'wild-hose', label: 'Trekkinghose' },
          { id: 'wild-regenhose', label: 'Regenhose' },
          { id: 'wild-muetze', label: 'Mütze & Buff' },
          { id: 'wild-handschuhe', label: 'Handschuhe' },
          { id: 'wild-wanderschuhe', label: 'Wasserfeste Wanderschuhe' },
          { id: 'wild-socken', label: 'Merino-Socken' },
        ],
      },
      {
        title: 'Hygiene (minimalistisch)',
        items: [
          { id: 'wild-zahnzeug', label: 'Zahnbürste + Zahnpasta (klein)' },
          { id: 'wild-seife', label: 'Biologisch abbaubare Seife' },
          { id: 'wild-handtuch', label: 'Mikrofaser-Handtuch (klein)' },
          { id: 'wild-toilettenpapier', label: 'Toilettenpapier + Tüte' },
          { id: 'wild-sonnencreme', label: 'Sonnencreme (klein)' },
          { id: 'wild-insektenschutz', label: 'Insektenschutz' },
        ],
      },
    ],
  },
  {
    id: 'winter',
    title: 'Winter-Camping Checkliste',
    description: 'Sicher und warm campen bei Minusgraden',
    categories: [
      {
        title: 'Unterkunft & Schlafen',
        items: [
          { id: 'winter-vierjahreszeitenzelt', label: '4-Jahreszeiten-Zelt (wintertauglich)' },
          { id: 'winter-heringe', label: 'Schneeheringe' },
          { id: 'winter-schlafsack', label: 'Winterschlafsack (-15°C bis -30°C)' },
          { id: 'winter-inlett', label: 'Schlafsack-Inlett (Seide/Fleece)' },
          { id: 'winter-isomatte', label: 'Isolierte Isomatte (hoher R-Wert)' },
          { id: 'winter-zusatzmatte', label: 'Zusätzliche Isomatte' },
          { id: 'winter-waermflasche', label: 'Wärmflasche' },
        ],
      },
      {
        title: 'Kleidung - Schichten-Prinzip',
        items: [
          { id: 'winter-thermounterwaesche', label: 'Thermo-Unterwäsche (Merinowolle)' },
          { id: 'winter-fleece', label: 'Fleece-Jacke' },
          { id: 'winter-daunenjacke', label: 'Daunenjacke/Isolationsjacke' },
          { id: 'winter-hardshell', label: 'Winter-Hardshell-Jacke' },
          { id: 'winter-hose', label: 'Gefütterte Winterhose' },
          { id: 'winter-regenhose', label: 'Überhose (winddicht)' },
          { id: 'winter-muetze', label: 'Warme Mütze' },
          { id: 'winter-buff', label: 'Buff/Schlauchschal' },
          { id: 'winter-handschuhe', label: 'Fingerhandschuhe + Fäustlinge' },
          { id: 'winter-socken', label: 'Dicke Wollsocken' },
          { id: 'winter-stiefel', label: 'Winterstiefel (isoliert)' },
          { id: 'winter-gamaschen', label: 'Gamaschen' },
        ],
      },
      {
        title: 'Kochen & Essen',
        items: [
          { id: 'winter-kocher', label: 'Winterkocher (funktioniert bei Kälte)' },
          { id: 'winter-brennstoff', label: 'Extra Brennstoff/Gas (Wintergas)' },
          { id: 'winter-thermos', label: 'Thermoskanne (groß)' },
          { id: 'winter-heissgetraenk', label: 'Tee/Kakao/Instantsuppen' },
          { id: 'winter-hochkalorisch', label: 'Hochkalorische Nahrung' },
          { id: 'winter-fett', label: 'Butter/Öl (mehr Kalorien)' },
        ],
      },
      {
        title: 'Winter-Spezialausrüstung',
        items: [
          { id: 'winter-schneeschaufel', label: 'Schneeschaufel' },
          { id: 'winter-schneesaege', label: 'Schneesäge (optional)' },
          { id: 'winter-lawine', label: 'LVS-Gerät (in Lawinengebieten)' },
          { id: 'winter-sonde', label: 'Lawinensonde' },
          { id: 'winter-steigeisen', label: 'Steigeisen (bei Eis)' },
          { id: 'winter-schneeschuhe', label: 'Schneeschuhe' },
          { id: 'winter-trekkingstoecke', label: 'Trekkingstöcke mit Schneetellern' },
        ],
      },
      {
        title: 'Sicherheit & Gesundheit',
        items: [
          { id: 'winter-erste-hilfe', label: 'Erweiterte Erste-Hilfe' },
          { id: 'winter-waermepacks', label: 'Wärmepacks (Hand & Fuß)' },
          { id: 'winter-sonnenschutz', label: 'Sonnencreme + Lippenpflege (LSF 50+)' },
          { id: 'winter-skibrille', label: 'Skibrille/Sonnenbrille' },
          { id: 'winter-creme', label: 'Fettcreme gegen Kälte' },
          { id: 'winter-notfalldecke', label: 'Rettungsdecke' },
        ],
      },
      {
        title: 'Sonstiges',
        items: [
          { id: 'winter-stirnlampe', label: 'Stirnlampe (extra Batterien, kältefest)' },
          { id: 'winter-powerbank', label: 'Powerbank (warm halten!)' },
          { id: 'winter-feuerzeug', label: 'Mehrere Feuerzeuge' },
          { id: 'winter-isolierung', label: 'Isoliermatte für Sitzfläche' },
          { id: 'winter-muellbeutel', label: 'Extra Plastiktüten (wasserdicht)' },
        ],
      },
    ],
  },
];

export default function ChecklistenPage() {
  const [activeChecklist, setActiveChecklist] = useState<string>('allgemein');
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());

  const handleCheckboxChange = (itemId: string) => {
    const newCheckedItems = new Set(checkedItems);
    if (newCheckedItems.has(itemId)) {
      newCheckedItems.delete(itemId);
    } else {
      newCheckedItems.add(itemId);
    }
    setCheckedItems(newCheckedItems);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleResetChecklist = () => {
    setCheckedItems(new Set());
  };

  const currentChecklist = checklists.find((cl) => cl.id === activeChecklist) || checklists[0];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white pt-24">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Breadcrumbs */}
        <Breadcrumbs
          items={[
            { name: 'Home', href: '/' },
            { name: 'Checklisten' },
          ]}
        />

        {/* Page Header */}
        <header className="mb-12 mt-6">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Camping-Checklisten
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Nie wieder etwas vergessen! Nutze unsere detaillierten Checklisten für dein nächstes
            Camping-Abenteuer. Einfach abhaken, ausdrucken und perfekt vorbereitet losziehen.
          </p>
        </header>

        {/* Checklist Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex flex-wrap gap-2" aria-label="Checklisten">
              {checklists.map((checklist) => (
                <button
                  key={checklist.id}
                  onClick={() => setActiveChecklist(checklist.id)}
                  className={`
                    px-6 py-3 border-b-2 font-medium text-sm transition-colors duration-200
                    ${
                      activeChecklist === checklist.id
                        ? 'border-[var(--color-pine)] text-[var(--color-pine)]'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }
                  `}
                >
                  {checklist.title}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mb-8 flex flex-wrap gap-4 print:hidden">
          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-pine)] hover:bg-[var(--color-forest)] text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
            </svg>
            Drucken
          </button>
          <button
            onClick={handleResetChecklist}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold rounded-lg shadow-md transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Zurücksetzen
          </button>
        </div>

        {/* Checklist Content */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Checklist Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {currentChecklist.title}
            </h2>
            <p className="text-gray-600">
              {currentChecklist.description}
            </p>
          </div>

          {/* Checklist Categories */}
          <div className="space-y-8">
            {currentChecklist.categories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="border-b border-gray-200 pb-6 last:border-b-0">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {category.title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {category.items.map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={checkedItems.has(item.id)}
                        onChange={() => handleCheckboxChange(item.id)}
                        className="w-5 h-5 rounded border-gray-300 text-[var(--color-pine)] focus:ring-[var(--color-pine)] cursor-pointer"
                      />
                      <span
                        className={`flex-grow ${
                          checkedItems.has(item.id)
                            ? 'line-through text-gray-400'
                            : 'text-gray-700 group-hover:text-gray-900'
                        }`}
                      >
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-8 pt-6 border-t border-gray-200 print:hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                Fortschritt
              </span>
              <span className="text-sm font-medium text-gray-700">
                {checkedItems.size} / {currentChecklist.categories.reduce((acc, cat) => acc + cat.items.length, 0)} Punkte
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div
                className="bg-[var(--color-pine)] h-3 rounded-full transition-all duration-500"
                style={{
                  width: `${
                    (checkedItems.size /
                      currentChecklist.categories.reduce((acc, cat) => acc + cat.items.length, 0)) *
                    100
                  }%`,
                }}
              />
            </div>
          </div>
        </div>

        {/* Print-specific footer */}
        <div className="hidden print:block mt-8 text-center text-sm text-gray-500">
          <p>Camping-Checkliste von CampCheck.de</p>
          <p>Gedruckt am: {new Date().toLocaleDateString('de-DE')}</p>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
          }
          .print\\:hidden {
            display: none !important;
          }
          .print\\:block {
            display: block !important;
          }
          input[type="checkbox"] {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
        }
      `}</style>
    </div>
  );
}
