import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string; // optional, last item won't have href
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate JSON-LD structured data for SEO
  const generateJsonLd = () => {
    const itemListElement = items
      .filter(item => item.href) // Only include items with href
      .map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: `${process.env.NEXT_PUBLIC_SITE_URL || ''}${item.href}`,
      }));

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    };
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
      />

      {/* Breadcrumb Navigation */}
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center">
                {/* Chevron Separator (except for first item) */}
                {index > 0 && (
                  <svg
                    className="w-4 h-4 mx-2 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}

                {/* Breadcrumb Item */}
                {isLast ? (
                  // Current page (last item) - not linked, styled differently
                  <span
                    className="font-medium text-gray-900"
                    aria-current="page"
                  >
                    {item.name}
                  </span>
                ) : (
                  // Linked breadcrumb item
                  <Link
                    href={item.href || '/'}
                    className="hover:text-[var(--color-pine)] transition-colors duration-200 hover:underline"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
