import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';
import { SparkleDoodle } from './Doodles';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FDFBF7] border-t border-[#3A342C]/8 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        
        {/* Brand & Note */}
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2 font-bold font-['Quicksand'] text-lg text-[#3A342C] mb-1">
            <span className="w-6 h-6 rounded-full bg-[#F3EDE4] border border-[#D8A7A0]/40 flex items-center justify-center text-[#D8A7A0]">
              <SparkleDoodle className="w-3.5 h-3.5" />
            </span>
            <span>Iqbal Najihah</span>
          </div>
          <p className="text-xs text-[#8E8477]">
            Business Analyst | Requirement Engineer & CS Graduate (Data Science)
          </p>
        </div>

        {/* Built with love & Back to top */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="text-xs text-[#6B6256] flex items-center gap-1.5">
            <span>Crafted with care</span>
            <Heart className="w-3.5 h-3.5 text-[#D8A7A0] fill-[#D8A7A0]" />
            <span>• © {new Date().getFullYear()}</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-[#F3EDE4] text-[#3A342C] hover:bg-[#D8A7A0] hover:text-white transition-all shadow-xs"
            aria-label="Back to top of page"
            title="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
