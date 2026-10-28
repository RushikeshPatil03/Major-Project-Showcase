import React from 'react';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Building2, 
  GraduationCap, 
  FileCheck2
} from 'lucide-react';

export const Overview: React.FC = () => {
  return (
    <section id="overview" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-xs font-semibold text-cyan-400 mb-4">
            <span>Project Problem & Solution Paradigm</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            The Attendance Integrity Crisis in Higher Education
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Why manual registers and first-generation digital solutions fail to prevent surrogate check-ins, and how SmartAttend restores unforgeable physical accountability.
          </p>
        </div>

        {/* 2-Column: The Problem vs The SmartAttend Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Column 1: The Vulnerability Landscape */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-red-500/20 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-red-950/80 border border-red-800/80 flex items-center justify-center text-red-400">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">The Vulnerability Landscape</span>
                <h3 className="text-xl font-bold text-white">Why Existing Methods Fail</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              In academic lecture cohorts of 100 to 300 students, attendance tracking is either an operational bottleneck or an open invitation for fraud:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Paper Roll Calls Waste Instructional Time</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Passing physical sheets consumes 10–15 minutes per lecture, disrupts instruction, and provides zero defense against proxy signing by peers.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Static QR Code Screenshot Relaying</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    When digital QR codes remain static or valid for 30+ seconds, students take photos and broadcast them over WhatsApp/Telegram to off-campus friends.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Mock Location GPS Injection</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Standard Android and iOS apps without kernel-level telemetry can be spoofed using freely available mock-location developer settings and VPN tunnels.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                <XCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Biometric Kiosk Serialization Delays</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Wall-mounted fingerprint scanners cost \$500–\$2,000 per room, degrade mechanically, transmit germs, and create long physical entrance queues.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: The SmartAttend Framework */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-cyan-500/30 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-800/80 flex items-center justify-center text-cyan-400">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">The Proposed Architecture</span>
                <h3 className="text-xl font-bold text-white">The Zero-Trust Resolution</h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed mb-6">
              SmartAttend replaces vulnerable single-modality checks with a synchronous multi-factor verification chain executed in under 35 milliseconds on student smartphones:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Sub-Second Dynamic Visual Tokens</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Projector Studio streams cryptographic HMAC QR codes rotating every 1–3s. Sequential 2-step scanning guarantees live ocular contact with the room display.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Classroom-Bound Haversine Geofencing</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Student coordinates are compared against the faculty anchor with a strict 30m threshold and mobile GNSS accuracy filtering, preventing off-site check-ins.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">On-Device Facial Liveness Challenges</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    MediaPipe BlazeFace tracks 468 landmarks for randomized motion challenges (blinks, directional head turns), defeating 2D printouts and video replays.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-navy-950/60 border border-slate-800">
                <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-slate-200">Hardware-Locked Device Fingerprint</h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Each student's credentials are tied to their unique smartphone hardware signature. Logging into another student's account on the same phone is instantly blocked.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Institutional & Academic Use Cases */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 border-slate-700/60">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">Target Deployments</span>
            <h3 className="text-2xl font-bold text-white mt-1">Designed for Academic & Enterprise Institutions</h3>
            <p className="text-sm text-slate-400 mt-2">
              SmartAttend requires zero capital investment in proprietary scanner kiosks. It operates seamlessly across standard classrooms, auditoriums, and laboratory environments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            
            <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
              <GraduationCap className="w-6 h-6 text-cyan-400 mb-3" />
              <h4 className="text-sm font-semibold text-white">Large Engineering Amphitheaters</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Processes 250+ concurrent students in under 60 seconds with zero queue bottlenecks at the classroom doorway.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
              <Building2 className="w-6 h-6 text-blue-400 mb-3" />
              <h4 className="text-sm font-semibold text-white">Practical Labs & Computer Centers</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Enforces localized geofencing and batch allocation so only students scheduled for that laboratory session can mark attendance.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
              <FileCheck2 className="w-6 h-6 text-emerald-400 mb-3" />
              <h4 className="text-sm font-semibold text-white">University Examination Halls</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Biometric liveness and hardware binding verify candidate authenticity, preventing impersonation and hall ticket fraud.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
              <Clock className="w-6 h-6 text-violet-400 mb-3" />
              <h4 className="text-sm font-semibold text-white">Corporate Seminars & Workshops</h4>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Generates verifiable compliance records and instant CSV audit exports with cryptographic non-repudiation timestamps.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
