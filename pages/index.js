import Link from "next/link";
import { projects } from '../data/projects';
import Image from 'next/image';
import GenerateProjects from "components/GenerateProjects";
import headshot from "../public/images/headshot.jpeg";

export default function HomePage() {
  return (
    <>
      <section className="mt-20 flex flex-col lg:flex-row-reverse items-start gap-8">
        <Image
          src={headshot}
          alt="Headshot"
          className="rounded-3xl"
          width={400}
          height={400}
        />
        <div className="flex-1">
          <h2 className="text-3xl font-bold">Hey, I&apos;m Hayden</h2>
          <p className="mt-4 text-xl">
            I just graduated with a B.S. in Computer Science from UCLA.<br /> I&apos;m looking for entry level positions in technical roles.<br /> I am most familiar with JavaScript and Python.
          </p>
          <p className="mt-4 text-xl">Some more useless information about me.</p>
          <p className="mt-4 text-xl">I like to do X in my free time.</p>
          <p className="mt-4 text-xl">
            You can find my CV <a className="inline underline text-primary-yellow-color hover:text-primary-yellow-color-hover" href="/resume.pdf" target="_blank" rel="noopener norefferer">here</a>.
          </p>
        </div>
      </section>
      <section className="mt-20">
        <div className="flex w-full justify-between">
          <h1 className="section-title">Projects</h1>
          <Link href="/projects" className="section-button">All Projects</Link>
        </div>
        <GenerateProjects limit={6} projects={projects} />
      </section>
    </>
  );
}
