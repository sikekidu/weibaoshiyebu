// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhyUs from '../components/WhyUs';
import SlurrySystem from '../components/SlurrySystem';
import ShieldSupport from '../components/ShieldSupport';
import ShieldGuard from '../components/ShieldGuard';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const handleScroll = (e) => {
      e.preventDefault();
      window.scrollBy({
        top: e.deltaY,
        behavior: 'smooth',
      });
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>设备维保事业部</title>
        <meta name="description" content="泥水系统、盾构施工配套及盾构机保驾服务" />
      </Head>
      <Header />
      
      <div className="header-bottom-left" style={{ position: 'absolute', bottom: '100px', left: '40px', lineHeight: '1.5em' }}>
        <h2 style={{ marginBottom: '10px' }}>为什么选择设备维保事业部？</h2>
        <p style={{ marginBottom: '10px' }}>设备维保事业部致力于为客户提供高质量的盾构机相关服务，涵盖泥水设备的租赁、后配套设备的租赁，以及盾构施工的进退场保驾工作，确保施工过程顺畅无忧。<br />我们的专业团队通过精细的维护和高效的解决方案，降低设备故障发生率。<br />我们专注于最大限度地提高施工的效率和安全性，以保障项目成功。</p>
        <a href="#why-us" className="learn-more-link learnMoreButton" style={{ textDecoration: 'none' }}>了解更多</a>
      </div>
      <main>
        <WhyUs className="page-section" />
        <SlurrySystem className="page-section" />
        <ShieldSupport className="page-section" />
        <ShieldGuard className="page-section" />
      </main>
      <Footer />
    </>
  );
}
