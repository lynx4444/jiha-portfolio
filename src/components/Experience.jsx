import React from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  FileCode, 
  BarChart3, 
  Users2, 
  Layers,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { SparkleDoodle, StarDoodle } from './Doodles';

export const Experience = () => {
  const responsibilities = [
    {
      title: 'End-to-End Requirement Documentation',
      desc: 'Elicits, analyzes, and authors Business Requirement Specifications (BRS), Software Requirement Specifications (SRS), Software Design Specifications (SDS), and comprehensive user manuals for public sector digital initiatives.',
      icon: FileCode
    },
    {
      title: 'Agile Backlog Refinement & Sprint Tracking',
      desc: 'Actively utilizes Jira and Plane to maintain product backlogs, write clear acceptance criteria, organize sprint boards, and track cross-functional development milestones.',
      icon: Layers
    },
    {
      title: 'Interactive Data Visualization Spike',
      desc: 'Spearheaded an exploratory technical research spike evaluating modern interactive data visualization frameworks to render high-volume citizen-facing national data effectively.',
      icon: BarChart3
    },
    {
      title: 'High-Level Stakeholder Alignment',
      desc: 'Translates high-level Cabinet- and Parliamentary-level strategic visions into granular, actionable functional and non-functional requirements ready for engineering execution.',
      icon: Users2
    }
  ];

  const toolsAndArtifacts = [
    'Business Requirement Specs (BRS)',
    'Software Requirement Specs (SRS)',
    'System Design Specs (SDS)',
    'Jira Agile',
    'Plane Project Management',
    'Stakeholder Workshops',
    'Data Visualization Spikes',
    'User Manual Authoring'
  ];

  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE4] border border-[#D8A7A0]/30 text-xs font-bold text-[#9C574F] uppercase tracking-wider mb-3 shadow-xs">
            <SparkleDoodle className="w-3.5 h-3.5 text-[#D8A7A0]" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A342C]">
            Work Experience
          </h2>
          <p className="text-sm sm:text-base text-[#6B6256] mt-2">
            Hands-on requirement engineering and digital transformation in the public sector.
          </p>
        </div>

        {/* Experience Timeline Card */}
        <div className="relative">
          {/* Timeline Connector Line */}
          <div className="hidden sm:block absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#D8A7A0] via-[#A8B89F] to-[#D8A7A0]/30" />

          {/* Main GovTech Card */}
          <div className="sm:pl-20 relative">
            
            {/* Timeline Dot Icon */}
            <div className="hidden sm:flex absolute left-4 top-6 w-8 h-8 rounded-full bg-[#FAF6F0] border-2 border-[#D8A7A0] items-center justify-center text-[#9C574F] shadow-sm">
              <SparkleDoodle className="w-4 h-4 text-[#D8A7A0]" />
            </div>

            <div className="cute-card bg-white p-6 sm:p-9 border border-[#3A342C]/8">
              
              {/* Header Info */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#3A342C]/8 pb-6 mb-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="badge-rose cute-pill text-xs font-bold">
                      Current Role
                    </span>
                    <span className="badge-sage cute-pill text-xs">
                      Public Sector Tech
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#3A342C]">
                    Requirement Engineer Intern
                  </h3>

                  <div className="text-base sm:text-lg font-semibold text-[#D8A7A0] mt-0.5 flex flex-wrap items-center gap-1.5">
                    <span>GovTech Malaysia (Nucleus Unit)</span>
                    <span className="text-[#A8B89F] font-normal">—</span>
                    <span className="text-[#6B6256]">Ministry of Digital</span>
                  </div>
                </div>

                <div className="flex flex-col sm:items-end gap-1.5 text-xs sm:text-sm text-[#6B6256]">
                  <div className="flex items-center gap-1.5 bg-[#F3EDE4] px-3 py-1.5 rounded-full font-medium text-[#3A342C]">
                    <Calendar className="w-3.5 h-3.5 text-[#D8A7A0]" />
                    <span>March 2026 – Present</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-[#8E8477]">
                    <MapPin className="w-3.5 h-3.5 text-[#A8B89F]" />
                    <span>Putrajaya / Cyberjaya, Malaysia</span>
                  </div>
                </div>
              </div>

              {/* Responsibilities Grid */}
              <div className="space-y-4 mb-8">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#8E8477]">
                  Key Contributions & Deliverables
                </h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {responsibilities.map((item, idx) => {
                    const Icon = item.icon;
                    return (
                      <div 
                        key={idx} 
                        className="p-4 rounded-2xl bg-[#FDFBF7] border border-[#3A342C]/6 hover:border-[#D8A7A0]/40 transition-colors"
                      >
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-[#FAF0EE] text-[#9C574F] flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h5 className="text-sm font-bold text-[#3A342C] mb-1">
                              {item.title}
                            </h5>
                            <p className="text-xs sm:text-sm text-[#6B6256] leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Artifacts & Tools Tags */}
              <div className="pt-6 border-t border-[#3A342C]/8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#8E8477] mb-3">
                  Applied Frameworks & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {toolsAndArtifacts.map((tag, idx) => (
                    <span 
                      key={idx}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#F0F5EE] text-[#55664C] border border-[#A8B89F]/30"
                    >
                      <CheckCircle2 className="w-3 h-3 text-[#A8B89F]" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
