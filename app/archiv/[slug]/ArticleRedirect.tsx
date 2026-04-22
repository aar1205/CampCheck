'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ArticleRedirectProps {
  to: string;
}

export default function ArticleRedirect({ to }: ArticleRedirectProps) {
  const router = useRouter();
  
  useEffect(() => {
    router.replace(to);
  }, [router, to]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Weiterleitung...</p>
      </div>
    </div>
  );
}
