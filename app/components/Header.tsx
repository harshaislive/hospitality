"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full px-5 py-4 md:px-10 md:py-[18px] flex justify-between items-center z-[1000] border-b border-transparent transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        scrolled
          ? 'bg-dark-earth border-transparent shadow-lg text-white'
          : 'bg-transparent text-white'
      }`}
    >
      <div className="flex items-center gap-3">
        {/* Using standard img tag for external URL to avoid Next.js config for now, or use Image if configured. 
            Original HTML used img. keeping it simple for replica. */}
        <img
          src="https://ik.imagekit.io/ofgaefbk0/660a4946cbee8be3fb03c9f8_BEFOREST%20WHITE-01-p-500.png"
          alt="Beforest logo"
          className="h-[50px] w-auto block"
        />
      </div>
      <nav className="hidden md:block">
        <ul className="flex list-none gap-[35px]">
          {['Collectives', 'Hospitality', 'Bewild', 'Journal', 'About'].map((item) => (
            <li key={item}>
              <Link
                href="#"
                className={`text-xs uppercase tracking-[2px] font-normal hover:text-warm-yellow transition-all duration-300 ${
                  scrolled ? 'text-white' : 'text-inherit'
                }`}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/contact-us"
              className={`text-xs uppercase tracking-[2px] font-normal hover:text-warm-yellow transition-all duration-300 ${
                scrolled ? 'text-white' : 'text-inherit'
              }`}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
