import React, { useState } from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { EXPERIENCES } from '../data/experience';

export const Experience: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="experience" className="py-24 border-b border-[#DCDCD6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DCDCD6] mb-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-bold text-[#2457D6] tracking-widest uppercase">
              EXPERIENCE
            </span>
            <span className="font-mono text-xs font-bold text-[#171717]">03</span>
          </div>
          <span className="font-mono text-xs text-[#626262]">Virtual Internships &amp; Practical Training</span>
        </div>

        {/* Vertical Timeline */}
        <div className="relative pl-6 sm:pl-8 border-l border-[#DCDCD6] space-y-10">
          {EXPERIENCES.map((exp, idx) => {
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={exp.company}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`relative group transition-all duration-200 p-6 rounded-xl border ${
                  isHovered
                    ? 'bg-[#EFEFEA] border-[#2457D6] translate-x-1 shadow-xs'
                    : 'bg-[#F7F7F4] border-[#DCDCD6]'
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute -left-[31px] sm:-left-[39px] top-8 w-3 h-3 rounded-full border-2 transition-colors ${
                    isHovered ? 'bg-[#2457D6] border-[#2457D6]' : 'bg-[#F7F7F4] border-[#626262]'
                  }`}
                />

                <div className="space-y-3">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#DCDCD6] pb-3">
                    <div>
                      <span
                        className={`font-mono text-xs font-bold transition-colors ${
                          isHovered ? 'text-[#2457D6]' : 'text-[#626262]'
                        }`}
                      >
                        2026
                      </span>
                      <h3 className="text-xl font-bold text-[#171717]">{exp.company}</h3>
                      <p className="text-xs font-mono text-[#2457D6] font-bold mt-0.5">{exp.role}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-[#626262] bg-[#EFEFEA] px-3 py-1 rounded border border-[#DCDCD6] flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#2457D6]" /> Virtual Internship
                      </span>
                      <ArrowRight
                        className={`w-4 h-4 transition-all ${
                          isHovered
                            ? 'opacity-100 text-[#2457D6] translate-x-1'
                            : 'opacity-0 -translate-x-2'
                        }`}
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-[#626262] leading-relaxed">
                    "{exp.description}"
                  </p>

                  {/* Projects */}
                  {exp.projects && exp.projects.length > 0 && (
                    <div className="pt-1">
                      <span className="text-xs font-mono text-[#626262] block mb-1.5 font-bold">
                        PROJECTS DEVELOPED:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {exp.projects.map((proj) => (
                          <span
                            key={proj}
                            className="text-xs text-[#171717] font-semibold bg-[#F7F7F4] px-2.5 py-1 rounded border border-[#DCDCD6]"
                          >
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Key Highlights */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono text-[#626262] font-bold mr-2">FOCUS:</span>
                    {exp.highlights.map((highlight, i) => (
                      <React.Fragment key={highlight}>
                        <span className="text-xs text-[#171717] font-medium">{highlight}</span>
                        {i < exp.highlights.length - 1 && (
                          <span className="text-[#DCDCD6] font-mono text-xs">•</span>
                        )}
                      </React.Fragment>
                    ))}
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
