import project1image from '../../assets/project1.jpg';
import project2image from '../../assets/project2.jpg';

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="glass rounded-xl border-white/10 border p-6 hover:scale-[1.02] transition-transform flex flex-col">
            <img
              src={project1image}
              alt="Project Screenshot"
              className="rounded-lg shadow-lg w-full mb-4"
            />
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
              <p className="text-gray-300 mb-4">
                A brief description of the project goes here. Highlight its purpose or key functionality.
              </p>
              <a
                href="https://your-project-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Explore
              </a>
            </div>
          </div>

          <div className="glass rounded-xl border-white/10 border p-6 hover:scale-[1.02] transition-transform flex flex-col">
            <img
              src={project2image}
              alt="Project Screenshot"
              className="rounded-lg shadow-lg w-full mb-4"
            />
            <div className="text-left">
              <h3 className="text-2xl font-semibold mb-2">Project Title</h3>
              <p className="text-gray-300 mb-4">
                A brief description of the project goes here. Highlight its purpose or key functionality.
              </p>
              <a
                href="https://your-project-link.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Explore
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
