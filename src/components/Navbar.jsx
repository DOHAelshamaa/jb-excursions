import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { NAV_LINKS, BUSINESS } from '../data/config';
import { useScrollSpy } from '../hooks/useScrollSpy';
import styles from './Navbar.module.css';

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [menuOpen,   setMenuOpen]   = useState(false);
  const activeId = useScrollSpy(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`} role="banner">
      <div className={styles.inner}>
        {/* Logo */}
        <a href="#home" className={styles.logo} onClick={() => handleNavClick('#home')} aria-label="J & B Excursions — Home">
          <SunIcon />
          <span className={styles.logoText}>
            <strong>J & B</strong> Excursions
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className={styles.desktopNav} aria-label="Main navigation">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace('#', '');
            return (
              <a
                key={link.label}
                href={link.href}
                className={`${styles.navLink} ${activeId === id ? styles.active : ''}`}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Book Now */}
        <a
          href={BUSINESS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.bookBtn}
          aria-label="Book now via WhatsApp"
        >
          <MessageCircle size={16} />
          Book Now
        </a>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.open : ''}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={styles.mobileLink}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              tabIndex={menuOpen ? 0 : -1}
            >
              {link.label}
            </a>
          ))}
          <a
            href={BUSINESS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mobileBook}
            tabIndex={menuOpen ? 0 : -1}
          >
            <MessageCircle size={16} />
            Book Now via WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}

function SunIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="7" fill="#f97316" />
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <line
          key={i}
          x1="18" y1="3" x2="18" y2="8"
          stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"
          transform={`rotate(${deg} 18 18)`}
        />
      ))}
    </svg>
  );
}
