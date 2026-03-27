'use client';

import { useMagazineStore } from '@/store/magazineStore';

export default function LanguageToggle() {
  const { language, setLanguage } = useMagazineStore();

  return (
    <div className="fixed top-5 left-5 z-50 bg-white/90 backdrop-blur border border-gray-200 rounded-full p-1 shadow-lg">
      <div className="flex items-center gap-1">
        <button
          onClick={() => setLanguage('en')}
          className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
            language === 'en' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Switch to English"
        >
          EN
        </button>
        <button
          onClick={() => setLanguage('es')}
          className={`px-3 py-1.5 text-xs font-bold rounded-full transition-colors ${
            language === 'es' ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-100'
          }`}
          aria-label="Cambiar a espanol"
        >
          ES
        </button>
      </div>
    </div>
  );
}
