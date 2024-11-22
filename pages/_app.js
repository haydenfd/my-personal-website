import Layout from '../components/layout-component';
import '../styles/globals.css';
import Head from 'next/head';

function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.svg" />
                <title>Hayden D&apos;Souza</title>
            </Head>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default App;
