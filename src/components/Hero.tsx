import React from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  Play, 
  FileText, 
  ExternalLink, 
  ShieldCheck, 
  QrCode, 
  MapPin, 
  ScanFace, 
  Smartphone,
  Zap,
  TrendingUp,
  Award
} from 'lucide-react';

interface HeroProps {
  onWatchVideoClick: () => void;
  onOpenQrModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onWatchVideoClick, onOpenQrModal }) => {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background radial glow accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-cyan-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[250px] bg-blue-600/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[350px] h-[250px] bg-violet-600/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b0f_1px,transparent_1px),linear-gradient(to_bottom,#1e293b0f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Institutional Accreditation Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-900/90 border border-slate-700/80 shadow-md backdrop-blur-md">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 -ml-4" />
            <span className="text-xs font-semibold text-slate-300">
              {projectConfig.institution.shortName}
            </span>
            <span className="text-slate-600 text-xs">•</span>
            <span className="text-xs font-medium text-cyan-400">
              {projectConfig.institution.department}
            </span>
            <span className="text-slate-600 text-xs hidden sm:inline">•</span>
            <span className="text-xs text-slate-400 hidden sm:inline">
              VTU Belagavi
            </span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-950/40 border border-blue-800/50 text-[11px] font-mono text-blue-300">
            <Award className="w-3.5 h-3.5 text-blue-400" />
            <span>B.E. Major Project Exhibition 2026</span>
          </div>
        </div>

        {/* Hero Title and Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
            <span className="text-gradient">SmartAttend:</span>{' '}
            <span className="text-white font-display">
              A Spatio-Temporal Multi-Factor Verification Framework
            </span>{' '}
            <span className="text-slate-300 text-2xl sm:text-3xl md:text-4xl block font-semibold mt-2">
              for Secure Attendance Management
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-normal">
            A zero-trust physical presence verification engine designed to eliminate proxy marking in higher education through time-rotating dynamic QR tokens, GNSS geofencing, 3D facial liveness, and hardware device binding.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a
            href={projectConfig.links.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary w-full sm:w-auto text-base px-8 py-3.5"
          >
            <span>Launch Live Demo</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </a>

          <button
            onClick={onWatchVideoClick}
            className="btn-secondary w-full sm:w-auto text-base px-7 py-3.5 group"
          >
            <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/30 group-hover:fill-cyan-400 transition-colors" />
            <span>Watch Project Video</span>
          </button>

          <a
            href={projectConfig.links.researchPaperPdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary w-full sm:w-auto text-base px-7 py-3.5"
          >
            <FileText className="w-4 h-4 text-emerald-400" />
            <span>Read Research Paper</span>
          </a>
        </div>

        {/* 3 Core Capability Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          <div className="glass-panel p-5 rounded-2xl border-slate-700/60 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-cyan-950/80 border border-cyan-800/80 text-cyan-400 shrink-0">
              <QrCode className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white mb-1">
                Sub-Second Dynamic QR Rotation
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                HMAC-SHA256 visual tokens rotating every 1–3s with sequence drift checks; impossible to screenshot or relay.
              </p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-slate-700/60 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-950/80 border border-blue-800/80 text-blue-400 shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white mb-1">
                Ellipsoidal Geofencing
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                Real-time Haversine distance validation (&lt;30m radius) against faculty mobile anchor with GNSS spoof filtering.
              </p>
            </div>
          </div>

          <div className="glass-panel p-5 rounded-2xl border-slate-700/60 flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-emerald-400 shrink-0">
              <ScanFace className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-white mb-1">
                3D Liveness & Device Locking
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed">
                MediaPipe 468-point facial mesh with randomized movement challenges coupled with persistent hardware fingerprinting.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Verification Workflow Visual Card */}
        <div className="glass-panel rounded-3xl p-6 md:p-8 border-slate-700/70 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8 pb-6 border-b border-slate-800">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge-tag bg-cyan-950/80 text-cyan-300 border-cyan-800">
                  Zero-Trust Architecture
                </span>
                <span className="badge-tag bg-emerald-950/80 text-emerald-300 border-emerald-800">
                  4 Interlocked Checkpoints
                </span>
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-white">
                Physical Co-Presence Verification Engine
              </h2>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenQrModal}
                className="text-xs font-semibold text-slate-300 hover:text-cyan-400 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-800 border border-slate-700 transition-colors"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Exhibition QR Code</span>
              </button>
              <div className="text-xs font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-950/60 px-3 py-1.5 rounded-lg border border-emerald-800/50">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>LIVE SYSTEM READY</span>
              </div>
            </div>
          </div>

          {/* 4 Checkpoint Signals Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            {/* Factor 1 */}
            <div className="bg-navy-950/80 rounded-2xl p-4 border border-slate-800 relative group hover:border-cyan-500/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                  Checkpoint 1
                </span>
                <QrCode className="w-4 h-4 text-cyan-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Visual Token Stream
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                HMAC-SHA256 signature, 1.0–3.0s lifespan, sequence drift &le; 2.
              </p>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Defense:</span>
                <span className="text-emerald-400 font-medium">Screenshot-Proof</span>
              </div>
            </div>

            {/* Factor 2 */}
            <div className="bg-navy-950/80 rounded-2xl p-4 border border-slate-800 relative group hover:border-blue-500/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-blue-400 uppercase tracking-wider font-semibold">
                  Checkpoint 2
                </span>
                <MapPin className="w-4 h-4 text-blue-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                GNSS Geofence Anchor
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Haversine displacement &le; 30m with horizontal accuracy &lt; 120m.
              </p>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Defense:</span>
                <span className="text-emerald-400 font-medium">Mock GPS Immune</span>
              </div>
            </div>

            {/* Factor 3 */}
            <div className="bg-navy-950/80 rounded-2xl p-4 border border-slate-800 relative group hover:border-violet-500/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-violet-400 uppercase tracking-wider font-semibold">
                  Checkpoint 3
                </span>
                <ScanFace className="w-4 h-4 text-violet-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Active Biometric Liveness
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                BlazeFace 468 mesh landmarks + randomized head turn challenges.
              </p>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Defense:</span>
                <span className="text-emerald-400 font-medium">Photo-Replay Proof</span>
              </div>
            </div>

            {/* Factor 4 */}
            <div className="bg-navy-950/80 rounded-2xl p-4 border border-slate-800 relative group hover:border-emerald-500/50 transition-colors">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-wider font-semibold">
                  Checkpoint 4
                </span>
                <Smartphone className="w-4 h-4 text-emerald-400" />
              </div>
              <h3 className="text-sm font-semibold text-white mb-1">
                Device Hardware Lock
              </h3>
              <p className="text-xs text-slate-400 mb-3">
                Cryptographic hardware hash bound to account in persistent storage.
              </p>
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono">
                <span className="text-slate-500">Defense:</span>
                <span className="text-emerald-400 font-medium">No Multi-Login</span>
              </div>
            </div>

          </div>

          {/* Real Empirical Metrics Bar */}
          <div className="mt-8 pt-6 border-t border-slate-800 grid grid-cols-2 lg:grid-cols-4 gap-4">
            {projectConfig.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-navy-800/80 border border-slate-700/80 flex items-center justify-center text-cyan-400 shrink-0">
                  {idx === 0 && <Zap className="w-5 h-5 text-amber-400" />}
                  {idx === 1 && <TrendingUp className="w-5 h-5 text-cyan-400" />}
                  {idx === 2 && <ShieldCheck className="w-5 h-5 text-emerald-400" />}
                  {idx === 3 && <ScanFace className="w-5 h-5 text-indigo-400" />}
                </div>
                <div>
                  <div className="text-lg font-mono font-bold text-white tracking-tight">
                    {metric.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
