import React from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  ExternalLink, 
  Play, 
  FileText, 
  Monitor, 
  Maximize2,
  Lock
} from 'lucide-react';
import { GithubIcon } from './Icons';

interface DemoAndVideoProps {
  onSelectImage: (src: string, title: string) => void;
}

export const DemoAndVideo: React.FC<DemoAndVideoProps> = ({ onSelectImage }) => {

  const screenshots = [
    {
      src: './assets/figures/faculty_studio.png',
      title: 'Faculty Interactive Projector Studio',
      caption: 'Dynamic QR rotation display, full-screen projection, live attendee counter & fallback TOTP'
    },
    {
      src: './assets/figures/student_login.jpg',
      title: 'Student & Faculty Portal Login',
      caption: 'Role-segregated JWT authentication with persistent device hardware fingerprint validation'
    },
    {
      src: './assets/figures/qr_scanner.jpg',
      title: 'Mobile PWA Camera Optical Scanner',
      caption: 'Sub-second video stream decoding using HTML5 QR & native BarcodeDetector API'
    },
    {
      src: './assets/figures/face_liveness.jpg',
      title: 'Client-Side Facial Liveness Verification',
      caption: 'MediaPipe BlazeFace 468 landmarks with randomized head-turn and eye-blink challenges'
    },
    {
      src: './assets/figures/attendance_marked.jpg',
      title: 'Real-Time Attendance Confirmation',
      caption: 'Instant verification commit with cryptographic nonces & live faculty roster broadcast'
    }
  ];

  return (
    <section id="demo" className="py-20 md:py-28 relative bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-xs font-semibold text-cyan-400 mb-4">
            <Monitor className="w-3.5 h-3.5" />
            <span>Interactive Exhibition Portals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Platform Demonstration & Media
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Experience the working product, inspect the verification workflows, and review the open-source engineering.
          </p>
        </div>

        {/* 2-Column: Live Demo Launcher vs Project Video */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          
          {/* Card 1: Live Demo Portal */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-700/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                    Production PWA Active
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-navy-950 px-2.5 py-1 rounded border border-slate-800">
                  Cloudflare Edge CDN
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Experience SmartAttend Live
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Open the official progressive web application deployed on global edge CDN. Explore the role-based navigation across Administrator, Faculty Instructor, and Student views.
              </p>

              {/* Access note */}
              <div className="p-4 rounded-2xl bg-navy-950/90 border border-slate-800 space-y-2 mb-6">
                <div className="flex items-center gap-2 text-cyan-400 text-xs font-semibold">
                  <Lock className="w-4 h-4" />
                  <span>Institutional Access Notice</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  The live platform requires verified institutional credentials and hardware pairing for active attendance marking. Visitors can explore public views and interface design directly.
                </p>
              </div>

              {/* Status pills */}
              <div className="grid grid-cols-2 gap-3 text-xs mb-8">
                <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5 font-mono text-[11px]">Backend API:</span>
                  <span className="text-emerald-400 font-semibold font-mono">Render Singapore</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/80 border border-slate-800">
                  <span className="text-slate-400 block mb-0.5 font-mono text-[11px]">Database:</span>
                  <span className="text-cyan-400 font-semibold font-mono">Supabase Mumbai</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={projectConfig.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center py-3.5 text-sm"
              >
                <span>Open Live Application ({projectConfig.links.liveDemo})</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={projectConfig.links.sourceCodeRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center py-3 text-xs flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Browse Source Repository (GitHub)</span>
              </a>
            </div>
          </div>

          {/* Card 2: Video Walkthrough & Explanation */}
          <div className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-700/70 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Play className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                    Project Video Walkthrough
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-navy-950 px-2.5 py-1 rounded border border-slate-800">
                  Full HD / 4K
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                Architectural Breakdown & Demo
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Watch our complete project presentation covering classroom proxy vulnerabilities, dynamic HMAC visual token generation, spatial GNSS validation, and real-time roster updates.
              </p>

              {/* Video Thumbnail / Player Container */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-navy-950 aspect-video mb-6 group">
                {projectConfig.links.youtubeVideoId ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${projectConfig.links.youtubeVideoId}`}
                    title="SmartAttend Project Walkthrough"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                      <Play className="w-7 h-7 fill-cyan-400/40 ml-1" />
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      SmartAttend Cinematic Walkthrough
                    </h4>
                    <p className="text-xs text-slate-400 max-w-sm mb-3">
                      Complete 8-clip demonstration spanning classroom roll-call bottlenecks, dynamic QR studio, facial liveness, and Supabase ledger.
                    </p>
                    <span className="text-[11px] font-mono text-cyan-400 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800">
                      Exhibition Video Ready
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-3">
              <a
                href={projectConfig.links.youtubeVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center py-3.5 text-sm flex items-center justify-center gap-2 text-cyan-300 hover:text-white"
              >
                <Play className="w-4 h-4 fill-cyan-400" />
                <span>Watch on YouTube / Exhibition Screen</span>
              </a>

              <a
                href={projectConfig.links.researchPaperDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full text-center py-3 text-xs flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Read Research Paper on Google Drive</span>
              </a>
            </div>
          </div>

        </div>

        {/* UI Screenshots Gallery */}
        <div className="glass-panel p-6 sm:p-8 rounded-3xl border-slate-700/70">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Application Screenshots
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Verified User Interface Gallery
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Click any interface capture to examine detailed high-resolution screens.
              </p>
            </div>
            <span className="text-xs font-mono text-slate-400 bg-navy-950 px-3 py-1.5 rounded-lg border border-slate-800">
              5 Screens Documented
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {screenshots.map((s, idx) => (
              <div
                key={idx}
                onClick={() => onSelectImage(s.src, s.title)}
                className="group cursor-pointer rounded-2xl overflow-hidden bg-navy-950 border border-slate-800 hover:border-cyan-500/50 transition-all hover:-translate-y-1 shadow-lg"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                  <img
                    src={s.src}
                    alt={s.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-navy-950/40 group-hover:bg-transparent transition-colors" />
                  <div className="absolute top-2.5 right-2.5 p-1.5 rounded-lg bg-navy-950/80 backdrop-blur-sm text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5 text-cyan-400" />
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {s.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed">
                    {s.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
