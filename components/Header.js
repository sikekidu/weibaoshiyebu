// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import logoImage from '../public/shsdb.png';
import headerBackground from '../public/747374890227005468.jpg'; // 引入背景图片

const Header = () => (
  <header 
    className={styles.header} 
    style={{ 
      backgroundImage: `url(${headerBackground.src})`, // 设置背景图片
      backgroundSize: 'cover', // 确保背景图片完全覆盖
      backgroundPosition: 'center', // 图片居中显示
      height: '1000px', // 设置头部高度，你可以根据需要调整
      marginTop: '0px'
    }}
  >
    <div className={styles.leftSection} style={{ alignItems: 'flex-start' }}>
      <Link href="https://www.stec.sh.cn/#/home" legacyBehavior>
        <a style={{ cursor: 'pointer' }}> {/* 添加鼠标手型的超链接标志 */}
          <Image src={logoImage} alt="上海隧道 Logo" className={styles.logoImage} />
        </a>
      </Link>
      <Link href="/">
        <h1 className={styles.logo} style={{ marginTop: '45px', marginLeft: '0px', cursor: 'pointer' }}>设备维保事业部</h1>
      </Link>
    </div>
    <nav className={styles.rightSection} style={{ marginTop: '50px' }}>
      <ul className={styles.navList} style={{ alignItems: 'flex-end' }}>
        <li className={styles.navItem}>
          <Link href="#slurry-system" className={styles.navLink}>泥水系统</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#shield-support" className={styles.navLink}>盾构施工配套</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="#shield-guard" className={styles.navLink}>盾构机保驾</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;