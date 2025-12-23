"use client";

import { useState, useEffect } from 'react';

const slides = [
  "https://ik.imagekit.io/ofgaefbk0/unnamed%20(3).webp?q=80&w=2070&auto=format&fit=crop",
  "https://ik.imagekit.io/ofgaefbk0/PBR_3151.jpg?q=80&w=2070&auto=format&fit=crop",
  "https://ik.imagekit.io/ofgaefbk0/1763532188575-utxa9z%20(1).webp?q=80&w=2000&auto=format&fit=crop"
];

export default function WildernessRefined() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex flex-col md:flex-row min-h-[680px] bg-soft-gray items-center">
      {/* Slider Column */}
      <div className="w-full md:w-1/2 h-[400px] md:h-[680px] relative overflow-hidden order-last md:order-first">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-[2]' : 'opacity-0 z-[1]'
            }`}
            style={{ backgroundImage: `url('${slide}')` }}
          />
        ))}
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

      {/* Content Column */}
      <div className="w-full md:w-1/2 py-20 px-8 md:px-[8%]">
        <span className="text-[0.7rem] uppercase tracking-[2.5px] font-normal text-rich-red mb-[25px] block">A Glimpse into Paradise</span>
        <h2 className="text-[2.6rem] my-[20px] text-dark-earth">The Luxury of Raw Nature.</h2>
        <ul className="mt-[30px] border-t border-black/10 list-none">
          {[
            "6 Signature rooms designed to disappear into the landscape.",
            "Cuisine that travels zero miles—from soil to plate.",
            "128 acres of coffee estate, yours to roam.",
            "Neighbors include the Malabar Giant Squirrel and the Malabar Hornbill."
          ].map((item, i) => (
            <li key={i} className="py-[18px] border-b border-black/10 font-serif text-[1.1rem] italic text-dark-earth">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
