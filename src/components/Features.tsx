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
  ChevronRight,
  ChevronLeft,
  Check,
  Sliders
} from 'lucide-react';

export const Features: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const features = projectConfig.features;
  const current = features[currentIndex];

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

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : features.length - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < features.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="features" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-xs font-semibold text-cyan-400 mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span>Verified System Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Security, Concurrency & Trust
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Browse through each verified system module with zero clutter.
          </p>
        </div>

        {/* Feature Quick Selector Pills */}
        <div className="flex overflow-x-auto pb-4 mb-8 gap-2.5 scrollbar-none sm:justify-center">
          {features.map((feat, idx) => (
            <button
              key={feat.id}
              onClick={() => setCurrentIndex(idx)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                currentIndex === idx
                  ? 'bg-cyan-500 text-navy-950 border-cyan-400 shadow-md shadow-cyan-500/30 font-bold scale-[1.02]'
                  : 'bg-navy-950/80 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className="font-mono text-[11px] opacity-80">#{idx + 1}</span>
              <span>{feat.title.split(' ')[0]} {feat.title.split(' ')[1] || ''}</span>
            </button>
          ))}
        </div>

        {/* Focused Interactive Feature Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border-slate-700/70 max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-navy-950 border border-slate-800 flex items-center justify-center text-cyan-400 shadow-inner shrink-0">
                {getFeatureIcon(current.icon)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                    Capability 0{currentIndex + 1} of 0{features.length}
                  </span>
                  <span className="text-slate-600 text-xs">•</span>
                  <span className="text-xs font-mono text-slate-400">
                    {current.category}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  {current.title}
                </h3>
              </div>
            </div>

            <div className="self-start sm:self-auto">
              {getStatusBadge(current.status)}
            </div>
          </div>

          <p className="text-base text-slate-300 leading-relaxed mb-8">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800 mb-8">
            <div className="p-4 rounded-2xl bg-navy-950/90 border border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Classification & Badge
              </span>
              <span className="text-sm font-semibold text-cyan-300 font-mono">
                {current.category} • {current.badge}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/90 border border-slate-800/80">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                Implementation State
              </span>
              <span className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5 font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Verified in SmartAttend Repo</span>
              </span>
            </div>
          </div>

          {/* Navigation Controls: Previous / Next */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="btn-secondary text-xs sm:text-sm py-2.5 px-4 flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Capability</span>
            </button>

            {/* Indicator Dots */}
            <div className="hidden sm:flex gap-1.5">
              {features.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                  }`}
                  aria-label={`Jump to capability ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="btn-primary text-xs sm:text-sm py-2.5 px-4 flex items-center gap-1.5"
            >
              <span>Next Capability</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
