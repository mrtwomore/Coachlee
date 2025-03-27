import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import styles from '../styles/Navigation.module.css';
import { useRouter } from 'next/router';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) return null;

  const navbarClasses = `${styles.navbar} ${isMenuOpen ? styles.open : ''}`;
  const menuClasses = `${styles.menu} ${isMenuOpen ? styles.open : ''}`;

  return (
    <header className={navbarClasses}>
      <div className={styles.navbarContainer}>
        <Link href="/" className={styles.logo}>
          {/* <span className={styles.logoIcon}></span> */}
          <span className={styles.logoText}>Coach Lee</span>
        </Link>
        
        <nav className={menuClasses}>
          <Link href="/" className={router.pathname === '/' ? styles.active : ''}>
            Home
          </Link>
          <Link href="/about" className={router.pathname === '/about' ? styles.active : ''}>
            CV & Experience
          </Link>
          <Link href="/philosophy" className={router.pathname === '/philosophy' ? styles.active : ''}>
            Philosophy
          </Link>
          <Link href="/services" className={router.pathname === '/services' ? styles.active : ''}>
            Services
          </Link>
          <Link href="/work" className={router.pathname === '/work' ? styles.active : ''}>
            Athlete Portfolio
          </Link>
          <Link href="/contact" className={router.pathname === '/contact' ? styles.active : ''}>
            Contact
          </Link>
        </nav>

        <div className={styles.actions}>
          <a href="/contact" className={styles.ctaButton}>
            Book a Consultation
          </a>
          <button 
            className={styles.hamburger} 
            onClick={toggleMenu}
            aria-label="Toggle navigation menu"
          >
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
            <span className={styles.hamburgerLine}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navigation; 