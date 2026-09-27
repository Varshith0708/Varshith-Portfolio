import React from 'react';
import { PROFILE } from '../data/profile';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 border-b border-[#DCDCD6] bg-[#EFEFEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DCDCD6] mb-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-bold text-[#2457D6] tracking-widest uppercase">
              EDUCATION
            </span>
            <span className="font-mono text-xs font-bold text-[#171717]">05</span>
          </div>
          <span className="font-mono text-xs text-[#626262]">Academic Foundation</span>
        </div>

        {/* Education Editorial Blocks */}
        <div className="space-y-8">
          {PROFILE.education.map((item) => (
            <div
              key={item.institution}
              className="p-8 rounded-xl bg-[#F7F7F4] border border-[#DCDCD6] flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div className="space-y-1">
                <span className="font-mono text-xs font-bold text-[#2457D6] uppercase tracking-wider block">
                  HIGHER EDUCATION
                </span>
                <h3 className="text-2xl font-black text-[#171717]">{item.institution}</h3>
                <p className="text-base text-[#626262] font-semibold">{item.degree}</p>
                {item.location && <p className="text-xs font-mono text-[#626262]">{item.location}</p>}
              </div>

              <div className="md:text-right shrink-0">
                <span className="block font-mono text-3xl font-black text-[#171717]">
                  {item.score.replace('CGPA: ', '').replace('Score: ', '')}
                </span>
                <span className="text-xs font-mono text-[#2457D6] font-bold uppercase tracking-wider">
                  {item.score.includes('CGPA') ? 'ACADEMIC CGPA' : 'BOARD SCORE'}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
