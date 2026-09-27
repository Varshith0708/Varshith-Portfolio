import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { ProjectItem } from '../data/projects';
import { GithubIcon } from './SocialIcons';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#171717]/60 backdrop-blur-xs">
      <div className="relative w-full max-w-2xl bg-[#F7F7F4] border border-[#DCDCD6] rounded-2xl p-6 sm:p-8 z-10 my-8 shadow-xl max-h-[85vh] overflow-y-auto space-y-6">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-md bg-[#EFEFEA] text-[#626262] hover:text-[#171717] border border-[#DCDCD6] transition-colors"
          aria-label="Close case study"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-2 pb-4 border-b border-[#DCDCD6]">
          <div className="flex flex-wrap gap-2">
            {project.category.map((cat) => (
              <span key={cat} className="px-2.5 py-0.5 rounded bg-[#2457D6]/10 text-[#2457D6] border border-[#2457D6]/20 font-mono text-[11px] font-bold">
                {cat}
              </span>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-black text-[#171717] pr-8">
            {project.title}
          </h2>

          {project.coreConcept && (
            <p className="text-[#2457D6] font-mono text-xs font-bold">
              "{project.coreConcept}"
            </p>
          )}
        </div>

        {/* Overview */}
        <div className="space-y-1.5">
          <h3 className="text-xs font-mono font-bold text-[#171717] uppercase tracking-wider">
            OVERVIEW
          </h3>
          <p className="text-sm text-[#626262] leading-relaxed bg-[#EFEFEA] p-4 rounded-lg border border-[#DCDCD6]">
            {project.description}
          </p>
        </div>

        {/* Problem & Solution */}
        {(project.problem || project.solution) && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.problem && (
              <div className="p-4 rounded-lg bg-[#EFEFEA] border border-[#DCDCD6] space-y-1">
                <span className="text-xs font-mono font-bold text-red-600 uppercase">PROBLEM</span>
                <p className="text-xs text-[#626262] leading-relaxed">{project.problem}</p>
              </div>
            )}
            {project.solution && (
              <div className="p-4 rounded-lg bg-[#EFEFEA] border border-[#DCDCD6] space-y-1">
                <span className="text-xs font-mono font-bold text-emerald-600 uppercase">SOLUTION</span>
                <p className="text-xs text-[#626262] leading-relaxed">{project.solution}</p>
              </div>
            )}
          </div>
        )}

        {/* Conceptual Architecture Nodes */}
        {project.architectureNodes && project.architectureNodes.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-[#171717] uppercase tracking-wider">
              SYSTEM ARCHITECTURE PIPELINE
            </h3>
            <div className="p-3.5 rounded-lg bg-[#EFEFEA] border border-[#DCDCD6] font-mono text-xs flex flex-wrap items-center gap-2">
              {project.architectureNodes.map((node, i) => (
                <React.Fragment key={node}>
                  <span className="text-[#171717] font-semibold">{node}</span>
                  {i < project.architectureNodes!.length - 1 && (
                    <span className="text-[#2457D6] font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-2">
            <h3 className="text-xs font-mono font-bold text-[#171717] uppercase tracking-wider">
              KEY CAPABILITIES
            </h3>
            <ul className="space-y-1.5 text-xs text-[#626262]">
              {project.features.map((feat) => (
                <li key={feat} className="flex items-start gap-2">
                  <span className="text-[#2457D6] font-mono">•</span>
                  <span className="text-[#171717] font-medium">{feat}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technology Stack */}
        <div className="space-y-2">
          <h3 className="text-xs font-mono font-bold text-[#171717] uppercase tracking-wider">
            TECHNOLOGY STACK
          </h3>
          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {project.technologies.map((tech) => (
              <span key={tech} className="px-2.5 py-1 rounded bg-[#EFEFEA] border border-[#DCDCD6] text-[#171717] font-semibold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Verified Links */}
        {(project.githubUrl || project.demoUrl) && (
          <div className="pt-4 border-t border-[#DCDCD6] flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#171717] text-white font-semibold text-xs hover:bg-[#2457D6] transition-colors"
              >
                <GithubIcon className="w-3.5 h-3.5" /> View Code
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#2457D6] text-white font-semibold text-xs hover:bg-[#1d4ed8] transition-colors"
              >
                <ExternalLink className="w-3.5 h-3.5" /> Live Demo
              </a>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
