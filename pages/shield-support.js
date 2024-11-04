import Head from 'next/head';
import Header from '../components/Headbranch'; // 确保 Header 文件的路径正确
import Footer from '../components/Footer'; // 确保 Footer 文件的路径正确

export default function ShieldSupportPage() {
  return (
    <>
      <Head>
        <title>盾构施工支持 - 设备维保事业部</title>
        <meta name="description" content="盾构施工支持的详细信息，包括服务内容和技术支持。" />
      </Head>
      <Header />
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>盾构施工支持</h1>
        <p>这里是盾构施工支持的详细介绍和技术说明……</p>
      </main>
      <Footer />
    </>
  );
}
