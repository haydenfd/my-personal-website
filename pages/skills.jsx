import { skills } from "data/skills"

export default function Skills() {
    return (
    <div className="mt-20">
        <h1 className="section-title">Skills</h1>
        <p className="mt-10 text-xl text-slate-400">The various coursework I have completed at UCLA and the different technologies I am well-versed with.</p>

        <section className="mt-10">
        <h2 className="section-subtitle">Technologies</h2>

        <div className="flex flex-row gap-4 mt-4 w-[70%] flex-wrap">
            {
                skills.map((skill) => (
                        <>
                            <div className="px-1 py-2 bg-card-dark border-2 border-card-border text-white text-md rounded-lg">
                                {skill}
                            </div>
                        </>
                    )
                )
            }
        </div>
        </section>
    </div>
    )
}