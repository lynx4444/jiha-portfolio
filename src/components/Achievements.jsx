import React from 'react';
import { 
  Trophy, 
  Award, 
  Bot, 
  Users, 
  Heart, 
  Sparkles, 
  Calendar, 
  Globe, 
  Flag
} from 'lucide-react';
import { SparkleDoodle, StarDoodle } from './Doodles';

export const Achievements = () => {
  const achievements = [
    {
      title: "Dean's List Award (Every Semester)",
      category: 'Academic Honor',
      year: '2022 – Present',
      organization: 'Kulliyyah of ICT, IIUM',
      desc: 'Recognized consecutively every academic semester for maintaining a CGPA of 3.79 in Bachelor of Computer Science.',
      icon: Trophy,
      color: 'rose',
      badge: 'Academic Excellence'
    },
    {
      title: 'Competition Judge — IIUM Robotic Competition',
      category: 'Leadership & Technical Judging',
      year: '2024 & 2025',
      organization: 'IIUM Robotics Club (International Level)',
      desc: 'Appointed as an official judge evaluating international student robotics prototypes, technical design compliance, and autonomous programming runs.',
      icon: Bot,
      color: 'sage',
      badge: 'International Event'
    },
    {
      title: 'Organizing Committee Member',
      category: 'Campus Leadership',
      year: '2024',
      organization: 'SCITECH 10.0 | I-HAX | IIUM Sports Carnival',
      desc: 'Orchestrated event operations, participant logistics, and cross-departmental coordination across major tech symposia (SCITECH, I-HAX hackathon) and university-wide sports festivals.',
      icon: Users,
      color: 'rose',
      badge: 'Major Tech & Sports Events'
    },
    {
      title: 'Student Volunteer — IDEAS Autism Centre',
      category: 'Community Engagement',
      year: '2023',
      organization: 'IDEAS Autism Centre Sport Day',
      desc: 'Supported neurodivergent children and their families through guided athletic activities, sensory facilitation, and day-of event coordination.',
      icon: Heart,
      color: 'sage',
      badge: 'Community Impact'
    }
  ];

  return (
    <section id="involvement" className="py-20 sm:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE4] border border-[#A8B89F]/30 text-xs font-bold text-[#55664C] uppercase tracking-wider mb-3 shadow-xs">
            <Award className="w-3.5 h-3.5" />
            <span>Leadership & Community</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A342C]">
            Achievements & Involvement
          </h2>
          <p className="text-sm sm:text-base text-[#6B6256] mt-2">
            Demonstrated commitment through technical judging, committee leadership, and community service.
          </p>
        </div>

        {/* Grid of Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            const isRose = item.color === 'rose';

            return (
              <div 
                key={idx}
                className="cute-card bg-white p-6 sm:p-7 border border-[#3A342C]/8 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                      isRose ? 'bg-[#FDF2F0] text-[#9C574F]' : 'bg-[#F0F5EE] text-[#55664C]'
                    } shadow-xs`}>
                      <Icon className="w-5 h-5" />
                    </div>

                    <div className="flex items-center gap-2">
                      <span className={`cute-pill text-xs ${isRose ? 'badge-rose' : 'badge-sage'}`}>
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-semibold text-[#8E8477] mb-1">
                    <span>{item.category}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#3A342C]">
                      <Calendar className="w-3 h-3 text-[#D8A7A0]" />
                      {item.year}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#3A342C] mb-1">
                    {item.title}
                  </h3>

                  <div className="text-xs sm:text-sm font-semibold text-[#D8A7A0] mb-3">
                    {item.organization}
                  </div>

                  <p className="text-xs sm:text-sm text-[#6B6256] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t border-[#3A342C]/6 flex items-center justify-between text-xs text-[#8E8477]">
                  <span className="font-medium">Verified Involvement</span>
                  <SparkleDoodle className="w-3.5 h-3.5 text-[#A8B89F]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
