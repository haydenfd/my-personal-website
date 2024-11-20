import Layout from '../components/layout-component';
import '../styles/globals.css';

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
