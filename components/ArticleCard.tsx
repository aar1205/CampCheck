import Link from 'next/link';
import Image from 'next/image';
import { Post } from '@/lib/posts';
import { getCategoryBySlug } from '@/lib/categories';

interface ArticleCardProps {
  post: Post;
  variant?: 'default' | 'featured' | 'compact';
}

export default function ArticleCard({ post, variant = 'default' }: ArticleCardProps) {
  const category = getCategoryBySlug(post.category);

  // Format date in German
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    return date.toLocaleDateString('de-DE', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  // Get category color based on slug
  const getCategoryColor = (): string => {
    const colors: Record<string, string> = {
      'camping-grundlagen': 'bg-moss',
      'ausruestung-gear': 'bg-forest',
      'zelte-schlafen': 'bg-amber-dark',
      'camping-kueche': 'bg-forest-light',
      'camping-familie': 'bg-sage',
      'wildcamping': 'bg-forest-deep',
      'campingplaetze': 'bg-moss'
    };
    return colors[post.category] || 'bg-stone';
  };

  // Variant-specific classes
  const cardClasses = {
    default: 'flex flex-col h-full',
    featured: 'flex flex-col md:flex-row gap-6 h-full',
    compact: 'flex gap-4 h-full'
  };

  const imageContainerClasses = {
    default: 'relative w-full aspect-[16/10] overflow-hidden rounded-sm',
    featured: 'relative w-full md:w-1/2 aspect-[16/10] md:aspect-[4/3] overflow-hidden rounded-sm',
    compact: 'relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-sm'
  };

  const contentClasses = {
    default: 'flex flex-col flex-grow p-6',
    featured: 'flex flex-col flex-grow justify-center',
    compact: 'flex flex-col flex-grow justify-center'
  };

  const titleClasses = {
    default: 'text-2xl font-extrabold mb-3 text-forest-deep hover:text-amber-dark transition-colors line-clamp-2  tracking-tight leading-tight',
    featured: 'text-display-md mb-4 text-forest-deep hover:text-amber-dark transition-colors line-clamp-2  tracking-tight',
    compact: 'text-lg font-bold mb-2 text-forest-deep hover:text-amber-dark transition-colors line-clamp-2  tracking-tight'
  };

  const excerptClasses = {
    default: 'text-charcoal mb-5 line-clamp-3  leading-relaxed',
    featured: 'text-charcoal mb-6 line-clamp-4 text-lg  leading-relaxed',
    compact: 'text-sm text-charcoal mb-2 line-clamp-2 '
  };

  const TitleTag = variant === 'featured' ? 'h2' : 'h3';

  return (
    <article
      className={`
        bg-white rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover-lift accent-line overflow-hidden
        ${variant === 'featured' ? 'p-6' : ''}
      `}
    >
      <div className={cardClasses[variant]}>
        {/* Image Section */}
        <div className={imageContainerClasses[variant]}>
          <Link href={`/blog/${post.slug}`}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes={
                variant === 'featured'
                  ? "(max-width: 768px) 100vw, 50vw"
                  : variant === 'compact'
                  ? "128px"
                  : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              }
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </Link>

          {/* Category Badge - positioned on image */}
          {category && variant !== 'compact' && (
            <Link
              href={`/categories/${post.category}`}
              className={`
                absolute top-4 left-4 px-4 py-2 rounded-sm text-white text-sm font-bold  uppercase tracking-wide
                ${getCategoryColor()} hover:opacity-90 transition-opacity shadow-lg
              `}
            >
              {category.icon} {category.name}
            </Link>
          )}
        </div>

        {/* Content Section */}
        <div className={contentClasses[variant]}>
          {/* Category Badge for compact variant */}
          {category && variant === 'compact' && (
            <Link
              href={`/categories/${post.category}`}
              className={`
                inline-block w-fit px-3 py-1 rounded-sm text-white text-xs font-bold  uppercase tracking-wide mb-2
                ${getCategoryColor()} hover:opacity-90 transition-opacity
              `}
            >
              {category.icon} {category.name}
            </Link>
          )}

          {/* Title */}
          <TitleTag>
            <Link href={`/blog/${post.slug}`} className={titleClasses[variant]}>
              {post.title}
            </Link>
          </TitleTag>

          {/* Excerpt - Serif Font */}
          <p className={excerptClasses[variant]}>
            {post.excerpt}
          </p>

          {/* Meta Information */}
          <div className={`flex items-center gap-6 mt-auto ${variant === 'compact' ? 'text-xs' : 'text-sm'} text-stone`}>
            {/* Author */}
            <div className="flex items-center gap-2">
              {post.author.avatar ? (
                <div className={`relative ${variant === 'compact' ? 'w-7 h-7' : 'w-9 h-9'} rounded-full overflow-hidden flex-shrink-0 ring-2 ring-parchment`}>
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    sizes={variant === 'compact' ? '28px' : '36px'}
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className={`${variant === 'compact' ? 'w-7 h-7' : 'w-9 h-9'} rounded-full bg-amber flex items-center justify-center text-forest-deep font-bold flex-shrink-0 `}>
                  {post.author.name.charAt(0)}
                </div>
              )}
              <span className="font-semibold text-charcoal ">{post.author.name}</span>
            </div>

            {/* Date - Mono Font */}
            <time dateTime={post.publishedAt} className="hidden sm:block  editorial-number">
              {formatDate(post.publishedAt)}
            </time>

            {/* Reading Time - Mono Font */}
            <span className="flex items-center gap-1.5  editorial-number">
              <svg className={`${variant === 'compact' ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readingTime} Min.
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
