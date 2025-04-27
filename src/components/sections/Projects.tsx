import React from 'react';
import Card from '../ui/Card';
import { projects } from '../../data/projects';
import { Rocket } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-blue/20 to-space-black"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-neon-cyan to-neon-magenta bg-clip-text text-transparent inline-block">
            ACCOMPLISHMENTS
          </h2>
          <div className="h-1 w-20 bg-neon-magenta mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Here’s a glimpse of the work I’ve done, showcasing my skills, creativity, and passion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="group">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <Rocket className="w-6 h-6 text-neon-cyan mr-2 group-hover:text-neon-magenta transition-colors duration-300" />
                  <h3 className="font-orbitron text-lg font-bold text-white">
                    {project.title}
                  </h3>
                </div>

                <p className="text-gray-300 mb-4">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-orbitron text-neon-cyan mb-2">Tech Arsenal:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="inline-block px-2 py-1 text-xs bg-space-purple/50 border border-neon-blue/30 rounded-md text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.collaborators && (
                  <div className="text-sm text-gray-400 mt-3">
                    <span className="text-neon-cyan">Collaborators:</span> {project.collaborators}
                  </div>
                )}

                {project.thanks && (
                  <div className="text-sm text-gray-400 mt-2">
                    <span className="text-neon-magenta">Special Thanks:</span> {project.thanks}
                  </div>
                )}

                {project.githubLink && (
                  <div className="mt-4">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-cyan hover:text-neon-magenta underline text-sm"
                    >
                      View GitHub Repo
                    </a>
                  </div>
                )}

                {project.certificateLink && (
                  <div className="mt-2">
                    <a
                      href={project.certificateLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-neon-magenta hover:text-neon-cyan underline text-sm"
                    >
                      View Certificate
                    </a>
                  </div>
                )}
              </div>

              <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-neon-cyan to-neon-magenta transition-all duration-700 ease-out"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
