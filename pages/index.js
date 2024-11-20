import { projects } from '../data/projects';
import GenerateProjects from 'utils/generateProjects';
import { experience } from 'data/experience';
export default function Landing() {
    return (
        <>
            <section className="page-section">
                <div>
                    <h2 className="text-3xl font-bold font-roboto-condensed">Hey, I&apos;m Hayden 👋</h2>
                    <p className="mt-4 text-lg">
                        I just graduated from <p className='emphasized-text'>UCLA</p> with a <p className='emphasized-text'>Bachelor&apos;s in Computer Science</p>.
                    </p>
                    <p className="mt-2 text-lg">
                        Currently looking for new grad positions in Software Engineering, Data Science, and other similar technical roles.
                    </p>
                    <p className="mt-2 text-lg">Developed a strong interest in web technologies, AI, and ML. </p>
                    <p className="mt-2 text-lg">
                        In free time, I&apos;m looking for new EDM songs, complaining about the Lakers, and discovering
                        local coffee spots.
                    </p>
                    <p className="mt-2 text-lg">
                        If you know of any positions that align with my interests, or if you would simply like to
                        connect, please feel free to reach out!
                    </p>
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
            <section className="page-section">
                <div className="w-full">
                    <h1 className="section-title font-roboto-condensed">Experience</h1>
                </div>
                <div className="my-6">
                    {experience.map((exp, idx) => (
                        <div
                            key={idx}
                            className="w-full py-4 px-3 border-2 text-white bg-card-dark border-card-border rounded-lg mb-4 flex justify-between"
                        >
                            <p className="text-xl font-semibold font-roboto-condensed">
                                {exp.title}, {exp.company}
                            </p>
                            <p className="text-xl font-medium text-primary-yellow-color font-roboto-condensed">
                                {exp.term}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="page-section">
                <div className="w-full">
                    <h1 className="section-title font-roboto-condensed">Projects</h1>
                </div>
                <GenerateProjects projects={projects} />
            </section>
        </>
    );
}
