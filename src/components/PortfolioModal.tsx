import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

export interface PortfolioProject {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  description: string;
  technologies: string[];
  link?: string;
  client?: string;
  duration?: string;
}

interface PortfolioModalProps {
  project: PortfolioProject | null;
  isOpen: boolean;
  onClose: () => void;
}

function PortfolioModal({ project, isOpen, onClose }: PortfolioModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = '0px'; // Prevent layout shift
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  useEffect(() => {
    setCurrentImageIndex(0);
  }, [project]);

  if (!isOpen || !project) return null;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  // Prevent scroll on backdrop touch/wheel
  const handleBackdropWheel = (e: React.WheelEvent) => {
    e.stopPropagation();
  };

  const modalContent = (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 lg:p-8"
      onWheel={handleBackdropWheel}
      style={{ isolation: 'isolate' }}
    >
      {/* Backdrop with strong blur */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-xl animate-fadeIn"
        onClick={onClose}
        onTouchMove={(e) => e.preventDefault()}
      />
      
      {/* Modal Content - Centered */}
      <div className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto bg-gradient-to-br from-gray-900/95 to-black/95 border border-gray-700/50 rounded-2xl shadow-2xl shadow-purple-500/10 animate-modalSlideIn"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#6b21a8 transparent'
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 bg-black/50 border border-gray-700 rounded-full text-gray-400 hover:text-white hover:border-gray-500 transition-all"
          aria-label="Close modal"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Image Gallery */}
        <div className="relative aspect-video bg-black/50">
          <img
            src={project.images[currentImageIndex]}
            alt={`${project.title} - Image ${currentImageIndex + 1}`}
            className="w-full h-full object-cover"
          />
          
          {project.images.length > 1 && (
            <>
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 border border-gray-700 rounded-full text-white hover:bg-black/80 transition-all"
                aria-label="Previous image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/60 border border-gray-700 rounded-full text-white hover:bg-black/80 transition-all"
                aria-label="Next image"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Image Indicators */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {project.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex 
                        ? 'bg-purple-500 w-6' 
                        : 'bg-gray-500 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Project Details */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs sm:text-sm font-medium rounded-full mb-3">
                {project.category}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                {project.title}
              </h2>
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all text-sm"
              >
                <span>Visit Project</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-300 leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Project Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {project.client && (
              <div className="bg-black/30 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-500 text-sm mb-1">Client</p>
                <p className="text-white font-medium">{project.client}</p>
              </div>
            )}
            {project.duration && (
              <div className="bg-black/30 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-500 text-sm mb-1">Duration</p>
                <p className="text-white font-medium">{project.duration}</p>
              </div>
            )}
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-white font-semibold mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 bg-gray-800/50 border border-gray-700 text-gray-300 text-sm rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        
        .animate-modalSlideIn {
          animation: modalSlideIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );

  // Use portal to render modal at document body level
  // This ensures it's not affected by parent transforms or z-index contexts
  return createPortal(modalContent, document.body);
}

export default PortfolioModal;
