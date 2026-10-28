import React, { useState } from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  Code, 
  Palette, 
  Download, 
  Eye, 
  Scan, 
  Server, 
  Cpu, 
  Layers, 
  Shield, 
  Cloud, 
  Database, 
  Network, 
  Radio, 
  HardDrive, 
  Zap, 
  Sliders, 
  Globe, 
  GitBranch,
  ChevronRight,
  ChevronLeft
} from 'lucide-react';

export const TechStack: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const categories = projectConfig.techStack;
  const currentCategory = categories[activeCategoryIndex];

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-blue-400" />;
      case 'Download': return <Download className="w-5 h-5 text-emerald-400" />;
      case 'Eye': return <Eye className="w-5 h-5 text-indigo-400" />;
      case 'Scan': return <Scan className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Cpu': return <Cpu className="w-5 h-5 text-violet-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-red-400" />;
      case 'Shield': return <Shield className="w-5 h-5 text-blue-400" />;
      case 'Cloud': return <Cloud className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Network': return <Network className="w-5 h-5 text-indigo-400" />;
      case 'Radio': return <Radio className="w-5 h-5 text-cyan-400" />;
      case 'HardDrive': return <HardDrive className="w-5 h-5 text-blue-400" />;
      case 'Zap': return <Zap className="w-5 h-5 text-amber-400" />;
      case 'Sliders': return <Sliders className="w-5 h-5 text-cyan-400" />;
      case 'Globe': return <Globe className="w-5 h-5 text-emerald-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-violet-400" />;
      default: return <Code className="w-5 h-5 text-cyan-400" />;
    }
  };

  const handlePrev = () => {
    setActiveCategoryIndex((prev) => (prev > 0 ? prev - 1 : categories.length - 1));
  };

  const handleNext = () => {
    setActiveCategoryIndex((prev) => (prev < categories.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="tech-stack" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-xs font-semibold text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Verified System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade Technology Stack
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Separating the production attendance application runtime from this static exhibition showcase.
          </p>
        </div>

        {/* Category Step Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-3 scrollbar-none sm:justify-center">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategoryIndex(idx)}
              className={`flex items-center gap-2 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                activeCategoryIndex === idx
                  ? 'bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white border-cyan-400/80 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-navy-950/80 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-mono font-bold ${
                activeCategoryIndex === idx ? 'bg-white text-navy-950' : 'bg-navy-800 text-slate-400'
              }`}>
                0{idx + 1}
              </span>
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Active Technology Category Showcase Card */}
        <div className="glass-panel p-6 sm:p-10 rounded-3xl border-slate-700/70 shadow-2xl relative overflow-hidden">
          
          {/* Header of Active Category */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                  Tier 0{activeCategoryIndex + 1} of 0{categories.length}
                </span>
                <span className="text-slate-600 text-xs">•</span>
                <span className="text-xs font-mono text-emerald-400">
                  {currentCategory.technologies.length} Verified Modules
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
                <span>{currentCategory.category}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                {currentCategory.description}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="btn-secondary text-xs py-2 px-3 flex items-center gap-1"
                aria-label="Previous Category"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev Tier</span>
              </button>
              <button
                onClick={handleNext}
                className="btn-primary text-xs py-2 px-3 flex items-center gap-1"
                aria-label="Next Category"
              >
                <span>Next Tier</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Technology Cards Grid for Active Category */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-8">
            {currentCategory.technologies.map((t, tIdx) => (
              <div
                key={tIdx}
                className="p-5 rounded-2xl bg-navy-950/80 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-navy-900/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-navy-900 border border-slate-800 flex items-center justify-center mb-3">
                    {getTechIcon(t.icon)}
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">
                    {t.name}
                  </h4>
                </div>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  {t.role}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Navigation with Dots & Next / Prev */}
          <div className="flex items-center justify-between pt-4 border-t border-slate-800/80">
            <button
              onClick={handlePrev}
              className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-2 rounded-lg bg-navy-800/60 border border-slate-700 flex items-center gap-1"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous: {categories[(activeCategoryIndex > 0 ? activeCategoryIndex - 1 : categories.length - 1)].category}</span>
            </button>

            <div className="flex gap-2">
              {categories.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveCategoryIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    activeCategoryIndex === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Jump to ${categories[idx].category}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-lg bg-navy-800/60 border border-slate-700 flex items-center gap-1"
            >
              <span>Next: {categories[(activeCategoryIndex < categories.length - 1 ? activeCategoryIndex + 1 : 0)].category}</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
