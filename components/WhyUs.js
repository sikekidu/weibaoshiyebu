import styles from '../styles/WhyUs.module.css';
import Link from 'next/link';

const WhyUs = () => (
  <section id="why-us" className={`${styles.whyUsSection} page-section`}>
    <div className={styles.leftSection}>
      <h2 className={styles.hoverEffect}>为什么选择设备维保事业部？</h2>
      <p className={styles.hoverEffect}>
        <strong>设备维保事业部具备丰富的行业经验和专业的技术团队，致力于提供高效、安全、可靠的盾构机全程维护和配套设备租赁服务。<br />
        我们不仅提供优质的泥水系统、电机车、行车及轨道轨枕租赁服务，更以灵活响应和高效支持闻名，确保项目施工进度顺畅。<br />
        选择设备维保事业部，就是选择无忧的施工体验，减少停工风险，提高施工效率，实现工程安全顺利完成。</strong>
      </p>
    </div>
  </section>
);

export default WhyUs;

