import Link from "next/link";
import { projects } from '../data/projects';
import GenerateProjects from "utils/generateProjects";
import { AiFillGithub } from "react-icons/ai";
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
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Hey, I&apos;m Hayden 👋</h2>
            <p className="mt-4 text-lg">I just graduated from UCLA with a Bachelor&apos;s in Computer Science.</p>
            <p className="mt-4 text-lg">Currently looking for new grad positions in Software Engineering, Data Science, and other similar technical roles.</p>
            <p className="mt-4 text-lg">Developed a strong interest in web technologies, AI, and ML. </p>
            <p className="mt-4 text-lg">In free time, I&apos;m looking for new EDM songs, complaining about the Lakers, and discovering local coffee spots.</p>
            <p className="mt-4 text-lg">If you know of any positions that align with my interests, or if you would simply like to connect, please feel free to reach out!</p>
          {/* <p className="mt-4 text-xl">
            I just graduated with a B.S. in Computer Science from UCLA.</p>
            <p className="mt-4 text-xl">I am most familiar with JavaScript,Python, TypeScript, and C++. </p>
            <p className="mt-4 text-xl">I&apos;ve built several full-stack web apps (both server-based and serverless), developed web scrapers, created machine learning models, fine-tuned an LLM, and written some low-level code.</p>  
            <p className="mt-4 text-xl">I am looking for entry-level positions in technical roles (Software Engineering, Data Science).</p>        
          <p className="mt-4 text-xl">In my free time, I&apos;m discovering new EDM songs, complaining about the Lakers, working out, and learning more about coffee.</p>
          <p className="mt-4 text-xl">
          If you know of any positions that align with my interests, or if you would simply like to connect, please feel free to reach out!
          </p> */}
        </div>
      </section>
      <section className="w-1/2 flex flex-row flex-nowrap my-20 gap-8 mx-auto justify-center">
        <a href="https://github.com/haydenfd" target="_blank" rel="noopener norefferer" className="flex flex-row justify-between gap-4 items-center p-3 rounded-lg text-base-button-color bg-card-dark border-2 border-card-border hover:border-primary-yellow-color hover:text-primary-yellow-color">
          <AiFillGithub className="scale-[175%] flex-1" />
          <p className="text-lg font-medium flex-1">GitHub</p>
        </a>
        <a href="https://www.linkedin.com/in/hayden-dsouza/" className="flex flex-row justify-between gap-4 items-center p-3 rounded-lg text-base-button-color bg-card-dark border-2 border-card-border hover:border-primary-yellow-color hover:text-primary-yellow-color" target="_blank" rel="noopener norefferer">
          <FaLinkedin className="scale-[175%] flex-1 ml"/>
          <p className="text-lg font-medium flex-1">LinkedIn</p>
        </a>                
        <a href="#" className="flex flex-row justify-between gap-4 items-center p-3 rounded-lg text-base-button-color bg-card-dark border-2 border-card-border hover:border-primary-yellow-color hover:text-primary-yellow-color"
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
        <div className="my-6">
            <div className="w-full py-4 px-3 border-2 text-white bg-card-dark border-card-border rounded-lg mb-4 flex justify-between">
              <p className="text-xl font-semibold">Software Engineering Intern, 3i Infotech</p>
              <p className="text-xl font-semibold text-primary-yellow-color">Jul 2023 - Sep 2023</p>
            </div>
            <div className="w-full py-4 px-3 border-2 text-white bg-card-dark border-card-border rounded-lg mb-4 flex justify-between">
              <p className="text-xl font-semibold">Player&apos;s Bounty, Full Stack Intern</p>
              <p className="text-xl font-semibold text-primary-yellow-color">Jun 2023 - Aug 2023</p>
            </div>
            <div className="w-full py-4 px-3 border-2 text-white bg-card-dark border-card-border rounded-lg mb-4 flex justify-between">
              <p className="text-xl font-semibold">UCLA IT Service, IT Consultant</p>
              <p className="text-xl font-semibold text-primary-yellow-color">Dec 2021 - Feb 2024</p>
            </div>
            <div className="w-full py-4 px-3 border-2 text-white bg-card-dark border-card-border rounded-lg mb-4 flex justify-between">
              <p className="text-xl font-semibold">UCLA Data Science Union, Member & Webmaster</p>
              <p className="text-xl font-semibold text-primary-yellow-color">Apr 2021 - Jun 2024</p>
            </div>
        </div>
      </section>      
      <section className="">
        <div className="flex w-full justify-between mt-20 items-center">
          <h1 className="section-title">Projects</h1>
          <Link href="/projects" className="section-button">All Projects</Link>
        </div>
        <GenerateProjects limit={6} projects={projects} />
      </section>
    </>
  );
}
