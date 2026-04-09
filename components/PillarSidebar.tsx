import { getAllCategories, getCategoryBySlug } from '@/lib/categories';
import { getAllPosts } from '@/lib/posts';
import ContentTree from './ContentTree';

interface PillarSidebarProps {
  currentCategory: string;
}

interface Post {
  slug: string;
  title: string;
  readingTime: number;
}

interface CategoryWithPosts {
  category: {
    slug: string;
    name: string;
    description: string;
    icon: string;
  };
  posts: Post[];
  count: number;
}

export default async function PillarSidebar({ currentCategory }: PillarSidebarProps) {
  // Lade alle Kategorien und Posts
  const [categories, posts] = await Promise.all([
    getAllCategories(),
    getAllPosts(),
  ]);

  // Gruppiere Posts nach Kategorien
  const postsByCategory = new Map<string, Post[]>();
  
  posts.forEach((post) => {
    const categoryPosts = postsByCategory.get(post.category) || [];
    categoryPosts.push({
      slug: post.slug,
      title: post.title,
      readingTime: post.readingTime,
    });
    postsByCategory.set(post.category, categoryPosts);
  });

  // Erstelle CategoryWithPosts Array
  const categoriesWithPosts: CategoryWithPosts[] = categories.map((category) => {
    const categoryPosts = postsByCategory.get(category.slug) || [];
    return {
      category: {
        slug: category.slug,
        name: category.name,
        description: category.description,
        icon: category.icon,
      },
      posts: categoryPosts,
      count: categoryPosts.length,
    };
  });

  // Sortiere nach Anzahl der Posts (absteigend)
  categoriesWithPosts.sort((a, b) => b.count - a.count);

  return (
    <aside className="w-full lg:w-80 xl:w-96 flex-shrink-0">
      <div className="lg:sticky lg:top-24">
        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
          <svg
            className="w-5 h-5 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          Alle Kategorien & Artikel
        </h3>
        
        {/* Aktuelle Kategorie Badge */}
        {currentCategory && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
            <span className="text-sm text-gray-600">Aktuelle Kategorie:</span>
            <div className="font-semibold text-green-800">
              {getCategoryBySlug(currentCategory)?.name || currentCategory}
            </div>
          </div>
        )}

        {/* ContentTree mit allen Kategorien */}
        <ContentTree 
          categories={categoriesWithPosts} 
          defaultExpanded={false}
          showEmptyCategories={true}
        />

        {/* Zusätzliche Navigation */}
        <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
          <h4 className="font-semibold text-gray-800 mb-2">Weitere Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a 
                href="/kategorien" 
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Alle Kategorien
              </a>
            </li>
            <li>
              <a 
                href="/archiv" 
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Alle Artikel
              </a>
            </li>
            <li>
              <a 
                href="/checklisten" 
                className="text-blue-600 hover:text-blue-800 hover:underline flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
                Checklisten
              </a>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
}
