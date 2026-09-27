import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/skills';

export const Skills: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 border-b border-[#DCDCD6] bg-[#EFEFEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DCDCD6] mb-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-bold text-[#2457D6] tracking-widest uppercase">
              TECHNICAL SKILLS
            </span>
            <span className="font-mono text-xs font-bold text-[#171717]">02</span>
          </div>
          <span className="font-mono text-xs text-[#626262]">Core Engineering Competencies</span>
        </div>

        {/* Editorial Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const numStr = String(idx + 1).padStart(2, '0');
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={cat.category}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-6 rounded-xl bg-[#F7F7F4] border transition-all duration-200 space-y-4 ${
                  isHovered ? 'border-[#2457D6] shadow-xs' : 'border-[#DCDCD6]'
                }`}
              >
                {/* Category Title Header */}
                <div className="flex items-center justify-between pb-3 border-b border-[#DCDCD6]">
                  <div className="flex items-center gap-3">
                    <span
                      className={`font-mono text-xs font-bold transition-colors ${
                        isHovered ? 'text-[#2457D6]' : 'text-[#626262]'
                      }`}
                    >
                      {numStr}
                    </span>
                    <h3
                      className={`font-mono text-xs font-bold uppercase tracking-wider transition-transform duration-200 ${
                        isHovered ? 'text-[#171717] translate-x-1' : 'text-[#171717]'
                      }`}
                    >
                      {cat.category}
                    </h3>
                  </div>

                  {/* Animated Line Indicator */}
                  <div
                    className={`h-0.5 rounded-full transition-all duration-300 ${
                      isHovered ? 'w-8 bg-[#2457D6]' : 'w-3 bg-[#DCDCD6]'
                    }`}
                  />
                </div>

                {/* Skill List Pills */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-md bg-[#EFEFEA] border border-[#DCDCD6] text-xs font-medium text-[#171717] hover:border-[#2457D6]/50 transition-colors"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
