import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const About: React.FC = () => {
  const [hoveredInterest, setHoveredInterest] = useState<number | null>(null);

  return (
    <section id="about" className="py-24 border-b border-[#DCDCD6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DCDCD6] mb-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-bold text-[#2457D6] tracking-widest uppercase">
              ABOUT
            </span>
            <span className="font-mono text-xs font-bold text-[#171717]">01</span>
          </div>
          <span className="font-mono text-xs text-[#626262]">Background &amp; Focus</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Main Bio Text (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#171717] leading-tight">
              Computer Science Engineering student at CBIT who enjoys turning ideas into practical software.
            </h3>

            <div className="space-y-4 text-base text-[#626262] leading-relaxed">
              <p>
                I'm a Computer Science Engineering student at Chaitanya Bharathi Institute of Technology with a strong academic foundation and a passion for software development, problem solving, and emerging technologies.
              </p>
              <p>
                I enjoy turning ideas into practical software solutions and continuously improving my skills through projects, internships, technical challenges, and collaborative experiences.
              </p>
              <p>
                My technical interests include full-stack development, backend engineering, microservices, artificial intelligence, databases, distributed systems, and data structures and algorithms.
              </p>
            </div>
          </div>

          {/* Right Side Interest List (5 Cols) */}
          <div className="lg:col-span-5 p-6 rounded-xl bg-[#EFEFEA] border border-[#DCDCD6] space-y-4">
            <div className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider pb-3 border-b border-[#DCDCD6]">
              CURRENTLY INTERESTED IN
            </div>

            <div className="space-y-2.5 font-sans">
              {PROFILE.currentlyExploring.map((interest, idx) => (
                <div
                  key={interest}
                  onMouseEnter={() => setHoveredInterest(idx)}
                  onMouseLeave={() => setHoveredInterest(null)}
                  className="flex items-center justify-between py-2 px-3 rounded-md transition-colors cursor-default bg-[#F7F7F4] border border-[#DCDCD6]"
                >
                  <span
                    className={`text-xs font-semibold transition-colors ${
                      hoveredInterest === idx ? 'text-[#2457D6]' : 'text-[#171717]'
                    }`}
                  >
                    {interest}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-all ${
                      hoveredInterest === idx
                        ? 'opacity-100 text-[#2457D6] translate-x-0'
                        : 'opacity-0 -translate-x-2'
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
