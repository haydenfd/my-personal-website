import Link from "next/link";
import { projects } from '../data/projects';
import Image from 'next/image';
import GenerateProjects from "components/GenerateProjects";
import headshot from "../public/images/headshot.jpeg";
import { AiFillGithub } from "react-icons/ai";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export default function HomePage() {

  const copyText = (text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        alert("Copied haydenfds@gmail.com to clipboard!");
      },
      (err) => {
        console.error("Failed to copy text: ", err);
      }
    );
  };

  return (
    <>
      <section className="mt-20 flex flex-col lg:flex-row-reverse items-start gap-8 w-full leading-relaxed">
        {/* <Image
          src={headshot}
          alt="Headshot"
          className="rounded-3xl"
          width={400}
          height={400}
        /> */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Hey, I&apos;m Hayden 👋</h2>
          <p className="mt-4 text-xl">
            I just graduated with a B.S. in Computer Science from UCLA.</p>
            <p className="mt-4 text-xl">I am most familiar with JavaScript,Python, TypeScript, and C++. </p>
            <p className="mt-4 text-xl">I&apos;ve built several full-stack web apps (both server-based and serverless), developed web scrapers, created machine learning models, fine-tuned an LLM, and written some low-level code.</p>  
            <p className="mt-4 text-xl">I am looking for entry-level positions in technical roles (Software Engineering, Data Science).</p>        
          <p className="mt-4 text-xl">In my free time, I&apos;m discovering new EDM songs, complaining about the Lakers, working out, and learning more about coffee.</p>
          <p className="mt-4 text-xl">
          If you know of any positions that align with my interests, or if you would simply like to connect, please feel free to reach out!
          </p>
        </div>
      </section>
      <section className="w-1/2 flex flex-row flex-nowrap my-20 gap-8 mx-auto justify-center">
        <a href="/resume.pdf" target="_blank" rel="noopener norefferer" className="flex flex-row justify-between gap-4 items-center p-3 rounded-lg text-base-button-color bg-card-dark border-2 border-card-border hover:border-white hover:text-white">
          <IoDocumentTextSharp className="scale-[175%] flex-1"/>
          <p className="text-lg font-medium flex-1">Resume</p>
        </a>
        <a href="https://github.com/haydenfd" target="_blank" rel="noopener norefferer" className="flex flex-row justify-between gap-4 items-center p-3 rounded-lg text-base-button-color bg-card-dark border-2 border-card-border hover:border-white hover:text-white">
          <AiFillGithub className="scale-[175%] flex-1" />
          <p className="text-lg font-medium flex-1">GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/hayden-dsouza/" className="flex flex-row justify-between gap-4 items-center p-3 rounded-lg text-base-button-color bg-card-dark border-2 border-card-border hover:border-white hover:text-white" target="_blank" rel="noopener norefferer">
          <FaLinkedin className="scale-[175%] flex-1"/>
          <p className="text-lg font-medium flex-1">LinkedIn</p>
        </a>                
        <a href="#" className="flex flex-row justify-between gap-4 items-center p-3 rounded-lg text-base-button-color bg-card-dark border-2 border-card-border hover:border-white hover:text-white"
            onClick={(e) => {
            e.preventDefault(); 
            copyText("haydenfds@gmail.com");
            }}
            
            >
                <IoMdMail className="scale-[175%] flex-1"/>
                <p className="text-lg font-medium flex-1">Email</p>
            </a>                 
      </section>
      <section>
        <div className="flex w-full justify-between items-center">
          <h1 className="section-title">Experience</h1>
          <Link href="/experience" className="section-button">All Experience</Link>
        </div>
        <div className="flex flex-col gap-4 mt-10">
          <h2 className="text-2xl font-semibold ital">Software Engineering Intern, 3i Infotech</h2>
              <p className="text-xl">Proposed design of fine-tuned LLM that generates SQL commands from natural language instructions.</p>
              <p className="text-xl">Studied the internal architectures of GPT, LLaMa models.</p>
              <p className="text-xl">Used Python & Streamlit to build Text-to-SQL LLM (Meta&apos;s LLaMa-7b model), using 120K examples.</p>
          <h2 className="text-2xl font-semibold">Full-Stack Intern, Players&apos; Bounty</h2>
          <h2 className="text-2xl font-semibold">IT Consultant, UCLA IT Services</h2>
        </div>
      </section>      
      <section>
        <div className="flex w-full justify-between mt-20 items-center">
          <h1 className="section-title">Projects</h1>
          <Link href="/projects" className="section-button">All Projects</Link>
        </div>
        <GenerateProjects limit={6} projects={projects} />
      </section>
    </>
  );
}
