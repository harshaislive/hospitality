"use client";

import Link from 'next/link';

export default function FloatingReserveButton() {
  return (
    <>
      {/* Desktop Button */}
      <div className="hidden md:block fixed bottom-8 right-8 z-[900]">
        <Link
          href="https://live.ipms247.com/booking/book-rooms-blytonbungalow"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-rich-red text-warm-yellow border border-rich-red px-8 py-4 rounded-full shadow-2xl hover:bg-white hover:text-rich-red hover:scale-105 transition-all duration-300 uppercase tracking-[2px] text-xs font-medium"
        >
          <span>Reserve Now</span>
          <span className="text-lg">↗</span>
        </Link>
      </div>

      {/* Mobile Sticky Button */}
      <div className="md:hidden fixed bottom-0 left-0 w-full z-[900] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-4 flex justify-between items-center">
        <div className="flex flex-col">
            <span className="text-[0.7rem] uppercase tracking-[1px] text-dark-earth font-bold">The Blyton Bungalow</span>
            <span className="text-[0.65rem] text-dark-brown/70">Coorg, India</span>
        </div>
        <Link
          href="https://live.ipms247.com/booking/book-rooms-blytonbungalow"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-rich-red text-warm-yellow px-6 py-3 rounded-sm shadow-lg uppercase tracking-[1.5px] text-[0.7rem] font-bold"
        >
          Reserve Now
        </Link>
      </div>
    </>
  );
}
