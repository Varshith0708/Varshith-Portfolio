import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';
import { CONFIG } from '../data/config';
import { LinkedinIcon, GithubIcon } from './SocialIcons';

interface NavbarProps {
  onNotify: (msg: string) => void;
}

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Contact', href: '#contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onNotify }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionEl = document.getElementById(sections[i]);
        if (sectionEl && sectionEl.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleResumeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (CONFIG.RESUME_URL === '#' || !CONFIG.RESUME_URL) {
      onNotify('Resume coming soon. Variable configured in src/data/config.ts');
    } else {
      window.open(CONFIG.RESUME_URL, '_blank', 'noopener,noreferrer');
    }
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const targetEl = document.querySelector(href);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F7F4]/90 backdrop-blur-md border-b border-[#DCDCD6] py-3 shadow-xs'
          : 'bg-[#F7F7F4] py-5 border-b border-[#DCDCD6]/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="flex items-center gap-1.5 font-extrabold tracking-tight text-lg text-[#171717] hover:text-[#2457D6] transition-colors"
        >
          <span>VARSHITH</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#2457D6]" />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-6">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={`text-xs font-semibold tracking-wide transition-colors ${
                  isActive ? 'text-[#2457D6]' : 'text-[#626262] hover:text-[#171717]'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center space-x-3">
          <a
            href={CONFIG.GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[#626262] hover:text-[#171717] transition-colors"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <a
            href={CONFIG.LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 text-[#626262] hover:text-[#171717] transition-colors"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>

          <button
            onClick={handleResumeClick}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#171717] bg-[#EFEFEA] hover:bg-[#E5E5DF] border border-[#DCDCD6] rounded-md transition-colors"
          >
            <FileText className="w-3.5 h-3.5 text-[#2457D6]" />
            <span>Resume</span>
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#626262] hover:text-[#171717]"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7F7F4] border-b border-[#DCDCD6] px-4 py-4 space-y-3">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(item.href);
              }}
              className="block text-sm font-semibold text-[#626262] hover:text-[#171717] py-1.5"
            >
              {item.label}
            </a>
          ))}

          <div className="pt-3 border-t border-[#DCDCD6] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <a
                href={CONFIG.GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#626262] hover:text-[#171717]"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={CONFIG.LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#626262] hover:text-[#171717]"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={handleResumeClick}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-[#171717] bg-[#EFEFEA] border border-[#DCDCD6] rounded-md"
            >
              <FileText className="w-3.5 h-3.5 text-[#2457D6]" />
              <span>Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
