import React from 'react';

export const Achievements: React.FC = () => {
  const achievements = [
    {
      category: "Academic Excellence",
      title: "9.5 / 10 CGPA",
      subtitle: "Chaitanya Bharathi Institute of Technology (CBIT)",
      description: "Consistent high academic standing in B.Tech Computer Science Engineering.",
    },
    {
      category: "Academic Achievement",
      title: "979 / 1000 Marks",
      subtitle: "Alphores Junior College (MPC)",
      description: "Top-tier academic performance in Mathematics, Physics, and Chemistry.",
    },
    {
      category: "Technical Certification",
      title: "NPTEL Elite + Gold (93%)",
      subtitle: "The Joy of Computing Using Python",
      description: "Demonstrated deep proficiency in Python algorithm design and computing fundamentals.",
    },
    {
      category: "Practical Development",
      title: "Software Engineering Internships",
      subtitle: "Infosys Springboard & Oasis Infobyte",
      description: "Hands-on experience developing web applications, Java software concepts, and responsive UIs.",
    },
  ];

  return (
    <section className="py-16 border-b border-slate-800/60 bg-[#0f1016]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8 pb-4 border-b border-slate-800 flex items-center justify-between">
          <h2 className="text-xs font-mono text-sky-400 font-bold uppercase tracking-widest">
            ACHIEVEMENTS
          </h2>
          <span className="text-xs font-mono text-slate-400">Verified Academic &amp; Technical Milestones</span>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-xl bg-[#14161f] border border-slate-800 space-y-2"
            >
              <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block">
                {item.category}
              </span>
              <h3 className="text-xl font-bold text-white">{item.title}</h3>
              <div className="text-xs font-semibold text-slate-300">{item.subtitle}</div>
              <p className="text-xs text-slate-400 leading-relaxed pt-1">{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
