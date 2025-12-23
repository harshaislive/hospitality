"use client";

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';

const carouselImages = [
  { src: "https://ik.imagekit.io/ofgaefbk0/Photo%20Jul%2019,%206%2001%2037%20PM%20(4).jpg?q=80&w=2070&auto=format&fit=crop", alt: "Cozy room interior" },
  { src: "https://ik.imagekit.io/ofgaefbk0/Photo%20Jul%2019,%206%2001%2037%20PM%20(7).jpg?q=80&w=1887&auto=format&fit=crop", alt: "Estate porch with rocking chairs" },
  { src: "https://ik.imagekit.io/ofgaefbk0/IMG_2786.jpg?q=80&w=2070&auto=format&fit=crop", alt: "Sunroom overlooking the forest" },
  { src: "https://ik.imagekit.io/ofgaefbk0/Photo%20Jul%2019,%206%2001%2037%20PM%20(8).jpg?q=80&w=2070&auto=format&fit=crop", alt: "Forest-side breakfast nook" },
  { src: "https://ik.imagekit.io/ofgaefbk0/Photo%20Jul%2019,%206%2001%2037%20PM%20(3).jpg?q=80&w=1978&auto=format&fit=crop", alt: "Misty forest view" },
];

export default function AccommodationSplit() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: number) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.querySelector('.carousel-card')?.clientWidth || 300;
      carouselRef.current.scrollBy({ left: direction * (cardWidth + 24), behavior: 'smooth' });
      setTimeout(checkScroll, 400); // Wait for scroll animation
    }
  };

  return (
    <section className="flex flex-col md:flex-row w-full min-h-[800px] bg-off-white">
      <div className="w-full md:w-1/2 h-[400px] md:h-auto bg-[url('https://ik.imagekit.io/ofgaefbk0/IMG_4142.jpg?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center">
      </div>

      <div className="w-full md:w-1/2 py-20 px-5 md:px-[60px] flex flex-col justify-center items-center">
        <div className="text-center max-w-[600px] mb-[60px]">
          <span className="text-[0.7rem] uppercase tracking-[2.5px] font-normal text-rich-red mb-[25px] block">Poomaale Estate, Coorg</span>
          <h2 className="text-[3rem] mb-[30px] leading-[1.2]">The Blyton Bungalow</h2>
          <p className="text-[1rem] text-dark-earth leading-[1.7] mb-[40px] font-light">
            The architecture of the Western Ghats is not built; it is grown. The Blyton Bungalow respects this law. 
            Constructed from the earth it stands on, overlooking the canopy, it is a place to sleep with the windows 
            open and wake to the call of the Malabar Whistling Thrush.
          </p>

          <div className="flex gap-10 justify-center">
            <Link href="https://live.ipms247.com/booking/book-rooms-blytonbungalow" className="text-[0.75rem] uppercase tracking-[2px] font-normal text-rich-red pb-[3px] border-b border-rich-red inline-flex items-center gap-[5px] hover:opacity-60 transition-opacity">
              Reserve <span className="text-[1rem] relative -top-[2px]">↗</span>
            </Link>
          </div>
        </div>

        {/* Carousel */}
        <div className="w-full relative px-5 md:px-10 overflow-hidden">
          <button 
            onClick={() => scroll(-1)} 
            disabled={!canScrollLeft}
            className="absolute top-1/2 -translate-y-1/2 left-[5px] w-10 h-10 bg-off-white rounded-full shadow-md flex items-center justify-center cursor-pointer z-10 border border-dark-earth/15 text-[1.2rem] text-forest-green disabled:opacity-35 disabled:cursor-not-allowed"
            aria-label="Previous slide"
          >
            &#8249;
          </button>
          
          <div 
            ref={carouselRef}
            className="overflow-x-auto overflow-y-hidden w-full scrollbar-hide"
            onScroll={checkScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <div className="flex gap-6 w-max pb-4"> {/* w-max to force horizontal */}
              {carouselImages.map((img, idx) => (
                <div key={idx} className="carousel-card w-[280px] md:w-[360px] bg-white shadow-lg shrink-0">
                  <img src={img.src} alt={img.alt} className="w-full h-[360px] object-cover block" />
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => scroll(1)} 
            disabled={!canScrollRight}
            className="absolute top-1/2 -translate-y-1/2 right-[5px] w-10 h-10 bg-off-white rounded-full shadow-md flex items-center justify-center cursor-pointer z-10 border border-dark-earth/15 text-[1.2rem] text-forest-green disabled:opacity-35 disabled:cursor-not-allowed"
            aria-label="Next slide"
          >
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
}
