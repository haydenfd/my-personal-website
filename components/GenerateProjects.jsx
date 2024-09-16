import { AiFillGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

const GenerateProjects = ({ projects, limit = null }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="flex flex-wrap justify-between w-full mt-6">
      {displayedProjects.map((project) => (
        <div key={project.id} className="p-4 bg-card-dark border-card-border border-2 rounded-md w-[45%] mb-4">
          <div className="w-full flex flex-row justify-between">
            <h1 className="text-xl">{project.title}</h1>
            <div className="flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/hayden-dsouza/"
                className=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub className="scale-[175%] hover:scale-[200%]" />
              </a>
              {project.url && (
                <a
                  href={project.url}
                  className=""
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGlobe className="scale-[150%] hover:scale-[175%]" />
                </a>
              )}
            </div>
          </div>
          <p className="text-lg text-muted-gray-color mt-2">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GenerateProjects;
