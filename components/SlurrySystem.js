// components/SlurrySystem.js
import styles from '../styles/SlurrySystem.module.css';
import Link from 'next/link';

const SlurrySystem = () => (
  <section id="slurry-system" className={`${styles.slurrySection} page-section`} style={{ textAlign: 'left' }}>
    <h2>泥水系统</h2>
    <p>泥水系统是盾构隧道施工中至关重要的一部分...</p>
    <Link href="/slurry-system"><button className={styles.learnMoreButton}>了解更多</button></Link>
  </section>
);

export default SlurrySystem;