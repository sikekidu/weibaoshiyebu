import styles from '../styles/SlurrySystem.module.css';
import Link from 'next/link';

const SlurrySystem = () => (
  <section id="slurry-system" className={`${styles.slurrySection} page-section`}>
    <div className={styles.leftSection}>
      <h2 className={styles.hoverEffect}>泥水系统</h2>
      <p className={styles.hoverEffect}>
        <strong>我们的泥水系统基于最新技术，稳定可靠，适应复杂地质条件。<br />设备经过严格维护，提供高效支持，降低施工风险，确保施工顺畅无忧。选择我们就是选择安心、<br />高效和灵活的服务体验。我们提供的泥水系统基于最新技术，专为复杂地质条件设计，旨在确保隧道掘进过程的稳定性和安全性。</strong>
      </p>
      <Link href="/slurry-system"><button className={styles.learnMoreButton}>了解更多</button></Link>
    </div>
  </section>
);

export default SlurrySystem;
