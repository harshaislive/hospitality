"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface ExperienceData {
  category: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  images: string[];
  ctaLink: string;
}

interface ExperienceModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: ExperienceData | null;
}

export default function ExperienceModal({ isOpen, onClose, data }: ExperienceModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Reset image index when data changes
  useEffect(() => {
    if (isOpen) {
      setCurrentImageIndex(0);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, data]);

  if (!isOpen || !data) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center p-4 md:p-0">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-[1200px] h-[90vh] md:h-[85vh] bg-[#1a1715] flex flex-col md:flex-row overflow-hidden shadow-2xl rounded-sm animate-fadeIn border border-white/5">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-30 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left: Image Gallery */}
        <div className="w-full md:w-[60%] h-[40%] md:h-full relative bg-black group">
          {/* Main Image */}
          <div className="w-full h-full relative">
            {data.images[currentImageIndex] && (
              <Image 
                src={data.images[currentImageIndex]} 
                alt={data.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-opacity duration-700"
                priority
              />
            )}
            {/* Gradient Overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50"></div>
          </div>

          {/* Thumbnails */}
          {data.images.length > 1 && (
            <div className="absolute bottom-6 left-6 flex gap-3 z-10 overflow-x-auto max-w-[90%] pb-2 scrollbar-hide">
              {data.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-16 h-12 md:w-20 md:h-14 shrink-0 border transition-all duration-300 rounded-sm overflow-hidden ${
                    idx === currentImageIndex ? 'border-white opacity-100' : 'border-white/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <Image 
                    src={img} 
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    sizes="100px"
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Content Panel */}
        <div className="w-full md:w-[40%] h-[60%] md:h-full bg-[#1a1715] text-[#fdfbf7] flex flex-col relative">
          <div className="p-6 md:p-12 flex flex-col h-full overflow-y-auto custom-scrollbar">
            
            {/* Header Tags */}
            <div className="flex items-center gap-3 text-[0.65rem] tracking-[3px] uppercase text-warm-yellow/90 mb-8 font-sans font-light">
              <span>{data.category}</span>
              <span className="w-8 h-[1px] bg-white/20"></span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.05] mb-6 !text-white font-light italic">
              {data.title}
            </h2>

            {/* Subtitle */}
            <h3 className="text-[0.75rem] tracking-[2px] uppercase font-light !text-white/70 mb-8 leading-relaxed font-sans border-l border-rich-red/60 pl-4">
              {data.subtitle}
            </h3>

            {/* Description */}
            <div className="text-[0.95rem] md:text-[1rem] leading-relaxed text-white/60 font-sans font-extralight mb-10 text-justify">
              <p>{data.description}</p>
            </div>

            {/* Features List */}
            <ul className="space-y-4 mb-12">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4 text-[0.85rem] text-white/70 font-extralight">
                  <span className="w-1 h-1 rounded-full bg-rich-red/60 shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-auto pt-8 border-t border-white/5 flex justify-center md:justify-start">
              <a 
                href={data.ctaLink} 
                className="inline-block px-10 py-[16px] bg-rich-red uppercase text-[0.75rem] tracking-[2.5px] font-normal text-white transition-all duration-300 hover:italic hover:scale-105 shadow-lg"
              >
                Reserve the stay
              </a>
            </div>
            <p className="text-center md:text-left text-[0.6rem] uppercase tracking-[2px] text-white/30 mt-4 font-sans">
              Available exclusively for residents
            </p>

          </div>
        </div>

      </div>
    </div>
  );
}