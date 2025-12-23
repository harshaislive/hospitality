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
    <div className="fixed inset-0 z-[2000] flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative w-full h-full md:w-[95%] md:h-[90%] bg-[#2a2622] flex flex-col md:flex-row overflow-hidden shadow-2xl animate-fadeIn">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 z-20 text-white/70 hover:text-white transition-colors p-2"
          aria-label="Close modal"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Left: Image Gallery */}
        <div className="w-full md:w-[65%] h-[40vh] md:h-full relative bg-black group">
          {/* Main Image */}
          <div className="w-full h-full relative">
            <Image 
              src={data.images[currentImageIndex]} 
              alt={data.title}
              fill
              className="object-cover transition-opacity duration-500"
              priority
            />
            {/* Gradient Overlay for text readability if needed, or vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-60"></div>
          </div>

          {/* Thumbnails (Desktop: Bottom Left overlay) */}
          <div className="absolute bottom-6 left-6 flex gap-3 z-10 overflow-x-auto max-w-[90%] pb-2 scrollbar-hide">
            {data.images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`relative w-20 h-14 md:w-24 md:h-16 shrink-0 border-2 transition-all duration-300 ${
                  idx === currentImageIndex ? 'border-white opacity-100' : 'border-transparent opacity-60 hover:opacity-100'
                }`}
              >
                <Image 
                  src={img} 
                  alt={`Thumbnail ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right: Content Panel */}
        <div className="w-full md:w-[35%] h-full bg-[#342e29] text-[#fdfbf7] flex flex-col overflow-y-auto">
          <div className="p-8 md:p-12 flex flex-col h-full">
            
            {/* Header Tags */}
            <div className="flex items-center gap-3 text-[0.65rem] md:text-[0.7rem] tracking-[2px] uppercase text-warm-yellow/80 mb-8 font-sans">
              <span>{data.category}</span>
              <span className="w-8 h-[1px] bg-white/20"></span>
              <span>Blyton Bungalow</span>
            </div>

            {/* Title */}
            <h2 className="font-serif text-[2.5rem] md:text-[3.5rem] leading-[1.1] mb-6 text-white font-light">
              {data.title}
            </h2>

            {/* Subtitle */}
            <h3 className="text-[0.8rem] md:text-[0.85rem] tracking-[1.5px] uppercase font-light text-white/80 mb-8 leading-relaxed font-sans border-l-2 border-rich-red pl-4">
              {data.subtitle}
            </h3>

            {/* Description */}
            <div className="prose prose-invert prose-p:text-white/70 prose-p:font-light prose-p:leading-relaxed prose-p:font-sans mb-8">
              <p>{data.description}</p>
            </div>

            {/* Features List */}
            <ul className="space-y-3 mb-10">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3 text-[0.9rem] text-white/80 font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-rich-red"></span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTA Button (Sticks to bottom or flows) */}
            <div className="mt-auto pt-8 border-t border-white/10">
              <a 
                href={data.ctaLink} 
                className="group block w-full bg-white text-dark-earth py-4 px-6 text-center uppercase tracking-[2px] text-[0.75rem] md:text-[0.8rem] font-medium transition-all duration-300 hover:bg-warm-yellow hover:text-dark-earth"
              >
                Reserve This Experience <span className="inline-block transition-transform duration-300 group-hover:translate-x-1 ml-1">→</span>
              </a>
              <p className="text-center text-[0.7rem] text-white/40 mt-3 italic font-serif">
                Available exclusively for guests at Blyton Bungalow
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
