import React, { useState } from 'react';
import { 
  FileCheck2, 
  Wrench, 
  Code2, 
  HeartHandshake, 
  Sparkles, 
  Check, 
  Search
} from 'lucide-react';
import { SparkleDoodle, StarDoodle, SquiggleUnderline } from './Doodles';

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const skillCategories = [
    {
      category: 'Business Analysis',
      icon: FileCheck2,
      accent: 'sage',
      skills: [
        'Requirement Elicitation',
        'Requirement Review',
        'BRS / SRS / SDS Documentation',
        'Agile / Scrum Frameworks',
        'User Stories & Acceptance Criteria',
        'Process Workflow Mapping'
      ]
    },
    {
      category: 'Tools',
      icon: Wrench,
      accent: 'rose',
      skills: [
        'Jira Software',
        'Plane PM',
        'Figma UI/UX',
        'Git & GitHub',
        'Microsoft Office & Google Workspace'
      ]
    },
    {
      category: 'Technical',
      icon: Code2,
      accent: 'sage',
      skills: [
        'Python (NumPy, Pandas)',
        'SQL (PostgreSQL / MySQL)',
        'Java',
        'PyTorch (Torchvision)',
        'Data Modeling & Analytics'
      ]
    },
    {
      category: 'Soft Skills',
      icon: HeartHandshake,
      accent: 'rose',
      skills: [
        'Analytical Thinking',
        'Stakeholder Management',
        'Problem-Solving',
        'Cross-Functional Communication',
        'Adaptability & Fast Learner'
      ]
    }
  ];

  const filterTabs = ['All', 'Business Analysis', 'Tools', 'Technical', 'Soft Skills'];

  const filteredCategories = activeFilter === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.category === activeFilter);

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#FDFBF7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F3EDE4] border border-[#A8B89F]/30 text-xs font-bold text-[#55664C] uppercase tracking-wider mb-3 shadow-xs">
            <SparkleDoodle className="w-3.5 h-3.5 text-[#A8B89F]" />
            <span>Skillset & Tooling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A342C]">
            Skills & Competencies
          </h2>
          <p className="text-sm sm:text-base text-[#6B6256] mt-2">
            A balanced blend of requirements engineering, technical tools, and collaborative problem-solving.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#A8B89F] text-white shadow-xs scale-105'
                    : 'bg-[#F3EDE4] text-[#6B6256] hover:bg-[#EAE2D7] hover:text-[#3A342C]'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group, idx) => {
            const Icon = group.icon;
            const isRose = group.accent === 'rose';

            return (
              <div 
                key={idx}
                className="cute-card bg-white p-6 sm:p-7 border border-[#3A342C]/8 relative overflow-hidden"
              >
                {/* Header */}
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${
                    isRose ? 'bg-[#FDF2F0] text-[#9C574F]' : 'bg-[#F0F5EE] text-[#55664C]'
                  } shadow-xs`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#3A342C]">
                      {group.category}
                    </h3>
                    <p className="text-xs text-[#8E8477]">
                      {group.skills.length} core competencies
                    </p>
                  </div>
                </div>

                {/* Tags Pill List */}
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="cute-pill badge-sage text-xs sm:text-sm py-1.5 px-3.5 hover:scale-105 transition-transform"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#55664C]/60" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive Bottom Callout */}
        <div className="mt-12 p-6 rounded-3xl bg-[#F3EDE4] border border-[#3A342C]/6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#D8A7A0] shrink-0 shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#3A342C]">
                Looking for specific framework proficiencies?
              </h4>
              <p className="text-xs sm:text-sm text-[#6B6256]">
                I quickly adapt to custom agile workflows, enterprise documentation standards, and data toolchains.
              </p>
            </div>
          </div>
          <a
            href="#contact"
            className="btn-primary text-xs sm:text-sm whitespace-nowrap !py-2 !px-4"
          >
            Inquire in Detail
          </a>
        </div>

      </div>
    </section>
  );
};
