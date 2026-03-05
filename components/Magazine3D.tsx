'use client';

import React, { useRef, useEffect } from 'react';
import HTMLFlipBook from 'react-pageflip';
import { useMagazineStore } from '@/store/magazineStore';

interface Magazine3DProps {
  children: React.ReactNode[];
}

// Componente Page con forwardRef para react-pageflip
const FlipPage = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; isCover?: boolean; isBackCover?: boolean }
>((props, ref) => {
  return (
    <div
      className={`flip-page-sheet ${props.isCover ? 'is-cover' : ''} ${props.isBackCover ? 'is-back-cover' : ''}`}
      ref={ref}
    >
      <div className="flip-page-content">
        {props.children}
      </div>
    </div>
  );
});

FlipPage.displayName = 'FlipPage';

export default function Magazine3D({ children }: Magazine3DProps) {
  const bookRef = useRef<any>(null);
  const { currentPage, targetPage, setCurrentPage } = useMagazineStore();

  // Handle page navigation from tabs or controls
  useEffect(() => {
    if (targetPage !== null && bookRef.current && targetPage !== currentPage) {
      try {
        bookRef.current.pageFlip().turnToPage(targetPage);
      } catch (error) {
        console.error('Error turning page:', error);
      }
    }
  }, [targetPage, currentPage]);

  const handleFlip = (e: any) => {
    setCurrentPage(e.data);
  };

  const totalPages = children.length;

  return (
    <div className="folder-stage">
      <div className="folder-shadow" aria-hidden />
      <div className="folder-shell">
        <div className="folder-spine" aria-hidden />
        <div className="folder-tab-label" aria-hidden>
          GABRIEL ZAVARSE / CV
        </div>
        <div className="folder-core">
          <HTMLFlipBook
            width={500}
            height={700}
            size="stretch"
            minWidth={300}
            maxWidth={800}
            minHeight={400}
            maxHeight={1200}
            maxShadowOpacity={0.8}
            showCover={true}
            mobileScrollSupport={true}
            ref={bookRef}
            onFlip={handleFlip}
            style={{}}
            startPage={currentPage}
            drawShadow={true}
            flippingTime={1000}
            usePortrait={true}
            startZIndex={0}
            autoSize={true}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={true}
            className="flipbook folder-flipbook"
          >
            {children.map((child, index) => (
              <FlipPage
                key={index}
                isCover={index === 0}
                isBackCover={index === totalPages - 1}
              >
                {child}
              </FlipPage>
            ))}
          </HTMLFlipBook>
        </div>
      </div>
    </div>
  );
}
