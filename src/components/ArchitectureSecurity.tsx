import React from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  ShieldCheck, 
  Cpu, 
  Database, 
  Smartphone, 
  Maximize2,
  Lock,
  CheckCircle2
} from 'lucide-react';

interface ArchitectureProps {
  onSelectImage: (src: string, title: string) => void;
}

export const ArchitectureSecurity: React.FC<ArchitectureProps> = ({ onSelectImage }) => {
  return (
    <section id="architecture" className="py-20 md:py-28 relative bg-navy-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-950/70 border border-violet-800/80 text-xs font-semibold text-violet-400 mb-4">
            <Lock className="w-3.5 h-3.5" />
            <span>Zero-Trust Infrastructure</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            4-Tier System Architecture & Threat Mitigation
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            A defense-in-depth framework engineered to sustain 300 concurrent requests/sec while intercepting 100% of proxy attempts.
          </p>
        </div>

        {/* 4-Tier Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          <div className="glass-panel p-6 rounded-3xl border-slate-700/60 relative">
            <div className="text-xs font-mono text-cyan-400 font-bold uppercase mb-2">Tier 01</div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <Smartphone className="w-5 h-5 text-cyan-400" />
              <span>Sensing & Client</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Student PWA running MediaPipe 468 facial mesh, HTML5 BarcodeDetector, GNSS receiver, and IndexedDB hardware fingerprint cache.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
              Tech: React 19 • PWA • Wasm
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border-slate-700/60 relative">
            <div className="text-xs font-mono text-blue-400 font-bold uppercase mb-2">Tier 02</div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <ShieldCheck className="w-5 h-5 text-blue-400" />
              <span>Zero-Trust Gateway</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              4 sequential checkpoints: Device validation, Ellipsoidal Haversine geofence (&lt;30m), HMAC rotation checks, and biometric liveness.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
              Tech: Node.js 20 • Express • JWT
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border-slate-700/60 relative">
            <div className="text-xs font-mono text-violet-400 font-bold uppercase mb-2">Tier 03</div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <Cpu className="w-5 h-5 text-violet-400" />
              <span>Compute & State</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              FastAPI Python microservice for 512-d FaceNet embeddings paired with in-memory Redis pipelines for sub-millisecond nonce eviction.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
              Tech: FastAPI • DeepFace • Redis
            </div>
          </div>

          <div className="glass-panel p-6 rounded-3xl border-slate-700/60 relative">
            <div className="text-xs font-mono text-emerald-400 font-bold uppercase mb-2">Tier 04</div>
            <div className="flex items-center gap-2 text-white font-bold text-lg mb-3">
              <Database className="w-5 h-5 text-emerald-400" />
              <span>Persistence & Ledger</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              Supabase PostgreSQL with PgBouncer connection reuse (97% reduction), immutable session roster snapshots, and Realtime WebSocket broadcasts.
            </p>
            <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
              Tech: Supabase • PostgreSQL • RLS
            </div>
          </div>

        </div>

        {/* Architecture Diagram Preview Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-700/70 mb-16">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Publication-Grade Topology
              </span>
              <h3 className="text-xl font-bold text-white mt-1">
                Zero-Trust Verification Pipeline Diagram
              </h3>
            </div>
            <button
              onClick={() => onSelectImage('./assets/figures/fig1_architecture.png', 'SmartAttend System Architecture & Verification Workflow')}
              className="btn-secondary text-xs py-2 px-4 flex items-center gap-2"
            >
              <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Inspect High-Resolution Diagram</span>
            </button>
          </div>

          <div 
            className="rounded-2xl overflow-hidden border border-slate-800 bg-navy-950 p-2 sm:p-4 cursor-pointer group"
            onClick={() => onSelectImage('./assets/figures/fig1_architecture.png', 'SmartAttend System Architecture & Verification Workflow')}
          >
            <img 
              src="./assets/figures/fig1_architecture.png" 
              alt="SmartAttend Architecture Diagram" 
              className="w-full h-auto max-h-[500px] object-contain rounded-xl group-hover:scale-[1.01] transition-transform duration-300"
            />
            <p className="text-center text-xs text-slate-400 mt-3 font-mono">
              Fig. 1: End-to-end verification pipeline bridging Admin, Faculty Projector Studio, and Student Mobile PWA.
            </p>
          </div>
        </div>

        {/* Threat Modeling & Attack Resilience Matrix */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-700/70">
          <div className="mb-6">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Empirical Deflection Benchmark
            </span>
            <h3 className="text-2xl font-bold text-white mt-1">
              Adversarial Attack Resilience Matrix
            </h3>
            <p className="text-sm text-slate-300 mt-2">
              Results from 5,000 simulated adversarial spoofing and proxy check-in attempts conducted across five attack vectors:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-xs font-mono text-slate-400 uppercase tracking-wider">
                  <th className="py-3 px-4">Adversarial Vector</th>
                  <th className="py-3 px-4">Traditional Vulnerability</th>
                  <th className="py-3 px-4">SmartAttend Mitigation Mechanism</th>
                  <th className="py-3 px-4 text-right">Interception</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 text-sm">
                {projectConfig.threatMatrix.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30 transition-colors">
                    <td className="py-4 px-4 font-semibold text-white">
                      {item.attackVector}
                    </td>
                    <td className="py-4 px-4 text-slate-400 text-xs sm:text-sm">
                      {item.traditionalDefect}
                    </td>
                    <td className="py-4 px-4 text-cyan-300 text-xs sm:text-sm">
                      {item.smartAttendMechanism}
                    </td>
                    <td className="py-4 px-4 text-right">
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold font-mono bg-emerald-950/80 text-emerald-400 border border-emerald-800/80">
                        <CheckCircle2 className="w-3 h-3" />
                        {item.interceptionRate}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
