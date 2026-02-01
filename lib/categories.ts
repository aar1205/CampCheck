export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
}

export const categories: Category[] = [
  {
    slug: 'camping-grundlagen',
    name: 'Camping-Grundlagen',
    description: 'Alles für den perfekten Einstieg ins Camping',
    icon: 'Tent'
  },
  {
    slug: 'ausruestung-gear',
    name: 'Ausrüstung & Gear',
    description: 'Die beste Ausrüstung für dein Camping-Abenteuer',
    icon: 'Backpack'
  },
  {
    slug: 'zelte-schlafen',
    name: 'Zelte & Schlafen',
    description: 'Alles rund um Zelte, Schlafsäcke und erholsamen Schlaf',
    icon: 'Moon'
  },
  {
    slug: 'camping-kueche',
    name: 'Camping-Küche',
    description: 'Leckere Rezepte und Kochtipps für draußen',
    icon: 'Flame'
  },
  {
    slug: 'camping-familie',
    name: 'Camping mit Familie',
    description: 'Tipps und Tricks für unvergessliche Familien-Campingurlaube',
    icon: 'Users'
  },
  {
    slug: 'wildcamping',
    name: 'Wildcamping',
    description: 'Abenteuer abseits der Campingplätze - Tipps und rechtliche Infos',
    icon: 'TreePine'
  },
  {
    slug: 'campingplaetze',
    name: 'Campingplätze',
    description: 'Die schönsten Campingplätze in Deutschland und Europa',
    icon: 'MapPin'
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
