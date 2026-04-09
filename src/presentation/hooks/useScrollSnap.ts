import { useState, useEffect, useRef, useCallback } from 'react';

const SCROLL_TIMEOUT = 900;

export const useHorizontalScroll = (sectionCount: number) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentRef = useRef(0);
  const animatingRef = useRef(false);

  const scrollToSection = useCallback((index: number) => {
    if (index < 0 || index >= sectionCount || animatingRef.current) return;
    
    animatingRef.current = true;
    setIsAnimating(true);
    setIsTransitioning(true);
    currentRef.current = index;
    setCurrentSection(index);
    
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }
    
    scrollTimeoutRef.current = setTimeout(() => {
      animatingRef.current = false;
      setIsAnimating(false);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 600);
    }, SCROLL_TIMEOUT);
  }, [sectionCount]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (animatingRef.current) return;
      
      const delta = e.deltaY + e.deltaX;
      
      if (delta > 10) {
        scrollToSection(currentRef.current + 1);
      } else if (delta < -10) {
        scrollToSection(currentRef.current - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (animatingRef.current) return;
      
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToSection(currentRef.current + 1);
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToSection(currentRef.current - 1);
      }
    };

    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (animatingRef.current) return;
      
      const endX = e.changedTouches[0].clientX;
      const endY = e.changedTouches[0].clientY;
      
      const diffX = startX - endX;
      const diffY = startY - endY;
      
      const diff = Math.abs(diffX) > Math.abs(diffY) ? diffX : diffY;
      
      if (Math.abs(diff) > 30) {
        if (diff > 0) {
          scrollToSection(currentRef.current + 1);
        } else {
          scrollToSection(currentRef.current - 1);
        }
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [scrollToSection]);

  return { currentSection, scrollToSection, isAnimating, isTransitioning };
};
