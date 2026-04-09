import { Metadata } from 'next';
import Link from 'next/link';
import PillarSidebar from '@/components/PillarSidebar';

export const metadata: Metadata = {
  title: 'Sicherheit & Gesundheit beim Camping: Der komplette Guide | CampCheck',
  description: 'Camping Sicherheit Guide - Erste Hilfe, Gesundheitstipps, Zeckenschutz und wie du Gefahren im Wald vermeidest. Für ein sicheres Camping-Erlebnis.',
  keywords: ['camping sicherheit', 'camping erste hilfe', 'camping gesundheit', 'zeckenschutz camping', 'camping gefahren'],
  openGraph: {
    title: 'Sicherheit & Gesundheit beim Camping: Der komplette Guide',
    description: 'Alles über Sicherheit und Gesundheit beim Camping. Erste-Hilfe-Tipps, Krankheitsvorbeugung und wie du dich vor Gefahren in der Natur schützt.',
    type: 'article',
    url: 'https://camp-check.com/kategorien/sicherheit-gesundheit',
  },
};

export default async function SicherheitGesundheitPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-28 pb-12">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        <main className="flex-1 min-w-0">
      {/* H1 mit Hauptkeyword */}
      <h1 className="text-4xl font-bold mb-6 text-gray-900">
        Sicherheit und Gesundheit beim Camping: Der komplette Guide
      </h1>

      {/* Einleitung */}
      <div className="prose prose-lg mb-12 text-gray-700">
        <p className="text-xl leading-relaxed mb-6">
          Camping bedeutet Freiheit, Abenteuer und Naturverbundenheit. Aber es bedeutet auch, 
          sich von der gewohnten Infrastruktur zu entfernen und Verantwortung für die eigene 
          Sicherheit zu übernehmen. Wer in der Wildnis oder auf einem Campingplatz ist, ist 
          oft weit von der nächsten Arztpraxis oder dem Krankenhaus entfernt. Deshalb ist 
          Vorsorge das A und O.
        </p>
        <p className="mb-6">
          Ich erinnere mich an einen Vorfall vor einigen Jahren, der mich nachdenklich gemacht 
          hat. Ein Bekannter schnitt sich beim Zeltaufbau mit dem Messer tief in den Daumen. 
          Was nach einer Kleinigkeit aussah, wurde zur Herausforderung, weil wir 20 Kilometer 
          von der nächsten medizinischen Versorgung entfernt waren. Glücklicherweise hatten 
          wir ein gut sortiertes Erste-Hilfe-Set dabei und wussten, was zu tun war. Seitdem 
          nehme ich das Thema Sicherheit beim Camping sehr ernst.
        </p>
        <p className="mb-6">
          In diesem umfassenden Guide behandle ich alle wichtigen Aspekte von Sicherheit und 
          Gesundheit beim Camping: Von der richtigen Erste-Hilfe-Ausrüstung über den Umgang 
          mit chronischen Erkrankungen bis hin zu Gefahren im Wald und dem Schutz vor Zecken 
          und Mücken. Ich teile meine Erfahrungen und gebe dir praktische Tipps, wie du 
          gesund und sicher durch deinen Campingurlaub kommst.
        </p>
        <p>
          Denn das Ziel ist nicht, dich zu ängstigen, sondern dich vorzubereiten. Mit dem 
          richtigen Wissen und der richtigen Ausrüstung kannst du die Risiken minimieren 
          und dich voll und ganz auf die schönen Seiten des Campings konzentrieren.
        </p>
      </div>

      {/* Section 1: Erste Hilfe */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Erste Hilfe beim Camping: Das richtige Equipment
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Eine gut sortierte Erste-Hilfe-Tasche ist auf keiner Camping-Tour verzichtbar. 
            Aber was gehört wirklich hinein? Und wie unterscheidet sich ein Camping-Erste-Hilfe-Set 
            von dem zu Hause?
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Die Basis-Erste-Hilfe-Ausrüstung</h3>
          <p className="mb-4">
            Jede Camping-Erste-Hilfe-Tasche sollte folgende Dinge enthalten:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Kategorie</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Artikel</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Verwendung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Wundversorgung</td>
                  <td className="border border-gray-300 px-4 py-2">Pflaster, Verbandsmull, Druckverbände, Wunddesinfektion</td>
                  <td className="border border-gray-300 px-4 py-2">Schnittwunden, Abschürfungen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Verbandsmaterial</td>
                  <td className="border border-gray-300 px-4 py-2">Elastische Binden, Mullbinden, Heftpflaster</td>
                  <td className="border border-gray-300 px-4 py-2">Größere Wunden, Prellungen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Medikamente</td>
                  <td className="border border-gray-300 px-4 py-2">Schmerztabletten, Fiebersaft, Durchfallmittel</td>
                  <td className="border border-gray-300 px-4 py-2">Schmerzen, Fieber, Verdauungsprobleme</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Tools</td>
                  <td className="border border-gray-300 px-4 py-2">Pinzette, Schere, Zeckenkarte, Thermometer</td>
                  <td className="border border-gray-300 px-4 py-2">Splinter, Zecken, Fieberkontrolle</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Spezial</td>
                  <td className="border border-gray-300 px-4 py-2">Blasenpflaster, Kühlpack, Rettungsdecke</td>
                  <td className="border border-gray-300 px-4 py-2">Blasen, Schwellungen, Notfall</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Spezial-Ausrüstung für Outdoor-Einsätze</h3>
          <p className="mb-4">
            Beim Camping gibt es spezielle Risiken, die zusätzliche Ausrüstung erfordern:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Zeckenkarte:</strong> Spezielle Karte oder Pinzette zur sicheren Zeckenentfernung</li>
            <li><strong>Blasenpflaster (Compeed):</strong> Bei langen Wanderungen unverzichtbar</li>
            <li><strong>After-Bite-Stift:</strong> Linderung bei Mückenstichen und anderen Insektenbissen</li>
            <li><strong>Kaltschutz-Salbe:</strong> Für Verbrennungen durch kalte Gegenstände oder Frostbeulen</li>
            <li><strong>Augen-Sofortspülung:</strong> Bei Verschmutzung oder Reizung der Augen</li>
            <li><strong>Notfall-Schlafsack/Biwaksack:</strong> Rettungsdecke aus reflektierendem Material</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Medikamente für die Campingapotheke</h3>
          <p className="mb-4">
            Abhängig von der Reisedauer und dem Ziel solltest du folgende Medikamente einpacken:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Schmerzmittel:</strong> Ibuprofen, Paracetamol oder ASS</li>
            <li><strong>Antihistaminika:</strong> Bei Allergien (auch unerwartete)</li>
            <li><strong>Durchfallmittel:</strong> Loperamid zur akuten Behandlung</li>
            <li><strong>Mittel gegen Übelkeit:</strong> Wenn das Wasser oder Essen nicht vertragen wird</li>
            <li><strong>Sonnencreme:</strong> Mindestens LSF 30, besser 50</li>
            <li><strong>Mückenschutz:</strong> DEET-haltige Produkte oder natürliche Alternativen</li>
            <li><strong>Wund- und Heilsalbe:</strong> Für kleinere Verletzungen</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Erste-Hilfe-Kurs: Wissen ist die beste Ausrüstung</h3>
          <p className="mb-4">
            Das beste Erste-Hilfe-Set nützt nichts, wenn du nicht weißt, wie du es benutzt. 
            Ein Erste-Hilfe-Kurs speziell für Outdoor-Aktivitäten ist eine wertvolle Investition. 
            Dort lernst du nicht nur die Grundlagen der Wundversorgung, sondern auch spezielle 
            Techniken für Notfälle in der Wildnis.
          </p>
          <p className="mb-4">
            Wichtige Themen sind: stabile Seitenlage, Herz-Lungen-Wiederbelebung, Schockbekämpfung, 
            Behandlung von Knochenbrüchen, Umgang mit Vergiftungen und das Erkennen von 
            Notfallsituationen. Viele Bergwachten und Outdoor-Organisationen bieten solche 
            Kurse an.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Aufbewahrung und Pflege</h3>
          <p className="mb-4">
            Deine Erste-Hilfe-Ausrüstung sollte immer trocken, kühl und leicht zugänglich sein. 
            Eine wasserdichte Tasche oder Box schützt vor Feuchtigkeit. Überprüfe den Inhalt 
            regelmäßig auf Verfallsdaten und ergänze verbrauchte Artikel. Besonders wichtig: 
            Jeder, der mit auf Tour geht, sollte wissen, wo das Erste-Hilfe-Set ist.
          </p>
        </div>

        {/* Link-Box */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Mehr zur Ersten Hilfe:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <span className="text-gray-600">Die perfekte Camping-Erste-Hilfe-Tasche packen</span>
            </li>
            <li>
              <span className="text-gray-600">Erste Hilfe im Wald: Was tun bei Unfällen?</span>
            </li>
            <li>
              <span className="text-gray-600">Notruf im Wald: Wie erreiche ich Hilfe?</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 2: Camping mit Medikamenten */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Camping mit Medikamenten und chronischen Erkrankungen
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Chronische Erkrankungen oder regelmäßige Medikamenteneinnahme sind kein Grund, 
            auf Camping zu verzichten. Mit der richtigen Vorbereitung kannst du auch mit 
            gesundheitlichen Einschränkungen sicher campen gehen.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Planung ist alles</h3>
          <p className="mb-4">
            Bevor du mit einer chronischen Erkrankung campen gehst, solltest du folgende 
            Dinge klären:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Arztgespräch:</strong> Bespreche deine Campingpläne mit deinem Arzt. Er kann dir Tipps geben und eventuell eine Notfallkarte ausstellen.</li>
            <li><strong>Medikamentenplan:</strong> Erstelle einen detaillierten Plan, wann welche Medikamente eingenommen werden müssen, besonders bei Zeitumstellungen.</li>
            <li><strong>Reserve:</strong> Packe immer mehr Medikamente ein, als du für die geplante Dauer brauchst (mindestens 3 Tage Reserve).</li>
            <li><strong>Aufbewahrung:</strong> Viele Medikamente müssen kühl und trocken gelagert werden. Eine Medikamentenkühltasche kann nötig sein.</li>
            <li><strong>Dokumentation:</strong> Nimm alle wichtigen Unterlagen mit: Rezepte, Befunde, Impfpass, Notfallkontakte.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Diabetes und Camping</h3>
          <p className="mb-4">
            Menschen mit Diabetes können campen gehen, müssen aber besonders vorsichtig sein:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Insulin muss gekühlt werden – eine Kühltasche mit Kühlakkus ist essenziell</li>
            <li>Blutzuckermessgerät, Teststreifen und genügend Nadeln einpacken (Reserve!)</li>
            <li>Schnell wirkende Kohlenhydrate für Unterzuckerung immer griffbereit (Traubenzucker, Säfte)</li>
            <li>Regelmäßig messen, da körperliche Aktivität den Blutzucker beeinflusst</li>
            <li>Mitreisende über Notfallmaßnahmen bei Unter- oder Überzuckerung informieren</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Herz-Kreislauf-Erkrankungen</h3>
          <p className="mb-4">
            Wer unter Bluthochdruck oder anderen Herz-Kreislauf-Problemen leidet, sollte 
            besonders auf Folgendes achten:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Blutdruckmessgerät mitnehmen und regelmäßig kontrollieren</li>
            <li>Medikamente pünktlich einnehmen, auch wenn der Tagesrhythmus anders ist</li>
            <li>Körperliche Aktivität langsam steigern, nichts überstürzen</li>
            <li>Auf ausreichende Flüssigkeitszufuhr achten, besonders bei Hitze</li>
            <li>Notfallmedikamente (Nitrospray) immer griffbereit haben</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Atemwegserkrankungen (Asthma, COPD)</h3>
          <p className="mb-4">
            Frische Waldluft ist meist gut für Atemwegserkrankungen, aber es gibt Risiken:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Mehr Inhalatoren mitnehmen als benötigt (mindestens 2)</li>
            <li>Auf Pollenflug achten, falls Allergie vorliegt</li>
            <li>Lagerfeuerrauch meiden, da er Atemwege reizen kann</li>
            <li>Bei Kälte Mundschutz tragen, um kalte Luft vorzuwärmen</li>
            <li>Notfallplan mit Mitreisenden besprechen</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Notfallkarte und Notfallkontakte</h3>
          <p className="mb-4">
            Eine Notfallkarte sollte immer dabei sein und folgende Informationen enthalten:
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Information</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Beispiel</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Name und Geburtsdatum</td>
                  <td className="border border-gray-300 px-4 py-2">Max Mustermann, 15.03.1980</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Erkrankungen</td>
                  <td className="border border-gray-300 px-4 py-2">Diabetes Typ 2, Bluthochdruck</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Aktuelle Medikamente</td>
                  <td className="border border-gray-300 px-4 py-2">Metformin 1000mg, Ramipril 5mg</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Allergien</td>
                  <td className="border border-gray-300 px-4 py-2">Penicillin, Nussallergie</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Notfallkontakt</td>
                  <td className="border border-gray-300 px-4 py-2">Ehefrau Maria: 0171-12345678</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Hausarzt</td>
                  <td className="border border-gray-300 px-4 py-2">Dr. Schmidt, 030-98765432</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Link-Box */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Weitere Gesundheits-Themen:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <span className="text-gray-600">Camping mit Allergien: Pollen, Nahrungsmittel, Insekten</span>
            </li>
            <li>
              <span className="text-gray-600">Camping mit Kindern: Besondere Gesundheitsrisiken</span>
            </li>
            <li>
              <span className="text-gray-600">Reiseapotheke für Camping-Urlaub im Ausland</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 3: Gefahren im Wald */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Gefahren im Wald und wie du sie vermeidest
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Der Wald ist ein wunderbarer Ort, aber er birgt auch Gefahren. Das Wichtigste 
            ist, diese Gefahren zu kennen und zu wissen, wie man ihnen begegnet.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Giftige Pflanzen</h3>
          <p className="mb-4">
            Deutschland hat einige giftige Pflanzen, die du kennen solltest:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Efeu:</strong> Alle Teile sind giftig. Kann Hautreizungen verursachen.</li>
            <li><strong>Tollkirsche:</strong> Besonders die schwarzen Beeren wirken giftig. Fatale Verwechslung mit Heidelbeeren möglich.</li>
            <li><strong>Herbstzeitlose:</strong> Die Zwiebel ist giftig. Wird oft mit Bärlauch verwechselt.</li>
            <li><strong>Eisenhut (Wolfsbane):</strong> Sehr giftig, alle Teile. Auch Hautkontakt kann problematisch sein.</li>
            <li><strong>Gift-Eibe:</strong> Rote Beerenmasse essbar, Samen hochgiftig. Bessere Finger davon lassen.</li>
          </ul>
          <p className="mb-4">
            Regel: Pflanzen nur essen, wenn du sie zu 100% identifizieren kannst. 
            Wenn unsicher: Finger weg.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Pilze: Speise- oder Giftpilz?</h3>
          <p className="mb-4">
            Pilze sammeln ist beliebt, aber gefährlich. Einige tödlich giftige Pilze 
            sehen essbaren zum Verwechseln ähnlich:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Grüner Knollenblätterpilz (tödlich) sieht Champignons jung ähnlich</li>
            <li>Tollkirschen-Träuschling (giftig) sieht Speise-Röhrlingen ähnlich</li>
            <li>Fuchsiger Raukopf (giftig) kann mit Pfifferlingen verwechselt werden</li>
          </ul>
          <p className="mb-4">
            Als Anfänger solltest du Pilze nur sammeln, wenn ein erfahrener Pilzsammler 
            dabei ist. Lokal gibt es oft Pilzberatungsstellen, die gesammelte Pilze 
            überprüfen.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wildtiere</h3>
          <p className="mb-4">
            Gefährliche Wildtiere sind in Mitteleuropa selten, aber es gibt sie:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Wildschweine:</strong> Meist scheu, aber Fähen mit Frischlingen können aggressiv sein. Nicht füttern, nicht nähern, langsam zurückziehen.</li>
            <li><strong>Wölfe:</strong> Extrem scheu, Angriffe auf Menschen praktisch unbekannt. Hunde an der Leine halten.</li>
            <li><strong>Giftschlangen:</strong> Kreuzotter in Deutschland giftig, aber sehr scheu. Bisse extrem selten, meist Verteidigungsreaktion.</li>
          </ul>
          <p className="mb-4">
            Grundregel: Wildtiere nicht füttern, nicht nähern, nicht stören. Bei Begegnung 
            ruhig bleiben, langsam zurückziehen, Tier nicht in die Enge treiben.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wettergefahren</h3>
          <p className="mb-4">
            Das Wetter kann sich schnell ändern und gefährlich werden:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li><strong>Gewitter:</strong> Nie unter einzelnen Bäumen oder auf freien Höhen stehen. Am besten flaches Gelände oder Auto aufsuchen.</li>
            <li><strong>Hitze:</strong> Sonnenstich und Hitzschlag sind ernst zu nehmen. Ausreichend trinken, Schatten aufsuchen, Kopf bedecken.</li>
            <li><strong>Kälte:</strong> Unterkühlung und Erfrierungen drohen. Warme Kleidung, Schichtprinzip, kein Nässwerden.</li>
            <li><strong>Sturm:</strong> Bäume können umfallen. Zelte sichern oder verlassen, wenn Sturm droht.</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Orientierungsverlust</h3>
          <p className="mb-4">
            Sich im Wald verlaufen ist leichter, als man denkt:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Immer Karte und Kompass dabei haben – und wissen, wie man sie benutzt</li>
            <li>GPS-Gerät oder Smartphone als Backup, aber nicht allein darauf vertrauen</li>
            <li>Wenn verlaufen: Erst einmal stehen bleiben, beruhigen, überlegen</li>
            <li>Nie blind durch den Wald rennen</li>
            <li>Wenn nötig: Notruf absetzen, an einem Ort bleiben</li>
          </ul>
        </div>

        {/* Link-Box */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Wald-Wissen:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <span className="text-gray-600">Giftige Pflanzen in Deutschland erkennen</span>
            </li>
            <li>
              <span className="text-gray-600">Verhalten bei Wildtierbegegnungen</span>
            </li>
            <li>
              <span className="text-gray-600">Wetter-Apps und Vorhersagen für Camper</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 4: Zecken, Mücken und Plagegeister */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Zecken, Mücken und andere Plagegeister
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Kleine Tiere können große Probleme verursachen. Zecken, Mücken und andere 
            Insekten können Krankheiten übertragen oder den Urlaub zur Qual machen. 
            Hier erfährst du, wie du dich schützt.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Zecken: Die kleinen Blutsauger</h3>
          <p className="mb-4">
            Zecken sind die gefährlichsten Parasiten beim Camping in Mitteleuropa. Sie 
            können FSME (Frühsommer-Meningoenzephalitis) und Borreliose übertragen. Beide 
            Krankheiten können schwerwiegende Folgen haben.
          </p>
          <p className="mb-4">
            <strong>Schutz vor Zecken:</strong>
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Impfung gegen FSME (sinnvoll in Risikogebieten, wirkt aber nicht gegen Borreliose)</li>
            <li>Lange, helle Kleidung (Zecken sind dunkel und fallen so eher auf)</li>
            <li>Hosen in Socken stecken</li>
            <li>Zeckenschutzmittel (Icaridin, DEET) auf Kleidung und Haut</li>
            <li>Nach jeder Tour den Körper gründlich abtasten (auch Haaransatz, Achselhöhlen, Leistenbeuge)</li>
          </ul>
          <p className="mb-4">
            <strong>Zeckenentfernung:</strong> Mit einer Zeckenkarte oder einer feinen Pinzette 
            nah an der Haut fassen und gerade herausziehen. Nicht drehen, nicht quetschen, 
            keine Öle oder Klebstoffe verwenden. Die Stelle danach desinfizieren und 
            beobachten. Bei einem Ring oder anderen Symptomen zum Arzt.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Mücken und Bremsen</h3>
          <p className="mb-4">
            Mücken sind nervig, können aber auch Krankheiten wie Malaria (in manchen 
            Urlaubsregionen) oder das West-Nil-Virus übertragen. Bremsen machen schmerzhafte 
            Stiche und können Wunden infizieren.
          </p>
          <p className="mb-4">
            <strong>Schutz vor Mücken:</strong>
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Mückenschutzmittel (DEET, Icaridin oder natürliche Alternativen)</li>
            <li>Mückennetz über dem Bett/Zelt</li>
            <li>Keine stark parfümierten Pflegeprodukte verwenden</li>
            <li>Helle Kleidung (Mücken werden von dunklen Farben angezogen)</li>
            <li>Mückenspiralen oder Elektroverdampfer am Zelt (nachts)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Wespen und Bienen</h3>
          <p className="mb-4">
            Wespen und Bienen sind im Sommer häufig. Ihre Stiche sind schmerzhaft, bei 
            Allergikern lebensgefährlich.
          </p>
          <p className="mb-4">
            <strong>Schutz und Verhalten:</strong>
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Süße Getränke und Speisen abdecken</li>
            <li>Nicht wild um sich schlagen, wenn ein Insekt kommt</li>
            <li>Ruhig weglaufen oder stehen bleiben</li>
            <li>Allergiker sollten ein Notfallset (Adrenalin-Autoinjektor) dabei haben</li>
            <li>Bei Stich: Stachel (falls vorhanden) entfernen, kühlen, beobachten</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Flöhe und andere Parasiten</h3>
          <p className="mb-4">
            Auf Campingplätzen können Flöhe vorkommen, besonders wenn Haustiere anwesend sind. 
            Sie verursachen juckende Stiche, meist an Beinen und Füßen. Eine Matratzenhülle 
            oder ein eigenes Spannbettlaken schützt. Bei Verdacht: Bettwäsche bei mindestens 
            60°C waschen.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Krankheiten durch Insekten: Übersicht</h3>
          <div class="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Krankheit</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Überträger</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Symptome</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Vorbeugung</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">FSME</td>
                  <td className="border border-gray-300 px-4 py-2">Zecken</td>
                  <td className="border border-gray-300 px-4 py-2">Grippeähnlich, später neurologisch</td>
                  <td className="border border-gray-300 px-4 py-2">Impfung, Zeckenschutz</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Borreliose</td>
                  <td className="border border-gray-300 px-4 py-2">Zecken</td>
                  <td className="border border-gray-300 px-4 py-2">Wanderröte, Gelenkschmerzen</td>
                  <td className="border border-gray-300 px-4 py-2">Zeckenschutz, schnelle Entfernung</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Malaria</td>
                  <td className="border border-gray-300 px-4 py-2">Anopheles-Mücke</td>
                  <td className="border border-gray-300 px-4 py-2">Fieber, Schüttelfrost</td>
                  <td className="border border-gray-300 px-4 py-2">Prophylaxe, Mückenschutz</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Allergischer Schock</td>
                  <td className="border border-gray-300 px-4 py-2">Wespen, Bienen</td>
                  <td className="border border-gray-300 px-4 py-2">Atemnot, Kreislaufkollaps</td>
                  <td className="border border-gray-300 px-4 py-2">Notfall-Set, Vorsicht</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Link-Box */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Mehr zum Insektenschutz:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <span className="text-gray-600">Zecken-Impfung: Sinnvoll oder nicht?</span>
            </li>
            <li>
              <span className="text-gray-600">Mückenschutz: Chemisch vs. natürlich</span>
            </li>
            <li>
              <span className="text-gray-600">Die besten Mückennetze für Camping</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 5: Sicherheit auf dem Campingplatz */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">
          Sicherheit auf dem Campingplatz
        </h2>
        <div className="prose prose-lg text-gray-700">
          <p className="mb-4">
            Auch auf einem Campingplatz gibt es Sicherheitsaspekte zu beachten. Obwohl 
            Campingplätze meist sicher sind, solltest du einige Grundregeln befolgen.
          </p>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Brandschutz</h3>
          <p className="mb-4">
            Feuer ist auf Campingplätzen eine der größten Gefahren:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Gasflaschen immer aufrecht lagern und sicher befestigen</li>
            <li>Regelmäßig auf Undichtigkeiten prüfen (mit Seifenlauge)</li>
            <li>Grill und Kocher nie im Zelt oder Vorzelt verwenden</li>
            <li>Kocher auf stabilen Untergrund stellen, nicht im Zelt lassen</li>
            <li>Feuerlöscher oder Löschdecke im Wohnmobil dabei haben</li>
            <li>Bei Lagerfeuer: Plätzregeln beachten, Feuer nie unbeaufsichtigt lassen</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Diebstahlschutz</h3>
          <p className="mb-4">
            Campingplätze sind zwar meist sicher, aber Diebstahl kommt vor:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Wertgegenstände nie im Zelt oder offen im Vorzelt liegen lassen</li>
            <li>Fahrräder immer abschließen, am besten an einem festen Gegenstand</li>
            <li>Wichtige Dokumente und Geld am Körper oder sicher verstaut</li>
            <li>Bei Abwesenheit: Zelt verschließen (Reißverschluss zusammen)</li>
            <li>Nachbarn bitten, auf das Zelt zu achten, wenn du weg bist</li>
            <li>Teure Ausrüstung versichern (Hausratversicherung prüfen)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Strom und Wasser</h3>
          <p className="mb-4">
            Auch Strom und Wasser können gefährlich sein:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Stromkabel auf dem Campingplatz nie durch die Parzelle legen</li>
            <li>Verlängerungskabel vor Feuchtigkeit schützen</li>
            <li>Keine defekten Geräte oder Kabel verwenden</li>
            <li>Kinder von Stromquellen fernhalten</li>
            <li>Bei Gewitter: Elektrogeräte vom Stromnetz trennen</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Sicherheit für Kinder</h3>
          <p className="mb-4">
            Kinder brauchen besonderen Schutz auf dem Campingplatz:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Fahrradhelme nicht vergessen, auch auf dem Platz</li>
            <li>Spielplätze nur unter Aufsicht nutzen</li>
            <li>Kinder über Gefahren aufklären (Feuer, Gewässer, Verkehr)</li>
            <li>Reflektierende Westen für die Abendstunden</li>
            <li>Festgelegte Grenzen, die nicht überschritten werden dürfen</li>
            <li>Kinder sollten wissen, wo der eigene Platz ist (Orientierungspunkte)</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Notfälle auf dem Campingplatz</h3>
          <p className="mb-4">
            Im Notfall musst du schnell handeln können:
          </p>
          <ul className="list-disc ml-5 mb-4 space-y-1">
            <li>Notrufnummern vorab notieren (Notarzt, Platzverwaltung, nächstes Krankenhaus)</li>
            <li>Weg zum nächsten Arzt/Krankenhaus kennen</li>
            <li>Platzverwaltung über besondere Gesundheitsrisiken informieren (bei Epilepsie etc.)</li>
            <li>Notfallkontakte auffindbar hinterlegen</li>
            <li>Fremdsprachenkenntnisse im Ausland beachten</li>
          </ul>

          <h3 className="text-xl font-semibold mb-3 text-gray-800">Campingplatz-Checkliste Sicherheit</h3>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Bereich</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Zu prüfen</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Ankunft</td>
                  <td className="border border-gray-300 px-4 py-2">Notausgänge, Feuerlöscher, Erste-Hilfe-Station kennenlernen</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Zeltplatz</td>
                  <td className="border border-gray-300 px-4 py-2">Ebener Boden, keine Wurzeln/Steine, sicherer Abstand zu Feuerstellen</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Strom</td>
                  <td className="border border-gray-300 px-4 py-2">Kabel intakt, richtig angeschlossen, nicht überlastet</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Gas</td>
                  <td className="border border-gray-300 px-4 py-2">Flaschen aufrecht, Schläuche dicht, Prüfplakette gültig</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Wertsachen</td>
                  <td className="border border-gray-300 px-4 py-2">Sicher verstaut, nicht sichtbar, Versicherung geprüft</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">Notfall</td>
                  <td className="border border-gray-300 px-4 py-2">Nummern notiert, Wege bekannt, Erste-Hilfe-Set bereit</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Link-Box */}
        <div className="my-6 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
          <p className="text-gray-800">
            <strong className="text-blue-700">Mehr zur Campingsicherheit:</strong>
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>
              <Link href="/kategorien/camping-familie" className="text-blue-600 hover:text-blue-800 underline">
                Camping mit Familie: Sicherheitstipps für Kinder
              </Link>
            </li>
            <li>
              <span className="text-gray-600">Brandschutz im Wohnmobil: Was ist Pflicht?</span>
            </li>
            <li>
              <span className="text-gray-600">Camping im Ausland: Sicherheit und Rechtsfragen</span>
            </li>
          </ul>
        </div>
      </section>

      {/* FAQ-Bereich */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">
          Häufig gestellte Fragen zu Sicherheit und Gesundheit
        </h2>
        <div className="space-y-4">
          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Was muss unbedingt in die Camping-Erste-Hilfe-Tasche?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Unverzichtbar sind: Pflaster in verschiedenen Größen, Verbandsmull und Binden, 
              eine Zeckenkarte oder Pinzette, Wunddesinfektion, Schmerztabletten, Blasenpflaster, 
              ein Kühlpack, eine Rettungsdecke und persönliche Medikamente. Für längere Touren 
              solltest du auch eine Klammer für Wundverschluss, einen Blutdruckmanschette und 
              Material für Schienen einpacken. Denke daran: Das Wissen, wie man die Ausrüstung 
              benutzt, ist genauso wichtig wie die Ausrüstung selbst.
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Wie entferne ich eine Zecke richtig?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Die Zecke sollte so schnell wie möglich entfernt werden. Nutze dazu eine spezielle 
              Zeckenkarte oder eine feine Pinzette. Fasse die Zecke möglichst nah an der Haut an 
              (am besten am Kopf) und ziehe sie gerade heraus, ohne zu drehen oder zu quetschen. 
              Nichte verwenden: Öle, Klebstoffe oder andere "Hausmittel", die die Zecke ersticken 
              sollen – das erhöht das Risiko einer Infektion. Nach der Entfernung die Stelle 
              desinfizieren und beobachten. Bei einem sich ausbreitenden roten Ring oder anderen 
              Symptomen zeitnah zum Arzt.
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Kann ich mit einer chronischen Krankheit campen gehen?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              In den meisten Fällen ja, aber mit Vorbereitung. Sprich vorher mit deinem Arzt 
              über deine Pläne. Packe ausreichend Medikamente ein (inklusive Reserve für einige 
              Tage), lerne die nächsten medizinischen Einrichtungen am Zielort kennen und erstelle 
              eine Notfallkarte mit allen wichtigen Informationen. Bei manchen Erkrankungen kann 
              eine höhere Ausführung der Reisekrankenversicherung sinnvoll sein. Informiere auch 
              deine Mitreisenden über mögliche Notfallsituationen.
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Was tun bei einem Schlangenbiss?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              In Deutschland gibt es nur eine giftschlangenart: die Kreuzotter. Bisse sind sehr 
              selten und meist Verteidigungsreaktionen. Wichtig: Ruhe bewahren, den betroffenen 
              Körperteil ruhig stellen und unter Herz-Niveau lagern. Keine Schnüre oder 
              Abschnürungen anlegen, nicht den Biss ausdrücken oder ansaugen, kein Eis auflegen. 
              Schnellstmöglich ärztliche Hilfe aufsuchen oder Notruf wählen. Mitnehmen: Beschreibung 
              oder Foto der Schlange (nur wenn gefahrlos möglich).
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Wie schütze ich mich vor Mücken auf natürliche Weise?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Neben chemischen Mitteln gibt es natürliche Alternativen: Citronella-Öl, 
              Lavendelöl oder Teebaumöl können Mücken abschrecken (allerdings meist nicht so 
              lange wirksam wie DEET oder Icaridin). Lange, helle Kleidung schützt zusätzlich. 
              Mückennetze über dem Bett sind sehr effektiv. Vermeide stark duftende Pflegeprodukte 
              und Parfüm. Auch ein Ventilator kann helfen, da Mücken schlecht fliegen können, 
              wenn Wind herrscht.
            </p>
          </details>

          <details className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <summary className="font-semibold cursor-pointer text-gray-800 hover:text-blue-700">
              Was ist bei Gewitter im Zelt zu tun?
            </summary>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Ein Zelt bietet keinen Schutz vor Blitzen. Bei Gewitter solltest du das Zelt 
              verlassen und ein sicheres Versteck aufsuchen: ein Gebäude, ein Auto mit 
              Metallkarosserie oder eine flache Stelle im Gelände. Vermeide: einzelne Bäume, 
              Höhenkämme, Gewässer, offene Flächen und Metallgegenstände. Wenn kein Unterschlupf 
              möglich ist: Hocke dich zusammen, Füße zusammen, Arme um die Knie, Kopf einziehen. 
              Nicht flach auf dem Boden liegen und keine Gruppe bilden (Abstand zu anderen: mindestens 10 Meter).
            </p>
          </details>
        </div>
      </section>

      {/* Fazit */}
      <div className="my-8 p-6 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
        <h3 className="text-xl font-bold mb-3 text-green-800">Fazit: Sicherheit ist Vorbereitung</h3>
        <p className="text-gray-800 leading-relaxed">
          Camping bedeutet, Verantwortung für sich selbst zu übernehmen. Aber das sollte dich 
          nicht abschrecken – im Gegenteil. Mit der richtigen Vorbereitung, dem passenden 
          Equipment und dem nötigen Wissen kannst du Risiken minimieren und dich auf das 
          konzentrieren, was zählt: die Zeit in der Natur.
        </p>
        <p className="text-gray-800 mt-3 leading-relaxed">
          Die wichtigste Erkenntnis aus all meinen Camping-Erfahrungen: Die meisten Unfälle 
          passieren durch Unaufmerksamkeit oder Unwissenheit. Wer vorbereitet ist, wer über 
          Risiken Bescheid weiß und wer die nötige Ausrüstung hat, wird seine Touren sicher 
          und gesund genießen können. Also pack deine Erste-Hilfe-Tasche, informiere dich 
          über dein Zielgebiet und fahr mit gutem Gefühl los.
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
            "name": "Sicherheit und Gesundheit beim Camping",
            "description": "Kompletter Guide zu Sicherheit und Gesundheit beim Camping. Erste Hilfe, Krankheitsvorbeugung, Zeckenschutz und Sicherheit auf dem Campingplatz.",
            "url": "https://camp-check.com/kategorien/sicherheit-gesundheit",
            "mainEntity": {
              "@type": "ItemList",
              "itemListElement": []
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
        <PillarSidebar currentCategory="sicherheit-gesundheit" />
      </div>
    </div>
  );
}
