import React from 'react';
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
  GitBranch
} from 'lucide-react';

export const TechStack: React.FC = () => {
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

  return (
    <section id="tech-stack" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-xs font-semibold text-cyan-400 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Verified System Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Production-Grade Technology Stack
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Clearly distinguishing the production attendance application runtime from this static GitHub Pages exhibition showcase.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="space-y-12">
          {projectConfig.techStack.map((group, idx) => (
            <div key={idx} className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-700/60">
              <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                    <span>{group.category}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1">
                    {group.description}
                  </p>
                </div>
                <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-navy-950 text-slate-400 border border-slate-800 self-start sm:self-auto">
                  {group.technologies.length} Modules Verified
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                {group.technologies.map((t, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800/80 hover:border-cyan-500/40 hover:bg-navy-900/80 transition-all flex flex-col justify-between"
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
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
