export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  emoji: string;
}

export const categories: Category[] = [
  {
    slug: 'camping-grundlagen',
    name: 'Camping-Grundlagen',
    description: 'Alles für den perfekten Einstieg ins Camping',
    icon: 'Tent',
    emoji: '⛺'
  },
  {
    slug: 'geschenke-inspiration',
    name: 'Geschenke & Inspiration',
    description: 'Die besten Geschenkideen für Camper und Outdoor-Fans',
    icon: 'Gift',
    emoji: '🎁'
  },
  {
    slug: 'vanlife-camper',
    name: 'Vanlife & Camper',
    description: 'Tipps für Campervans, Vanlife und mobile Abenteuer',
    icon: 'Car',
    emoji: '🚐'
  },
  {
    slug: 'nachhaltigkeit',
    name: 'Nachhaltig Campen',
    description: 'Umweltfreundliches Camping, Leave No Trace und Öko-Tipps',
    icon: 'Leaf',
    emoji: '🌿'
  },
  {
    slug: 'sicherheit-gesundheit',
    name: 'Sicherheit & Gesundheit',
    description: 'Erste Hilfe, Sicherheitstipps und Gesundheit unterwegs',
    icon: 'Shield',
    emoji: '🛡️'
  },
  {
    slug: 'ausruestung-gear',
    name: 'Ausrüstung & Gear',
    description: 'Die beste Ausrüstung für dein Camping-Abenteuer',
    icon: 'Backpack',
    emoji: '🎒'
  },
  {
    slug: 'zelte-schlafen',
    name: 'Zelte & Schlafen',
    description: 'Alles rund um Zelte, Schlafsäcke und erholsamen Schlaf',
    icon: 'Moon',
    emoji: '🌙'
  },
  {
    slug: 'camping-kueche',
    name: 'Camping-Küche',
    description: 'Leckere Rezepte und Kochtipps für draußen',
    icon: 'Flame',
    emoji: '🔥'
  },
  {
    slug: 'camping-familie',
    name: 'Camping mit Familie',
    description: 'Tipps und Tricks für unvergessliche Familien-Campingurlaube',
    icon: 'Users',
    emoji: '👨‍👩‍👧‍👦'
  },
  {
    slug: 'wildcamping',
    name: 'Wildcamping',
    description: 'Abenteuer abseits der Campingplätze - Tipps und rechtliche Infos',
    icon: 'TreePine',
    emoji: '🌲'
  },
  {
    slug: 'campingplaetze',
    name: 'Campingplätze',
    description: 'Die schönsten Campingplätze in Deutschland und Europa',
    icon: 'MapPin',
    emoji: '📍'
  },
  {
    slug: 'camping-mit-hund',
    name: 'Camping mit Hund',
    description: 'Tipps für Camping mit deinem vierbeinigen Begleiter – von der Planung bis zum Hundestrand',
    icon: 'Dog',
    emoji: '🐕'
  },
  {
    slug: 'camper-ausbau',
    name: 'Camper Ausbau',
    description: 'DIY-Tipps, Ausbau-Ideen und Anleitungen für deinen Selbstausbau',
    icon: 'Wrench',
    emoji: '🔧'
  }
];

/**
 * Get all available categories
 */
export function getAllCategories(): Category[] {
  return categories;
}

/**
 * Get a specific category by its slug
 * @param slug - The slug of the category to find
 * @returns The category if found, undefined otherwise
 */
export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find(category => category.slug === slug);
}
