// components/Headerbranch.js
import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/Header.module.css';
import logoImage from '../public/shsdb.png';

const Header = () => (
  <header 
    className={styles.header} 
    style={{ 
      backgroundColor: 'transparent',
      height: '120px',
      marginTop: '0px',
      padding: '10px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    <div className={styles.leftSection} style={{ display: 'flex', alignItems: 'center' }}>
      <Link href="https://www.stec.sh.cn/#/home">
        <Image 
          src={logoImage} 
          alt="上海隧道 Logo" 
          className={styles.logoImage} 
          width={100}
          height={100}
        />
      </Link>
      <Link href="/">
        <h1 className={styles.logo} style={{ marginTop: '45px', marginLeft: '-100px', cursor: 'pointer' }}>设备维保事业部</h1>   
      </Link>
    </div>
    <nav className={styles.rightSection} style={{ marginTop: '45px' }}>
      <ul className={styles.navList} style={{ alignItems: 'flex-end' }}>
        <li className={styles.navItem}>
          <Link href="/slurry-system" className={styles.navLink}>泥水系统</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/shield-support" className={styles.navLink}>盾构施工配套</Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/shield-guard" className={styles.navLink}>盾构机保驾</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;

