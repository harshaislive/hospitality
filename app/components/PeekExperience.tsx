"use client";

import { useState } from 'react';

export default function PeekExperience() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="relative h-[600px] bg-[url('https://ik.imagekit.io/ofgaefbk0/Yoga.jpg?q=80&w=2021&auto=format&fit=crop')] bg-cover bg-center bg-fixed flex items-center justify-center">
      {!isPlaying && (
        <>
          <div className="absolute inset-0 bg-black/30 transition-opacity duration-300"></div>
          <div 
            className="relative z-[2] text-center text-white cursor-pointer group"
            onClick={() => setIsPlaying(true)}
          >
            <div className="w-20 h-20 border-[2px] border-white rounded-full flex items-center justify-center mx-auto mb-5 text-[2rem] transition-all duration-300 group-hover:bg-white group-hover:text-[#222] group-hover:scale-110">
              &#9654;
            </div>
            <div className="uppercase tracking-[3px] text-[0.8rem] font-normal">Watch the Experience</div>
          </div>
        </>
      )}

      {isPlaying && (
        <iframe 
          width="100%" 
          height="100%" 
          src="https://www.youtube.com/embed/1eBFwxLKRuk?autoplay=1&start=5&rel=0" 
          title="YouTube video player" 
          className="absolute inset-0 z-10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          allowFullScreen
        ></iframe>
      )}
    </section>
  );
}
