import React, { useState } from 'react';
import { PROFILE } from '../data/profile';

export const HowIBuild: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="py-24 border-b border-[#DCDCD6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DCDCD6] mb-12">
          <span className="font-mono text-xs font-bold text-[#2457D6] tracking-widest uppercase">
            HOW I BUILD
          </span>
          <span className="font-mono text-xs text-[#626262]">Engineering Methodology</span>
        </div>

        {/* Interactive Horizontal Process Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PROFILE.howIBuildSteps.map((stepItem, idx) => {
            const isHovered = activeStep === idx;

            return (
              <div
                key={stepItem.step}
                onMouseEnter={() => setActiveStep(idx)}
                onMouseLeave={() => setActiveStep(null)}
                className={`p-6 rounded-xl border transition-all duration-200 cursor-default flex flex-col justify-between space-y-4 ${
                  isHovered
                    ? 'bg-[#EFEFEA] border-[#2457D6] -translate-y-1 shadow-xs'
                    : 'bg-[#F7F7F4] border-[#DCDCD6]'
                }`}
              >
                <div className="flex items-center justify-between border-b border-[#DCDCD6] pb-3">
                  <span
                    className={`font-mono text-base font-black transition-colors ${
                      isHovered ? 'text-[#2457D6]' : 'text-[#626262]'
                    }`}
                  >
                    {stepItem.step}
                  </span>

                  {/* Horizontal connecting indicator */}
                  {idx < PROFILE.howIBuildSteps.length - 1 && (
                    <span
                      className={`hidden lg:inline font-mono text-xs transition-colors ${
                        isHovered ? 'text-[#2457D6] font-bold' : 'text-[#DCDCD6]'
                      }`}
                    >
                      ─────────
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <h3
                    className={`text-lg font-bold transition-colors ${
                      isHovered ? 'text-[#2457D6]' : 'text-[#171717]'
                    }`}
                  >
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-[#626262] leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
