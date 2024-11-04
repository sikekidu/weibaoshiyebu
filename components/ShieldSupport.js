import styles from '../styles/ShieldSupport.module.css';
import Link from 'next/link';

const ShieldSupport = () => (
  <section id="shield-support" className={`${styles.shieldSupportSection} page-section`}>
    <div className={styles.leftSection}>
      <h2 className={styles.hoverEffect}>盾构施工配套</h2>
      <p className={styles.hoverEffect}>
        <strong>我们的盾构施工配套设备经过严格维护，确保在各种施工环境中可靠运行。<br />
        我们提供灵活的解决方案，包括电机车、行车、轨道等必要设备，<br />
        帮助客户降低施工风险，提高效率，顺利完成施工任务。</strong>
      </p>
      <Link href="/shield-support"><button className={styles.learnMoreButton}>了解更多</button></Link>
    </div>
  </section>
);

export default ShieldSupport;