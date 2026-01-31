export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  content: string; // Can be markdown/HTML content
  category: string; // category slug
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string; // ISO date string
  updatedAt?: string;
  image: string; // placeholder image URL
  readingTime: number; // in minutes
  featured?: boolean;
  tags?: string[];
}

export const posts: Post[] = [
  {
    slug: 'camping-fuer-anfaenger-der-ultimative-guide',
    title: 'Camping für Anfänger: Der ultimative Guide',
    excerpt: 'Du willst mit dem Campen anfangen, weißt aber nicht, wo du beginnen sollst? Dieser Guide zeigt dir alles, was du für deinen ersten Camping-Trip wissen musst.',
    content: `## Willkommen in der Welt des Campings!

Camping ist mehr als nur draußen schlafen – es ist ein Lebensgefühl, eine Rückkehr zur Natur und die perfekte Möglichkeit, dem Alltagsstress zu entfliehen. Doch gerade für Anfänger kann der Einstieg überwältigend wirken. Welches Zelt brauche ich? Wo darf ich überhaupt campen? Was muss ich alles mitnehmen?

## Die wichtigsten Tipps für deinen Start

### 1. Beginne klein und einfach
Für deinen ersten Camping-Trip musst du nicht gleich eine Wochentour durch die Wildnis planen. Starte mit einer Nacht auf einem gut ausgestatteten Campingplatz in deiner Nähe. So kannst du testen, ob Camping etwas für dich ist, ohne dich zu weit von der Zivilisation zu entfernen.

### 2. Die richtige Ausrüstung ist entscheidend
Du brauchst nicht gleich das teuerste Equipment. Für den Anfang reichen ein solides Zelt, ein warmer Schlafsack, eine Isomatte und eine Grundausstattung an Campinggeschirr. Viele Outdoor-Läden bieten auch Leihausrüstung an – perfekt zum Ausprobieren!

### 3. Plane deine erste Tour gut
Informiere dich über deinen Campingplatz: Gibt es sanitäre Anlagen? Strom? Einen kleinen Shop? Checke auch das Wetter und packe entsprechend. Lieber eine warme Jacke zu viel als eine zu wenig!

## Deine Camping-Grundausstattung

Hier ist eine kompakte Liste für deinen ersten Trip:
- **Zelt** (2-3 Personen für Komfort)
- **Schlafsack** (passend zur Jahreszeit)
- **Isomatte oder Luftmatratze**
- **Campingkocher mit Gas**
- **Taschenlampe/Stirnlampe**
- **Erste-Hilfe-Set**
- **Müllbeutel** (Leave No Trace!)

## Der erste Abend am Lagerfeuer

Es gibt kaum etwas Schöneres als den ersten Abend am Lagerfeuer. Die Sterne über dir, das Knistern des Feuers, vielleicht ein paar Marshmallows am Stock – das ist der Moment, in dem viele Menschen verstehen, warum Camping so besonders ist.

Wichtig: Informiere dich, ob offene Feuer erlaubt sind. Viele Campingplätze haben feste Feuerstellen oder Feuerkörbe. Respektiere immer die Regeln und die Natur.

## Fazit

Camping ist für jeden geeignet – egal ob jung oder alt, Abenteuersuchender oder Ruhesuchender. Mit der richtigen Vorbereitung und einer offenen Einstellung wird dein erster Camping-Trip garantiert ein Erfolg. Also, worauf wartest du noch? Raus in die Natur!`,
    category: 'camping-grundlagen',
    author: {
      name: 'Julia Bergmann',
      avatar: '/images/authors/julia.jpg',
      bio: 'Outdoor-Enthusiastin und Camping-Guide mit über 10 Jahren Erfahrung'
    },
    publishedAt: '2024-01-15T10:00:00.000Z',
    updatedAt: '2024-01-20T14:30:00.000Z',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200',
    readingTime: 6,
    featured: true,
    tags: ['Anfänger', 'Camping-Basics', 'Tipps', 'Guide']
  },
  {
    slug: 'die-beste-camping-ausruestung-2024',
    title: 'Die beste Camping-Ausrüstung 2024',
    excerpt: 'Von Zelten über Schlafsäcke bis zu Kochern – wir zeigen dir die beste Camping-Ausrüstung für 2024 und worauf du beim Kauf achten solltest.',
    content: `## Das Jahr 2024 bringt Innovation ins Camping

Die Camping-Industrie entwickelt sich ständig weiter, und 2024 ist keine Ausnahme. Neue Materialien, durchdachtere Designs und nachhaltigere Produktion machen moderne Camping-Ausrüstung besser denn je. Wir haben die neuesten Produkte getestet und zeigen dir unsere Top-Empfehlungen.

## Top 5 Zelte 2024

### 1. MSR Hubba Hubba NX 2
Das MSR Hubba Hubba ist seit Jahren ein Klassiker – und das aus gutem Grund. Leicht, robust und mit hervorragendem Platzangebot überzeugt es auf ganzer Linie. Besonders das neue Design mit verbesserter Belüftung macht es zu unserem Favoriten für Trekkingtouren.

**Preis:** ca. 500€ | **Gewicht:** 1,7 kg | **Personen:** 2

### 2. Fjällräven Abisko Dome 3
Wer mehr Platz und Komfort sucht, ist beim Abisko Dome richtig. Das freistehende Kuppelzelt bietet zwei große Apsiden für Ausrüstung und ist extrem windstabil. Die Verarbeitung ist, wie von Fjällräven gewohnt, erstklassig.

**Preis:** ca. 650€ | **Gewicht:** 3,2 kg | **Personen:** 3

## Die besten Schlafsäcke

Der Schlafsack ist neben dem Zelt die wichtigste Investition. Für die meisten Camping-Trips in Deutschland empfehlen wir einen Komfortbereich von -5°C bis +10°C. Achte auf das Packmaß und ob Kunstfaser oder Daune besser zu deinen Bedürfnissen passt.

**Unser Tipp:** Der Deuter Astro Pro 400 bietet ein hervorragendes Preis-Leistungs-Verhältnis und hält auch bei kühleren Nächten warm.

## Campingkocher: Gas, Benzin oder Holz?

Die Wahl des richtigen Kochers hängt stark von der Art deines Trips ab:

- **Gaskocher** sind ideal für die meisten Einsätze – schnell, sauber, einfach
- **Benzinkocher** sind robust und funktionieren auch bei extremer Kälte
- **Holzvergaser** sind nachhaltig und brauchen keinen Brennstoff

Unser Favorit für Einsteiger: Der Primus Lite+ Gaskocher mit integriertem Topf ist kompakt, effizient und perfekt für Solo-Trips oder Paare.

## Nicht vergessen: Die kleinen Helfer

Oft sind es die kleinen Dinge, die den Unterschied machen:
- Eine gute **Stirnlampe** (Petzl Actik Core)
- Ein **Multitool** (Leatherman Wave+)
- Ultraleichte **Trekkingstöcke** (Black Diamond Trail)
- Ein robustes **Camping-Messer** (Morakniv Companion)

## Fazit: Qualität zahlt sich aus

Gute Camping-Ausrüstung ist nicht billig, aber eine Investition fürs Leben. Kaufe lieber einmal richtig, als zweimal billig. Die meisten Qualitätsprodukte halten bei guter Pflege 10 Jahre und länger.`,
    category: 'ausruestung-gear',
    author: {
      name: 'Marco Weber',
      avatar: '/images/authors/marco.jpg',
      bio: 'Gear-Experte und langjähriger Tester für Outdoor-Magazine'
    },
    publishedAt: '2024-01-10T09:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200',
    readingTime: 8,
    featured: false,
    tags: ['Ausrüstung', 'Gear', 'Test', 'Empfehlungen', '2024']
  },
  {
    slug: 'zelt-kaufen-worauf-du-achten-musst',
    title: 'Zelt kaufen: Worauf du achten musst',
    excerpt: 'Ein Zelt ist die wichtigste Camping-Investition. Wir erklären dir, welche Zelttypen es gibt und worauf du beim Kauf unbedingt achten solltest.',
    content: `## Das perfekte Zelt finden – eine Wissenschaft für sich

Ein Zelt zu kaufen kann überwältigend sein. Kuppelzelt, Tunnelzelt oder Geodät? 2-lagig oder 3-lagig? Aluminium oder Fiberglas? Die Auswahl ist riesig, und die Preise reichen von 50 bis über 1.000 Euro. Dieser Guide hilft dir, das richtige Zelt für deine Bedürfnisse zu finden.

## Die verschiedenen Zelttypen

### Kuppelzelt (Igluzelt)
**Vorteile:** Freistehend, windstabil, gutes Platzangebot, einfacher Aufbau
**Nachteile:** Schwerer als Tunnelzelte
**Perfekt für:** Allrounder, die ein vielseitiges Zelt suchen

### Tunnelzelt
**Vorteile:** Sehr viel Platz, geringes Gewicht, große Apsiden
**Nachteile:** Muss abgespannt werden, weniger windstabil
**Perfekt für:** Radtouren, Familienurlaub, längere Aufenthalte

### Geodät
**Vorteile:** Extrem windstabil, sehr robust
**Nachteile:** Teuer, komplexer Aufbau, schwerer
**Perfekt für:** Expeditionen, extreme Bedingungen

## Die wichtigsten Kaufkriterien

### 1. Personenanzahl richtig wählen
Faustregel: Kaufe immer ein Zelt für eine Person mehr, als tatsächlich darin schlafen werden. Ein 2-Personen-Zelt ist für zwei Erwachsene mit Gepäck sehr eng. Ein 3-Personen-Zelt bietet hier deutlich mehr Komfort.

### 2. Wassersäule beachten
Die Wassersäule gibt an, wie wasserdicht das Material ist. In Deutschland solltest du mindestens auf folgende Werte achten:
- **Außenzelt:** Minimum 3.000 mm, besser 5.000 mm
- **Zeltboden:** Minimum 5.000 mm, besser 10.000 mm

### 3. Gewicht vs. Komfort
Für Trekkingtouren zählt jedes Gramm. Hier sind Zelte unter 2 kg ideal. Beim Auto-Camping kannst du ruhig zu einem schwereren, aber komfortableren Modell greifen.

### 4. Apside nicht unterschätzen
Die Apside ist der überdachte Bereich vor dem Schlafraum. Hier kannst du Schuhe, Rucksäcke und Kochequipment lagern. Je größer, desto besser – besonders bei Regen!

## Material: Worauf kommt es an?

**Gestänge:**
- Aluminium: Leicht, stabil, teurer
- Fiberglas: Schwerer, günstiger, kann brechen
- Carbon: Sehr leicht, sehr teuer, nur für Profis

**Außenzelt:**
- Polyester: UV-beständiger, dehnt sich bei Nässe nicht
- Nylon: Leichter, kompakter, dehnt sich bei Nässe

**Beschichtung:**
- Silikon: Leichter, reißfester, teurer
- PU: Günstiger, aber schwerer und weniger langlebig

## Budget-Empfehlungen

- **Einsteiger (bis 150€):** Decathlon Quechua MH100, Coleman Darwin 3+
- **Mittelklasse (150-400€):** Vaude Space L, Jack Wolfskin Great Divide
- **Premium (über 400€):** MSR Hubba Hubba, Hilleberg Anjan, Big Agnes Copper Spur

## Fazit: Qualität hat ihren Preis

Ein gutes Zelt hält bei richtiger Pflege 10-15 Jahre. Investiere lieber etwas mehr und du wirst lange Freude daran haben. Teste das Zelt vor dem ersten Trip im Garten – so findest du heraus, ob alle Teile da sind und der Aufbau klappt.`,
    category: 'zelte-schlafen',
    author: {
      name: 'Sarah Müller',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Camping-Beraterin und Ausrüstungs-Expertin mit Fokus auf Zelte und Schlafsysteme'
    },
    publishedAt: '2024-01-08T11:30:00.000Z',
    image: 'https://images.unsplash.com/photo-1445308394109-4ec2920981b1?w=1200',
    readingTime: 7,
    featured: false,
    tags: ['Zelt', 'Kaufberatung', 'Ausrüstung', 'Guide']
  },
  {
    slug: 'camping-checkliste-zum-ausdrucken',
    title: 'Camping-Checkliste zum Ausdrucken',
    excerpt: 'Nie wieder etwas vergessen! Unsere ultimative Camping-Checkliste hilft dir, perfekt vorbereitet in deinen Camping-Urlaub zu starten.',
    content: `## Nie wieder etwas Wichtiges vergessen

Wir kennen es alle: Man steht auf dem Campingplatz und merkt plötzlich – der Dosenöffner ist zu Hause geblieben. Oder noch schlimmer: Die Heringe für das Zelt. Mit unserer umfassenden Camping-Checkliste passiert dir das nicht mehr.

## Die ultimative Camping-Packliste

### Schlafen & Unterkunft
- ☐ Zelt mit allen Teilen (Gestänge, Heringe, Abspannleinen)
- ☐ Zeltunterlage oder Footprint
- ☐ Schlafsack (temperaturangepasst)
- ☐ Isomatte oder Luftmatratze
- ☐ Luftpumpe (falls Luftmatratze)
- ☐ Kissen oder aufblasbares Campingkissen
- ☐ Ersatzheringe
- ☐ Reparatur-Set für Zelt
- ☐ Hammer für Heringe

### Küche & Essen
- ☐ Campingkocher
- ☐ Gaskartusche(n) oder Brennstoff
- ☐ Feuerzeug/Streichhölzer (wasserdicht!)
- ☐ Töpfe und Pfannen
- ☐ Teller, Schüsseln, Tassen
- ☐ Besteck (nicht das gute von zu Hause!)
- ☐ Schneidbrett
- ☐ Messer (Küchenmesser + Taschenmesser)
- ☐ Dosenöffner
- ☐ Flaschenöffner
- ☐ Alufolie
- ☐ Spülmittel & Schwamm
- ☐ Geschirrtücher
- ☐ Müllbeutel
- ☐ Kühlbox + Kühlakkus
- ☐ Wasserkanister

### Kleidung (wetterangepasst)
- ☐ Unterwäsche (mehr als du denkst!)
- ☐ Socken (mindestens 5 Paar)
- ☐ T-Shirts/Hemden
- ☐ Lange Hose
- ☐ Kurze Hose
- ☐ Fleecejacke oder Pullover
- ☐ Regenjacke (wasserdicht!)
- ☐ Regenhose
- ☐ Wanderschuhe
- ☐ Sandalen/Campingschuhe
- ☐ Schlafkleidung
- ☐ Badekleidung
- ☐ Kopfbedeckung (Mütze und/oder Cap)
- ☐ Handschuhe (je nach Jahreszeit)

### Hygiene & Gesundheit
- ☐ Zahnbürste & Zahnpasta
- ☐ Seife/Duschgel (biologisch abbaubar)
- ☐ Shampoo
- ☐ Handtücher (Mikrofaser trocknet schnell)
- ☐ Toilettenpapier
- ☐ Feuchttücher
- ☐ Sonnencreme
- ☐ Mückenschutz
- ☐ Erste-Hilfe-Set
- ☐ Persönliche Medikamente
- ☐ Zeckenzange
- ☐ Ohropax (für lärmempfindliche Camper)

### Licht & Energie
- ☐ Stirnlampe + Ersatzbatterien
- ☐ Taschenlampe
- ☐ Laterne für den Tisch
- ☐ Powerbank
- ☐ Ladekabel für alle Geräte
- ☐ Mehrfachsteckdose (falls Stromanschluss)

### Sonstiges
- ☐ Campingstühle
- ☐ Campingtisch
- ☐ Tarp oder Sonnensegel
- ☐ Wäscheleine + Klammern
- ☐ Duct Tape (rettet Leben!)
- ☐ Kabelbinder
- ☐ Multitool
- ☐ Taschenmesser
- ☐ Seil/Paracord
- ☐ Müllbeutel
- ☐ Spiele/Bücher
- ☐ Fernglas
- ☐ Karten der Region

### Dokumente & Geld
- ☐ Personalausweis/Reisepass
- ☐ Campingplatz-Reservierung
- ☐ Bargeld
- ☐ Kreditkarte
- ☐ Versicherungsunterlagen
- ☐ Notfallkontakte

## Tipps für effizientes Packen

### 1. Nutze Packsäcke
Sortiere deine Ausrüstung in farbige Packsäcke: Blau für Kleidung, Rot für Küche, Grün für Hygiene. So findest du alles sofort.

### 2. Packe schwere Sachen nach unten
Im Rucksack oder Auto: Schwere Ausrüstung kommt nach unten und hinten, leichte Sachen nach oben.

### 3. Teste deinen Aufbau
Baue dein Zelt einmal zu Hause auf – so merkst du, ob etwas fehlt, und beim Camping geht's schneller.

## Special-Tipp: Die 24-Stunden-Regel

Lege alle Sachen, die du mitnehmen willst, 24 Stunden vor Abfahrt bereit. Am nächsten Tag gehst du die Liste nochmal durch und checkst, was wirklich nötig ist. So vermeidest du Übergepäck!

## Download-Version

Diese Checkliste kannst du ausdrucken und abhaken. Pro-Tipp: Laminiere sie, dann hält sie mehrere Camping-Saisons und du kannst sie mit einem Folienstift immer wieder nutzen.

Viel Spaß beim Packen und einen fantastischen Camping-Trip! 🏕️`,
    category: 'camping-grundlagen',
    author: {
      name: 'Julia Bergmann',
      avatar: '/images/authors/julia.jpg',
      bio: 'Outdoor-Enthusiastin und Camping-Guide mit über 10 Jahren Erfahrung'
    },
    publishedAt: '2024-01-05T08:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1537225228614-56cc3556d7ed?w=1200',
    readingTime: 5,
    featured: false,
    tags: ['Checkliste', 'Packliste', 'Vorbereitung', 'Organisation']
  },
  {
    slug: 'die-10-schoensten-campingplaetze-in-deutschland',
    title: 'Die 10 schönsten Campingplätze in Deutschland',
    excerpt: 'Von der Ostsee bis zu den Alpen – wir stellen dir die schönsten Campingplätze in Deutschland vor, die du unbedingt besuchen solltest.',
    content: `## Deutschland ist ein Camping-Paradies

Mit über 3.000 Campingplätzen bietet Deutschland für jeden Geschmack etwas: Ob Strandurlaub an Nord- oder Ostsee, Wandern in den Mittelgebirgen oder Bergsteigen in den Alpen. Wir haben für dich die 10 schönsten Plätze zusammengestellt.

## 1. Campingplatz Klausdorfer Strand (Ostsee)

**Lage:** Fehmarn, Schleswig-Holstein
**Besonderheit:** Direkter Strandzugang zur Ostsee

Dieser familienfreundliche Platz auf Fehmarn bietet alles, was das Camper-Herz begehrt. Die Stellplätze liegen teilweise direkt in den Dünen mit Meerblick. Besonders für Familien mit Kindern ist der flache Sandstrand ideal. Wassersportler kommen hier ebenfalls auf ihre Kosten – Kitesurfen, Windsurfen und Stand-Up-Paddling sind möglich.

**Ausstattung:** 5 Sterne, Sanitär top, Restaurant, Supermarkt
**Preis:** ca. 45-60€ pro Nacht (2 Personen + Zelt)

## 2. Camping Hopfensee (Bayern)

**Lage:** Füssen, Bayern
**Besonderheit:** Traumhafte Alpenkulisse am kristallklaren See

Wenn Camping im Bilderbuch aussehen würde, wäre es wohl so: Türkisblauer See, dahinter die Allgäuer Alpen mit Schloss Neuschwanstein in Sichtweite. Der Hopfensee ist ideal zum Baden, die Umgebung perfekt zum Wandern und Radfahren. Ein absolutes Highlight!

**Ausstattung:** 5 Sterne, Wellness-Bereich, See-Zugang, Bootsverleih
**Preis:** ca. 50-70€ pro Nacht

## 3. Naturcamping Spitzenort (Mecklenburg-Vorpommern)

**Lage:** Müritz, Mecklenburgische Seenplatte
**Besonderheit:** Naturnahes Camping im Nationalpark

Wer Ruhe und Natur sucht, ist hier richtig. Der kleine, naturbelassene Platz liegt direkt am Ostufer der Müritz. Keine Animationen, kein Trubel – dafür Kraniche, Seeadler und unberührte Natur. Perfekt für Naturliebhaber und Paddler.

**Ausstattung:** 3 Sterne, einfach aber sauber, Kanuverleih
**Preis:** ca. 30-40€ pro Nacht

## 4. Camping Gitzenweiler Hof (Bodensee)

**Lage:** Lindau, Bayern
**Besonderheit:** Luxus-Camping am Bodensee

Dieser Premium-Platz setzt Maßstäbe: Designer-Sanitäranlagen, Infinity-Pool mit Seeblick, eigener Strand und sogar eine Sauna-Landschaft. Hier trifft Camping auf Wellness-Urlaub. Der perfekte Platz für alle, die Komfort nicht missen wollen.

**Ausstattung:** 5 Sterne Superior, Wellness, Restaurant, Privatstrand
**Preis:** ca. 60-90€ pro Nacht

## 5. Camping Burg Lahneck (Rheinland-Pfalz)

**Lage:** Lahnstein, Rheinland-Pfalz
**Besonderheit:** Camping unter einer mittelalterlichen Burg

Romantischer geht's kaum: Der Platz liegt direkt unterhalb der imposanten Burg Lahneck am Zusammenfluss von Lahn und Rhein. Die Stellplätze sind terrassenförmig angelegt mit Blick auf die Burg. Perfekter Ausgangspunkt für Wanderungen im Rheintal.

**Ausstattung:** 4 Sterne, gute Sanitäranlagen, kleiner Shop
**Preis:** ca. 35-50€ pro Nacht

## 6. Camping Wirthshof (Schwarzwald)

**Lage:** Markdorf-Ittendorf, Baden-Württemberg
**Besonderheit:** Nachhaltiger Bio-Bauernhof-Camping

Dieser Platz verbindet Camping mit Bio-Bauernhof-Erlebnis. Kinder können Tiere füttern, es gibt frische Bio-Produkte vom Hof und die Lage mitten im Schwarzwald ist perfekt für Wanderungen. Ein echtes Naturerlebnis mit Familienanschluss.

**Ausstattung:** 4 Sterne, Bio-Restaurant, Spielplatz, Streichelzoo
**Preis:** ca. 40-55€ pro Nacht

## 7. Strandcamping Waging (Bayern)

**Lage:** Waginger See, Bayern
**Besonderheit:** Einer der wärmsten Badeseen Deutschlands

Der Waginger See gilt als einer der wärmsten Seen in Deutschland – perfekt für Familien mit Kindern. Der Campingplatz bietet direkten Seezugang, großzügige Stellplätze und eine top Infrastruktur. Die Chiemgauer Alpen sind nur einen Katzensprung entfernt.

**Ausstattung:** 5 Sterne, modernes Sanitär, Restaurants, Animation
**Preis:** ca. 45-65€ pro Nacht

## 8. Camping Seeblick Toni (Brandenburg)

**Lage:** Neuruppin, Brandenburg
**Besonderheit:** Idyllischer Platz am Ruppiner See

Klein, persönlich und mit viel Charme – so lässt sich dieser Platz beschreiben. Die familiäre Atmosphäre und die Ruhe machen ihn zu einem Geheimtipp. Ideal für Paddler, Angler und alle, die dem Großstadttrubel entfliehen wollen.

**Ausstattung:** 3 Sterne, einfach, gemütlich, Bootsverleih
**Preis:** ca. 25-35€ pro Nacht

## 9. Camping Oase Stuttgart (Baden-Württemberg)

**Lage:** Stuttgart-Bad Cannstatt
**Besonderheit:** Grüne Oase mitten in der Großstadt

Wer hätte gedacht, dass man mitten in Stuttgart so naturnah campen kann? Der Platz liegt direkt am Neckar, umgeben von Grün, und trotzdem ist man in 15 Minuten in der Innenstadt. Perfekt für Städtetrips mit dem Camper.

**Ausstattung:** 4 Sterne, gute Verkehrsanbindung, ruhig
**Preis:** ca. 35-45€ pro Nacht

## 10. Camping Am Blanksee (Mecklenburg-Vorpommern)

**Lage:** Lübstorf bei Schwerin
**Besonderheit:** Naturcamping am glasklaren Badesee

Dieser naturbelassene Platz ist ein Traum für alle, die Ruhe und unberührte Natur suchen. Der Blanksee hat Trinkwasserqualität, es gibt viel Wald drumherum und nachts sieht man die Sterne wie selten. Echtes Natururlaub-Feeling!

**Ausstattung:** 3 Sterne, naturbelassen, einfache Sanitäranlagen
**Preis:** ca. 20-30€ pro Nacht

## Buchungstipps

- **Frühzeitig reservieren:** Besonders in den Sommerferien sind beliebte Plätze schnell ausgebucht
- **Nebensaison nutzen:** Im Mai/Juni und September ist es deutlich ruhiger und günstiger
- **ADAC-Campcard:** Mit der Rabattkarte sparst du auf vielen Plätzen 12-18%
- **Bewertungen checken:** Lies auf Portalen wie Camping.info die aktuellen Gästebewertungen

## Fazit

Deutschland hat unglaublich schöne Campingplätze zu bieten – von einfach und naturnah bis luxuriös und komfortabel. Egal ob du ans Meer, in die Berge oder an einen See möchtest, hier ist für jeden etwas dabei. Pack dein Zelt ein und entdecke die Vielfalt! 🏕️`,
    category: 'campingplaetze',
    author: {
      name: 'Marco Weber',
      avatar: '/images/authors/marco.jpg',
      bio: 'Gear-Experte und langjähriger Tester für Outdoor-Magazine'
    },
    publishedAt: '2024-01-03T10:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?w=1200',
    readingTime: 9,
    featured: true,
    tags: ['Campingplätze', 'Deutschland', 'Reiseziele', 'Empfehlungen']
  },
  {
    slug: 'kochen-beim-camping-leckere-rezepte-fuer-draussen',
    title: 'Kochen beim Camping: Leckere Rezepte für draußen',
    excerpt: 'Camping-Küche muss nicht langweilig sein! Wir zeigen dir einfache und leckere Rezepte, die auch auf dem Campingkocher gelingen.',
    content: `## Camping-Küche kann richtig lecker sein!

Viele denken bei Camping-Essen an Ravioli aus der Dose oder Tütensuppen. Dabei lässt sich auch mit minimalster Ausstattung richtig gut kochen! Wir zeigen dir, wie du mit einem Campingkocher, einer Pfanne und einem Topf fantastische Gerichte zauberst.

## Die Basis: Was du brauchst

### Minimale Kochausstattung
- 1 Topf (ca. 2 Liter)
- 1 Pfanne mit Deckel
- Campingkocher mit Gas
- Besteck & Teller
- Scharfes Messer
- Kleines Schneidbrett
- Gewürze in kleinen Dosen

### Die Camping-Vorratskammer
Diese haltbaren Basics solltest du dabei haben:
- Olivenöl
- Salz & Pfeffer
- Knoblauch (hält auch ohne Kühlung)
- Zwiebeln
- Reis oder Couscous
- Pasta
- Konserven (Tomaten, Kichererbsen, Thunfisch)
- Bouillon-Würfel

## Rezept 1: One-Pot-Pasta Arrabiata

**Zutaten (2 Personen):**
- 250g Pasta (Penne oder Fusilli)
- 1 Dose gehackte Tomaten
- 2 Knoblauchzehen
- 1 Chilischote oder Chiliflocken
- Olivenöl
- Salz, Pfeffer
- Optional: Parmesan

**Zubereitung:**
Einfach alles in einen Topf, mit Wasser bedecken und ca. 12 Minuten kochen. Die Pasta nimmt die Flüssigkeit auf und wird cremig. Fertig!

**Camping-Trick:** Du brauchst kein extra Wasser zum Abgießen – spart Zeit und Geschirr!

## Rezept 2: Campfire-Frühstücks-Pfanne

**Zutaten (2 Personen):**
- 4 Eier
- 4 Kartoffeln (vorher zu Hause gekocht)
- 1 Paprika
- 1 Zwiebel
- Speck oder Würstchen
- Salz, Pfeffer, Paprikapulver

**Zubereitung:**
Kartoffeln würfeln und in der Pfanne anbraten. Paprika und Zwiebel dazu, würzen. Mulden formen und Eier hineinschlagen. Deckel drauf, 5 Minuten ziehen lassen. Perfektes Campingfrühstück!

## Rezept 3: Couscous-Salat für heiße Tage

**Zutaten:**
- 200g Couscous
- 1 Dose Kichererbsen
- Gurke
- Tomaten
- Feta
- Zitrone
- Olivenöl, Salz, Pfeffer

**Zubereitung:**
Couscous mit heißem Wasser übergießen, 5 Minuten quellen lassen. Gemüse würfeln, alles mischen. Fertig ist der erfrischende Salat – perfekt an heißen Tagen!

**Pro-Tipp:** Bereite den Salat morgens zu und lass ihn in der Kühlbox. Zum Mittag ist er perfekt durchgezogen.

## Rezept 4: Chili sin Carne (vegetarisch)

**Zutaten:**
- 2 Dosen Kidneybohnen
- 1 Dose Tomaten
- 1 Dose Mais
- Zwiebeln, Knoblauch
- Chilipulver, Kreuzkümmel
- Reis

**Zubereitung:**
Zwiebeln und Knoblauch anbraten, alle Zutaten dazu (außer Reis), würzen und 15 Minuten köcheln. Reis separat kochen. Das Chili wird am nächsten Tag noch besser!

## Camping-Küchen-Hacks

### 1. Vorbereitung ist alles
Schneide Gemüse schon zu Hause und packe es in Tupperdosen. Spart Zeit und Arbeit am Campingplatz.

### 2. Eierkarton als Anzündhilfe
Fülle leere Eierkartons mit Kohle – perfekte Grillanzünder!

### 3. Gewürze in Tic-Tac-Dosen
Kleine Minz-Dosen eignen sich perfekt für Gewürze und nehmen kaum Platz weg.

### 4. Gefrierbeutel als Schüssel
Mixe Salatdressing direkt im Gefrierbeutel – keine Schüssel nötig!

## Equipment-Tipp: Mehrzweck-Tools

Investiere in:
- Ein **Opinel-Messer** (scharf, leicht, günstig)
- Eine **Pfanne mit abnehmbarem Griff** (spart Platz)
- Einen **faltbaren Wasserkanister** (zusammenfaltbar wenn leer)

## Fazit: Camping-Küche macht Spaß!

Mit ein wenig Kreativität und den richtigen Basics kannst du beim Camping richtig gut essen. Probiere unsere Rezepte aus und experimentiere selbst – oft entstehen die besten Gerichte aus dem, was gerade da ist. Guten Appetit! 🍳`,
    category: 'camping-kueche',
    author: {
      name: 'Sarah Müller',
      avatar: '/images/authors/sarah.jpg',
      bio: 'Camping-Beraterin und Ausrüstungs-Expertin mit Fokus auf Zelte und Schlafsysteme'
    },
    publishedAt: '2024-01-12T13:00:00.000Z',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=1200',
    readingTime: 7,
    featured: false,
    tags: ['Camping-Küche', 'Rezepte', 'Kochen', 'Outdoor-Cooking']
  },
  {
    slug: 'wildcamping-in-deutschland-was-ist-erlaubt',
    title: 'Wildcamping in Deutschland: Was ist erlaubt?',
    excerpt: 'Wildcamping hat einen besonderen Reiz – aber was ist in Deutschland eigentlich erlaubt? Wir klären auf über Regeln, Ausnahmen und Alternativen.',
    content: `## Der Traum vom freien Zelten

Eine Nacht im Wald, nur du, dein Zelt und die Natur – das klingt verlockend. Doch in Deutschland ist Wildcamping grundsätzlich verboten. Wir erklären dir die Rechtslage, zeigen Ausnahmen auf und stellen legale Alternativen vor.

## Die Rechtslage in Deutschland

### Grundsätzliches Verbot
In Deutschland ist das Wildcampen – also das Übernachten im Zelt außerhalb von Campingplätzen – grundsätzlich nicht erlaubt. Das gilt für:
- Wälder
- Naturschutzgebiete
- Privatgrundstücke (ohne Erlaubnis)
- Nationalparks
- Strände

### Bußgelder
Je nach Bundesland können Bußgelder zwischen 20€ und 500€ fällig werden. In Naturschutzgebieten kann es sogar noch teurer werden.

## Unterschiede zwischen den Bundesländern

### Brandenburg
Hier ist das Biwakieren (also Übernachten ohne Zelt, nur mit Schlafsack oder Tarp) für eine Nacht auf nicht-landwirtschaftlich genutzten Flächen erlaubt – aber nur für Wanderer und Paddler, nicht für Camper mit Fahrzeug!

### Schleswig-Holstein
An nicht eingezäunten Stränden ist eine Nacht im Schlafsack erlaubt – allerdings ohne Zelt!

### Bayern & Baden-Württemberg
Hier wird besonders streng kontrolliert. Wildcampen ist faktisch überall verboten.

### Mecklenburg-Vorpommern
Auf dem Wasser (im Boot) darfst du übernachten, solange du nicht an Land gehst.

## Legal campen in der Natur: Die Alternativen

### 1. Trekkingplätze
Immer mehr Regionen bieten offizielle Trekkingplätze an:
- **Eifel:** 20+ Trekkingplätze
- **Pfalz:** Trekking-Camps im Pfälzerwald
- **Schwarzwald:** Mehrere Naturlagerplätze
- **Harz:** Biwakplätze für Wanderer

**Kosten:** Meist 10-15€ pro Person
**Ausstattung:** Feuerstelle, manchmal Kompost-Toilette, Wasserstelle
**Buchung:** Online im Voraus

### 2. Biwakplätze
Speziell für Wanderer und Radfahrer gibt es offizielle Biwakplätze. Diese sind meist kostenlos oder sehr günstig und dürfen nur für eine Nacht genutzt werden.

### 3. Privatgrundstücke
Viele Bauern erlauben Campern, gegen eine kleine Gebühr auf ihrer Wiese zu stehen. Frag einfach höflich nach!

### 4. Apps wie "1Nite Tent"
Diese App vermittelt Privatgrundstücke, auf denen du legal für eine Nacht zelten darfst. Oft sogar kostenlos!

## Wo ist Wildcamping in Europa erlaubt?

Wenn du das Gefühl von Freiheit suchst, schau über die Grenze:

### Skandinavien (Jedermannsrecht)
In **Schweden, Norwegen und Finnland** gilt das "Allemansrätten" – du darfst fast überall für eine Nacht zelten, solange du:
- Mindestens 150m von Häusern entfernt bist
- Keinen Müll hinterlässt
- Kein Feuer machst (in Schweden nur mit Erlaubnis)
- Die Natur respektierst

### Schottland
Auch in Schottland gilt das Jedermannsrecht ("Right to Roam"). Wildcampen ist weitgehend erlaubt.

### Schweiz
Oberhalb der Baumgrenze (ca. 2.000m) ist Biwakieren meist geduldet – aber nicht in Nationalparks!

## Die goldenen Regeln für Wildcamper

Falls du es doch wagst (auf eigene Verantwortung!):

### Leave No Trace
- Nimm allen Müll mit
- Hinterlasse keinen Spuren
- Mache kein Feuer (außer in Feuerschalen)
- Vergrabe biologische Abfälle mindestens 200m vom Wasser entfernt

### Respekt vor der Natur
- Beschädige keine Pflanzen
- Störe keine Tiere
- Bleib auf Wegen
- Sei leise

### Timing
- Komme spät (nach 21 Uhr)
- Gehe früh (vor 9 Uhr)
- Bleibe nur eine Nacht
- Sei unauffällig

### Diskretion
- Wähle versteckte Plätze
- Nutze dunkle Zeltfarben
- Kein Lagerfeuer
- Sei leise

## Unsere Empfehlung

Nutze lieber die legalen Alternativen! Trekkingplätze bieten dir das Naturerlebnis, das du suchst – ohne rechtliche Probleme. Sie sind gut versteckt, naturbelassen und ermöglichen dir trotzdem das Gefühl von Wildnis.

## Fazit

Wildcamping in Deutschland ist schwierig, aber es gibt tolle Alternativen. Trekkingplätze und Biwakplätze bieten ein authentisches Naturerlebnis in legalem Rahmen. Und wenn du echtes Wildcamping erleben willst, plane einen Trip nach Skandinavien – dort ist es Teil der Kultur! 🌲`,
    category: 'wildcamping',
    author: {
      name: 'Marco Weber',
      avatar: '/images/authors/marco.jpg',
      bio: 'Gear-Experte und langjähriger Tester für Outdoor-Magazine'
    },
    publishedAt: '2024-01-18T09:30:00.000Z',
    image: 'https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?w=1200',
    readingTime: 8,
    featured: false,
    tags: ['Wildcamping', 'Recht', 'Deutschland', 'Trekkingplätze', 'Alternativen']
  }
];

/**
 * Get all available blog posts
 */
export function getAllPosts(): Post[] {
  return posts;
}

/**
 * Get a specific post by its slug
 * @param slug - The slug of the post to find
 * @returns The post if found, undefined otherwise
 */
export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

/**
 * Get all posts for a specific category
 * @param categorySlug - The slug of the category
 * @returns Array of posts in that category
 */
export function getPostsByCategory(categorySlug: string): Post[] {
  return posts.filter(post => post.category === categorySlug);
}

/**
 * Get all featured posts
 * @returns Array of featured posts
 */
export function getFeaturedPosts(): Post[] {
  return posts.filter(post => post.featured === true);
}

/**
 * Get related posts based on category and tags
 * @param currentSlug - The slug of the current post
 * @param limit - Maximum number of related posts to return (default: 3)
 * @returns Array of related posts
 */
export function getRelatedPosts(currentSlug: string, limit: number = 3): Post[] {
  const currentPost = getPostBySlug(currentSlug);
  if (!currentPost) return [];

  // Filter out current post and find posts in same category or with matching tags
  const related = posts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;

      // Same category gets higher score
      if (post.category === currentPost.category) {
        score += 10;
      }

      // Matching tags increase score
      if (currentPost.tags && post.tags) {
        const matchingTags = post.tags.filter(tag =>
          currentPost.tags?.includes(tag)
        );
        score += matchingTags.length * 2;
      }

      return { post, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post);

  return related;
}
