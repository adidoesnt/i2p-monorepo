import Template from '@/components/template';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>I2P</title>
      </Head>
      <main style={{ overflow: 'hidden' }}>
        <Template />
      </main>
    </>
  );
}
