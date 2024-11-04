import styles from '../styles/ShieldGuard.module.css';
import Link from 'next/link';

const ShieldGuard = () => (
  <section id="shield-guard" className={`${styles.shieldGuardSection} page-section`}>
    <div className={styles.leftSection}>
      <h2 className={styles.hoverEffect}>盾构机保驾</h2>
      <p className={styles.hoverEffect}>
        <strong>我们的盾构机保驾服务确保盾构机在进场、退场及施工期间的安全和高效运行。<br />
        专业的团队全程护航，减少设备故障，保障施工无忧，<br />
        让客户能够专注于工程的顺利推进。</strong>
      </p>
      <Link href="/shield-guard"><button className={styles.learnMoreButton}>了解更多</button></Link>
    </div>
  </section>
);

export default ShieldGuard;