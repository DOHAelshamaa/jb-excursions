import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { BUSINESS, FOOTER_LINKS } from '../data/config';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo" id="footer">
      <div className={styles.inner}>
        {/* Brand column */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <SunIcon />
            <span className={styles.logoText}>
              <strong>J & B</strong> <span>Excursions</span>
            </span>
          </div>
          <p className={styles.tagline}>{BUSINESS.tagline}</p>
          <div className={styles.contactInfo}>
            <a href={BUSINESS.phoneHref} className={styles.contactLink} aria-label="Call us">
              <Phone size={14} />
              {BUSINESS.phone}
            </a>
            <div className={styles.contactLink} aria-label="Our location">
              <MapPin size={14} />
              <span>{BUSINESS.location}</span>
            </div>
          </div>
        </div>

        {/* Explore links */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>EXPLORE</h3>
          <nav aria-label="Footer navigation">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.footerLink}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Connect */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>CONNECT</h3>
          <div className={styles.socialRow}>
            <a
              href={BUSINESS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="WhatsApp"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href={BUSINESS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialBtn}
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href={BUSINESS.tiktok}
  target="_blank"
  rel="noopener noreferrer"
  className={styles.socialBtn}
  aria-label="TikTok"
>
  <TikTokIcon />
              <InstagramIcon />
            </a>
            <a
              href={BUSINESS.phoneHref}
              className={styles.socialBtn}
              aria-label="Phone"
            >
              <Phone size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {year} J & B Excursions. All rights reserved.</p>
        <p>Luxor, Egypt</p>
      </div>
    </footer>
  );
}

function SunIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 36 36" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="7" fill="#f97316" />
      {[0,45,90,135,180,225,270,315].map((deg, i) => (
        <line key={i} x1="18" y1="3" x2="18" y2="8"
          stroke="#f97316" strokeWidth="2.5" strokeLinecap="round"
          transform={`rotate(${deg} 18 18)`}
        />
      ))}
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"/>
    </svg>
  );
}