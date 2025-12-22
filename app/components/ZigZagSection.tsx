"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface ZigZagSectionProps {
  category: string;
  title: string;
  description: string;
  linkText: string;
  linkUrl: string;
  slides: string[];
  reversed?: boolean; // If true, Text Left, Image Right. Default: Image Left, Text Right.
  accentColor?: 'green' | 'red';
}

export default function ZigZagSection({ category, title, description, linkText, linkUrl, slides, reversed = false, accentColor = 'green' }: ZigZagSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const buttonClass = accentColor === 'red' 
    ? "border-rich-red text-rich-red hover:bg-rich-red hover:text-white"
    : "border-forest-green text-forest-green hover:bg-forest-green hover:text-white";

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[600px]">
      {/* Image Slider Column */}
      <div className={`relative w-full h-[400px] md:h-auto overflow-hidden ${reversed ? 'md:order-2' : ''}`}>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-[2]' : 'opacity-0 z-[1]'
            }`}
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}
        
        {/* Dots */}
        <div className="absolute bottom-[25px] left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-[10px] h-[10px] rounded-full border border-white/20 transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-120 border-white' : 'bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Text Content Column */}
      <div className={`py-20 px-10 md:px-[10%] flex flex-col justify-center ${reversed ? 'bg-off-white md:order-1' : 'bg-soft-gray'}`}>
        <span className="text-[0.7rem] uppercase tracking-[2.5px] font-normal text-rich-red mb-[25px] block">{category}</span>
        <h3 className="text-[2.4rem] mb-[25px] text-dark-earth">{title}</h3>
        <p className="text-[1rem] text-dark-earth mb-[40px] font-light max-w-[500px] leading-[1.6]">
          {description}
        </p>
        <Link href={linkUrl} className={`inline-block px-8 py-[14px] border uppercase text-[0.7rem] tracking-[2px] font-normal w-fit transition-all duration-300 hover:italic hover:scale-105 ${buttonClass}`}>
          {linkText}
        </Link>
      </div>
    </section>
  );
}
