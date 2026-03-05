'use client';

import { motion } from 'framer-motion';
import { 
  Home, Briefcase, Wrench, FolderOpen, Mail 
} from 'lucide-react';
import { useMagazineStore } from '@/store/magazineStore';

const tabs = [
  { id: 'inicio', label: 'Inicio', icon: Home, page: 0, color: 'bg-red-600' },
  { id: 'experiencia', label: 'Experiencia', icon: Briefcase, page: 2, color: 'bg-blue-600' },
  { id: 'habilidades', label: 'Skills', icon: Wrench, page: 7, color: 'bg-yellow-600' },
  { id: 'proyectos', label: 'Proyectos', icon: FolderOpen, page: 9, color: 'bg-purple-600' },
  { id: 'contacto', label: 'Contacto', icon: Mail, page: 11, color: 'bg-pink-600' },
];

export default function TabSystem() {
  const { activeTab, goToPage, setActiveTab } = useMagazineStore();

  const handleTabClick = (tab: typeof tabs[0]) => {
    setActiveTab(tab.id);
    goToPage(tab.page);
  };

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-1">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;

          return (
            <motion.button
              key={tab.id}
              onClick={() => handleTabClick(tab)}
              className={`
                relative group
                ${tab.color} ${isActive ? 'pr-4' : 'pr-2'}
                text-white rounded-l-lg
                transition-all duration-300
                hover:pr-6
                flex items-center justify-end
                h-14 overflow-hidden
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Tab Label (hidden by default, shows on hover) */}
              <motion.span
                className="absolute right-14 whitespace-nowrap font-bold text-sm
                           opacity-0 group-hover:opacity-100 transition-opacity
                           bg-gray-900 px-3 py-1 rounded-l"
                initial={{ x: 20 }}
                whileHover={{ x: 0 }}
              >
                {tab.label}
              </motion.span>

              {/* Icon */}
              <div className="w-10 flex items-center justify-center">
                <Icon size={24} className={isActive ? 'animate-pulse' : ''} />
              </div>

              {/* Active Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute left-0 w-1 h-full bg-white"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Mobile hint */}
      <div className="mt-4 text-xs text-gray-600 text-center px-2 hidden xl:block">
        <p className="bg-white/90 rounded px-2 py-1 shadow">
          Haz clic para navegar
        </p>
      </div>
    </div>
  );
}
