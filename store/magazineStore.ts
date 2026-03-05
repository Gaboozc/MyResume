import { create } from 'zustand';

interface MagazineState {
  currentPage: number;
  totalPages: number;
  isFlipping: boolean;
  targetPage: number | null;
  activeTab: string;
  showHotspot: string | null;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  goToPage: (page: number) => void;
  setFlipping: (flipping: boolean) => void;
  setActiveTab: (tab: string) => void;
  setShowHotspot: (hotspotId: string | null) => void;
}

export const useMagazineStore = create<MagazineState>((set, get) => ({
  currentPage: 0,
  totalPages: 13,
  isFlipping: false,
  targetPage: null,
  activeTab: 'inicio',
  showHotspot: null,

  setCurrentPage: (page) => set({ currentPage: page, isFlipping: false, targetPage: null }),

  nextPage: () => {
    const { currentPage, totalPages, isFlipping } = get();
    if (!isFlipping && currentPage < totalPages - 1) {
      set({ targetPage: currentPage + 1, isFlipping: true });
    }
  },

  prevPage: () => {
    const { currentPage, isFlipping } = get();
    if (!isFlipping && currentPage > 0) {
      set({ targetPage: currentPage - 1, isFlipping: true });
    }
  },

  goToPage: (page) => {
    const { totalPages } = get();
    if (page >= 0 && page < totalPages) {
      set({ targetPage: page, isFlipping: true });
    }
  },

  setFlipping: (flipping) => set({ isFlipping: flipping }),

  setActiveTab: (tab) => set({ activeTab: tab }),

  setShowHotspot: (hotspotId) => set({ showHotspot: hotspotId }),
}));
