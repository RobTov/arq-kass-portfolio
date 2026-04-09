import { useEffect, useCallback, useState } from 'react';
import styles from './Navigation.module.css';

interface NavigationProps {
  currentSection: number;
  onNavigate: (index: number) => void;
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

const sections = [
  { name: 'Inicio', index: 0 },
  { name: 'Arquitectura', index: 1 },
  { name: 'Diseño', index: 2 },
  { name: 'Contacto', index: 3 }
];

export function Navigation({ currentSection, onNavigate, isMenuOpen, onToggleMenu }: NavigationProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(isMenuOpen);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) {
        onToggleMenu();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen, onToggleMenu]);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = (index: number) => {
    onNavigate(index);
    if (menuOpen) {
      onToggleMenu();
    }
  };

  return (
    <>
      <button 
        className={`${styles.hamburger} ${isMenuOpen ? styles.open : ''}`}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          onToggleMenu();
        }}
        aria-label="Menú de navegación"
      >
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
        <span className={styles.hamburgerLine}></span>
      </button>

      <div className={`${styles.menuOverlay} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <nav className={styles.menu}>
          {sections.map((section, index) => (
            <button
              key={section.index}
              className={`${styles.menuItem} ${currentSection === section.index ? styles.active : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section.index);
              }}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className={styles.menuNumber}>0{section.index + 1}</span>
              <span className={styles.menuText}>{section.name}</span>
            </button>
          ))}
        </nav>
        
        <div className={styles.menuFooter}>
          <p>Kassandra Romanillo © 2026</p>
        </div>
      </div>
    </>
  );
}

export default Navigation;
