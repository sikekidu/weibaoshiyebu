import styles from '../styles/Footer.module.css';
import Link from 'next/link';

const Footer = () => (
  <footer className={styles.footer}>
    <Link href="/" passHref>
      <button className={styles.returnToTop}>
        返回首页
      </button>
    </Link>
    <div className={styles.gradientLine}></div> {/* 添加渐变线 */}
    <div className={styles.footerLinks}>
      <p>
        <a href="mailto:your_email@example.com" className={styles.contactLink}>联系我们</a>
      </p>
    </div>
    <p>&copy; 2024 设备维保事业部版权所有</p>
  </footer>
);

export default Footer;
