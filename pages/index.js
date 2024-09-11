import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout>
      <h1 className="text-8xl font-extrabold mb-4 tracking-[-0.25em] text-orange-400">HD</h1>
      <p className="text-xl font-light text-orange-100 font-nav">About</p>
      <p className="text-xl font-light text-orange-100 font-nav">Projects</p>
      <p className="text-xl font-light text-orange-100 font-nav">Experience</p>
      <p className="text-xl font-light text-orange-100 font-nav">Coursework</p>
      <p className="text-xl font-light text-orange-100 font-nav">Contact</p>

    </Layout>
  );
}
