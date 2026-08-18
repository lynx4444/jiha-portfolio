import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  FileText, 
  Layers, 
  BrainCircuit, 
  CheckCircle2, 
  X,
  ArrowRight,
  ShieldCheck,
  Layout,
  BookOpen
} from 'lucide-react';
import { SparkleDoodle, StarDoodle, LoopDoodle } from './Doodles';

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 'iium-monitoring',
      title: 'IIUM Monitoring of Academic Programmes',
      category: 'Requirement Engineering & Workflow Digitization',
      badge: 'Core BA Project',
      badgeColor: 'rose',
      summary: 'Led end-to-end requirement engineering to digitize IIUM’s manual program management, eliciting 30+ functional requirements to eliminate data redundancy and document loss.',
      icon: Layers,
      accentBg: 'bg-[#FDF2F0]',
      accentColor: 'text-[#9C574F]',
      tags: ['Requirement Elicitation', 'BRS & SRS', 'Process Flow', 'Data Redundancy Elimination'],
      details: {
        problem: 'Academic programme monitoring at IIUM previously relied on fragmented manual forms and physical document submissions, resulting in recurring document loss, duplicated data entry, and delayed approval cycles.',
        myRole: 'Lead Requirement Engineer & Business Analyst',
        keyContributions: [
          'Conducted structured stakeholder interviews and elicitations across academic faculties and administrative officers.',
          'Formulated and documented 30+ clear, verifiable functional and non-functional requirements (BRS & SRS).',
          'Mapped current-state (AS-IS) and future-state (TO-BE) workflow diagrams to eliminate redundant approval bottlenecks.',
          'Designed data flow diagrams (DFD) and validation rules to ensure data integrity across academic records.'
        ],
        impact: 'Successfully transformed manual paperwork into a streamlined digital blueprint, reducing document retrieval overhead and preventing submission loss.'
      }
    },
    {
      id: 'notabee',
      title: 'NotaBee (Online Note-Taking Tool)',
      category: 'UI/UX Prototyping & Product Design',
      badge: 'Product Design',
      badgeColor: 'sage',
      summary: 'Prototyped an intuitive, user-friendly interface in Figma, strictly focused on digital usability, clean information architecture, and note-taking efficiency.',
      icon: Layout,
      accentBg: 'bg-[#F0F5EE]',
      accentColor: 'text-[#55664C]',
      tags: ['Figma Prototyping', 'User Research', 'Information Architecture', 'Design System'],
      details: {
        problem: 'Students often struggle with clutter and cognitive overload in modern note-taking apps that prioritize complex markdown over swift note retrieval.',
        myRole: 'Product & UX Designer',
        keyContributions: [
          'Conducted preliminary user surveys among university peers to identify primary friction points in daily note capture.',
          'Architected an ultra-clean hierarchical layout with instant search, color-coded tag categorisation, and distraction-free editing modes.',
          'Built high-fidelity interactive component prototypes in Figma with micro-interactions and design tokens.',
          'Executed task-based usability testing to iterate on navigation speed and intuitive note tagging.'
        ],
        impact: 'Produced a ready-to-implement design system that shortened note-creation friction and received enthusiastic feedback during peer usability trials.'
      }
    },
    {
      id: 'fake-news-detection',
      title: 'Multimedia Fake News Detection System',
      category: 'Data Science & Computational Intelligence',
      badge: 'AI & Data Science',
      badgeColor: 'rose',
      summary: 'Classified images, video, and audio as real vs fake using PyTorch and Torchvision to enhance digital multimedia verification and misinformation filtering.',
      icon: BrainCircuit,
      accentBg: 'bg-[#FDF2F0]',
      accentColor: 'text-[#9C574F]',
      tags: ['Python', 'PyTorch', 'Torchvision', 'Computer Vision', 'Data Modeling'],
      details: {
        problem: 'The proliferation of altered digital media and manipulated news requires automated, multi-channel verification to support digital integrity.',
        myRole: 'Machine Learning Developer & Data Analyst',
        keyContributions: [
          'Engineered data preprocessing and feature extraction pipelines for mixed visual and auditory media formats.',
          'Trained and evaluated deep neural network architectures using PyTorch and torchvision models.',
          'Analyzed classification metrics (Precision, Recall, F1-Score, Confusion Matrix) to minimize false positives on authentic media.',
          'Documented analytical findings and proposed edge deployment constraints for real-time verification pipelines.'
        ],
        impact: 'Delivered a robust multimodal classification benchmark demonstrating strong accuracy in detecting synthetic media modifications.'
      }
    }
  ];

  return (
    <section id="projects" className="py-20 sm:py-28 bg-[#F3EDE4] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#A8B89F]/30 text-xs font-bold text-[#55664C] uppercase tracking-wider mb-3 shadow-xs">
            <StarDoodle className="w-3.5 h-3.5 text-[#A8B89F]" />
            <span>Featured Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A342C]">
            Featured Projects
          </h2>
          <p className="text-sm sm:text-base text-[#6B6256] mt-2">
            Selected work spanning Requirement Engineering, Product Prototyping, and Computational Intelligence.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {projects.map((project) => {
            const Icon = project.icon;
            const isRose = project.badgeColor === 'rose';

            return (
              <div 
                key={project.id}
                className="cute-card bg-white p-6 sm:p-7 flex flex-col justify-between cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <div className={`w-11 h-11 rounded-2xl ${project.accentBg} ${project.accentColor} flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`cute-pill text-xs ${isRose ? 'badge-rose' : 'badge-sage'}`}>
                      {project.badge}
                    </span>
                  </div>

                  {/* Title & Category */}
                  <div className="text-xs font-bold text-[#8E8477] uppercase tracking-wider mb-1">
                    {project.category}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#3A342C] mb-3 group-hover:text-[#D8A7A0] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#6B6256] leading-relaxed mb-6">
                    {project.summary}
                  </p>
                </div>

                <div>
                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5 pt-4 border-t border-[#3A342C]/6">
                    {project.tags.slice(0, 3).map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-semibold px-2.5 py-0.5 rounded-md bg-[#F3EDE4] text-[#6B6256]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Read More Trigger */}
                  <button 
                    type="button"
                    className="w-full py-2.5 px-4 rounded-xl bg-[#FAF6F0] hover:bg-[#D8A7A0]/20 text-[#3A342C] text-xs sm:text-sm font-bold flex items-center justify-center gap-1.5 transition-colors group-hover:bg-[#D8A7A0] group-hover:text-white"
                  >
                    <span>Explore Case Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Modal for Deep-Dive Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#3A342C]/40 backdrop-blur-xs animate-in fade-in">
          <div 
            className="bg-[#FDFBF7] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-[#D8A7A0]/30 shadow-2xl relative animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F3EDE4] text-[#3A342C] hover:bg-[#D8A7A0] hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <span className={`cute-pill text-xs mb-2 ${selectedProject.badgeColor === 'rose' ? 'badge-rose' : 'badge-sage'}`}>
                  {selectedProject.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#3A342C] mt-1">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-semibold text-[#8E8477] mt-1">
                  Role: <span className="text-[#3A342C]">{selectedProject.details.myRole}</span>
                </p>
              </div>

              {/* Problem Statement */}
              <div className="bg-white p-5 rounded-2xl border border-[#3A342C]/6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#9C574F] mb-1 flex items-center gap-1.5">
                  <SparkleDoodle className="w-3.5 h-3.5 text-[#D8A7A0]" />
                  The Business Problem
                </h4>
                <p className="text-sm text-[#6B6256] leading-relaxed">
                  {selectedProject.details.problem}
                </p>
              </div>

              {/* Key Contributions */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#55664C] mb-3 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#A8B89F]" />
                  Requirement & Technical Execution
                </h4>
                <ul className="space-y-2.5">
                  {selectedProject.details.keyContributions.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#6B6256]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D8A7A0] mt-2 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Impact Card */}
              <div className="bg-[#F0F5EE] p-4 rounded-2xl border border-[#A8B89F]/40">
                <h4 className="text-xs font-bold uppercase tracking-wider text-[#55664C] mb-1">
                  Key Outcome & Value Delivered
                </h4>
                <p className="text-sm font-medium text-[#3A342C] leading-relaxed">
                  {selectedProject.details.impact}
                </p>
              </div>

              {/* Tags in modal */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {selectedProject.tags.map((tag, idx) => (
                  <span key={idx} className="badge-sage cute-pill text-xs">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom Action */}
              <div className="pt-4 border-t border-[#3A342C]/8 flex justify-end">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="btn-primary text-sm !py-2 !px-5"
                >
                  Close Case Study
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};
