import React from 'react';
import { Mail, ArrowRight, Download, Award, GraduationCap, MapPin, ArrowDown } from 'lucide-react';
import { CONFIG } from '../data/config';
import { PROFILE } from '../data/profile';
import { HeroVisual } from './HeroVisual';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

interface HeroProps {
  onNotify: (msg: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNotify }) => {
  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (CONFIG.RESUME_URL === '#' || !CONFIG.RESUME_URL) {
      onNotify('Resume coming soon. Variable configured in src/data/config.ts');
    } else {
      window.open(CONFIG.RESUME_URL, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-24 bg-editorial-grid border-b border-[#DCDCD6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Small Eyebrow */}
            <div className="inline-block font-mono text-xs text-[#2457D6] font-bold tracking-wider uppercase bg-[#2457D6]/10 px-3 py-1 rounded-md border border-[#2457D6]/20">
              COMPUTER SCIENCE ENGINEERING STUDENT
            </div>

            {/* Title Block */}
            <div className="space-y-1">
              <span className="text-xl font-medium text-[#626262] block">Hi, I'm</span>
              <h1 className="text-5xl sm:text-7xl font-black text-[#171717] tracking-tight leading-none">
                VARSHITH.
              </h1>
            </div>

            {/* Subheading & Paragraph */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-[#171717] leading-snug">
                Software developer building practical digital solutions.
              </h2>
              <p className="text-base text-[#626262] max-w-xl leading-relaxed">
                {PROFILE.heroSupportingText}
              </p>
            </div>

            {/* Highlights Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#EFEFEA] border border-[#DCDCD6] text-xs font-semibold text-[#171717]">
                <Award className="w-3.5 h-3.5 text-[#2457D6]" />
                <span>9.5 CGPA</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#EFEFEA] border border-[#DCDCD6] text-xs font-semibold text-[#171717]">
                <GraduationCap className="w-3.5 h-3.5 text-[#626262]" />
                <span>CBIT</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#EFEFEA] border border-[#DCDCD6] text-xs font-semibold text-[#171717]">
                <MapPin className="w-3.5 h-3.5 text-[#626262]" />
                <span>Hyderabad, India</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#2457D6] hover:bg-[#1d4ed8] text-white font-semibold text-sm transition-all shadow-xs"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={handleResumeClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#EFEFEA] hover:bg-[#E2E2DC] border border-[#DCDCD6] text-[#171717] font-semibold text-sm transition-colors"
              >
                <Download className="w-4 h-4 text-[#2457D6]" />
                <span>Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-6 border-t border-[#DCDCD6]">
              <a
                href={CONFIG.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#626262] hover:text-[#171717] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <span className="text-[#DCDCD6]">•</span>

              <a
                href={CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold text-[#626262] hover:text-[#171717] transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>

              <span className="text-[#DCDCD6]">•</span>

              <a
                href={CONFIG.MAILTO}
                className="flex items-center gap-2 text-xs font-semibold text-[#626262] hover:text-[#171717] transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>

          </div>

          {/* Right Column Visual (5 Cols) */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="pt-16 flex items-center justify-between text-xs font-mono text-[#626262]">
          <span>VARSHITH PORTFOLIO</span>
          <a href="#about" className="flex items-center gap-2 hover:text-[#2457D6] transition-colors group">
            <span className="tracking-wider uppercase font-semibold">SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:text-[#2457D6]" />
          </a>
        </div>

      </div>
    </section>
  );
};
