import React, { useState } from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  QrCode, 
  MapPin, 
  ScanFace, 
  Smartphone, 
  Cpu, 
  Users, 
  Database, 
  Radio, 
  KeyRound,
  ShieldCheck,
  Check
} from 'lucide-react';

export const Features: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Security', 'Verification', 'Architecture', 'Experience'];

  const filteredFeatures = filter === 'All' 
    ? projectConfig.features 
    : projectConfig.features.filter(f => f.category === filter);

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'QrCode': return <QrCode className="w-6 h-6" />;
      case 'MapPin': return <MapPin className="w-6 h-6" />;
      case 'ScanFace': return <ScanFace className="w-6 h-6" />;
      case 'Smartphone': return <Smartphone className="w-6 h-6" />;
      case 'Cpu': return <Cpu className="w-6 h-6" />;
      case 'Users': return <Users className="w-6 h-6" />;
      case 'Database': return <Database className="w-6 h-6" />;
      case 'Radio': return <Radio className="w-6 h-6" />;
      case 'KeyRound': return <KeyRound className="w-6 h-6" />;
      default: return <ShieldCheck className="w-6 h-6" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'Production Ready':
        return (
          <span className="badge-tag bg-emerald-950/80 text-emerald-300 border-emerald-800">
            <Check className="w-3 h-3" />
            <span>Production Ready</span>
          </span>
        );
      case 'Empirically Validated':
        return (
          <span className="badge-tag bg-cyan-950/80 text-cyan-300 border-cyan-800">
            <Check className="w-3 h-3" />
            <span>Validated</span>
          </span>
        );
      case 'Implemented':
      default:
        return (
          <span className="badge-tag bg-blue-950/80 text-blue-300 border-blue-800">
            <Check className="w-3 h-3" />
            <span>Implemented</span>
          </span>
        );
    }
  };

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-xs font-semibold text-cyan-400 mb-4">
            <span>Verified System Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Uncompromising Security & Scale
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Every capability listed has been built and tested inside the SmartAttend repository.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  filter === cat
                    ? 'bg-cyan-500 text-navy-950 shadow-md shadow-cyan-500/30'
                    : 'bg-navy-900/80 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feat) => (
            <div
              key={feat.id}
              className="glass-panel glass-panel-hover p-6 rounded-3xl border-slate-700/60 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-inner">
                    {getFeatureIcon(feat.icon)}
                  </div>
                  {getStatusBadge(feat.status)}
                </div>

                <div className="text-[11px] font-mono text-cyan-400 font-semibold uppercase tracking-wider mb-1">
                  {feat.category} • {feat.badge}
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {feat.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">Module Verified</span>
                <span className="text-emerald-400 font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Active in Repo
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
