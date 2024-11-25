import { projects } from '../data/projects';
import GenerateProjects from 'utils/generateProjects';
import { experience } from 'data/experience';
export default function Landing() {
    return (
        <>
            <section className="page-section">

                    <h2 className="text-2xl md:text-3xl font-bold font-roboto-condensed">Hey, I&apos;m Hayden 👋</h2>
                    <p className="mt-4 text-sm md:text-lg">
                        I just graduated from <span className='emphasized-text'>UCLA</span> with a <span className="emphasized-text">Bachelor&apos;s in Computer Science</span>.
                    </p>
                    <p className="mt-2 text-sm md:text-lg">
                        I&apos;m currently looking for new grad/entry level positions in <span className="emphasized-text">Software Engineering</span>, <span className="emphasized-text">Data Science</span>, and other similar technical roles.
                    </p>
                    <p className="mt-2 text-sm md:text-lg">
                        Through my projects, coursework, and past internships, I&apos;ve developed a strong interest in <span className="emphasized-text">Web Technologies</span>, <span className='emphasized-text'>Machine Learning</span>, and <span className="emphasized-text">Artificial Intelligence</span>.
                    </p>
                    <p className="mt-2 text-sm md:text-lg">
                        In free time, I&apos;m looking for new EDM songs, complaining about the Lakers, and discovering
                        local coffee spots.
                    </p>
                    <p className="mt-2 text-sm md:text-lg">
                        If you know of any positions that align with my interests, or if you would simply like to
                        connect, please feel free to reach out!
                    </p>
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
                            <p className="text-md md:text-xl font-semibold font-roboto-condensed">
                                {exp.title}, {exp.company}
                            </p>
                            <p className="text-md md:text-xl font-medium text-primary-yellow-color font-roboto-condensed">
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
                <GenerateProjects limit={6} projects={projects} />
            </section>
        </>
    );
}
