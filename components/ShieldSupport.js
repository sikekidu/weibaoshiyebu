// components/ShieldSupport.js
import styles from '../styles/ShieldSupport.module.css';
import Link from 'next/link';

const ShieldSupport = () => (
  <section id="shield-support" className={`${styles.supportSection} page-section`} style={{ textAlign: 'left' }}>
    <h2>盾构施工配套</h2>
    <p>盾构施工配套服务为盾构施工项目提供必要的支持设备...</p>
    <Link href="/shield-support"><button className={styles.learnMoreButton}>了解更多</button></Link>
  </section>
);

export default ShieldSupport;