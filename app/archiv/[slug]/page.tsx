import { redirect, notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts } from '@/lib/posts';
import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'content/posts');

// Generate static params for all posts at build time
export function generateStaticParams() {
  // Read directory synchronously for static export
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const fileNames = fs.readdirSync(postsDirectory);
  const slugs = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => ({
      slug: fileName.replace(/\.md$/, ''),
    }));
  
  return slugs;
}

export default async function BlogRedirect({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  
  if (!post) {
    return notFound();
  }
  
  // Redirect to new URL structure: /kategorien/[pillar]/[cluster]
  redirect(`/kategorien/${post.category}/${slug}`);
}
