import React from 'react';
import { 
  Sparkles, 
  Target, 
  Users, 
  Database, 
  GitBranch, 
  CheckCircle, 
  Compass,
  FileSpreadsheet,
  Workflow
} from 'lucide-react';
import { SparkleDoodle, StarDoodle, LeafDoodle } from './Doodles';

export const About = () => {
  const coreStrengths = [
    {
      title: 'Requirement Engineering',
      desc: 'Translating complex high-level visions into structured BRS, SRS, SDS documents and granular user stories.',
      icon: Workflow,
      color: 'rose'
    },
    {
      title: 'Stakeholder Facilitation',
      desc: 'Bridging communication gaps between Cabinet/business leaders and engineering squads with clarity.',
      icon: Users,
      color: 'sage'
    },
    {
      title: 'Agile Backlog Delivery',
      desc: 'Sprint planning, grooming, and task tracking using Jira and Plane to maintain continuous momentum.',
      icon: GitBranch,
      color: 'rose'
    },
    {
      title: 'Data & Technical Acumen',
      desc: 'Leveraging Computer Science (Data Science) training with Python, SQL, and AI to inform business decisions.',
      icon: Database,
      color: 'sage'
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F3EDE4] relative overflow-hidden">
      {/* Decorative leafy doodle */}
      <div className="absolute top-10 right-10 opacity-30 pointer-events-none hidden lg:block">
        <LeafDoodle className="w-16 h-16 text-[#A8B89F]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#A8B89F]/30 text-xs font-bold text-[#55664C] uppercase tracking-wider mb-3 shadow-xs">
            <LeafDoodle className="w-3.5 h-3.5" />
            <span>About Jiha</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A342C]">
            Bridging Business Vision & Engineering Clarity
          </h2>
          <p className="text-sm sm:text-base text-[#6B6256] mt-2">
            A proactive problem solver dedicated to turning business ambiguity into functional excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Story / Narrative Card */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#3A342C]/6 shadow-sm relative">
              <div className="absolute top-6 right-6">
                <SparkleDoodle className="w-6 h-6 text-[#D8A7A0]/60" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#3A342C] mb-4 flex items-center gap-2">
                <span>Who I Am & What I Do</span>
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#6B6256] leading-relaxed">
                <p>
                  I am a detail-oriented final-year Computer Science student specializing in 
                  <strong className="text-[#3A342C] font-semibold"> Data Science & Computational Intelligence </strong> 
                  at the International Islamic University Malaysia (IIUM), maintaining a 
                  <strong className="text-[#3A342C] font-semibold"> CGPA of 3.79 (Dean's List every semester)</strong>.
                </p>

                <p>
                  My core passion lies in the intersection of business strategy and technical systems. Through hands-on experience as a 
                  <strong className="text-[#3A342C] font-semibold"> Requirement Engineer Intern at GovTech Malaysia (Ministry of Digital)</strong>, 
                  I have actively facilitated stakeholder workshops, refined agile backlogs in Jira and Plane, and authored comprehensive specifications (BRS, SRS, SDS) for critical public sector digital solutions.
                </p>

                <p>
                  I am currently seeking a <strong className="text-[#3A342C] font-semibold">Junior Business Analyst / Requirement Engineer</strong> role where I can apply my analytical rigor, technical foundation, and stakeholder empathy to streamline workflows and deliver impactful digital products.
                </p>
              </div>

              {/* Quick Info Badges */}
              <div className="mt-6 pt-6 border-t border-[#3A342C]/8 flex flex-wrap gap-2.5">
                <span className="badge-sage cute-pill text-xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Agile Requirements Management
                </span>
                <span className="badge-rose cute-pill text-xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Workflow Digitization
                </span>
                <span className="badge-sage cute-pill text-xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Stakeholder Facilitation
                </span>
                <span className="badge-rose cute-pill text-xs">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Data-Driven Analysis
                </span>
              </div>
            </div>

            {/* Quote Card */}
            <div className="bg-[#FAF6F0] rounded-2xl p-5 border border-[#D8A7A0]/30 flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-[#D8A7A0]/20 flex items-center justify-center shrink-0 text-[#9C574F]">
                <Target className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-[#554C41] italic leading-relaxed">
                "Great software begins with deep empathy for the user's problem and crystal-clear communication with the team building the solution."
              </p>
            </div>
          </div>

          {/* Pillars of Value Grid */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-[#3A342C] px-1 flex items-center gap-2">
              <span>Core Competencies</span>
              <StarDoodle className="w-4 h-4 text-[#D8A7A0]" />
            </h3>

            {coreStrengths.map((item, idx) => {
              const Icon = item.icon;
              const isSage = item.color === 'sage';
              return (
                <div 
                  key={idx}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-[#3A342C]/6 shadow-xs hover:border-[#D8A7A0]/40 transition-all duration-200"
                >
                  <div className="flex items-start gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSage ? 'bg-[#F0F5EE] text-[#55664C]' : 'bg-[#FDF2F0] text-[#9C574F]'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-[#3A342C]">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6B6256] mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
