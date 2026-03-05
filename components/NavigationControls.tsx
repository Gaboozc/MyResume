'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Keyboard } from 'lucide-react';
import { useMagazineStore } from '@/store/magazineStore';
import { useSwipeable } from 'react-swipeable';

export default function NavigationControls() {
  const { currentPage, totalPages, nextPage, prevPage, isFlipping } = useMagazineStore();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') nextPage();
      if (e.key === 'ArrowLeft') prevPage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextPage, prevPage]);

  // Touch/Swipe navigation
  const handlers = useSwipeable({
    onSwipedLeft: () => nextPage(),
    onSwipedRight: () => prevPage(),
    trackMouse: true,
    preventScrollOnSwipe: true,
  });

  return (
    <div {...handlers} className="fixed inset-0 pointer-events-none z-30">
      {/* Left Navigation Button */}
      <motion.button
        onClick={prevPage}
        disabled={isFlipping || currentPage === 0}
        className={`
          fixed left-4 top-1/2 -translate-y-1/2 pointer-events-auto
          bg-gray-900/80 text-white p-4 rounded-full
          hover:bg-gray-800 transition-all shadow-xl
          ${isFlipping || currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft size={32} />
      </motion.button>

      {/* Right Navigation Button */}
      <motion.button
        onClick={nextPage}
        disabled={isFlipping || currentPage >= totalPages - 1}
        className={`
          fixed right-4 top-1/2 -translate-y-1/2 pointer-events-auto lg:right-20
          bg-gray-900/80 text-white p-4 rounded-full
          hover:bg-gray-800 transition-all shadow-xl
          ${isFlipping || currentPage >= totalPages - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-80 hover:opacity-100'}
        `}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight size={32} />
      </motion.button>

      {/* Page Counter */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 pointer-events-auto
                      bg-gray-900/90 text-white px-6 py-3 rounded-full
                      shadow-xl backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <span className="font-bold text-lg">
            {currentPage + 1} / {totalPages}
          </span>
          <div className="h-4 w-px bg-white/30" />
          <Keyboard size={20} className="opacity-50" />
        </div>
      </div>

      {/* Keyboard Hint */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2 }}
        className="fixed bottom-24 left-1/2 -translate-x-1/2 pointer-events-auto
                   bg-white/90 text-gray-700 px-4 py-2 rounded-lg shadow-lg text-sm
                   hidden sm:block"
      >
        <p>Usa ← → para navegar | Desliza en móvil</p>
      </motion.div>
    </div>
  );
}
