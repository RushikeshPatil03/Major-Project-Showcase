import React, { useState } from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  PlayCircle, 
  QrCode, 
  Scan, 
  MapPin, 
  CheckCircle, 
  Clock, 
  Layers, 
  ChevronRight,
  ShieldCheck,
  Cpu
} from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = projectConfig.verificationWorkflow;
  const current = steps[activeStep];

  const getStepIcon = (step: number) => {
    switch (step) {
      case 1: return <PlayCircle className="w-5 h-5" />;
      case 2: return <QrCode className="w-5 h-5" />;
      case 3: return <Scan className="w-5 h-5" />;
      case 4: return <MapPin className="w-5 h-5" />;
      case 5: return <CheckCircle className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  return (
    <section id="how-it-works" className="py-20 md:py-28 relative bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/80 text-xs font-semibold text-blue-400 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Sequential Verification Sequence</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How SmartAttend Operates in the Classroom
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A 5-stage synchronous workflow enforcing physical co-presence between the classroom projector and student smartphones.
          </p>
        </div>

        {/* Step Navigation Tabs */}
        <div className="flex overflow-x-auto pb-4 mb-10 gap-3 scrollbar-none sm:justify-center">
          {steps.map((s, idx) => (
            <button
              key={s.step}
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2.5 px-4 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all border ${
                activeStep === idx 
                  ? 'bg-gradient-to-r from-blue-600/90 to-cyan-600/90 text-white border-cyan-400/80 shadow-lg shadow-cyan-500/20 scale-[1.02]' 
                  : 'bg-navy-950/80 text-slate-400 hover:text-slate-200 border-slate-800 hover:border-slate-700'
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-mono font-bold ${
                activeStep === idx ? 'bg-white text-navy-950' : 'bg-navy-800 text-slate-300'
              }`}>
                {s.step}
              </span>
              <span>{s.title}</span>
            </button>
          ))}
        </div>

        {/* Interactive Step Detail Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border-slate-700/70 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Step Description */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-2xl bg-cyan-950 border border-cyan-800 text-cyan-400 flex items-center justify-center">
                {getStepIcon(current.step)}
              </span>
              <div>
                <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                  Step 0{current.step} of 05
                </span>
                <h3 className="text-2xl font-bold text-white">
                  {current.title}
                </h3>
              </div>
            </div>

            <p className="text-base text-slate-300 leading-relaxed">
              {current.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="p-3.5 rounded-xl bg-navy-950/80 border border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Execution Cadence / Latency
                </span>
                <span className="text-sm font-semibold text-emerald-400 font-mono">
                  {current.duration}
                </span>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-950/80 border border-slate-800/80">
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Underlying Technology
                </span>
                <span className="text-sm font-semibold text-cyan-300">
                  {current.technology}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-2 rounded-lg bg-navy-800/60 border border-slate-700"
              >
                &larr; Previous Stage
              </button>

              <div className="flex gap-1.5">
                {steps.map((_, idx) => (
                  <span
                    key={idx}
                    className={`h-1.5 rounded-full transition-all ${
                      activeStep === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 px-3 py-2 rounded-lg bg-navy-800/60 border border-slate-700 flex items-center gap-1"
              >
                <span>Next Stage</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right: Technical Checkpoint Blueprint Card (No screenshots) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl p-6 bg-navy-950 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Security Enforcement
                  </span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Stage {current.step}/5
                </span>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-1">
                  Enforcement Objective
                </span>
                <h4 className="text-base font-bold text-white">
                  {current.checkpoint}
                </h4>
              </div>

              <div className="p-3.5 rounded-xl bg-navy-900/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Verification Engine:</span>
                  <span className="text-cyan-300">Synchronous Zero-Trust</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Adversarial Defense:</span>
                  <span className="text-emerald-400 font-bold">100% Intercepted</span>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-slate-400">Processing Overhead:</span>
                  <span className="text-amber-400 font-bold">&lt; 35 ms Total</span>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-2 text-xs text-slate-400">
                <Cpu className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span className="leading-tight">
                  Detailed formulation & proof documented in IEEE Research Paper.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
