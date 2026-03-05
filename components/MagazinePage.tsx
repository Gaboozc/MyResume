'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Hotspot from './Hotspot';
import HotspotModal from './HotspotModal';

interface MagazinePageProps {
  children: ReactNode;
  pageNumber: number;
  title?: string;
  subtitle?: string;
  theme?: 'light' | 'dark' | 'colored';
  hotspots?: Array<{
    id: string;
    titulo: string;
    descripcion: string;
    icono: string;
    posicion: { x: number; y: number };
  }>;
  columns?: 1 | 2 | 3;
}

export default function MagazinePage({
  children,
  pageNumber: _pageNumber,
  title,
  subtitle,
  theme = 'light',
  hotspots = [],
  columns = 2,
}: MagazinePageProps) {
  const themeClasses = {
    light: 'bg-white',
    dark: 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white',
    colored: 'bg-gradient-to-br from-blue-50 via-white to-purple-50',
  };

  const columnClasses = {
    1: 'columns-1',
    2: 'columns-1 md:columns-2',
    3: 'columns-1 md:columns-2 lg:columns-3',
  };

  return (
    <div
      className={`
        relative w-full h-full overflow-hidden
        ${themeClasses[theme]}
      `}
    >
      {/* Subtle paper lines (like ruled paper) */}
      {theme === 'light' && (
        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(
              180deg,
              transparent,
              transparent 29px,
              rgba(100,100,100,0.1) 29px,
              rgba(100,100,100,0.1) 30px
            )`,
          }}
        />
      )}

      {/* Content Container - Professional CV Layout */}
      <div
        className="relative h-full w-full max-w-[94%] mx-auto px-8 py-10 md:px-16 md:py-14 flex flex-col"
        style={{
          boxSizing: 'border-box',
          maxWidth: 'calc(100% - 56px)',
          padding: 'clamp(28px, 4vw, 56px)',
        }}
      >
        {/* Page Header with modern design */}
        {(title || subtitle) && (
          <motion.header
            className="mb-10 text-center flex flex-col items-center"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {title && (
              <div className="relative inline-block mb-3">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight
                             font-serif leading-none relative z-10">
                  {title}
                </h1>
                {/* Accent underline */}
                <div className="absolute bottom-0 left-0 w-full h-3 bg-gradient-to-r 
                              from-blue-600 via-purple-600 to-pink-600 -z-10 
                              transform translate-y-1 opacity-20" />
              </div>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl font-medium opacity-70 mt-2
                          font-sans tracking-wide">
                {subtitle}
              </p>
            )}
            
            {/* Decorative line */}
            <div className="mt-6 h-1 w-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" />
          </motion.header>
        )}

        {/* Content Area with Professional Typography */}
        <motion.div
          className={`flex-1 w-full max-w-5xl mx-auto overflow-auto ${columnClasses[columns]} gap-8 pr-2
                     leading-relaxed scrollbar-thin`}
          style={{
            columnRule: '1px solid rgba(0,0,0,0.08)',
            boxSizing: 'border-box',
            padding: '0.25rem 0.5rem 0.75rem',
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          {children}
        </motion.div>

        {/* Hotspots */}
        {hotspots.length > 0 && (
          <div className="absolute top-4 right-4 z-20 flex flex-wrap justify-end gap-3 max-w-[55%]">
            {hotspots.map((hotspot) => (
              <div key={hotspot.id}>
                <Hotspot hotspot={hotspot} inline />
                <HotspotModal hotspot={hotspot} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
