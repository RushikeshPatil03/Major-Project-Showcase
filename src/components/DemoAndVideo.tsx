import React from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  ExternalLink, 
  Play, 
  FileText, 
  Monitor, 
  Radio, 
  Server, 
  Database
} from 'lucide-react';
import { GithubIcon } from './Icons';

export const DemoAndVideo: React.FC = () => {
  return (
    <section id="demo" className="py-20 md:py-28 relative bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-800/80 text-xs font-semibold text-cyan-400 mb-4">
            <Monitor className="w-3.5 h-3.5" />
            <span>Interactive Exhibition Portals</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live Platform Demonstration & Video
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Watch our complete project walkthrough and test the production application directly.
          </p>
        </div>

        {/* Full-Breadth Cinematic Video & Demo Showcase Container */}
        <div className="max-w-5xl mx-auto">
          
          <div className="glass-panel p-6 sm:p-10 rounded-3xl border-slate-700/70 shadow-2xl relative overflow-hidden mb-8">
            
            {/* Top Bar: Title, HD Badge, & Live Status */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-950 border border-cyan-800 flex items-center justify-center text-cyan-400">
                  <Play className="w-5 h-5 fill-cyan-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-wider">
                      Official Demonstration
                    </span>
                    <span className="text-slate-600 text-xs">•</span>
                    <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      1080p HD Video
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    SmartAttend Architectural Breakdown & Video Walkthrough
                  </h3>
                </div>
              </div>

              <div className="flex items-center gap-2 self-start sm:self-auto">
                <a
                  href={projectConfig.links.youtubeVideoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs py-2 px-3 flex items-center gap-1.5 text-cyan-300 hover:text-white"
                >
                  <Play className="w-3.5 h-3.5 fill-cyan-400" />
                  <span>Open in YouTube</span>
                  <ExternalLink className="w-3 h-3 ml-0.5" />
                </a>
              </div>
            </div>

            {/* Expansive Widescreen 16:9 Video Player Container (Wide Breadth) */}
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-navy-950 aspect-video w-full shadow-2xl mb-8 group">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube-nocookie.com/embed/${projectConfig.links.youtubeVideoId}`}
                title="SmartAttend Project Walkthrough"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Quick Walkthrough Synopsis */}
            <div className="p-5 rounded-2xl bg-navy-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed mb-8">
              <p>
                <strong>Video Content Overview:</strong> Explains the classroom attendance proxy crisis, dynamic HMAC visual token generation refreshed every 1–3s, sequential two-step camera scanning, Haversine GNSS spatial validation, on-device facial liveness verification, and real-time roster commits on Supabase PostgreSQL.
              </p>
            </div>

            {/* Live Application CTAs Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800">
              <a
                href={projectConfig.links.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm py-3 px-4 text-center flex items-center justify-center gap-2"
              >
                <span>Launch Live Demo (smartattend.app)</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={projectConfig.links.researchPaperDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm py-3 px-4 text-center flex items-center justify-center gap-2 text-emerald-300 hover:text-white"
              >
                <FileText className="w-4 h-4 text-emerald-400" />
                <span>Read Research Paper (Drive)</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={projectConfig.links.sourceCodeRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm py-3 px-4 text-center flex items-center justify-center gap-2"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Source Code Repository</span>
              </a>
            </div>

          </div>

          {/* Infrastructure Health Status Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800/80 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-navy-900 border border-slate-700 flex items-center justify-center text-cyan-400 shrink-0">
                <Radio className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="text-slate-400 block font-mono text-[11px]">Frontend Edge:</span>
                <span className="text-white font-semibold">Cloudflare CDN Global Edge</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800/80 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-navy-900 border border-slate-700 flex items-center justify-center text-emerald-400 shrink-0">
                <Server className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="text-slate-400 block font-mono text-[11px]">REST & WebSocket API:</span>
                <span className="text-white font-semibold">Render Node.js Singapore</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800/80 flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-navy-900 border border-slate-700 flex items-center justify-center text-violet-400 shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div className="text-xs">
                <span className="text-slate-400 block font-mono text-[11px]">Database Ledger:</span>
                <span className="text-white font-semibold">Supabase Mumbai (ap-south-1)</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
