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
    let isScrolling = false; // 防止在滚动完成前重复触发滚动

    const handleScroll = (e) => {
      if (isScrolling) return; // 如果正在滚动，则退出
      e.preventDefault();
      const delta = e.deltaY;
      const sections = document.querySelectorAll('.page-section');
      const currentScroll = window.scrollY;

      let nextSection = null;

      if (delta > 0) {
        // 向下滚动
        for (let i = 0; i < sections.length; i++) {
          const sectionTop = sections[i].offsetTop;
          if (sectionTop > currentScroll + 10) {
            nextSection = sections[i];
            break;
          }
        }
      } else {
        // 向上滚动
        for (let i = sections.length - 1; i >= 0; i--) {
          const sectionTop = sections[i].offsetTop;
          if (sectionTop < currentScroll - 10) {
            nextSection = sections[i];
            break;
          }
        }
      }

      if (nextSection) {
        isScrolling = true; // 设置正在滚动
        window.scrollTo({
          top: nextSection.offsetTop,
          behavior: 'smooth',
        });

        setTimeout(() => {
          isScrolling = false; // 滚动完成后解除锁定
        }, 1000); // 1秒后解除滚动锁定，视页面滚动速度调整
      }
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
        <WhyUs />
        <SlurrySystem />
        <ShieldSupport />
        <ShieldGuard />
      </main>
      <Footer />
    </>
  );
}
