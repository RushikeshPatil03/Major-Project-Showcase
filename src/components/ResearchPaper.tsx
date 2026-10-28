import React, { useState } from 'react';
import { projectConfig } from '../data/projectConfig';
import { 
  Download, 
  Copy, 
  Check, 
  BookOpen, 
  BarChart3,
  ExternalLink
} from 'lucide-react';

export const ResearchPaper: React.FC = () => {
  const [copiedBibtex, setCopiedBibtex] = useState(false);

  const bibtexCitation = `@inproceedings{smartattend2026,
  title={SmartAttend: A Spatial-Temporal Multi-Factor Verification Framework for Secure Attendance Management},
  author={Varsha, K. and Patil, Rushikesh Subhash and Pramod, S. G. and Jagadish, R. M. and Shivamani, B. and Aravind, Srirama},
  booktitle={IEEE International Conference on Communication and Wireless Networks (ICCWN)},
  year={2026},
  organization={Ballari Institute of Technology and Management (BITM)},
  address={Ballari, India}
}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(bibtexCitation);
    setCopiedBibtex(true);
    setTimeout(() => setCopiedBibtex(false), 2500);
  };

  return (
    <section id="research" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-800/80 text-xs font-semibold text-emerald-400 mb-4">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Research & Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Research Paper & Empirical Validation
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            Peer-reviewed methodology, mathematical formulations, and exhaustive security benchmark analysis.
          </p>
        </div>

        {/* Paper Summary Card */}
        <div className="glass-panel rounded-3xl p-6 sm:p-8 md:p-10 border-slate-700/70 mb-12">
          
          {/* Header Metadata */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-8">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="badge-tag bg-blue-950/80 text-blue-300 border-blue-800">
                  IEEE Format Manuscript
                </span>
                <span className="badge-tag bg-cyan-950/80 text-cyan-300 border-cyan-800">
                  B.E. Research & Prototype
                </span>
                <span className="badge-tag bg-emerald-950/80 text-emerald-300 border-emerald-800">
                  Dept. of CSE (Data Science)
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {projectConfig.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                <strong>Authors:</strong> Ms. Varsha K, Rushikesh Subhash Patil, Pramod S G, Dr. Jagadish RM, Shivamani B, Srirama Aravind
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={projectConfig.links.researchPaperDriveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-3 px-5 flex items-center justify-center gap-2"
              >
                <span>Access on Google Drive</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={projectConfig.links.researchPaperPdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs py-3 px-5 flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </a>
            </div>
          </div>

          {/* Abstract */}
          <div className="mb-8">
            <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3">
              Abstract
            </h4>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed bg-navy-950/80 p-5 rounded-2xl border border-slate-800/80">
              {projectConfig.abstract}
            </p>
          </div>

          {/* Core Scientific Contributions */}
          <div className="mb-10">
            <h4 className="text-sm font-mono uppercase tracking-wider text-emerald-400 font-bold mb-4">
              Core Methodological Contributions
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1">01 • Interdependent Verification</div>
                <h5 className="text-sm font-semibold text-white mb-1">Four-Tier Checkpoint Chain</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Synthesizes dynamic rotating QR visual tokens, ellipsoidal Haversine geofences, active directional facial liveness, and hardware fingerprint binding.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1">02 • High-Concurrency Architecture</div>
                <h5 className="text-sm font-semibold text-white mb-1">Asynchronous Compute & Cache</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Engineered using Node.js, FastAPI, Redis single-use token invalidation, and Supavisor PostgreSQL transaction pooling (97% connection reduction).
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1">03 • Zero Capital Hardware</div>
                <h5 className="text-sm font-semibold text-white mb-1">Commodity PWA Deployment</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Eliminates expensive biometric kiosks ($500–$2,000/room), executing client-side landmark tracking entirely inside modern web browsers.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-navy-950/80 border border-slate-800">
                <div className="text-xs font-mono font-bold text-cyan-400 mb-1">04 • Empirical Validation</div>
                <h5 className="text-sm font-semibold text-white mb-1">Exhaustive Stress & Spoof Testing</h5>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Validated under synthetic stress trials up to 300 req/s, detailing 30.1 ms median latency and 100% deflection across 5,000 adversarial spoof attempts.
                </p>
              </div>
            </div>
          </div>

          {/* Paradigm Comparison Table from Research Paper */}
          <div className="mb-10">
            <div className="flex items-center gap-2 mb-4">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <h4 className="text-sm font-mono uppercase tracking-wider text-cyan-400 font-bold">
                Table I: Architectural & Vulnerability Comparison Across Attendance Paradigms
              </h4>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 font-mono text-slate-400 uppercase text-[11px]">
                    <th className="py-3 px-3">Evaluation Dimension</th>
                    <th className="py-3 px-3">Paper Roster</th>
                    <th className="py-3 px-3">Biometric Kiosk</th>
                    <th className="py-3 px-3">Static QR Code</th>
                    <th className="py-3 px-3">BLE / Wi-Fi Beacon</th>
                    <th className="py-3 px-3 text-cyan-400 font-bold">SmartAttend (Proposed)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-3 font-semibold text-white">Hardware Dependency</td>
                    <td className="py-3 px-3 text-slate-400">Paper sheet</td>
                    <td className="py-3 px-3 text-slate-400">Dedicated Kiosk</td>
                    <td className="py-3 px-3 text-slate-400">Printed Sheet</td>
                    <td className="py-3 px-3 text-slate-400">BLE Beacon Hardware</td>
                    <td className="py-3 px-3 text-emerald-400 font-bold">Zero Proprietary Hardware</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-3 font-semibold text-white">Buddy-Punching Resilience</td>
                    <td className="py-3 px-3 text-red-400">Negligible</td>
                    <td className="py-3 px-3 text-amber-400">Moderate</td>
                    <td className="py-3 px-3 text-red-400">Vulnerable</td>
                    <td className="py-3 px-3 text-red-400">Vulnerable</td>
                    <td className="py-3 px-3 text-emerald-400 font-bold">Immune (MFA + Device Binding)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-3 font-semibold text-white">Off-Site Spoofing Defense</td>
                    <td className="py-3 px-3 text-red-400">None</td>
                    <td className="py-3 px-3 text-emerald-400">Immune (Physical)</td>
                    <td className="py-3 px-3 text-red-400">Vulnerable</td>
                    <td className="py-3 px-3 text-amber-400">Semi-vulnerable</td>
                    <td className="py-3 px-3 text-emerald-400 font-bold">Immune (Dual-Tier Geofence)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-3 font-semibold text-white">Temporal Token Rotation</td>
                    <td className="py-3 px-3 text-slate-500">N/A</td>
                    <td className="py-3 px-3 text-slate-500">N/A</td>
                    <td className="py-3 px-3 text-red-400">Static (None)</td>
                    <td className="py-3 px-3 text-slate-400">Periodic (10–30s)</td>
                    <td className="py-3 px-3 text-cyan-300 font-bold font-mono">Dynamic (1.0s HMAC Token)</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-3 font-semibold text-white">Biometric Liveness Spoof</td>
                    <td className="py-3 px-3 text-slate-400">Manual inspection</td>
                    <td className="py-3 px-3 text-red-400">2D photo vulnerable</td>
                    <td className="py-3 px-3 text-red-400">None</td>
                    <td className="py-3 px-3 text-red-400">None</td>
                    <td className="py-3 px-3 text-emerald-400 font-bold">Active Directional 468 Liveness</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-3 font-semibold text-white">Logging / Queue Latency</td>
                    <td className="py-3 px-3 text-red-400">8–15 min / class</td>
                    <td className="py-3 px-3 text-amber-400">3–5s / student (queue)</td>
                    <td className="py-3 px-3 text-red-400">Instant (Fraudulent)</td>
                    <td className="py-3 px-3 text-slate-400">5–10s discovery</td>
                    <td className="py-3 px-3 text-cyan-300 font-bold font-mono">30.1 ms Median Validation</td>
                  </tr>
                  <tr className="hover:bg-slate-800/30">
                    <td className="py-3 px-3 font-semibold text-white">Capital Cost Per Room</td>
                    <td className="py-3 px-3 text-emerald-400">Negligible</td>
                    <td className="py-3 px-3 text-red-400">High ($500–$2,000)</td>
                    <td className="py-3 px-3 text-emerald-400">Negligible</td>
                    <td className="py-3 px-3 text-amber-400">Moderate ($50–$150)</td>
                    <td className="py-3 px-3 text-emerald-400 font-bold">$0 Capital Expenditure</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* BibTeX Citation Box */}
          <div className="pt-6 border-t border-slate-800">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                Cite this Research (BibTeX)
              </span>
              <button
                onClick={copyToClipboard}
                className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-950 border border-slate-700 transition-colors"
              >
                {copiedBibtex ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Citation</span>
                  </>
                )}
              </button>
            </div>

            <pre className="p-4 rounded-xl bg-navy-950 border border-slate-800/80 font-mono text-xs text-slate-300 overflow-x-auto leading-relaxed">
              {bibtexCitation}
            </pre>
          </div>

        </div>

      </div>
    </section>
  );
};
