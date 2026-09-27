import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from '../data/projects';
import type { ProjectItem } from '../data/projects';
import { FeaturedProject } from './FeaturedProject';

interface ProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
}

const CATEGORIES = ['All', 'Full Stack', 'Backend', 'Frontend', 'AI / ML'] as const;

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category.includes(selectedCategory as any);
  });

  return (
    <section id="projects" className="py-24 border-b border-[#DCDCD6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between pb-4 border-b border-[#DCDCD6] mb-12 gap-4">
          <div>
            <div className="flex items-center gap-4">
              <span className="font-mono text-xs font-bold text-[#2457D6] tracking-widest uppercase">
                SELECTED WORK
              </span>
              <span className="font-mono text-xs font-bold text-[#171717]">04</span>
            </div>
            <h2 className="text-2xl font-bold text-[#171717] mt-1">Practical Software Solutions</h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-mono font-semibold rounded-md transition-colors ${
                    active
                      ? 'bg-[#2457D6] text-white'
                      : 'bg-[#EFEFEA] text-[#626262] hover:text-[#171717] border border-[#DCDCD6]'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Case Study (01) */}
        {selectedCategory === 'All' && (
          <FeaturedProject onSelectProject={onSelectProject} />
        )}

        {/* Project Horizontal List Rows */}
        <div className="space-y-4">
          {filteredProjects
            .filter((p) => selectedCategory !== 'All' || !p.isFeatured)
            .map((project, index) => {
              const projectNum = String(index + 2).padStart(2, '0');
              const isHovered = hoveredProjectId === project.id;

              return (
                <div
                  key={project.id}
                  onMouseEnter={() => setHoveredProjectId(project.id)}
                  onMouseLeave={() => setHoveredProjectId(null)}
                  onClick={() => onSelectProject(project)}
                  className={`p-6 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6 ${
                    isHovered
                      ? 'bg-[#EFEFEA] border-[#2457D6] shadow-xs'
                      : 'bg-[#F7F7F4] border-[#DCDCD6]'
                  }`}
                >
                  {/* Left Number & Title */}
                  <div className="flex items-start gap-5 flex-1">
                    <span
                      className={`font-mono text-lg font-black transition-colors ${
                        isHovered ? 'text-[#2457D6] translate-x-1' : 'text-[#626262]'
                      }`}
                    >
                      {projectNum}
                    </span>

                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <h3
                          className={`text-xl font-bold transition-colors ${
                            isHovered ? 'text-[#2457D6]' : 'text-[#171717]'
                          }`}
                        >
                          {project.title}
                        </h3>
                        <div className="flex flex-wrap gap-1">
                          {project.category.map((cat) => (
                            <span key={cat} className="text-[10px] font-mono text-[#2457D6] bg-[#2457D6]/10 px-2 py-0.5 rounded border border-[#2457D6]/20">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-[#626262] leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  {/* Right Tech Tags & Arrow */}
                  <div className="flex items-center justify-between md:justify-end gap-6 shrink-0">
                    <div className="font-mono text-xs text-[#626262]">
                      {project.technologies.slice(0, 3).join(' · ')}
                    </div>

                    <div
                      className={`p-2 rounded-md transition-all ${
                        isHovered ? 'bg-[#2457D6] text-white translate-x-1' : 'bg-[#EFEFEA] text-[#626262]'
                      }`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

      </div>
    </section>
  );
};
