import { Metadata } from 'next';
import Link from 'next/link';
import PillarSidebar from '@/components/PillarSidebar';

export const metadata: Metadata = {
  title: 'Outdoor Aktivitäten: Abenteuer in der Natur | CampCheck',
  description: 'Die besten Outdoor Aktivitäten für Camper. Wandern, Angeln, Radfahren und mehr. Entdecke Abenteuer in der Natur für deinen nächsten Campingurlaub.',
  keywords: ['outdoor aktivitäten', 'camping tipps', 'wandern', 'outdoor abenteuer', 'natur aktivitäten'],
  openGraph: {
    title: 'Outdoor Aktivitäten: Abenteuer in der Natur',
    description: 'Inspiration für Outdoor Aktivitäten beim Camping. Wandern, Angeln, Wassersport und mehr für unvergessliche Naturerlebnisse.',
    type: 'article',
    url: 'https://camp-check.com/kategorien/sonstiges',
  },
};

export default async function SonstigesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <main className="flex-1 min-w-0">
      {/* H1 mit Hauptkeyword */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Outdoor Aktivitäten: Abenteuer in der Natur
      </h1>

      {/* Einleitung */}
      <div className="prose prose-lg mb-12 text-gray-700">
        <p className="text-xl leading-relaxed mb-6">
          Camping ist mehr als nur Übernachten im Zelt oder Wohnmobil. Der eigentliche 
          Reiz liegt in den Möglichkeiten, die sich vor der Zeltöffnung ergeben. Die 
          Natur ist ein riesiger Spielplatz, der auf uns wartet – voller Abenteuer, 
          Herausforderungen und unvergesslicher Erlebnisse.
        </p>
        <p className="mb-6">
          Ich erinnere mich an einen Campingurlaub an der Mosel vor einigen Jahren. 
          Eigentlich war geplant, entspannt am Platz zu verweilen, Bücher zu lesen und 
          zu grillen. Aber dann entdeckten wir einen Wanderweg, der direkt am Platz 
          vorbeiführte. Was als "nur ein kurzer Spaziergang" begann, wurde zu einer 
          ganzen Woche voller Entdeckungen: Wir wanderten durch Weinberge, fanden 
          einen versteckten Wasserfall, entdeckten eine verlassene Burg und lernten 
          einen Einheimischen kennen, der uns seine Lieblingsplätze zeigte. Am Ende 
          war diese Urlaubswoche aktiver als so mancher Sporturlaub – und unvergesslicher.
        </p>
        <p className="mb-6">
          In diesem Guide stelle ich dir die besten Outdoor-Aktivitäten vor, die du 
          beim Camping unternehmen kannst. Ob du ein begeisterter Wanderer bist, Wassersport 
          liebst oder nach kreativen Beschäftigungen für die ganze Familie suchst – hier 
          findest du Inspiration für dein nächstes Abenteuer.
        </p>
        <p>
        Denn Camping ist der perfekte Ausgangspunkt für Outdoor-Erlebnisse. Du wohnst 
        mitten in der Natur, hast keine festen Termine und kannst den Tag gestalten, 
        wie er kommt. Nutze diese Freiheit und entdecke, was die Natur dir bietet.
        </p>
      </div>

      {/* Section 1: Wandern */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Wandern: Die beliebteste Outdoor-Aktivität
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Wandern ist die Königin der Outdoor-Aktivitäten. Keine andere Aktivität ist 
            so vielseitig, so gesund und so unkompliziert. Du brauchst fast keine 
            Ausrüstung, kannst es in fast jedem Alter betreiben und entdeckst dabei 
            Orte, die mit keinem Auto erreichbar sind.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Warum Wandern beim Camping perfekt passt</h3>
          <p className="mb-4">
            Camping und Wandern gehören zusammen wie Lagerfeuer und Stockbrot. Als Camper 
            bist du oft in den schönsten Regionen untergebracht – direkt an Wanderwegen, 
            in der Nähe von Bergen, Wäldern oder Küsten. Du kannst morgens früh aufbrechen, 
            bevor die Tagestouristen kommen, und am Abend zurückkehren, um am Zelt zu 
            entspannen.
          </p>
          <p className="mb-4">
            Wandern ist auch die ideale Aktivität für jedes Fitnesslevel. Ob gemütlicher 
            Spaziergang oder alpine Gipfeltour – du bestimmst das Tempo und die Strecke. 
            Und das Beste: Es kostet nichts außer gutem Schuhwerk.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Die richtige Ausrüstung fürs Wandern</h3>
          <p className="mb-4">
            Gute Wanderschuhe sind das Wichtigste. Sie sollten bereits eingelaufen sein 
            und gut passen. Für leichte Touren reichen Wanderschuhe mit niedrigem Schaft, 
            für Bergtouren brauchst du stabile Bergschuhe.
          </p>
          <p className="mb-4">
            Ansonsten empfehle ich:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Funktionskleidung (keine Baumwolle – die wird nass und trocknet langsam)</li>
            <li>Tagesrucksack mit Regenhülle</li>
            <li>Genügend Wasser und Snacks</li>
            <li>Erste-Hilfe-Set</li>
            <li>Karte oder GPS-Gerät</li>
            <li>Sonnenschutz (Hut, Sonnencreme, Sonnenbrille)</li>
            <li>Regenjacke (das Wetter kann schnell umschlagen)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wandern mit verschiedenen Zielgruppen</h3>
          <p className="mb-4">
            Wandern ist für alle geeignet – aber die Tour sollte angepasst werden:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Zielgruppe</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Geeignete Touren</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Besonderheiten</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Familien mit Kleinkindern</td>
                  <td className="border border-gray-300 px-4 py-2">Kurze Rundwege (2-5 km), spannende Ziele (Spielplatz, Tierpark)</td>
                  <td className="border border-gray-300 px-4 py-2">Trage oder Kinderwagen, viele Pausen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Schulkinder</td>
                  <td className="border border-gray-300 px-4 py-2">Mittlere Touren (5-10 km), Natur entdecken</td>
                  <td className="border border-gray-300 px-4 py-2">Schatzsuche, Geocaching, Naturführer</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Teenager</td>
                  <td className="border border-gray-300 px-4 py-2">Anspruchsvolle Touren, Action (Klettern, Canyoning)</td>
                  <td className="border border-gray-300 px-4 py-2">Herausforderungen, Gleichaltrige</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Senioren</td>
                  <td className="border border-gray-300 px-4 py-2">Bewegungspfade, flache Wege, Aussichtspunkte</td>
                  <td className="border border-gray-300 px-4 py-2">Wanderstock, moderates Tempo</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Sportliche Gruppen</td>
                  <td className="border border-gray-300 px-4 py-2">Alpine Touren, Mehrtagestrekking</td>
                  <td className="border border-gray-300 px-4 py-2">Gute Kondition, Trittsicherheit</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Tipps für unvergessliche Wanderungen</h3>
          <p className="mb-4">
            Damit deine Wanderungen beim Camping zu Highlights werden:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Früh aufbrechen – Morgenstimmung in der Natur ist unbezahlbar</li>
            <li>Pausen einplanen – ein Picknick mit Aussicht macht jede Tour schöner</li>
            <li>Lokale Empfehlungen einholen – Einheimische kennen die schönsten Plätze</li>
            <li>Auswehtouren kennen – falls das Wetter umschlägt</li>
            <li>Die Kamera nicht vergessen – aber auch mal das Handy wegstecken und genießen</li>
          </ul>
        </div>

        {/* Link-Box zu Cluster-Artikeln */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Wander-Inspiration:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <Link href="/kategorien/sonstiges/gemeinsam-wandern-berlin" className="text-blue-600 hover:text-blue-800 underline">
                Gemeinsam wandern Berlin: Die besten Touren
              </Link>
            </li>
            <li>
              <Link href="/kategorien/sonstiges/single-wandern-harz" className="text-blue-600 hover:text-blue-800 underline">
                Single wandern im Harz: Touren und Tipps
              </Link>
            </li>
            <li>
              <Link href="/kategorien/sonstiges/lofoten-wandern" className="text-blue-600 hover:text-blue-800 underline">
                Lofoten wandern: Der ultimative Guide
              </Link>
            </li>
            <li>
              <Link href="/kategorien/sonstiges/vogesen-wandern" className="text-blue-600 hover:text-blue-800 underline">
                Vogesen wandern: Die schönsten Routen
              </Link>
            </li>
            <li>
              <Link href="/kategorien/sonstiges/enduro-wandern" className="text-blue-600 hover:text-blue-800 underline">
                Enduro wandern: Abenteuer für Sportliche
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2: Wandern in Deutschland */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Wandern in Deutschland: Die schönsten Regionen
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Deutschland ist ein Wanderparadies. Ob Gebirge, Mittelgebirge, Küste oder 
            Flusstäler – hier gibt es für jeden Geschmack die passende Landschaft. 
            Hier sind meine Lieblingsregionen:
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Die Alpen</h3>
          <p className="mb-4">
            Die deutschen Alpen in Bayern bieten alles, was das Wandererherz begehrt: 
            majestätische Gipfel, kristallklare Seen, urige Almen und herrliche Ausblicke. 
            Besonders beliebt sind:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Zugspitze:</strong> Deutschlands höchster Berg, auch für Anfänger über die Seilbahn erreichbar</li>
            <li><strong>Königssee:</strong> Malerischer See mit Wanderungen zu Obersee und Fischunkelalm</li>
            <li><strong>Partnachklamm:</strong> Dramatische Felsschlucht bei Garmisch-Partenkirchen</li>
            <li><strong>Tegernsee und Schliersee:</strong> Viele Rundwanderungen mit Seeblick</li>
          </ul>
          <p className="mb-4">
            Die Alpen sind aber auch anspruchsvoll. Wer hier wandert, braucht gutes Schuhwerk, 
            Trittsicherheit und sollte die Wetterlage beachten. Für Einsteiger gibt es aber 
            auch viele bequeme Almwanderungen.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Der Schwarzwald</h3>
          <p className="mb-4">
            Der Schwarzwald ist perfekt für alle, die abwechslungsreiche Wanderungen suchen: 
            dunkle Tannenwälder, idyllische Täler, Wasserfälle und herrliche Fernblicke. 
            Das Wegenetz ist exzellent ausgeschildert.
          </p>
          <p className="mb-4">
            Highlights:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Westweg – der Klassiker quer durch den Schwarzwald</li>
            <li>Triberger Wasserfälle – die höchsten in Deutschland</li>
            <li>Schluchtensteig – spektakuläre Schluchtwanderung</li>
            <li>Feldberg – höchster Berg des Schwarzwaldes mit tollem Ausblick</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Die Mittelgebirge</h3>
          <p className="mb-4">
            Wer es etwas ruhiger mag, findet in den deutschen Mittelgebirgen wunderbare 
            Wanderregionen:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Region</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Charakter</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Besonderheit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Harz</td>
                  <td className="border border-gray-300 px-4 py-2">Mystisch, waldreich</td>
                  <td className="border border-gray-300 px-4 py-2">Brocken, Nationalpark</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Sauerland</td>
                  <td className="border border-gray-300 px-4 py-2">Hügelig, grün</td>
                  <td className="border border-gray-300 px-4 py-2">Rothaarsteig, Seen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Pfälzerwald</td>
                  <td className="border border-gray-300 px-4 py-2">Felsig, sonnig</td>
                  <td className="border border-gray-300 px-4 py-2">Felsenmeer, Weinberge</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Erzgebirge</td>
                  <td className="border border-gray-300 px-4 py-2">Bergbaugeschichte</td>
                  <td className="border border-gray-300 px-4 py-2">Aussichtstürme, Weihnachten</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Thüringer Wald</td>
                  <td className="border border-gray-300 px-4 py-2">Ruhig, naturbelassen</td>
                  <td className="border border-gray-300 px-4 py-2">Rennsteig, Wartburg</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Küstenwandern</h3>
          <p className="mb-4">
            Das Wandern an der Küste ist ein ganz besonderes Erlebnis. Die ständig wechselnden 
            Gezeiten, die Salzluft, die Weite des Meeres – das alles macht Küstenwanderungen 
            einzigartig.
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Ostseeküste:</strong> Flache Strände, Steilküsten, Nationalparks</li>
            <li><strong>Nordseeküste:</strong> Wattwandern (nur mit Guide!), Dünen, Seehunde</li>
            <li><strong>Rügen:</strong> Kreidefelsen, Buchenwälder, Kaiserstühle</li>
          </ul>
        </div>

        {/* Link-Box */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Deutschland entdecken:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <span className="text-gray-600">Die schönsten Wanderwege Deutschlands</span>
            </li>
            <li>
              <span className="text-gray-600">Camping und Wandern: Die besten Kombinationen</span>
            </li>
            <li>
              <span className="text-gray-600">Wandern mit Hund: Regeln und Tipps</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: Wandern in Europa */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Wandern in Europa: Von den Alpen bis zum Meer
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Europa bietet eine unglaubliche Vielfalt an Wanderlandschaften. Vom hohen Norden 
            bis zum Mittelmeer, von den Atlantikküsten bis zu den Karpaten – hier gibt es 
            Abenteuer für jeden Geschmack.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Die Alpenländer</h3>
          <p className="mb-4">
            Österreich, Schweiz, Südtirol und Frankreich bieten alpinwandern auf höchstem Niveau:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Österreich:</strong> Tirol mit dem Adlerweg, Salzburger Land mit zahlreichen Almen</li>
            <li><strong>Schweiz:</strong> Engadin, Berner Oberland, Wallis – alpinwandern in Perfektion</li>
            <li><strong>Südtirol:</strong> Dolomiten, Rosengarten, Schlern – UNESCO-Welterbe</li>
            <li><strong>Frankreich:</strong> Savoyen, Pyrenäen, GR-Wanderwege quer durchs Land</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Skandinavien: Weite und Wildnis</h3>
          <p className="mb-4">
            Norwegen, Schweden und Finnland sind Wanderparadiese für alle, die Weite, Stille 
            und wilde Natur suchen. Dank des Allemansrätten kannst du hier fast überall campen 
            und wandern.
          </p>
          <p className="mb-4">
            Besonders empfehlenswert:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Norwegen:</strong> Lofoten, Geirangerfjord, Jotunheimen Nationalpark</li>
            <li><strong>Schweden:</strong> Kungsleden, Höga Kusten, Sarek Nationalpark</li>
            <li><strong>Finnland:</strong> Nationalparks um Kuusamo, Tausend Seen</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Mittelmeer und Südeuropa</h3>
          <p className="mb-4">
            Für alle, die gern bei Sonne wandern:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Spanien:</strong> Camino de Santiago, Pyrenäen, Sierra Nevada</li>
            <li><strong>Portugal:</strong> Rota Vicentina an der Küste, Madeira</li>
            <li><strong>Italien:</strong> Cinque Terre, Amalfiküste, Toskana</li>
            <li><strong>Kroatien:</strong> Nationalparks Plitwitzer Seen, Paklenica</li>
            <li><strong>Griechenland:</strong> Inselwandern (Kreta, Korfu), Pindos-Gebirge</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Inseln und Küsten</h3>
          <p className="mb-4">
            Inselwandern hat einen besonderen Charme – du bist immer nah am Wasser, hast 
            oft Meerblick und erlebst eine besondere Kultur:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Schottland:</strong> Isle of Skye, Äußere Hebriden</li>
            <li><strong>Irland:</strong> Dingle Way, Ring of Kerry</li>
            <li><strong>Island:</strong> Laugavegur, Fimmvörðuháls – außergewöhnliche Vulkanlandschaften</li>
            <li><strong>Korsika:</strong> GR20 – einer der schönsten, aber auch anspruchsvollsten Wege Europas</li>
            <li><strong>Mallorca:</strong> Serra de Tramuntana, GR221</li>
          </ul>
        </div>

        {/* Link-Box */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Europa entdecken:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <Link href="/kategorien/sonstiges/lofoten-wandern" className="text-blue-600 hover:text-blue-800 underline">
                Lofoten wandern: Der ultimative Guide
              </Link>
            </li>
            <li>
              <span className="text-gray-600">Die schönsten Mehrtageswanderungen Europas</span>
            </li>
            <li>
              <span className="text-gray-600">Wandern im Ausland: Rechtliches und Tipps</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Angeln vom Campingplatz */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Angeln vom Campingplatz aus
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Angeln und Camping passen perfekt zusammen. Beides bedeutet Entschleunigung, 
            Naturverbundenheit und Geduld. Viele Camper entdecken das Angeln erst auf 
            dem Campingplatz neu – und werden begeistert.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Warum Angeln beim Camping ideal ist</h3>
          <p className="mb-4">
            Als Camper bist du oft direkt an Gewässern untergebracht. Du hast Zeit, 
            denn Urlaub bedeutet keine Termine. Morgens früh raus, die Ruten auswerfen, 
            den Sonnenaufgang genießen – und wenn die Fische beißen, gibt es frischen 
            Fang zum Abendessen.
          </p>
          <p className="mb-4">
            Selbst wenn du nichts fängst (was Anfängern oft passiert), ist Angeln 
            entspannend. Es ist eine Form der Meditation – ruhig am Wasser sitzen, 
            auf den Hauch warten, die Natur beobachten.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Das brauchst du zum Angeln</h3>
          <p className="mb-4">
            Einstieg ins Angeln muss nicht teuer sein:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Angelschein:</strong> In Deutschland fast überall Pflicht. Kurz vor dem Urlaub beim örtlichen Fischereiverein machen.</li>
            <li><strong>Tageskarte:</strong> Für das jeweilige Gewässer, oft beim Campingplatz oder im Dorf erhältlich.</li>
            <li><strong>Angelrute:</strong> Eine einfache Spinnrute reicht für den Anfang.</li>
            <li><strong>Zubehör:</strong> Haken, Bleie, Schwimmer, Köder (Würmer, Mais, Kunstmaden).</li>
            <li><strong>Kescher und Maßband:</strong> Zum Landen und Messen der Fische.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Fangmethoden für Anfänger</h3>
          <p className="mb-4">
            Als Einsteiger sind diese Methoden am einfachsten:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Methode</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Geeignet für</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Einstieg</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Stippen</td>
                  <td className="border border-gray-300 px-4 py-2">Teiche, Seen, Uferbereiche</td>
                  <td className="border border-gray-300 px-4 py-2">Sehr einfach</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Spinnfischen</td>
                  <td className="border border-gray-300 px-4 py-2">Hecht, Zander, Barsch</td>
                  <td className="border border-gray-300 px-4 py-2">Mittel</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Grundfischen</td>
                  <td className="border border-gray-300 px-4 py-2">Karpfen, Schleie, Aal</td>
                  <td className="border border-gray-300 px-4 py-2">Mittel</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Fliegenfischen</td>
                  <td className="border border-gray-300 px-4 py-2">Forelle, Äsche</td>
                  <td className="border border-gray-300 px-4 py-2">Anspruchsvoll</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Tipps für erfolgreiches Angeln</h3>
          <p className="mb-4">
            Damit das Angeln beim Camping Freude macht:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Früh aufstehen – morgens beißt es oft besser</li>
            <li>Beim Platzpersonal nach Tipps fragen – die kennen die Gewässer</li>
            <li>Geduld haben – Angeln ist Warten, nicht nur Fangen</li>
            <li>Regeln beachten – Mindestmaße, Schonzeiten, Fanglimits</li>
            <li>Nur so viel fangen, wie du auch essen kannst</li>
            <li>Nachhaltig angeln – Fische schonend behandeln, keine Gräten im Ufer zurücklassen</li>
          </ul>
        </div>

        {/* Link-Box */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Mehr zum Angeln:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <span className="text-gray-600">Angeln für Anfänger: Der komplette Guide</span>
            </li>
            <li>
              <span className="text-gray-600">Die besten Campingplätze für Angler</span>
            </li>
            <li>
              <span className="text-gray-600">Fische grillen: Rezepte und Tipps</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: Weitere Outdoor-Aktivitäten */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Weitere Outdoor-Aktivitäten
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Neben Wandern und Angeln gibt es unzählige andere Aktivitäten, die du 
            vom Campingplatz aus unternehmen kannst:
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Radfahren und Mountainbiking</h3>
          <p className="mb-4">
            Das Fahrrad ist das perfekte Fortbewegungsmittel vom Campingplatz aus. 
            Du kommst weiter als zu Fuß, bist flexibel und erlebst die Landschaft 
            hautnah.
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Trekkingrad:</strong> Für längere Ausflüge auf Asphalt und Schotter</li>
            <li><strong>Mountainbike:</strong> Für Abenteuer im Gelände, auf Trails und Waldwegen</li>
            <li><strong>E-Bike:</strong> Für Unterstützung bei langen Strecken oder bergigem Gelände</li>
            <li><strong>Faltrad:</strong> Platzsparende Alternative für Camper mit wenig Stauraum</li>
          </ul>
          <p className="mb-4">
            Viele Campingplätze haben Fahrradverleih oder sind an Radwegen angebunden. 
            Deutschland hat ein ausgezeichnetes Radwegenetz – nutze es!
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wassersport</h3>
          <p className="mb-4">
            Wenn dein Campingplatz an einem See, Fluss oder dem Meer liegt, ergeben 
            sich Wassersportmöglichkeiten:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Schwimmen:</strong> Die einfachste Wassersportart – erfrischend und gesund</li>
            <li><strong>Kanu/Kajak:</strong> Paddeltouren auf Flüssen oder Seen sind entspannend und erlebnisreich</li>
            <li><strong>Stand-Up-Paddling:</strong> SUP ist einfach zu erlernen und vielseitig</li>
            <li><strong>Segeln:</strong> Viele Seen haben Segelmöglichkeiten oder Segelschulen</li>
            <li><strong>Tauchen und Schnorcheln:</strong> In klaren Seen und am Meer</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Klettern und Bouldern</h3>
          <p className="mb-4">
            Für alle, die Höhen lieben und körperliche Herausforderungen suchen:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Kletterschulen:</strong> Viele Klettergebiete haben Angebote für Anfänger</li>
            <li><strong>Klettersteige:</strong> Gesicherte Kletterrouten mit tollen Aussichten</li>
            <li><strong>Bouldern:</strong> Klettern ohne Seil auf Felsblöcken, oft mit Crashpads</li>
            <li><strong>Boulderhallen:</strong> Für schlechtes Wetter oder Training</li>
          </ul>
          <p className="mb-4">
            Beliebte Kletterregionen in Deutschland: Sächsische Schweiz, Pfälzerwald, 
            Frankenjura, Berchtesgadener Land.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Naturbeobachtung</h3>
          <p className="mb-4">
            Manchmal braucht es keine große Aktivität, um die Natur zu genießen:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Vogelbeobachtung:</strong> Mit Fernglas und Bestimmungsbuch die heimische Vogelwelt entdecken</li>
            <li><strong>Sternegucken:</strong> Abends die Sterne beobachten, Sternbilder suchen</li>
            <li><strong>Pflanzen bestimmen:</strong> Blumen, Bäume, Kräuter erkennen lernen</li>
            <li><strong>Tierische Spuren:</strong> Fußspuren, Losung, Fraßspuren deuten lernen</li>
            <li><strong>Fotografie:</strong> Die Natur mit der Kamera festhalten</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Spiele und Aktivitäten für Gruppen</h3>
          <p className="mb-4">
            Für Camping-Gruppen oder Familien gibt es viele Möglichkeiten, gemeinsam 
            aktiv zu sein:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Geocaching:</strong> Moderne Schatzsuche mit GPS oder Smartphone</li>
            <li><strong>Volkssportarten:</strong> Kubb, Mölkky, Boule – skandinavische und französische Outdoor-Spiele</li>
            <li><strong>Schnitzeljagd:</strong> Selbst organisierte oder geführte Schatzsuchen</li>
            <li><strong>Nachtwanderung:</strong> Fackelwanderung oder Nachtwanderung ohne Licht (wenn sicher)</li>
            <li><strong>Orientierungslauf:</strong> Mit Karte und Kompass den Weg finden</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Entspannung und Wellness</h3>
          <p className="mb-4">
            Nicht jede Aktivität muss sportlich sein:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Yoga im Freien:</strong> Dehnübungen mit Blick ins Grüne</li>
            <li><strong>Meditation:</strong> Die Natur als Kulisse für innere Ruhe</li>
            <li><strong>Waldbaden (Shinrin-yoku):</strong> Bewusstes, langsames Durch den Wald Gehen</li>
            <li><strong>Thermen und Spas:</strong> Viele Campingregionen haben Thermalbäder</li>
            <li><strong>Lesen und Entspannen:</strong> Ein gutes Buch im Hängematte</li>
          </ul>
        </div>

        {/* Link-Box */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Noch mehr Aktivitäten:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <Link href="/kategorien/sonstiges/gemeinsam-wandern-berlin" className="text-blue-600 hover:text-blue-800 underline">
                Gemeinsam wandern Berlin
              </Link>
            </li>
            <li>
              <Link href="/kategorien/sonstiges/single-wandern-harz" className="text-blue-600 hover:text-blue-800 underline">
                Single wandern Harz
              </Link>
            </li>
            <li>
              <span className="text-gray-600">Geocaching für Anfänger</span>
            </li>
            <li>
              <span className="text-gray-600">Die besten Outdoor-Spiele für Camping-Gruppen</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ-Bereich */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Häufig gestellte Fragen zu Outdoor-Aktivitäten
        </h2>
        <div className="space-y-4">
          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Was ist die beste Outdoor-Aktivität für Camping-Anfänger?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Wandern ist ideal für Anfänger. Du brauchst fast keine Ausrüstung (nur gute Schuhe), 
              kannst es in deinem Tempo machen und es ist für jedes Fitnesslevel geeignet. 
              Starte mit kurzen, flachen Touren und steigere dich langsam. Auch Spaziergänge 
              und Naturbeobachtung sind tolle Einstiegsaktivitäten, die kein spezielles Equipment 
              erfordern.
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Welche Ausrüstung brauche ich zum Wandern wirklich?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Das Minimum sind gute Wanderschuhe, die bereits eingelaufen sind. Dazu bequeme 
              Kleidung (funktionale Materialien, keine Baumwolle), eine Regenjacke, ausreichend 
              Wasser und eine kleine Verpflegung. Für längere Touren kommen Tagesrucksack, 
              Erste-Hilfe-Set, Karte und Handy hinzu. Spezielle Ausrüstung wie Wanderstöcke, 
              GPS-Gerät oder Sonnenschutz sind je nach Tour und Wetter sinnvoll, aber nicht 
              immer nötig.
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Kann ich ohne Angelschein angeln?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              In Deutschland ist ein Angelschein in fast allen Bundesländern Pflicht. Ausnahmen 
              gibt es nur in sehr wenigen Fällen (zum Beispiel für Jugendliche unter einer 
              bestimmten Altersgrenze, je nach Bundesland unterschiedlich). Der Schein wird 
              nach einem Lehrgang und einer Prüfung erteilt. Dazu brauchst du eine Erlaubnis 
              für das jeweilige Gewässer (Tageskarte oder Jahreskarte). Ohne diese Unterlagen 
              drohen Bußgelder. Informiere dich vor dem Urlaub beim Fischereiverein deines 
              Zielorts.
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Was kann man bei schlechtem Wetter unternehmen?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Auch bei Regen gibt es Möglichkeiten: Besuche in der Region (Museen, Städtchen, 
              Thermen), Indoor-Aktivitäten (Klettern in der Halle, Schwimmbad), gemütliche Zeit 
              im Zelt (Spiele, Lesen, Kochen), kurze Spaziergänge in Regenkleidung oder 
              Aktivitäten unter überdachten Bereichen. Viele Campingregionen haben spezielle 
              Angebote für Regentage. Am besten vorher informieren und Alternativen parat haben.
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Welche Outdoor-Aktivitäten sind für Familien mit Kindern geeignet?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Kinder lieben Aktivitäten mit Entdeckungscharakter: Kurze Wanderungen mit 
              spannenden Zielen (Wasserfall, Aussicht, Spielplatz), Geocaching (moderne 
              Schatzsuche), Tierbeobachtung, Schwimmen, Outdoor-Spiele wie Fang den Ball 
              oder Wikingerschach, Fahrradtouren und Lagerfeuer mit Stockbrot. Wichtig ist, 
              die Dauer an das Alter anzupassen, viele Pausen einzuplanen und Snacks dabei 
              zu haben. Natur-Schnitzeljagden oder einfaches „Naturbingo" (wer findet als 
              Erstes einen roten Stein, eine Eichel, etwas Gelbes?) machen Spaß.
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Wo finde ich Wanderwege in der Nähe meines Campingplatzes?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Die besten Quellen sind: Das Personal des Campingplatzes (die kennen die Region), 
              örtliche Touristeninformationen (haben meist Karten und Prospekte), Apps wie 
              Komoot, Outdooractive oder AllTrails, Wanderbücher der Region und Ausschilderungen 
              vor Ort. Viele Campingplätze haben eigene Wanderkarten oder empfohlene Touren 
              für ihre Gäste. Auch der Deutschlandtourismus und lokale Tourismusverbände bieten 
              oft kostenlose Informationen online an.
            </p>
          </details>
        </div>
      </section>

      {/* Fazit */}
      <div className="my-8 p-6 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
        <h3 className="text-xl font-bold mb-3 text-green-800">Fazit: Die Natur ist dein Spielplatz</h3>
        <p className="text-gray-800 leading-relaxed">
          Camping bietet den perfekten Ausgangspunkt für Outdoor-Abenteuer aller Art. Ob du 
          dich für anspruchsvolle Bergtouren, entspanntes Angeln am See oder einfache Spiele 
          mit der Familie entscheidest – die Natur hat für jeden etwas zu bieten. Das Wichtigste 
          ist, dass du draußen bist, die frische Luft genießt und dich von der Natur inspirieren 
          lässt.
        </p>
        <p className="text-gray-800 mt-3 leading-relaxed">
          Fang klein an, probiere verschiedene Aktivitäten aus und finde heraus, was dir am 
          meisten Freude bereitet. Die schönsten Erinnerungen entstehen oft ungeplant – beim 
          Spaziergang, der zu einer Wanderung wird, oder beim Entspannen am Lagerfeuer. Also 
          raus mit dir, die Natur wartet!
        </p>
        <p className="mt-4">
          <Link href="/" className="text-green-700 font-semibold hover:text-green-900 underline">
            Zurück zur Startseite
          </Link>
        </p>
      </div>

      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Outdoor Aktivitäten",
            "description": "Die besten Outdoor Aktivitäten für Camper. Wandern, Angeln, Radfahren und mehr für unvergessliche Naturerlebnisse.",
            "url": "https://camp-check.com/kategorien/sonstiges",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Gemeinsam wandern Berlin",
                  "url": "https://camp-check.com/kategorien/sonstiges/gemeinsam-wandern-berlin"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Single wandern Harz",
                  "url": "https://camp-check.com/kategorien/sonstiges/single-wandern-harz"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Lofoten wandern",
                  "url": "https://camp-check.com/kategorien/sonstiges/lofoten-wandern"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Vogesen wandern",
                  "url": "https://camp-check.com/kategorien/sonstiges/vogesen-wandern"
                },
                {
                  "@type": "ListItem",
                  "position": 5,
                  "name": "Enduro wandern",
                  "url": "https://camp-check.com/kategorien/sonstiges/enduro-wandern"
                }
              ]
            },
            "publisher": {
              "@type": "Organization",
              "name": "CampCheck",
              "url": "https://camp-check.com"
            }
          })
        }}
      />
        </main>
        <PillarSidebar currentCategory="sonstiges" />
      </div>
    </div>
  );
}
