import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ExternalLink,
  MessageSquareHeart,
  FileCheck
} from 'lucide-react';
import { SparkleDoodle, StarDoodle, SquiggleUnderline } from './Doodles';

const LinkedinIcon = ({ className = "w-5 h-5" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    aria-hidden="true"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45c0-.8-.65-1.45-1.45-1.45-.8 0-1.45.65-1.45 1.45 0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const email = 'baljiyahsk@gmail.com';
  const linkedinUrl = 'https://linkedin.com/in/jiha-kamal-b8452226a';
  const linkedinDisplay = 'linkedin.com/in/jiha-kamal-b8452226a';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${email}?subject=Inquiry from Portfolio - ${encodeURIComponent(formState.name)}&body=${encodeURIComponent(formState.message + '\n\nFrom: ' + formState.email)}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F3EDE4] relative overflow-hidden">
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D8A7A0]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A8B89F]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-[#D8A7A0]/30 text-xs font-bold text-[#9C574F] uppercase tracking-wider mb-3 shadow-xs">
            <SparkleDoodle className="w-3.5 h-3.5 text-[#D8A7A0]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#3A342C]">
            Let’s Build Something Meaningful
          </h2>
          <p className="text-sm sm:text-base text-[#6B6256] mt-2">
            Interested in discussing a Business Analyst role, requirements collaboration, or just saying hi? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="cute-card bg-white p-6 border border-[#3A342C]/8">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-[#FDF2F0] text-[#9C574F] flex items-center justify-center shadow-xs">
                  <Mail className="w-5 h-5" />
                </div>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#FAF6F0] hover:bg-[#D8A7A0] hover:text-white text-[#3A342C] transition-colors flex items-center gap-1.5 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#8E8477] mb-1">
                Direct Email
              </div>
              <a 
                href={`mailto:${email}`}
                className="text-base sm:text-lg font-bold text-[#3A342C] hover:text-[#D8A7A0] transition-colors break-all"
              >
                {email}
              </a>
              <p className="text-xs text-[#6B6256] mt-1">
                Typical response time within 24 hours.
              </p>
            </div>

            {/* LinkedIn Card */}
            <div className="cute-card bg-white p-6 border border-[#3A342C]/8">
              <div className="flex items-start justify-between gap-3 mb-3">
                <div className="w-11 h-11 rounded-2xl bg-[#F0F5EE] text-[#55664C] flex items-center justify-center shadow-xs">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-full text-xs font-bold bg-[#FAF6F0] hover:bg-[#A8B89F] hover:text-white text-[#3A342C] transition-colors flex items-center gap-1.5"
                >
                  <span>Connect</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-[#8E8477] mb-1">
                LinkedIn Profile
              </div>
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm sm:text-base font-bold text-[#3A342C] hover:text-[#A8B89F] transition-colors break-all"
              >
                {linkedinDisplay}
              </a>
              <p className="text-xs text-[#6B6256] mt-1">
                Connect for professional updates & networking.
              </p>
            </div>

            {/* Location & Availability Note */}
            <div className="p-5 rounded-2xl bg-white/70 border border-[#3A342C]/6 flex items-start gap-3.5">
              <div className="w-9 h-9 rounded-xl bg-[#F3EDE4] flex items-center justify-center text-[#9C574F] shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs sm:text-sm">
                <p className="font-bold text-[#3A342C]">Based in Klang, Selangor, Malaysia</p>
                <p className="text-[#6B6256] mt-0.5">
                  Available for on-site, hybrid, or remote Junior BA opportunities within Greater KL / Selangor and beyond.
                </p>
              </div>
            </div>

          </div>

          {/* Quick Contact Form */}
          <div className="lg:col-span-7">
            <div className="cute-card bg-white p-6 sm:p-8 border border-[#3A342C]/8">
              <div className="flex items-center gap-2 mb-2">
                <MessageSquareHeart className="w-5 h-5 text-[#D8A7A0]" />
                <h3 className="text-xl font-bold text-[#3A342C]">
                  Send a Quick Note
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-[#6B6256] mb-6">
                Fill out this quick form to initiate an email directly to my inbox.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-[#3A342C] uppercase tracking-wider mb-1.5">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Sarah Lee / Recruiter"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#3A342C]/10 text-sm text-[#3A342C] focus:outline-hidden focus:border-[#D8A7A0] focus:ring-2 focus:ring-[#D8A7A0]/20 transition-all placeholder-[#8E8477]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-[#3A342C] uppercase tracking-wider mb-1.5">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#3A342C]/10 text-sm text-[#3A342C] focus:outline-hidden focus:border-[#D8A7A0] focus:ring-2 focus:ring-[#D8A7A0]/20 transition-all placeholder-[#8E8477]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-[#3A342C] uppercase tracking-wider mb-1.5">
                    Message / Inquiry
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    placeholder="Tell me about the role, project, or opportunity..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#FDFBF7] border border-[#3A342C]/10 text-sm text-[#3A342C] focus:outline-hidden focus:border-[#D8A7A0] focus:ring-2 focus:ring-[#D8A7A0]/20 transition-all placeholder-[#8E8477] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full text-sm !py-3 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>

                {submitted && (
                  <p className="text-xs text-center text-[#55664C] font-semibold mt-2 animate-in fade-in">
                    ✓ Opening your email client to send message...
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
