import Layout from '../components/Layout';

export default function HomePage() {
  return (
    <Layout>        
        <section className='mt-20'>
            <h2 className='text-3xl font-bold'> Hey, I&apos;m Hayden</h2>
            <p className='mt-4 text-xl'>I just graduated with a B.S. in Computer Science from UCLA.<br /> I&apos;m looking for entry level positions in technical roles.<br /> I am most familiar with JavaScript and Python. </p>
            <p className='mt-4 text-xl'>Some more useless information about me.</p>
            <p className='mt-4 text-xl'>I like to do X in my free time.</p>
        </section>
    </Layout>
  );
}
