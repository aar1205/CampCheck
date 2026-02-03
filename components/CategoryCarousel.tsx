'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Category } from '@/lib/categories';
import { Post } from '@/lib/posts';
import CategoryIcon from './CategoryIcon';

interface CategoryCarouselProps {
  categories: Category[];
  posts: Post[];
}

export default function CategoryCarousel({ categories, posts }: CategoryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPostCount = (slug: string) => posts.filter(p => p.category === slug).length;

  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  // Touch/Swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goToNext();
    }
    if (touchEndX.current - touchStartX.current > 50) {
      goToPrev();
    }
  };

  const getCardStyle = (index: number) => {
    const diff = index - activeIndex;
    const absDistance = Math.abs(diff);
    
    // Handle wrapping for circular feel
    let distance = diff;
    if (diff > categories.length / 2) distance = diff - categories.length;
    if (diff < -categories.length / 2) distance = diff + categories.length;
    
    const isActive = distance === 0;
    const isAdjacent = Math.abs(distance) === 1;
    const isFar = Math.abs(distance) >= 2;

    let translateX = distance * 280; // 280px spacing
    let translateZ = isActive ? 0 : isAdjacent ? -150 : -300;
    let rotateY = distance * -25; // Rotate towards center
    let scale = isActive ? 1 : isAdjacent ? 0.85 : 0.7;
    let opacity = isActive ? 1 : isAdjacent ? 0.7 : 0.4;
    let zIndex = 10 - absDistance;

    return {
      transform: `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
      opacity,
      zIndex,
      transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
    };
  };

  const getCategoryGradient = (index: number) => {
    const gradients = [
      'from-green-500 to-green-700',
      'from-pink-400 to-pink-600',
      'from-gray-800 to-gray-900',
      'from-green-600 to-green-800',
      'from-red-500 to-red-700',
      'from-blue-500 to-blue-700',
      'from-purple-500 to-purple-700',
      'from-orange-500 to-orange-700',
      'from-pink-400 to-pink-600',
      'from-emerald-600 to-emerald-800',
      'from-teal-500 to-teal-700',
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div className="relative w-full py-12" style={{ perspective: '1200px' }}>
      {/* 3D Carousel Container */}
      <div 
        ref={containerRef}
        className="relative h-80 md:h-96 flex items-center justify-center overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="relative w-full h-full flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/kategorien/${category.slug}`}
              className="absolute w-64 md:w-80 h-48 md:h-56 cursor-pointer group"
              style={getCardStyle(index)}
              onClick={(e) => {
                if (index !== activeIndex) {
                  e.preventDefault();
                  setActiveIndex(index);
                }
              }}
            >
              <div className={`w-full h-full rounded-3xl bg-gradient-to-br ${getCategoryGradient(index)} shadow-2xl overflow-hidden transition-shadow duration-300 hover:shadow-3xl`}>
                {/* Glass effect overlay */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-sm" />
                
                {/* Content */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 text-white">
                  {/* Lucide Icon with modern animation */}
                  <div className="mb-4 relative">
                    {/* Animated background ring */}
                    <div className={`absolute inset-[-20px] bg-white/20 rounded-full blur-xl transform transition-all duration-500 ${index === activeIndex ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}`} />
                    
                    {/* Icon with float animation */}
                    <div className={`relative transform transition-all duration-500 ${index === activeIndex ? 'animate-float' : ''}`}>
                      <CategoryIcon 
                        name={category.icon} 
                        size={64} 
                        className={`drop-shadow-lg transition-all duration-300 ${index === activeIndex ? 'text-white' : 'text-white/80'}`}
                      />
                    </div>
                  </div>
                  
                  {/* Name */}
                  <h3 className="text-xl md:text-2xl font-bold text-center mb-2 drop-shadow-md">
                    {category.name}
                  </h3>
                  
                  {/* Article Count */}
                  <span className="text-sm text-white/80 font-medium">
                    {getPostCount(category.slug)} Artikel
                  </span>
                  
                  {/* Click hint for non-active */}
                  {index !== activeIndex && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-4 py-2 bg-white/90 text-gray-900 rounded-full text-sm font-semibold">
                        Ansehen
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="flex items-center justify-center gap-6 mt-8">
        <button
          onClick={goToPrev}
          className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 border border-gray-100"
          aria-label="Vorherige Kategorie"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex gap-2">
          {categories.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === activeIndex 
                  ? 'bg-[var(--color-pine)] w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Gehe zu Kategorie ${index + 1}`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-4 rounded-full bg-white shadow-lg hover:shadow-xl transition-all hover:scale-110 active:scale-95 border border-gray-100"
          aria-label="Nächste Kategorie"
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Mobile hint */}
      <p className="md:hidden text-center mt-4 text-sm text-gray-500">
        Tippe auf die Karten oder wische durch
      </p>
    </div>
  );
}
