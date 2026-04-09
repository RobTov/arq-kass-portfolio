import { useState, useEffect, useRef } from 'react';
import { Hero } from './presentation/components/Hero/Hero';
import { Architecture } from './presentation/components/Architecture/Architecture';
import { Design } from './presentation/components/Design/Design';
import { Contact } from './presentation/components/Contact/Contact';
import { Navigation } from './presentation/components/Navigation/Navigation';
import { useHorizontalScroll } from './presentation/hooks/useScrollSnap';
import './presentation/styles/global.css';

function App() {
  const sectionCount = 4;
  const { currentSection, scrollToSection, isAnimating, isTransitioning } = useHorizontalScroll(sectionCount);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<number>>(new Set([0]));
  const prevSectionRef = useRef(0);

  useEffect(() => {
    if (currentSection !== prevSectionRef.current) {
      setVisibleSections(prev => new Set([...prev, currentSection]));
      prevSectionRef.current = currentSection;
    }
  }, [currentSection]);

  const sections = [
    { component: <Hero key="hero" /> },
    { component: <Architecture key="architecture" /> },
    { component: <Design key="design" /> },
    { component: <Contact key="contact" /> }
  ];

  const toggleMenu = () => setIsMenuOpen(prev => !prev);

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div style={{ 
        display: 'flex', 
        width: `${sectionCount * 100}vw`, 
        height: '100vh',
        transform: `translateX(-${currentSection * 100}vw)`,
        transition: isAnimating ? 'transform 900ms cubic-bezier(0.25, 0.46, 0.45, 0.94)' : 'none'
      }}>
        {sections.map((section, index) => (
          <div
            key={index}
            className="section"
            style={{
              width: '100vw',
              height: '100vh',
              flexShrink: 0,
              opacity: visibleSections.has(index) ? 1 : 0,
              transition: 'opacity 600ms ease'
            }}
          >
            {section.component}
          </div>
        ))}
      </div>
      
      <Navigation
        currentSection={currentSection}
        onNavigate={scrollToSection}
        isMenuOpen={isMenuOpen}
        onToggleMenu={toggleMenu}
      />
    </div>
  );
}

export default App;
