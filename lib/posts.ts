import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  metaTitle?: string;
  excerpt: string;
  metaDescription?: string;
  content: string;
  category: string;
  author: {
    name: string;
    avatar?: string;
    bio?: string;
  };
  publishedAt: string;
  updatedAt?: string;
  image: string;
  readingTime: number;
  featured?: boolean;
  tags?: string[];
}

const postsDirectory = path.join(process.cwd(), 'content/posts');

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}

export async function getAllPosts(): Promise<Post[]> {
  // Check if we're in build/SSG context
  if (typeof window !== 'undefined') {
    return [];
  }

  try {
    if (!fs.existsSync(postsDirectory)) {
      return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);
    const allPosts = fileNames
      .filter(fileName => fileName.endsWith('.md'))
      .map(fileName => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
          slug,
          title: data.title || 'Untitled',
          metaTitle: data.metaTitle,
          excerpt: data.excerpt || '',
          metaDescription: data.metaDescription,
          content,
          category: data.category || 'uncategorized',
          author: data.author || { name: 'Camping Blog Team' },
          publishedAt: data.date || new Date().toISOString(),
          updatedAt: data.updatedAt,
          image: data.image || '/images/placeholder.jpg',
          readingTime: calculateReadingTime(content),
          featured: data.featured || false,
          tags: data.tags || [],
        } as Post;
      })
      .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

    return allPosts;
  } catch (error) {
    console.error('Error reading posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  const allPosts = await getAllPosts();
  return allPosts.find(post => post.slug === slug);
}

export async function getPostsByCategory(categorySlug: string): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.category === categorySlug);
}

export async function getFeaturedPosts(): Promise<Post[]> {
  const allPosts = await getAllPosts();
  return allPosts.filter(post => post.featured === true);
}

export async function getRelatedPosts(currentSlug: string, limit: number = 3): Promise<Post[]> {
  const allPosts = await getAllPosts();
  const currentPost = allPosts.find(post => post.slug === currentSlug);
  if (!currentPost) return [];

  const related = allPosts
    .filter(post => post.slug !== currentSlug)
    .map(post => {
      let score = 0;

      if (post.category === currentPost.category) {
        score += 10;
      }

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

export async function getAllCategories(): Promise<{ slug: string; name: string; count: number }[]> {
  const allPosts = await getAllPosts();
  const categoryMap = new Map<string, { name: string; count: number }>();

  allPosts.forEach(post => {
    const existing = categoryMap.get(post.category);
    if (existing) {
      existing.count++;
    } else {
      categoryMap.set(post.category, { 
        name: post.category.charAt(0).toUpperCase() + post.category.slice(1).replace(/-/g, ' '),
        count: 1 
      });
    }
  });

  return Array.from(categoryMap.entries()).map(([slug, data]) => ({
    slug,
    name: data.name,
    count: data.count,
  }));
}
