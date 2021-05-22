import Head from 'next/head';

import '../styles/globals.css';
import Layout from '../Components/Layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
<link href="https://fonts.googleapis.com/css2?family=Acme&family=Dosis:wght@400;500&display=swap" rel="stylesheet"></link>
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;