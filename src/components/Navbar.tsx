import React, { useState, useEffect } from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  Menu, 
  X, 
  ExternalLink, 
  QrCode, 
  ShieldCheck, 
  FileText
} from 'lucide-react';

interface NavbarProps {
  onOpenQrModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQrModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Research', href: '#research' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-navy-950/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/30 py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Academic Branding */}
          <a href="#" className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-cyan-500 to-emerald-400 p-0.5 shadow-md shadow-cyan-500/20 group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-navy-950 rounded-[10px] flex items-center justify-center overflow-hidden">
                <img 
                  src={projectConfig.institution.smartattendLogo} 
                  alt="SmartAttend Logo" 
                  className="w-7 h-7 object-contain"
                  onError={(e) => {
                    // Fallback to icon if image fails
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                <ShieldCheck className="w-5 h-5 text-cyan-400 hidden group-hover:inline-block" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-extrabold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  {projectConfig.shortTitle}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-950/80 text-cyan-400 border border-cyan-800/60">
                  v2.0
                </span>
              </div>
              <p className="text-[11px] text-slate-400 hidden sm:block">
                BITM • CSE (Data Science)
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenQrModal}
              title="View Banner QR Code"
              className="p-2.5 rounded-xl text-slate-300 hover:text-cyan-400 bg-navy-900/80 hover:bg-navy-800 border border-slate-700/80 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Generate Banner QR Code"
            >
              <QrCode className="w-4 h-4" />
            </button>

            <a
              href={projectConfig.links.researchPaperDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-navy-900/80 hover:bg-navy-800 border border-slate-700/80 flex items-center gap-1.5 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400"
            >
              <FileText className="w-3.5 h-3.5 text-cyan-400" />
              <span>Research Paper</span>
            </a>

            <a
              href={projectConfig.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-2 px-4 shadow-sm"
            >
              <span>Launch Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenQrModal}
              className="p-2 rounded-lg text-slate-300 bg-navy-900 border border-slate-700"
              aria-label="View QR Code"
            >
              <QrCode className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-navy-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-navy-950/95 backdrop-blur-xl border-b border-slate-800 px-4 pt-3 pb-6 mt-3 space-y-2 animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a
              href={projectConfig.links.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center py-2.5 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Launch Live Demo
            </a>
            <a
              href={projectConfig.links.researchPaperDriveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary w-full text-center py-2.5 text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Read Research Paper (Drive)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
