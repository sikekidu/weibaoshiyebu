import Head from 'next/head'; // 引入 Head 组件
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>设备维保事业部</title>
        <meta name="description" content="泥水系统、盾构施工配套及盾构机保驾服务" />
        <link rel="icon" href="/favicon.ico" /> {/* 设置 favicon */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
