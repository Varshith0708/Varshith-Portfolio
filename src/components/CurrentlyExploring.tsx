import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PROFILE } from '../data/profile';

export const CurrentlyExploring: React.FC = () => {
  return (
    <section className="py-14 border-b border-[#DCDCD6] bg-[#EFEFEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 rounded-xl bg-[#F7F7F4] border border-[#DCDCD6] flex flex-col md:flex-row md:items-center justify-between gap-6">
          
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#2457D6] uppercase tracking-wider shrink-0">
            <span>CURRENTLY EXPLORING</span>
            <ArrowRight className="w-4 h-4 text-[#2457D6]" />
          </div>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-sans text-sm text-[#171717]">
            {PROFILE.currentlyExploring.map((item, idx) => (
              <React.Fragment key={item}>
                <span className="font-semibold text-slate-800 hover:text-[#2457D6] transition-colors cursor-default">
                  {item}
                </span>
                {idx < PROFILE.currentlyExploring.length - 1 && (
                  <span className="text-[#DCDCD6] font-mono text-xs">•</span>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
