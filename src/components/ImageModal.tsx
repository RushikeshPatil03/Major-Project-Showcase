import React from 'react';
import { X } from 'lucide-react';

interface ImageModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string | null;
  imageTitle: string | null;
}

export const ImageModal: React.FC<ImageModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  imageTitle,
}) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 p-2 rounded-xl bg-navy-900 text-slate-300 hover:text-white border border-slate-700 transition-colors"
          aria-label="Close image preview"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Image Box */}
        <div className="glass-panel p-2 rounded-2xl border-slate-700 max-h-[80vh] overflow-auto flex items-center justify-center bg-navy-950">
          <img
            src={imageSrc}
            alt={imageTitle || 'Enlarged Image Preview'}
            className="max-h-[75vh] w-auto object-contain rounded-xl"
          />
        </div>

        {/* Title / Caption */}
        {imageTitle && (
          <div className="mt-4 px-4 py-2 rounded-xl bg-navy-900/90 border border-slate-800 text-center">
            <h4 className="text-sm font-semibold text-white">
              {imageTitle}
            </h4>
          </div>
        )}
      </div>
    </div>
  );
};
