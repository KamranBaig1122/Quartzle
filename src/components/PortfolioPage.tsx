import { useState } from 'react';
import PortfolioModal, { PortfolioProject } from './PortfolioModal';
import { portfolioProjects } from '../data/portfolioData';

function PortfolioPage() {
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  const openProjectModal = (project: PortfolioProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // Get unique categories
  const categories = ['All', ...Array.from(new Set(portfolioProjects.map(p => p.category)))];

  // Filter projects
  const filteredProjects = activeFilter === 'All' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen py-12 sm:py-16 lg:py-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="text-center">
          <span className="inline-block px-4 py-1.5 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full mb-4">
            Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Our Projects
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 max-w-3xl mx-auto">
            Discover our complete collection of innovative solutions that have helped businesses transform and grow
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
                  : 'bg-black/40 border border-gray-700 text-gray-400 hover:border-purple-500/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => openProjectModal(project)}
              className="group cursor-pointer animate-fadeIn"
            >
              <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-black/60 to-black/40 border border-gray-700 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 h-full">
                {/* Project Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={project.thumbnail}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-4 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-5 sm:p-6">
                  <span className="inline-block px-2.5 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-800/50 text-gray-400 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Client & Duration */}
                  {(project.client || project.duration) && (
                    <div className="flex items-center gap-4 mt-4 pt-4 border-t border-gray-800">
                      {project.client && (
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span>{project.client}</span>
                        </div>
                      )}
                      {project.duration && (
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span>{project.duration}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <svg className="w-16 h-16 text-gray-600 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-400 text-lg">No projects found in this category</p>
          </div>
        )}
      </div>

      {/* Portfolio Modal */}
      <PortfolioModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default PortfolioPage;
