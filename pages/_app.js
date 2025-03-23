import Layout from '../components/layout-component';
import '../styles/globals.css';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes'

function App({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="dark">
                <Head>
                    <link rel="icon" href="/favicon.svg" />
                    <title>Hayden D&apos;Souza</title>
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default App;
