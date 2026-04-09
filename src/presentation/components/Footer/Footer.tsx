import { FaWhatsapp, FaInstagram, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';
import { contactInfo } from '../../../infrastructure/data/projects';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p className={styles.copyright}>© 2026 Arq. Kassandra Romanillo</p>
        <div className={styles.links}>
          <a href={contactInfo.whatsapp} className={styles.link} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
            <FaWhatsapp />
          </a>
          <a href={`mailto:${contactInfo.email}`} className={styles.link} aria-label="Email">
            <FaEnvelope />
          </a>
          <a href={contactInfo.instagram} className={styles.link} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={contactInfo.facebook} className={styles.link} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
