import React from 'react';
import { 
  GraduationCap, 
  Award, 
  Calendar, 
  MapPin, 
  BookOpen, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SparkleDoodle, StarDoodle } from './Doodles';

export const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Computer Science (Honours)',
      specialization: 'Specialization in Data Science & Computational Intelligence',
      institution: 'International Islamic University Malaysia (IIUM)',
      campus: 'Gombak Campus, Kuala Lumpur',
      period: 'Oct 2022 – Present (Expected Dec 2026)',
      grade: 'CGPA 3.79',
      gradeHighlight: "Dean's List Every Semester",
      badgeColor: 'rose',
      description: 'Rigorous training in software engineering, requirements elicitation, computational models, database architecture, machine learning, and data-driven analytical decision making.',
      coursework: [
        'Requirements Engineering',
        'Software Engineering Practice',
        'Database Systems & SQL',
        'Data Mining & Warehousing',
        'Computational Intelligence & ML',
        'Business Process Management'
      ]
    },
    {
      degree: 'Foundation in Engineering and Computer Science',
      specialization: 'Pre-University Computing & Physical Sciences',
      institution: 'Centre for Foundation Studies (CFS IIUM)',
      campus: 'Gambang Campus, Pahang',
      period: 'Aug 2021 – June 2022',
      grade: 'CGPA 3.33',
      gradeHighlight: 'Graduated with Distinction',
      badgeColor: 'sage',
      description: 'Strong foundation in structured programming, discrete mathematics, calculus, computational logic, and physical sciences.',
      coursework: [
        'Structured Programming (C++)',
        'Discrete Mathematics',
        'Algebra & Calculus',
        'Physics & Computing Fundamentals'
      ]
    }
  ];

  return (
    <section id="education" className="py-20 sm:py-28 bg-[#F3EDE4] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D8A7A0]/30 text-xs font-bold text-[#9C574F] uppercase tracking-wider mb-3 shadow-xs">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A342C]">
            Education & Qualifications
          </h2>
          <p className="text-sm sm:text-base text-[#6B6256] mt-2">
            A solid academic track record built on continuous excellence and technical foundation.
          </p>
        </div>

        {/* Education Timeline */}
        <div className="space-y-8">
          {educationData.map((item, idx) => {
            const isRose = item.badgeColor === 'rose';

            return (
              <div 
                key={idx}
                className="cute-card bg-white p-6 sm:p-9 border border-[#3A342C]/8 relative"
              >
                {/* Top Row: Degree & Period */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 border-b border-[#3A342C]/8 pb-6 mb-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <span className={`cute-pill text-xs font-bold ${isRose ? 'badge-rose' : 'badge-sage'}`}>
                        <Award className="w-3 h-3" />
                        {item.grade}
                      </span>
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold bg-[#FDFBF7] text-[#3A342C] border border-[#3A342C]/10">
                        <SparkleDoodle className="w-3 h-3 text-[#D8A7A0]" />
                        {item.gradeHighlight}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#3A342C]">
                      {item.degree}
                    </h3>
                    <p className="text-sm sm:text-base font-semibold text-[#D8A7A0] mt-0.5">
                      {item.specialization}
                    </p>
                    <p className="text-sm text-[#6B6256] mt-1 font-medium">
                      {item.institution} — <span className="text-[#8E8477]">{item.campus}</span>
                    </p>
                  </div>

                  <div className="flex items-center gap-1.5 bg-[#F3EDE4] px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-semibold text-[#3A342C] shrink-0 self-start">
                    <Calendar className="w-3.5 h-3.5 text-[#D8A7A0]" />
                    <span>{item.period}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-[#6B6256] leading-relaxed mb-6">
                  {item.description}
                </p>

                {/* Coursework Pills */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#8E8477] mb-3 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#A8B89F]" />
                    Key Relevant Modules & Focus Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, cIdx) => (
                      <span
                        key={cIdx}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[#FAF6F0] text-[#3A342C] border border-[#3A342C]/6"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
