"use client";

import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function EstateGallery() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('grayscale');
          } else {
            entry.target.classList.add('grayscale');
          }
        });
      },
      { threshold: 0.4 }
    );

    const images = containerRef.current?.querySelectorAll('.gallery-img');
    images?.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);
  return (
    <section className="py-[100px] px-10 bg-off-white" ref={containerRef}>
      <div className="text-center mb-[60px]">
        <h2 className="text-[2.6rem] mb-[15px] text-dark-earth">Inside the Sanctuary</h2>
        <p className="text-[1.05rem] text-dark-earth">Where the lines between the living room and the living forest blur.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[15px] max-w-[1400px] mx-auto h-auto md:h-[615px]"> 
        {/* Item 1: Span 2 cols, 2 rows */}
        <div className="relative overflow-hidden group h-[300px] md:h-full md:col-span-2 md:row-span-2">
          <Image 
            src="https://beforest.co/wp-content/uploads/2023/04/PBR_8377-2.jpg?q=80&w=2000&auto=format&fit=crop" 
            alt="Bungalow Interior" 
            fill
            className="gallery-img object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Item 2 */}
        <div className="relative overflow-hidden group h-[300px] md:col-span-1">
          <Image 
            src="https://ik.imagekit.io/ofgaefbk0/unnamed%20(1).webp?q=80&w=2070&auto=format&fit=crop" 
            alt="Bedroom View" 
            fill
            className="gallery-img object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* Item 3 */}
        <div className="relative overflow-hidden group h-[300px] md:col-span-1">
          <Image 
            src="https://ik.imagekit.io/ofgaefbk0/unnamed%20(4).webp?q=80&w=2158&auto=format&fit=crop" 
            alt="Bathroom Detail" 
            fill
            className="gallery-img object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>

        {/* Item 4: Span 2 cols */}
        <div className="relative overflow-hidden group h-[300px] md:col-span-2">
          <Image 
            src="https://ik.imagekit.io/ofgaefbk0/unnamed%20(5).webp?q=80&w=2070&auto=format&fit=crop" 
            alt="Bungalow Exterior" 
            fill
            className="gallery-img object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
