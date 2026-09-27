import React, { useState } from 'react';

export const QuickStats: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const stats = [
    { value: "9.5", unit: "/10", label: "CGPA", detail: "CBIT Academic Standing" },
    { value: "CBIT", unit: "", label: "CSE", detail: "Computer Science Dept." },
    { value: "~500", unit: "", label: "STUDENTS REACHED", detail: "Safety Awareness Event" },
    { value: "~250", unit: "", label: "STUDENTS REACHED", detail: "Math Hunt Event" },
  ];

  return (
    <section className="py-12 border-b border-[#DCDCD6] bg-[#EFEFEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x divide-[#DCDCD6]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`p-4 md:px-6 text-center transition-all cursor-default ${
                hoveredIdx === idx ? 'bg-[#F7F7F4] rounded-lg shadow-2xs' : ''
              }`}
            >
              <div
                className={`text-4xl sm:text-5xl font-black font-mono tracking-tight transition-colors ${
                  hoveredIdx === idx ? 'text-[#2457D6]' : 'text-[#171717]'
                }`}
              >
                {stat.value}
                {stat.unit && <span className="text-xl text-[#626262] font-semibold">{stat.unit}</span>}
              </div>
              <div className="text-xs font-mono font-bold text-[#171717] mt-1 tracking-wider uppercase">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-[#626262] mt-0.5">
                {stat.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
