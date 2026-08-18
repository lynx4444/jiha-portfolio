import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight, Heart } from 'lucide-react';
import { SparkleDoodle } from './Doodles';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Involvement', href: '#involvement' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = ['hero', 'about', 'experience', 'projects', 'skills', 'education', 'involvement', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FDFBF7]/90 backdrop-blur-md shadow-xs border-b border-[#3A342C]/5 py-3.5' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a 
            href="#hero" 
            className="group flex items-center gap-2 text-lg font-bold font-['Quicksand'] tracking-tight text-[#3A342C] transition-transform hover:scale-105"
          >
            <div className="w-8 h-8 rounded-full bg-[#F3EDE4] border border-[#D8A7A0]/40 flex items-center justify-center text-[#D8A7A0] group-hover:bg-[#D8A7A0] group-hover:text-white transition-colors duration-200 shadow-xs">
              <SparkleDoodle className="w-4 h-4" />
            </div>
            <span>jiha<span className="text-[#D8A7A0]">.kamal</span></span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#F3EDE4]/70 p-1.5 rounded-full border border-[#3A342C]/5 backdrop-blur-xs">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-white text-[#3A342C] shadow-xs'
                      : 'text-[#6B6256] hover:text-[#3A342C] hover:bg-white/50'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className="btn-primary text-sm !py-2 !px-4"
            >
              <span>Let's Connect</span>
              <Sparkles className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-[#F3EDE4] text-[#3A342C] hover:bg-[#D8A7A0]/20 transition-colors focus:outline-hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[60px] bg-[#FDFBF7] border-b border-[#3A342C]/10 shadow-lg px-6 py-6 transition-all animate-in fade-in slide-in-from-top-2">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-[#3A342C] hover:bg-[#F3EDE4] transition-colors flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-[#A8B89F]">→</span>
              </a>
            ))}
            <div className="pt-3 border-t border-[#3A342C]/10 mt-2">
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="btn-primary w-full text-center"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
