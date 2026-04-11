'use client';

import { useRef, useEffect, useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform, useInView } from 'framer-motion';

interface AnimatedArchiveCardProps {
  postCount: number;
}

// Smooth counter animation
function AnimatedCounter({ value, duration = 2 }: { value: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    
    let startTime: number;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * value));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function AnimatedArchiveCard({ postCount }: AnimatedArchiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  
  // Mouse position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring config for smooth movement
  const springConfig = { damping: 30, stiffness: 100, mass: 0.5 };
  
  // Smooth spring values for card tilt
  const smoothRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const smoothRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);

  // Memoized parallax transforms
  const tentX = useTransform(mouseX, [-0.5, 0.5], [-8, 8]);
  const tentY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Float animation with independent timing
  const floatTransition = useMemo(() => ({
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut" as const,
  }), []);

  return (
    <Link href="/archiv" className="group block">
      <motion.div
        ref={cardRef}
        className="relative rounded-[2.5rem] overflow-hidden cursor-pointer"
        style={{
          rotateX: smoothRotateX,
          rotateY: smoothRotateY,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* MIX: Grüne Basis mit warmen Akzenten */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-teal-50/80 to-amber-50/60" />
        
        {/* MIX: Natur + Feuer Glow Effekte */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Grüner Natur-Glow oben */}
          <motion.div 
            className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.1) 50%, transparent 70%)",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Warmes Amber unten (Sonnenuntergang) */}
          <motion.div 
            className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(245, 158, 11, 0.2) 0%, rgba(251, 191, 36, 0.1) 50%, transparent 70%)",
              filter: "blur(60px)",
            }}
            animate={{
              x: [0, -20, 0],
              y: [0, 30, 0],
              scale: [1, 1.15, 1],
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* MIX: Lagerfeuer-Schein von unten */}
          <motion.div 
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px]"
            style={{
              background: "radial-gradient(ellipse at center bottom, rgba(251, 146, 60, 0.15) 0%, rgba(249, 115, 22, 0.08) 40%, transparent 70%)",
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        {/* MIX: Subtile Holz-Textur + Natur */}
        <div 
          className="absolute inset-0 opacity-[0.02] mix-blend-multiply"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 3px,
              rgba(120, 53, 15, 0.1) 3px,
              rgba(120, 53, 15, 0.1) 6px
            )`,
          }}
        />

        {/* Noise */}
        <div 
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* MIX: Grün-Amber Border */}
        <div className="absolute inset-0 rounded-[2.5rem] border-2 border-emerald-200/60" />

        {/* Shine Effect */}
        <motion.div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{
            background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.3) 45%, rgba(255,255,255,0.3) 50%, transparent 55%)",
            borderRadius: '2.5rem',
          }}
        />

        {/* Content */}
        <div className="relative p-12 md:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            {/* Left: Text Content */}
            <motion.div 
              className="flex-1 text-center lg:text-left z-10"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* MIX: Grünes Badge mit warmem Akzent */}
              <motion.div 
                className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/15 backdrop-blur-sm rounded-full mb-6 border border-emerald-500/25"
                whileHover={{ scale: 1.05 }}
              >
                <motion.span 
                  className="w-2 h-2 bg-emerald-500 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.7, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-emerald-800 text-sm font-semibold uppercase tracking-wider">
                  Archiv Explorer
                </span>
              </motion.div>
              
              {/* MIX: Grüne Überschrift mit warmem Counter */}
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-emerald-950 mb-6 leading-tight">
                Entdecke alle{' '}
                <span className="relative inline-block">
                  <span className="text-amber-600">
                    <AnimatedCounter value={postCount} />
                  </span>
                  <motion.svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-orange-400"
                    viewBox="0 0 200 9"
                    fill="none"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
                    transition={{ duration: 1, delay: 1 }}
                  >
                    <motion.path
                      d="M2.00025 6.99997C25.7501 9.49997 106.25 9.49997 198.001 2.99997"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1.2, delay: 0.8 }}
                    />
                  </motion.svg>
                </span>
                <br />
                Artikel
              </h2>
              
              <p className="text-xl text-emerald-900/70 mb-8 max-w-xl">
                Guides, Checklisten, Tipps und Inspirationen für dein nächstes Camping-Abenteuer.
              </p>
              
              {/* MIX: Grün-Amber Gradient Button */}
              <motion.div 
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-600 to-amber-600 text-white font-semibold rounded-full shadow-lg shadow-emerald-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <span>Zum Archiv</span>
                <motion.svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </motion.div>
            </motion.div>

            {/* Right: Camping Scene */}
            <div className="flex-1 relative w-full max-w-sm lg:max-w-md h-72">
              
              {/* Berg-Silhouette */}
              <motion.div 
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-2/3 opacity-10"
                style={{ x: useTransform(mouseX, [-0.5, 0.5], [-5, 5]) }}
              >
                <svg viewBox="0 0 200 200" className="w-full h-full fill-emerald-900">
                  <path d="M100 40 L180 180 L20 180 Z" />
                </svg>
              </motion.div>

              {/* Zelt Container */}
              <motion.div 
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                style={{ x: tentX, y: tentY }}
              >
                {/* MIX: Feuer-Glow + Grüner Glow */}
                <motion.div 
                  className="absolute inset-0 rounded-full blur-2xl"
                  style={{
                    background: "radial-gradient(circle, rgba(251, 146, 60, 0.2) 0%, rgba(16, 185, 129, 0.15) 50%, transparent 70%)",
                  }}
                  animate={{ 
                    scale: [1, 1.15, 1],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
                
                {/* Zelt - Canvas/Beige */}
                <motion.div 
                  className="relative w-28 h-28 md:w-32 md:h-32"
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-xl">
                    <defs>
                      <linearGradient id="canvasMix" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#fef3c7" />
                        <stop offset="100%" stopColor="#d4c5a3" />
                      </linearGradient>
                      <linearGradient id="tentShadowMix" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#b45309" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#92400e" stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M12 2L2 22h20L12 2z" 
                      fill="url(#canvasMix)"
                      stroke="#78350f"
                      strokeWidth="1.5"
                      strokeLinejoin="round"
                    />
                    <path d="M12 2v20" stroke="#78350f" strokeWidth="1.5" />
                    <path d="M7 15l5-5 5 5" stroke="#78350f" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="url(#tentShadowMix)" />
                  </svg>
                </motion.div>

                {/* MIX: Sonne (warm) */}
                <motion.div 
                  className="absolute -top-8 -right-6 w-14 h-14"
                  animate={{ y: [0, -6, 0] }}
                  transition={floatTransition}
                >
                  <motion.svg 
                    viewBox="0 0 24 24" 
                    className="w-full h-full text-amber-400"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  >
                    <circle cx="12" cy="12" r="5" fill="currentColor" />
                    <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                  </motion.svg>
                </motion.div>

                {/* Bäume - Dunkelgrün */}
                <div className="absolute -bottom-2 -left-12 w-16 h-16">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <defs>
                      <linearGradient id="treeMix" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="#065f46" />
                        <stop offset="100%" stopColor="#064e3b" />
                      </linearGradient>
                    </defs>
                    <path d="M12 2L4 22h16L12 2zm0 4l4.5 12h-9L12 6z" fill="url(#treeMix)" />
                  </svg>
                </div>
                
                <div className="absolute -bottom-2 -right-10 w-14 h-14 opacity-80">
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path d="M12 2L4 22h16L12 2zm0 4l4.5 12h-9L12 6z" fill="url(#treeMix)" />
                  </svg>
                </div>

                {/* MIX: Animierter Lagerfeuer */}
                <motion.div 
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6"
                >
                  <div className="relative w-14 h-14">
                    {/* Äußerer Glow */}
                    <motion.div 
                      className="absolute inset-0 bg-orange-500/30 rounded-full blur-xl"
                      animate={{ 
                        scale: [1, 1.4, 1],
                        opacity: [0.3, 0.6, 0.3]
                      }}
                      transition={{ duration: 1.3, repeat: Infinity }}
                    />
                    
                    {/* Innerer Glow */}
                    <motion.div 
                      className="absolute inset-2 bg-yellow-500/40 rounded-full blur-lg"
                      animate={{ 
                        scale: [1, 1.2, 0.9, 1.1, 1],
                        opacity: [0.5, 0.8, 0.4, 0.7, 0.5]
                      }}
                      transition={{ duration: 0.7, repeat: Infinity }}
                    />
                    
                    {/* Feuer Form */}
                    <svg viewBox="0 0 24 24" className="w-full h-full">
                      <defs>
                        <linearGradient id="fireMix" x1="0%" y1="100%" x2="0%" y2="0%">
                          <stop offset="0%" stopColor="#dc2626" />
                          <stop offset="30%" stopColor="#ea580c" />
                          <stop offset="70%" stopColor="#f97316" />
                          <stop offset="100%" stopColor="#fbbf24" />
                        </linearGradient>
                      </defs>
                      <motion.path 
                        d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"
                        fill="url(#fireMix)"
                        animate={{
                          d: [
                            "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
                            "M8.5 15A2.5 2.5 0 0 0 11 12.5c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
                            "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",
                          ]
                        }}
                        transition={{ duration: 0.5, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </svg>
                  </div>
                </motion.div>

                {/* MIX: Feuer-Funken */}
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute bottom-4 left-1/2 w-1 h-1 rounded-full"
                    style={{ 
                      marginLeft: `${(i - 2) * 8}px`,
                      background: i % 2 === 0 ? '#fbbf24' : '#f97316'
                    }}
                    animate={{
                      y: [0, -35 - i * 8, -55 - i * 8],
                      x: [(i - 2) * 2, (i - 2) * 6, (i - 2) * 3],
                      opacity: [0, 1, 0],
                      scale: [0.5, 1.2, 0.2],
                    }}
                    transition={{
                      duration: 1.8 + i * 0.2,
                      repeat: Infinity,
                      delay: i * 0.35,
                      ease: "easeOut",
                    }}
                  />
                ))}
              </motion.div>

              {/* Stats Card */}
              <motion.div 
                className="absolute -bottom-2 right-0 bg-emerald-50/95 backdrop-blur-md rounded-2xl shadow-lg border border-emerald-200 p-3"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -3 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-600 to-amber-600 flex items-center justify-center shadow-md">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-emerald-950">
                      <AnimatedCounter value={postCount} />
                    </div>
                    <div className="text-xs text-emerald-700/60">Artikel</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
