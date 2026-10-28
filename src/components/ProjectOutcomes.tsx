import React from 'react';
import { 
  Zap, 
  TrendingUp, 
  ShieldCheck, 
  Database, 
  Sparkles, 
  AlertCircle
} from 'lucide-react';

export const ProjectOutcomes: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-800/80 text-xs font-semibold text-blue-400 mb-4">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Empirical Findings & Next Steps</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Demonstrated Outcomes & Future Scope
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Rigorous quantitative results achieved during synthetic load tests and classroom pilot trials.
          </p>
        </div>

        {/* 4 Quantitative Result Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="glass-panel p-6 rounded-3xl border-slate-700/60 relative">
            <div className="w-10 h-10 rounded-xl bg-amber-950/80 border border-amber-800/80 flex items-center justify-center text-amber-400 mb-4">
              <Zap className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono mb-1">
              30.1 ms
            </div>
            <div className="text-xs font-mono text-cyan-400 font-semibold uppercase mb-2">
              Median Processing Latency
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Complete multi-factor validation pipeline across HMAC signature verification, Haversine displacement, and in-memory locks.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border-slate-700/60 relative">
            <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-400 mb-4">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono mb-1">
              99.87%
            </div>
            <div className="text-xs font-mono text-cyan-400 font-semibold uppercase mb-2">
              Success @ 300 req/s
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero transaction deadlocks or thread starvation under intense concurrent morning roll-call simulation.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border-slate-700/60 relative">
            <div className="w-10 h-10 rounded-xl bg-emerald-950/80 border border-emerald-800/80 flex items-center justify-center text-emerald-400 mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono mb-1">
              100%
            </div>
            <div className="text-xs font-mono text-cyan-400 font-semibold uppercase mb-2">
              Proxy Deflection
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Zero fraudulent passes across 5,000 simulated adversarial attempts combining mock GPS, shared screenshots, and 2D photos.
            </p>
          </div>

          <div className="glass-panel p-6 rounded-3xl border-slate-700/60 relative">
            <div className="w-10 h-10 rounded-xl bg-violet-950/80 border border-violet-800/80 flex items-center justify-center text-violet-400 mb-4">
              <Database className="w-5 h-5" />
            </div>
            <div className="text-3xl font-extrabold text-white font-mono mb-1">
              97%
            </div>
            <div className="text-xs font-mono text-cyan-400 font-semibold uppercase mb-2">
              DB Connection Savings
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Supavisor transaction-mode connection pooler prevented PostgreSQL backend exhaustion during peak classroom rushes.
            </p>
          </div>

        </div>

        {/* Technical Limitations & Future Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-700/70">
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-5 h-5 text-amber-400" />
              <h3 className="text-lg font-bold text-white">Current Constraints & Limitations</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Honest transparency is essential in academic engineering. The system currently observes the following deployment constraints:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Indoor GNSS Attenuation:</strong> In heavily shielded basement classrooms, GPS signals can degrade. The mobile anchor pairing relay allows faculty to set manual threshold offsets.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Camera Lighting Variations:</strong> Extreme backlighting or defective smartphone cameras can impact 3D landmark detection, requiring student position adjustment.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-amber-400 font-bold">•</span>
                <span><strong>Browser Sensor Restrictions:</strong> Users must grant camera and location permissions inside the browser shell on initial launch.</span>
              </li>
            </ul>
          </div>

          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-cyan-500/30">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg font-bold text-white">Future Research & System Roadmap</h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-4">
              Planned architectural enhancements identified for subsequent project iterations:
            </p>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>BLE Mesh Hybrid Positioning:</strong> Integrating low-cost Bluetooth beacons to supplement GNSS in subterranean lecture halls.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>Edge TPU Hardware Acceleration:</strong> Deploying Google Coral micro-accelerators to run on-premise FaceNet512 biometric matching in &lt;5 ms.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-cyan-400 font-bold">•</span>
                <span><strong>LMS Interoperability:</strong> Developing native webhooks for Canvas, Moodle, and Blackboard automated gradebook sync.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
