import React from 'react';
import { PROFILE } from '../data/profile';

export const Leadership: React.FC = () => {
  return (
    <section id="leadership" className="py-24 border-b border-[#DCDCD6] bg-[#EFEFEA]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#DCDCD6] mb-12">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs font-bold text-[#2457D6] tracking-widest uppercase">
              LEADERSHIP &amp; ACTIVITIES
            </span>
            <span className="font-mono text-xs font-bold text-[#171717]">06</span>
          </div>
          <span className="font-mono text-xs text-[#626262]">Campus Event Management</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Title Label (4 Cols) */}
          <div className="lg:col-span-4 space-y-2">
            <span className="font-mono text-5xl font-black text-[#2457D6] block">06</span>
            <h3 className="text-3xl font-extrabold text-[#171717] leading-tight">
              Leadership &amp; Team Initiatives
            </h3>
            <p className="text-sm text-[#626262]">
              Organizing student events and managing campus team activities at CBIT.
            </p>
          </div>

          {/* Right Content Breakdown (8 Cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Roles */}
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider block">
                ORGANIZATIONAL ROLES
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROFILE.leadershipRoles.map((role) => (
                  <div
                    key={role.organization}
                    className="p-5 rounded-xl bg-[#F7F7F4] border border-[#DCDCD6] space-y-2"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-base font-bold text-[#171717]">{role.organization}</h4>
                      <span className="px-2 py-0.5 rounded bg-[#2457D6]/10 text-[#2457D6] border border-[#2457D6]/20 font-mono text-[10px] font-bold">
                        {role.role}
                      </span>
                    </div>
                    <p className="text-xs text-[#626262] leading-relaxed">
                      "{role.description}"
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Event Experience Reach */}
            <div className="space-y-4 pt-4 border-t border-[#DCDCD6]">
              <span className="font-mono text-xs font-bold text-[#171717] uppercase tracking-wider block">
                EVENT EXPERIENCE &amp; STUDENT REACH
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROFILE.leadershipEvents.map((evt) => (
                  <div
                    key={evt.title}
                    className="p-5 rounded-xl bg-[#F7F7F4] border border-[#DCDCD6] flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <h5 className="text-sm font-bold text-[#171717]">{evt.title}</h5>
                      <p className="text-[11px] font-mono text-[#626262]">Campus Activity</p>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="block font-mono text-2xl font-black text-[#2457D6]">
                        {evt.reach.split(' ')[1] || '~500'}
                      </span>
                      <span className="text-[10px] font-mono text-[#626262]">students reached</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
