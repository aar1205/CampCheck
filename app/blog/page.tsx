import { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getAllCategories } from '@/lib/categories';
import ArchivClient from '../archiv/ArchivClient';

export const metadata: Metadata = {
  title: 'Blog - Alle Camping-Artikel',
  description: 'Vollständiges Blog-Archiv aller Camping-Artikel. Chronologisch oder alphabetisch sortiert.',
};

export default async function BlogPage() {
  const posts = await getAllPosts();
  const categories = getAllCategories();

  const sortedPosts = [...posts].sort((a, b) => {
    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });

  return (
    <ArchivClient 
      posts={sortedPosts} 
      categories={categories}
    />
  );
}
