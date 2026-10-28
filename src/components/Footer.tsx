import React from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  ExternalLink, 
  Play, 
  FileText, 
  ArrowUp, 
  ShieldCheck, 
  QrCode,
  GraduationCap
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface FooterProps {
  onWatchVideoClick: () => void;
  onOpenQrModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onWatchVideoClick, onOpenQrModal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-navy-950 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      
      {/* Background glow accents */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-cyan-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Call to Action Banner Box */}
        <div className="glass-panel rounded-3xl p-8 sm:p-12 border-slate-700/80 relative overflow-hidden mb-16 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-br from-blue-500/15 via-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="max-w-3xl">
            <span className="badge-tag bg-cyan-950/80 text-cyan-400 border-cyan-800 mb-4">
              Project Exhibition Ready
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
              Ready to See SmartAttend in Action?
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8">
              Explore our live Progressive Web App, review the complete 4-tier source repository, or dive into the mathematical formulations in our research paper.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href={projectConfig.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-3 px-6"
              >
                <span>Launch Live Demo</span>
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>

              <button
                onClick={onWatchVideoClick}
                className="btn-secondary text-xs sm:text-sm py-3 px-6"
              >
                <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/40" />
                <span>Watch Project Video</span>
              </button>

              <a
                href={projectConfig.links.researchPaperDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm py-3 px-6"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Read Research Paper (Drive)</span>
              </a>

              <a
                href={projectConfig.links.sourceCodeRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm py-3 px-6"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code</span>
              </a>

              <button
                onClick={onOpenQrModal}
                className="btn-secondary text-xs sm:text-sm py-3 px-6"
              >
                <QrCode className="w-4 h-4 text-cyan-400" />
                <span>Banner QR Code</span>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Top Grid: Brand & Institutional Meta */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-md">
                <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-extrabold text-lg text-white">
                {projectConfig.shortTitle}
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              <strong>{projectConfig.title}</strong>
            </p>

            <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
              Official public exhibition showcase engineered for visitors scanning the physical project banner QR code.
            </p>
          </div>

          {/* Institutional Col */}
          <div className="md:col-span-4 space-y-2 text-xs">
            <div className="flex items-center gap-2 text-slate-300 font-semibold mb-2">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Academic Affiliation</span>
            </div>
            <p className="text-slate-300 font-medium">
              {projectConfig.institution.name}
            </p>
            <p className="text-slate-400">
              {projectConfig.institution.department}
            </p>
            <p className="text-slate-500">
              {projectConfig.institution.affiliation}
            </p>
            <p className="text-slate-500">
              {projectConfig.institution.exhibitionEvent} • {projectConfig.institution.academicYear}
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="text-slate-300 font-semibold mb-2">Quick Navigation</div>
            <ul className="space-y-1.5 text-slate-400">
              <li><a href="#overview" className="hover:text-cyan-400 transition-colors">Project Overview</a></li>
              <li><a href="#how-it-works" className="hover:text-cyan-400 transition-colors">Verification Workflow</a></li>
              <li><a href="#features" className="hover:text-cyan-400 transition-colors">Key Features & Modules</a></li>
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">4-Tier Architecture & Security</a></li>
              <li><a href="#tech-stack" className="hover:text-cyan-400 transition-colors">Technology Stack</a></li>
              <li><a href="#research" className="hover:text-cyan-400 transition-colors">Research Paper & Benchmarks</a></li>
              <li><a href="#team" className="hover:text-cyan-400 transition-colors">Engineering Team & Mentors</a></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            &copy; {new Date().getFullYear()} SmartAttend Project Team. Developed for B.E. Major Project Exhibition at BITM Ballari.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
