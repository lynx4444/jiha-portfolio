import React from 'react';
import { 
  Briefcase, 
  MapPin, 
  Sparkles, 
  FileText, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  Layers,
  Award
} from 'lucide-react';
import { SparkleDoodle, StarDoodle, SquiggleUnderline } from './Doodles';

export const Hero = () => {
  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Soft Background Accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#D8A7A0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -left-28 w-80 h-80 bg-[#A8B89F]/15 rounded-full blur-3xl pointer-events-none" />

      {/* Floating Cute Accent Stars */}
      <div className="hidden lg:block absolute top-36 left-12 animate-float">
        <SparkleDoodle className="w-8 h-8 text-[#D8A7A0]/80" />
      </div>
      <div className="hidden lg:block absolute bottom-24 right-16 animate-float" style={{ animationDelay: '1.5s' }}>
        <StarDoodle className="w-7 h-7 text-[#A8B89F]/90" />
      </div>
      <div className="hidden sm:block absolute top-48 right-1/4 animate-pulse-subtle">
        <SparkleDoodle className="w-4 h-4 text-[#D8A7A0]/60" />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F3EDE4] border border-[#D8A7A0]/30 text-xs sm:text-sm font-semibold text-[#3A342C] mb-6 shadow-xs animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="w-2.5 h-2.5 rounded-full bg-[#A8B89F] animate-pulse" />
            <span>Seeking Junior Business Analyst & Requirement Engineer Roles</span>
            <SparkleDoodle className="w-3.5 h-3.5 text-[#D8A7A0]" />
          </div>

          {/* Friendly Greeting */}
          <p className="text-base sm:text-lg font-medium text-[#6B6256] mb-2 flex items-center justify-center gap-1.5">
            <span>Hi there, I'm</span>
            <span className="font-bold text-[#3A342C] font-['Quicksand']">Jiha Kamal</span>
            <span className="animate-bounce">👋</span>
          </p>

          {/* Main Name Heading */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#3A342C] leading-tight mb-4">
            Iqbal Najihah
            <span className="block text-2xl sm:text-4xl lg:text-5xl text-[#6B6256] font-semibold mt-1">
              Binti Samsul Kamal
            </span>
          </h1>

          {/* Role Subtitle with Squiggle */}
          <div className="inline-block relative mb-6">
            <h2 className="text-lg sm:text-2xl font-bold text-[#D8A7A0] font-['Quicksand'] flex items-center justify-center gap-2">
              <SparkleDoodle className="w-5 h-5 hidden sm:inline-block" />
              <span>Business Analyst</span>
              <span className="text-[#A8B89F]">|</span>
              <span>Requirement Engineer</span>
              <StarDoodle className="w-4 h-4 hidden sm:inline-block" />
            </h2>
            <div className="flex justify-center mt-1">
              <SquiggleUnderline className="text-[#D8A7A0]/70 w-44 sm:w-56 h-3" />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-xl text-[#6B6256] max-w-2xl mx-auto font-normal leading-relaxed mb-8">
            Bridging business needs and technical delivery through data-driven requirement engineering, workflow digitization, and agile clarity.
          </p>

          {/* Location & Quick Meta */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[#6B6256] font-medium mb-10">
            <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#3A342C]/8 shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-[#D8A7A0]" />
              <span>Klang, Selangor, Malaysia</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#3A342C]/8 shadow-xs">
              <GraduationCap className="w-3.5 h-3.5 text-[#A8B89F]" />
              <span>CS Data Science @ IIUM</span>
            </div>
            <div className="flex items-center gap-1.5 bg-white/80 px-3 py-1.5 rounded-full border border-[#3A342C]/8 shadow-xs">
              <Award className="w-3.5 h-3.5 text-[#D8A7A0]" />
              <span>CGPA 3.79 (Dean's List)</span>
            </div>
          </div>

          {/* Call to Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#projects" 
              className="btn-primary w-full sm:w-auto text-base group"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>

            <a 
              href="#contact" 
              className="btn-secondary w-full sm:w-auto text-base"
            >
              <span>Get in Touch</span>
            </a>

            <a
              href="#experience"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold text-[#6B6256] hover:text-[#3A342C] hover:bg-[#F3EDE4]/80 transition-all duration-200 w-full sm:w-auto"
            >
              <Briefcase className="w-4 h-4 text-[#A8B89F]" />
              <span>View Experience</span>
            </a>
          </div>

        </div>

        {/* Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-16 max-w-4xl mx-auto">
          
          <div className="cute-card p-5 sm:p-6 bg-white flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F0F5EE] border border-[#A8B89F]/30 flex items-center justify-center text-[#55664C] shrink-0 shadow-xs">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3A342C] mb-1">Requirement Clarity</h3>
              <p className="text-xs sm:text-sm text-[#6B6256] leading-relaxed">
                Expert in authoring BRS, SRS, SDS, and user stories that keep stakeholders and devs aligned.
              </p>
            </div>
          </div>

          <div className="cute-card p-5 sm:p-6 bg-white flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#FDF2F0] border border-[#D8A7A0]/35 flex items-center justify-center text-[#9C574F] shrink-0 shadow-xs">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3A342C] mb-1">GovTech Experience</h3>
              <p className="text-xs sm:text-sm text-[#6B6256] leading-relaxed">
                Hands-on public sector requirement engineering at Ministry of Digital (Nucleus Unit).
              </p>
            </div>
          </div>

          <div className="cute-card p-5 sm:p-6 bg-white flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#F3EDE4] border border-[#3A342C]/10 flex items-center justify-center text-[#3A342C] shrink-0 shadow-xs">
              <Sparkles className="w-6 h-6 text-[#D8A7A0]" />
            </div>
            <div>
              <h3 className="text-base font-bold text-[#3A342C] mb-1">Data-Driven Mindset</h3>
              <p className="text-xs sm:text-sm text-[#6B6256] leading-relaxed">
                CS background in Data Science & Machine Learning powering rigorous process analytics.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
