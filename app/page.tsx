'use client';

import Magazine3D from '@/components/Magazine3D';
import TabSystem from '@/components/TabSystem';
import NavigationControls from '@/components/NavigationControls';
import { useMagazineStore } from '@/store/magazineStore';
import { 
  CoverPage, 
  IntroPage, 
  ExperiencePage1, 
  ExperiencePage2,
  ExperiencePage3,
  ExperiencePage4,
  ExperiencePage5,
} from '@/components/CVPages';
import {
  SkillsPage,
  SkillsPage2,
  ProjectsPage1,
  ProjectsPage2,
  ContactPage,
  BackCoverPage,
} from '@/components/CVPagesExtended';

export default function Home() {
  const { currentPage } = useMagazineStore();
  
  const pages = [
    <CoverPage key="cover" />,
    <IntroPage key="intro" />,
    <ExperiencePage1 key="exp1" />,
    <ExperiencePage2 key="exp2" />,
    <ExperiencePage3 key="exp3" />,
    <ExperiencePage4 key="exp4" />,
    <ExperiencePage5 key="exp5" />,
    <SkillsPage key="skills" />,
    <SkillsPage2 key="skills2" />,
    <ProjectsPage1 key="proj1" />,
    <ProjectsPage2 key="proj2" />,
    <ContactPage key="contact" />,
    <BackCoverPage key="back" />,
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Studio desk background */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-zinc-800 to-neutral-900">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 12% 20%, rgba(255,255,255,0.14), transparent 28%),
              radial-gradient(circle at 88% 78%, rgba(255,255,255,0.08), transparent 34%),
              repeating-linear-gradient(
                100deg,
                rgba(255,255,255,0.03) 0,
                rgba(255,255,255,0.03) 2px,
                rgba(0,0,0,0.04) 2px,
                rgba(0,0,0,0.04) 7px
              )
            `,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_36%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      {/* Tab System */}
      <TabSystem />

      {/* Navigation Controls */}
      <NavigationControls />

      {/* Main Magazine Container */}
      <div className="container mx-auto px-4 relative z-10 min-h-screen flex items-center justify-center">
        <Magazine3D>{pages}</Magazine3D>
      </div>

      {/* Page counter */}
      <div
        className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur px-6 py-2 rounded-full
                   shadow-lg z-50 border border-gray-200"
      >
        <span className="font-mono text-sm font-semibold text-gray-700">
          Página {currentPage + 1} de {pages.length}
        </span>
      </div>
    </div>
  );
}
