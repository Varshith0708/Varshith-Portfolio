import React from 'react';
import { Mail } from 'lucide-react';
import { CONFIG } from '../data/config';
import { PROFILE } from '../data/profile';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="bg-[#F7F7F4] py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-extrabold text-base text-[#171717] tracking-tight">
              {PROFILE.fullName}
            </div>
            <p className="text-xs font-mono text-[#626262]">
              Computer Science Engineering Student &amp; Software Developer
            </p>
          </div>

          <div className="flex items-center space-x-5">
            <a
              href={CONFIG.GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#626262] hover:text-[#171717] transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <a
              href={CONFIG.LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#626262] hover:text-[#171717] transition-colors"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>

            <a
              href={CONFIG.MAILTO}
              className="text-[#626262] hover:text-[#171717] transition-colors"
              aria-label="Email Contact"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

        </div>

        <div className="mt-8 pt-6 border-t border-[#DCDCD6] text-center text-xs font-mono text-[#626262]">
          &copy; {currentYear} {PROFILE.fullName}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
