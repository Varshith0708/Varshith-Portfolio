import React, { useState } from 'react';

export const HeroVisual: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHoveredMonogram, setIsHoveredMonogram] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setMousePos({ x: x * 6, y: y * 6 }); // Max offset 6px
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-md mx-auto aspect-square rounded-2xl bg-[#EFEFEA] border border-[#DCDCD6] p-6 flex flex-col justify-between overflow-hidden shadow-xs"
    >
      {/* Top Spec Header */}
      <div className="flex items-center justify-between pb-3 border-b border-[#DCDCD6]">
        <span className="font-mono text-[11px] font-bold text-[#626262] uppercase tracking-wider">
          ENGINEERING IDENTITY SPEC
        </span>
        <span className="font-mono text-[10px] text-[#2457D6] font-semibold bg-[#2457D6]/10 px-2 py-0.5 rounded border border-[#2457D6]/20">
          SYSTEMS ARCHITECTURE
        </span>
      </div>

      {/* Main Interactive Diagram Center */}
      <div className="relative flex-1 flex items-center justify-center py-6">
        {/* Subtle Tech Labels Floating */}
        <div
          style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }}
          className="absolute top-2 left-2 text-[10px] font-mono text-[#626262] bg-[#F7F7F4] px-2 py-0.5 rounded border border-[#DCDCD6] transition-transform duration-100 ease-out"
        >
          REACT
        </div>
        <div
          style={{ transform: `translate(${mousePos.x * -0.5}px, ${mousePos.y * 0.5}px)` }}
          className="absolute top-2 right-2 text-[10px] font-mono text-[#626262] bg-[#F7F7F4] px-2 py-0.5 rounded border border-[#DCDCD6] transition-transform duration-100 ease-out"
        >
          JAVA
        </div>
        <div
          style={{ transform: `translate(${mousePos.x * 0.4}px, ${mousePos.y * -0.4}px)` }}
          className="absolute bottom-2 left-2 text-[10px] font-mono text-[#626262] bg-[#F7F7F4] px-2 py-0.5 rounded border border-[#DCDCD6] transition-transform duration-100 ease-out"
        >
          KAFKA
        </div>
        <div
          style={{ transform: `translate(${mousePos.x * -0.4}px, ${mousePos.y * -0.4}px)` }}
          className="absolute bottom-2 right-2 text-[10px] font-mono text-[#626262] bg-[#F7F7F4] px-2 py-0.5 rounded border border-[#DCDCD6] transition-transform duration-100 ease-out"
        >
          SPRING BOOT
        </div>

        {/* Central Monogram & Interactive Node Structure */}
        <div
          style={{ transform: `translate(${mousePos.x * 0.8}px, ${mousePos.y * 0.8}px)` }}
          className="relative flex flex-col items-center justify-center transition-transform duration-150 ease-out"
        >
          {/* Top Line Node */}
          <div className="flex flex-col items-center">
            <span className="font-mono text-[10px] font-bold text-[#2457D6] tracking-widest uppercase mb-1">
              CODE
            </span>
            <div className="w-px h-6 bg-[#DCDCD6]" />
          </div>

          {/* Middle Row with Monogram */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] font-bold text-[#626262] tracking-widest uppercase">
                DATA
              </span>
              <div className="w-8 h-px bg-[#DCDCD6]" />
            </div>

            {/* Central Monogram Box */}
            <div
              onMouseEnter={() => setIsHoveredMonogram(true)}
              onMouseLeave={() => setIsHoveredMonogram(false)}
              className={`w-20 h-20 rounded-xl bg-[#F7F7F4] border flex flex-col items-center justify-center cursor-pointer transition-all duration-200 ${
                isHoveredMonogram
                  ? 'border-[#2457D6] shadow-md scale-105'
                  : 'border-[#DCDCD6]'
              }`}
            >
              <span className="text-3xl font-extrabold tracking-tighter text-[#171717] font-mono">
                BV
              </span>
              <span className="text-[9px] font-mono text-[#2457D6] font-bold tracking-widest uppercase">
                ENGINEER
              </span>
            </div>

            <div className="flex items-center gap-2">
              <div className="w-8 h-px bg-[#DCDCD6]" />
              <span className="font-mono text-[10px] font-bold text-[#626262] tracking-widest uppercase">
                SYSTEMS
              </span>
            </div>
          </div>

          {/* Bottom Line Node */}
          <div className="flex flex-col items-center">
            <div className="w-px h-6 bg-[#DCDCD6]" />
            <span className="font-mono text-[10px] font-bold text-[#2457D6] tracking-widest uppercase mt-1">
              BUILD
            </span>
          </div>

        </div>
      </div>

      {/* Bottom Footer Info */}
      <div className="pt-3 border-t border-[#DCDCD6] flex items-center justify-between font-mono text-[11px] text-[#626262]">
        <span>CBIT CSE • Full-Stack</span>
        <span className="text-[#2457D6] font-bold">9.5 CGPA</span>
      </div>
    </div>
  );
};
