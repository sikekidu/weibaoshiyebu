import Head from 'next/head';
import Header from '../components/Headbranch'; // 确保 Header 文件的路径正确
import Footer from '../components/Footer'; // 确保 Footer 文件的路径正确

export default function SlurrySystemPage() {
  return (
    <>
      <Head>
        <title>泥水系统 - 设备维保事业部</title>
        <meta name="description" content="泥水系统详细信息，包括技术优势和应用情况。" />
      </Head>
      <Header /> {/* 添加 Header */}
      <main style={{ padding: '20px', textAlign: 'center' }}>
        <h1>泥水系统</h1>
        <p>这里是泥水系统的详细介绍和技术说明……</p>
      </main>
      <Footer /> {/* 添加 Footer */}
    </>
  );
}
