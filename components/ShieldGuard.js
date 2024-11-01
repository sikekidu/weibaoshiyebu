// components/ShieldGuard.js
import styles from '../styles/ShieldGuard.module.css';
import Link from 'next/link';

const ShieldGuard = () => (
  <section id="shield-guard" className={`${styles.guardSection} page-section`} style={{ textAlign: 'left' }}>
    <h2>盾构机保驾</h2>
    <p>盾构机保驾服务旨在为盾构机的顺利进场和退场提供全面保障...</p>
    <Link href="/shield-guard"><button className={styles.learnMoreButton}>了解更多</button></Link>
  </section>
);

export default ShieldGuard;