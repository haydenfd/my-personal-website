import { AiFillGithub } from 'react-icons/ai';
import { FaGlobe } from 'react-icons/fa';

const GenerateProjects = ({ projects, limit = null }) => {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return (
    <div className="flex flex-wrap justify-between w-full mt-6">
      {displayedProjects.map((project) => (
        <div key={project.id} className="p-3 bg-card-dark border-card-border border-2 rounded-md w-[48.5%] mb-4">
          <div className="w-full flex flex-row justify-between">
            <h1 className="text-xl font-medium">{project.title}</h1>
            <div className="flex items-center gap-6 mr-2">
              <a
                href={project.github}
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
          <div className='w-full my-4 flex flex-wrap gap-3'>
            {
              project.technologies && (
                project.technologies.map((tech, idx) => (
                  <div key={idx} className="border-2 text-primary-yellow-color px-2 py-1 border-primary-yellow-color rounded-lg">
                    <p className='text-primary-yellow-color text-sm'>{tech}</p>
                  </div>
                ))
              )
            }
          </div>
          <p className="text-lg text-muted-gray-color mt-2">{project.description}</p>
        </div>
      ))}
    </div>
  );
};

export default GenerateProjects;
