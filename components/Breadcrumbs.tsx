import Link from 'next/link';

interface BreadcrumbItem {
  name: string;
  href?: string;
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
        <ol className="flex flex-wrap items-center gap-1 text-sm">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            const isFirst = index === 0;

            return (
              <li key={index} className="flex items-center">
                {/* Chevron Separator (except for first item) */}
                {!isFirst && (
                  <svg
                    className="w-4 h-4 mx-1 sm:mx-2 text-gray-400 flex-shrink-0"
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
                    className="font-medium text-gray-900 px-2 py-1 rounded bg-gray-100/50 truncate max-w-[150px] sm:max-w-[200px] md:max-w-[300px]"
                    aria-current="page"
                    title={item.name}
                  >
                    {item.name}
                  </span>
                ) : (
                  // Linked breadcrumb item
                  <Link
                    href={item.href || '/'}
                    className={`
                      text-gray-600 hover:text-green-700 
                      transition-colors duration-200 
                      hover:underline underline-offset-2
                      px-2 py-1 rounded hover:bg-green-50
                      truncate max-w-[120px] sm:max-w-[150px] md:max-w-[200px]
                      ${isFirst ? 'flex items-center gap-1' : ''}
                    `}
                    title={item.name}
                  >
                    {isFirst && (
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    )}
                    <span className="truncate">{item.name}</span>
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
