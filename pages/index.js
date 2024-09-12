import Layout from '../components/Layout';

export default function HomePage() {
  return (       
    <>
        <section className='mt-20'>
            <h2 className='text-3xl font-bold'> Hey, I&apos;m Hayden</h2>
            <p className='mt-4 text-xl'>I just graduated with a B.S. in Computer Science from UCLA.<br /> I&apos;m looking for entry level positions in technical roles.<br /> I am most familiar with JavaScript and Python. </p>
            <p className='mt-4 text-xl'>Some more useless information about me.</p>
            <p className='mt-4 text-xl'>I like to do X in my free time.</p>
            <p className='mt-4 text-xl'>Here is my CV for your reference.</p>
        </section>
        <section className="mt-20">
            <h1 className='section-title'>Projects</h1>
            <div className='mx-auto p-4 bg-card-dark border-card-border border-2 rounded-md flex-1 w-1/2 max-w-[calc(50%-10px)]'>
                <h1>Project 1</h1>
            </div>
            <div className='mx-auto p-4 bg-card-dark border-card-border border-2 rounded-md flex-1 w-1/2 max-w-[calc(50%-10px)]'>
                <h1>Project 2</h1>
            </div>                
            <div className='mx-auto p-4 bg-card-dark border-card-border border-2 rounded-md flex-1 w-1/2 max-w-[calc(50%-10px)]'>
                <h1>Project 3</h1>
            </div>                                                
        </section>
    </>
  );
}
