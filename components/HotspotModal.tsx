'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useMagazineStore } from '@/store/magazineStore';

interface HotspotModalProps {
  hotspot: {
    id: string;
    titulo: string;
    descripcion: string;
    icono: string;
  };
}

export default function HotspotModal({ hotspot }: HotspotModalProps) {
  const { showHotspot, setShowHotspot, language } = useMagazineStore();
  const isOpen = showHotspot === hotspot.id;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={() => setShowHotspot(null)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 
                       bg-white rounded-lg shadow-2xl p-6 max-w-lg w-[90%] border-4 border-gray-800"
          >
            <button
              onClick={() => setShowHotspot(null)}
              className="absolute -top-3 -right-3 bg-red-600 text-white rounded-full p-2 
                         hover:bg-red-700 transition-colors shadow-lg"
            >
              <X size={20} />
            </button>

            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{hotspot.titulo}</h3>
              <div className="h-1 w-20 bg-blue-600 rounded"></div>
            </div>

            <p className="text-gray-700 leading-relaxed">{hotspot.descripcion}</p>

            <div className="mt-6 pt-4 border-t border-gray-200">
              <button
                onClick={() => setShowHotspot(null)}
                className="w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 
                           transition-colors font-medium"
              >
                {language === 'es' ? 'Cerrar' : 'Close'}
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
