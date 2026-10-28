import React, { useState } from 'react';
import { projectConfig } from '../data/projectConfig';
import { X, QrCode, ExternalLink, Check, Copy, AlertTriangle } from 'lucide-react';

interface QrModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);
  const targetUrl = projectConfig.links.publishedSiteUrl;

  if (!isOpen) return null;

  const copyUrl = () => {
    navigator.clipboard.writeText(targetUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="glass-panel w-full max-w-lg rounded-3xl border-slate-700 p-6 sm:p-8 relative shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl bg-navy-950 text-slate-400 hover:text-white border border-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800 text-[11px] font-mono text-cyan-400 mb-2">
            <QrCode className="w-3.5 h-3.5" />
            <span>Exhibition Banner Scannable Target</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Project Exhibition QR Code
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Scan with any smartphone camera to launch this showcase website directly.
          </p>
        </div>

        {/* QR Code Container with High-Contrast White Background */}
        <div className="flex flex-col items-center justify-center mb-6">
          <div className="p-4 bg-white rounded-2xl shadow-xl border-4 border-cyan-400/30 flex flex-col items-center">
            {/* High-Resolution Dynamic SVG QR pointing to the public URL */}
            <img 
              src={`https://api.qrserver.com/v1/create-qr-code/?size=260x260&margin=10&data=${encodeURIComponent(targetUrl)}`}
              alt="SmartAttend Exhibition Showcase QR Code"
              className="w-56 h-56 sm:w-64 sm:h-64 object-contain"
              onError={(e) => {
                // If offline, display fallback figure QR
                (e.target as HTMLImageElement).src = './assets/figures/project_qr.png';
              }}
            />
            <div className="mt-2 text-center">
              <span className="text-[11px] font-mono font-bold text-navy-950 block">
                SMARTATTEND SHOWCASE
              </span>
              <span className="text-[9px] font-mono text-slate-600 block">
                BITM • CSE (DATA SCIENCE)
              </span>
            </div>
          </div>

          <div className="mt-3 text-center">
            <span className="text-xs font-mono text-cyan-300 break-all bg-navy-950/80 px-3 py-1.5 rounded-lg border border-slate-800">
              {targetUrl}
            </span>
          </div>
        </div>

        {/* Banner Printing QA Guidelines */}
        <div className="p-3.5 rounded-xl bg-navy-950/90 border border-slate-800 text-xs text-slate-300 space-y-1.5 mb-6">
          <div className="flex items-center gap-2 text-amber-400 font-semibold text-[11px]">
            <AlertTriangle className="w-4 h-4" />
            <span>Physical Banner Printing Specification (60" × 36")</span>
          </div>
          <p className="text-[11px] text-slate-400 leading-relaxed">
            Ensure at least <strong>1.5 inches</strong> of quiet white zone around the printed code. Recommended size on the 5×3 ft banner is <strong>3.5" × 3.5"</strong> for 2-meter scanning distance.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button
            onClick={copyUrl}
            className="btn-secondary text-xs py-2.5 flex items-center justify-center gap-1.5"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">Copied Link!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Showcase URL</span>
              </>
            )}
          </button>

          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs py-2.5 flex items-center justify-center gap-1.5"
          >
            <span>Test URL Live</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
};
