import { Model3D } from '../Model3D/Model3D';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.modelContainer}>
        <Model3D />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.name}>Arq. Kassandra Romanillo</h1>
        <p className={styles.slogan}>Donde la arquitectura cobra vida</p>
      </div>
      <div className={styles.scrollIndicator}>
        <span>Desliza para explorar</span>
        <div className={styles.scrollArrow}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M5 12l7 7 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;
