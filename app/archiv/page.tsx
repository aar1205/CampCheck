import { Metadata } from 'next';
import { getAllPosts } from '@/lib/posts';
import { getAllCategories } from '@/lib/categories';
import ArchivClient from './ArchivClient';

export const metadata: Metadata = {
  title: 'Archiv - Alle Camping-Artikel',
  description: 'Vollständiges Archiv aller Camping-Artikel. Chronologisch oder alphabetisch sortiert.',
};

export default async function ArchivPage() {
  const posts = await getAllPosts();
  const categories = getAllCategories();

  // Sort posts by date
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
