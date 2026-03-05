'use client';

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useMagazineStore } from '@/store/magazineStore';
import * as LucideIcons from 'lucide-react';

interface HotspotProps {
  hotspot: {
    id: string;
    titulo: string;
    descripcion: string;
    icono: string;
    posicion: { x: number; y: number };
  };
  inline?: boolean;
}

export default function Hotspot({ hotspot, inline = false }: HotspotProps) {
  const { setShowHotspot } = useMagazineStore();

  // Dynamically get icon component
  const IconComponent = (LucideIcons as any)[
    hotspot.icono.split('-').map((word: string) => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join('') as keyof typeof LucideIcons
  ] || Sparkles;

  if (inline) {
    return (
      <motion.button
        onClick={() => setShowHotspot(hotspot.id)}
        onPointerDown={(e) => e.stopPropagation()}
        onMouseDown={(e) => e.stopPropagation()}
        className="relative group"
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg border border-slate-300 bg-white/95 text-slate-800 shadow-sm hover:shadow-md transition-shadow">
          <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-slate-800 text-white">
            <IconComponent size={14} />
          </span>
          <span className="text-xs font-semibold whitespace-nowrap">{hotspot.titulo}</span>
        </div>
      </motion.button>
    );
  }

  return (
    <motion.button
      onClick={() => setShowHotspot(hotspot.id)}
      onPointerDown={(e) => e.stopPropagation()}
      onMouseDown={(e) => e.stopPropagation()}
      className={`${inline ? 'relative' : 'absolute'} group`}
      style={
        inline
          ? undefined
          : {
              left: `${hotspot.posicion.x}%`,
              top: `${hotspot.posicion.y}%`,
            }
      }
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {/* Pulsing ring animation */}
      <motion.div
        className="absolute inset-0 bg-blue-500 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Main button */}
      <div className="relative w-11 h-11 bg-gradient-to-br from-blue-500 to-purple-600 
                      rounded-full flex items-center justify-center
                      shadow-lg border-2 border-white
                      group-hover:shadow-xl transition-shadow">
        <IconComponent className="text-white" size={20} />
      </div>

      {/* Tooltip on hover */}
      <motion.div
        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2
                   bg-gray-900 text-white text-xs py-1.5 px-3 rounded
                   whitespace-nowrap opacity-0 group-hover:opacity-100
                   transition-opacity pointer-events-none shadow-xl"
        initial={{ y: 10 }}
        whileHover={{ y: 0 }}
      >
        {hotspot.titulo}
        <div className="absolute top-full left-1/2 -translate-x-1/2 
                        border-4 border-transparent border-t-gray-900" />
      </motion.div>
    </motion.button>
  );
}
