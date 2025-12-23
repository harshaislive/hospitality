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
        className="absolute inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full max-w-[1200px] h-[90vh] md:h-[85vh] bg-[#2a2622] flex flex-col md:flex-row overflow-hidden shadow-2xl rounded-sm animate-fadeIn border border-white/10">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-30 text-white bg-black/50 hover:bg-black/80 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
          aria-label="Close modal"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                className="object-cover transition-opacity duration-500"
                priority
              />
            )}
            {/* Gradient Overlay for visual depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-50"></div>
          </div>

          {/* Thumbnails (Desktop: Bottom Left overlay) - Only show if more than 1 image */}
          {data.images.length > 1 && (
            <div className="absolute bottom-6 left-6 flex gap-3 z-10 overflow-x-auto max-w-[90%] pb-2 scrollbar-hide">
              {data.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`relative w-16 h-12 md:w-20 md:h-14 shrink-0 border-2 transition-all duration-300 rounded-sm overflow-hidden ${
                    idx === currentImageIndex ? 'border-white opacity-100 ring-2 ring-black/50' : 'border-white/30 opacity-70 hover:opacity-100'
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
        <div className="w-full md:w-[40%] h-[60%] md:h-full bg-[#2a2622] text-[#fdfbf7] flex flex-col relative">
          <div className="p-6 md:p-10 flex flex-col h-full overflow-y-auto custom-scrollbar">
            
            {/* Header Tags */}
            <div className="flex items-center gap-3 text-[0.7rem] tracking-[2px] uppercase text-warm-yellow mb-6 font-sans font-medium">
              <span>{data.category}</span>
              <span className="w-8 h-[1px] bg-white/20"></span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-[2rem] md:text-[3rem] leading-[1.1] mb-4 text-white font-normal">
              {data.title}
            </h2>

            {/* Subtitle */}
            <h3 className="text-[0.8rem] tracking-[1.5px] uppercase font-normal text-white/90 mb-6 leading-relaxed font-sans border-l-2 border-rich-red pl-4">
              {data.subtitle}
            </h3>

            {/* Description */}
            <div className="text-[1rem] md:text-[1.05rem] leading-relaxed text-white/80 font-sans font-light mb-8">
              <p>{data.description}</p>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-10 bg-white/5 p-5 rounded-sm">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[0.9rem] text-white/90 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-rich-red shrink-0"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="mt-auto pt-6 border-t border-white/10">
              <a 
                href={data.ctaLink} 
                className="group block w-full bg-white text-dark-earth py-4 px-6 text-center uppercase tracking-[2px] text-[0.8rem] font-bold transition-all duration-300 hover:bg-warm-yellow hover:text-dark-earth shadow-lg"
              >
                Reserve This Experience <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
              </a>
              <p className="text-center text-[0.7rem] text-white/50 mt-3 italic font-serif">
                Available exclusively for guests at Blyton Bungalow
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}