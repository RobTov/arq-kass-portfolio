import { contactInfo } from '../../../infrastructure/data/projects';
import { FaWhatsapp, FaInstagram, FaFacebookSquare, FaEnvelope } from 'react-icons/fa';
import { Footer } from '../Footer/Footer';
import styles from './Contact.module.css';

export function Contact() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Contacto</h2>
        <p className={styles.subtitle}>Hablemos de tu proyecto</p>
        
        <div className={styles.links}>
          <a href={contactInfo.whatsapp} className={styles.linkItem} target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className={styles.icon} />
            <span>{contactInfo.phone}</span>
          </a>
          
          <a href={`mailto:${contactInfo.email}`} className={styles.linkItem}>
            <FaEnvelope className={styles.icon} />
            <span>{contactInfo.email}</span>
          </a>
        </div>
        
        <div className={styles.social}>
          <a href={contactInfo.instagram} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram />
          </a>
          <a href={contactInfo.facebook} className={styles.socialLink} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebookSquare />
          </a>
        </div>
      </div>
      <Footer />
    </section>
  );
}

export default Contact;
