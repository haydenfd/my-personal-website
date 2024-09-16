import GenerateProjects from "components/GenerateProjects";
import { projects } from "data/projects";

export default function Projects() {
  return (
    <div className="mt-20">
        <h1 className="section-title">Projects</h1>
        <p className="mt-10 text-xl text-muted-gray-color">A collection of my various projects, completed either for class or as pet projects.</p>
        <GenerateProjects projects={projects}/>
    </div>
  )
}
