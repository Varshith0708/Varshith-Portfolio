import React from 'react';
import { CERTIFICATIONS } from '../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section className="py-20 border-b border-[#DCDCD6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DCDCD6] mb-10">
          <span className="font-mono text-xs font-bold text-[#2457D6] tracking-widest uppercase">
            TECHNICAL CERTIFICATIONS
          </span>
          <span className="font-mono text-xs text-[#626262]">Verified Credentials</span>
        </div>

        {/* Minimal List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.title}
              className="p-6 rounded-xl bg-[#F7F7F4] border border-[#DCDCD6] flex flex-col justify-between space-y-3"
            >
              <div>
                <span className="font-mono text-xs font-bold text-[#2457D6] uppercase tracking-wider block mb-1">
                  {cert.issuer}
                </span>
                <h3 className="text-xl font-bold text-[#171717]">{cert.title}</h3>
              </div>

              {(cert.achievement || cert.score) && (
                <div className="flex items-center gap-2 font-mono text-xs pt-1">
                  {cert.achievement && (
                    <span className="px-2.5 py-0.5 rounded bg-[#2457D6]/10 text-[#2457D6] border border-[#2457D6]/20 font-bold">
                      {cert.achievement}
                    </span>
                  )}
                  {cert.score && (
                    <span className="px-2.5 py-0.5 rounded bg-[#EFEFEA] text-[#171717] border border-[#DCDCD6] font-bold">
                      Score: {cert.score}
                    </span>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
