import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import { getPostBySlug } from '@/lib/posts';
import ArticleRedirect from './ArticleRedirect';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function generateStaticParams() {
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
  
  const targetUrl = `/kategorien/${post.category}/${slug}`;
  return <ArticleRedirect to={targetUrl} />;
}
