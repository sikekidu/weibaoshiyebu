import Head from 'next/head';
import Header from '../components/Headbranch'; // 确保 Header 文件的路径正确
import Footer from '../components/Footer'; // 确保 Footer 文件的路径正确

export default function ShieldGuardPage() {
  return (
    <>
      <Head>
        <title>盾构机保驾服务 - 设备维保事业部</title>
        <meta name="description" content="了解我们提供的盾构机保驾服务的详细信息，包括服务范围和技术支持。" />
      </Head>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>盾构机保驾服务</h1>
        <p>这里是关于盾构机保驾服务的详细介绍和技术说明……</p>
      </main>
      <Footer />
    </>
  );
}
