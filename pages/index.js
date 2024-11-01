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
