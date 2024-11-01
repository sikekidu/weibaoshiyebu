// components/WhyUs.js
import styles from '../styles/WhyUs.module.css';
import Link from 'next/link';

const WhyUs = () => (
  <section id="why-us" className={`${styles.whyUsSection} page-section`} style={{ textAlign: 'left' }}>
    <h2>为什么选择设备维保事业部？</h2>
    <p>我们为客户提供可靠、高效、经济的设备租赁及维护解决方案...</p>
    <Link href="/why-us"><button className={styles.learnMoreButton}>了解更多</button></Link>
  </section>
);

export default WhyUs;