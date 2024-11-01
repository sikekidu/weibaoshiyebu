// components/Header.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import logoImage from '../public/shsdb.png';

const Header = () => (
  <header className={styles.header} style={{ marginTop: '0px' }}>
    <div className={styles.leftSection} style={{ alignItems: 'flex-start' }}>
      <Link href="/" legacyBehavior>
        <a>
          <Image src={logoImage} alt="上海隧道 Logo" className={styles.logoImage} />
        </a>
      </Link>
      <h1 className={styles.logo} style={{ marginTop: '45px', marginLeft: '-145px' }}>设备维保事业部</h1>
    </div>
    <nav className={styles.rightSection} style={{ marginTop: '45px' }}>
      <ul className={styles.navList} style={{ alignItems: 'flex-end' }}>
        <li className={styles.navItem}><Link href="#slurry-system">泥水系统</Link></li>
        <li className={styles.navItem}><Link href="#shield-support">盾构施工配套</Link></li>
        <li className={styles.navItem}><Link href="#shield-guard">盾构机保驾</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;