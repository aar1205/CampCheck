import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string; // optional, last item won't have href
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate JSON-LD structured data for SEO (BreadcrumbList)
  // https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
  const generateJsonLd = () => {
    const baseUrl = 'https://camp-check.com';
    
    const itemListElement = items.map((item, index) => {
      const listItem: {
        '@type': 'ListItem';
        position: number;
        name: string;
        item?: string;
      } = {
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
      };

      // Include item URL for all items except the last one
      // For the last item, Google will use the current page URL automatically
      if (item.href) {
        listItem.item = `${baseUrl}${item.href}`;
      }

      return listItem;
    });

    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement,
    };
  };

  return (
    <>
      {/* JSON-LD Structured Data for Breadcrumbs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateJsonLd()) }}
      />

      {/* Visual Breadcrumb Navigation */}
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
