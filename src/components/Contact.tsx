import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { CONFIG } from '../data/config';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-28 border-b border-[#DCDCD6] bg-[#EFEFEA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-block font-mono text-xs font-bold text-[#2457D6] uppercase tracking-widest bg-[#F7F7F4] px-3.5 py-1 rounded-md border border-[#DCDCD6]">
          GET IN TOUCH
        </div>

        <h2 className="text-4xl sm:text-6xl font-black text-[#171717] tracking-tight leading-none">
          Let's build<br />something meaningful.
        </h2>

        <p className="text-[#626262] text-base max-w-lg mx-auto leading-relaxed font-medium">
          Have an opportunity, project idea, or collaboration in mind? Let's connect.
        </p>

        {/* Primary CTA Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={CONFIG.MAILTO}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#2457D6] hover:bg-[#1d4ed8] text-white font-bold text-sm transition-all shadow-xs"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Links */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 font-mono text-xs text-[#626262]">
          <a
            href={CONFIG.MAILTO}
            className="flex items-center gap-2 hover:text-[#2457D6] transition-colors"
          >
            <Mail className="w-4 h-4 text-[#2457D6]" />
            <span>{CONFIG.EMAIL}</span>
          </a>

          <span>•</span>

          <a
            href={CONFIG.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#171717] transition-colors"
          >
            <GithubIcon className="w-4 h-4" />
            <span>GitHub</span>
          </a>

          <span>•</span>

          <a
            href={CONFIG.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#171717] transition-colors"
          >
            <LinkedinIcon className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>

      </div>
    </section>
  );
};
