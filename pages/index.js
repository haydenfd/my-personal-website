import Link from "next/link";
import { projects } from '../data/projects';
import { FaGlobe } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

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
            <div className="flex w-full justify-between">
                <h1 className='section-title'>Projects</h1>
                <Link href="/projects" className="px-2 py-3 rounded-lg text-lg  text-white bg-card-dark border-2 border-card-border">All Projects</Link>
            </div>
            <div className="flex flex-wrap justify-between w-full mt-6">
                {projects.map((project) => (
                <div key={project.id} className="p-4 bg-card-dark border-card-border border-2 rounded-md w-[30%] mb-4">
                    <div className="w-full flex flex-row justify-between">
                        <h1 className="text-xl">{project.title}</h1>
                        <div className="flex items-center gap-6">
                            <a href="https://www.linkedin.com/in/hayden-dsouza/" className="" target="_blank" rel="noopener norefferer">
                                <AiFillGithub className="scale-[175%] hover:scale-[200%]"/>
                            </a>                        
                            {
                                project.url && (
                                    <a href="https://www.linkedin.com/in/hayden-dsouza/" className="" target="_blank" rel="noopener norefferer">
                                        <FaGlobe className="scale-[150%] hover:scale-[175%]"/>
                                    </a>    
                                )
                            }

                        </div>
                    </div>
                    <p className="text-lg text-slate-400 mt-2">{project.description}</p>
                </div>
                ))}
            </div>                                          
        </section>
    </>
  );
}
