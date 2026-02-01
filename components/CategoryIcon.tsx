'use client';

import * as LucideIcons from 'lucide-react';
import { LucideProps } from 'lucide-react';

interface CategoryIconProps {
  name: string;
  size?: number;
  className?: string;
}

export default function CategoryIcon({ name, size = 48, className = '' }: CategoryIconProps) {
  // Dynamically get the icon from lucide-react
  const Icon = (LucideIcons as any)[name] as React.ComponentType<LucideProps>;

  if (!Icon) {
    // Fallback if icon not found
    return <LucideIcons.HelpCircle size={size} className={className} />;
  }

  return <Icon size={size} className={className} strokeWidth={1.5} />;
}
