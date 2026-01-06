"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Pages with light background where header should be dark initially
  const isLightPage = [
    '/contact-us',
    '/terms-and-conditions',
    '/privacy-policy',
    '/return-and-cancellation-policy'
  ].includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color based on scroll and page type
  // Scrolled: Always white text (bg-dark-earth)
  // Not Scrolled & Light Page: Dark text
  // Not Scrolled & Dark Page (Home): White text
  const textColorClass = scrolled 
    ? 'text-white' 
    : isLightPage 
      ? 'text-dark-earth' 
      : 'text-white';

  const logoFilterClass = (!scrolled && isLightPage) ? 'invert brightness-0' : '';

  return (
    <header
      className={`fixed top-0 w-full px-5 py-4 md:px-10 md:py-[18px] flex justify-between items-center z-[1000] border-b border-transparent transition-all duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
        scrolled
          ? 'bg-dark-earth border-transparent shadow-lg'
          : 'bg-transparent'
      } ${textColorClass}`}
    >
      <div className="flex items-center gap-3">
        <Image
          src="https://ik.imagekit.io/ofgaefbk0/660a4946cbee8be3fb03c9f8_BEFOREST%20WHITE-01-p-500.png"
          alt="Beforest logo"
          width={0}
          height={0}
          sizes="100vw"
          className={`h-[50px] w-auto block transition-all duration-300 ${logoFilterClass}`}
          style={{ width: 'auto', height: '50px' }}
        />
      </div>
      <nav className="hidden md:block">
        <ul className="flex list-none gap-[35px] items-center">
          <li>
            <Link
              href="https://hospitality.beforest.co/"
              className={`text-xs uppercase tracking-[2px] font-normal hover:text-warm-yellow transition-all duration-300 ${
                scrolled ? 'text-white' : 'text-inherit'
              }`}
            >
              Home
            </Link>
          </li>
          
          {/* More Dropdown */}
          <li className="relative group h-full flex items-center">
            <button
              className={`bg-transparent border-none p-0 font-[inherit] text-xs uppercase tracking-[2px] font-normal hover:text-warm-yellow transition-all duration-300 flex items-center gap-1 cursor-pointer focus:outline-none ${
                scrolled ? 'text-white' : 'text-inherit'
              }`}
            >
              More <span className="text-[0.6rem] relative -top-[1px]">▼</span>
            </button>
            
            {/* Dropdown Menu */}
            <div
              className="absolute top-full left-1/2 -translate-x-1/2 pt-8 w-[280px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out z-50"
            >
               <ul className="bg-off-white p-6 shadow-2xl flex flex-col gap-0 border border-dark-earth/10">
                  <li className="border-b border-dark-earth/10 last:border-0">
                    <Link
                      href="https://beforest.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[2.5px] text-dark-earth hover:text-rich-red transition-all duration-300 block py-4 px-2 relative group/link"
                    >
                      <span className="relative z-10">Beforest</span>
                      <span className="absolute bottom-3 left-2 right-2 h-[1px] bg-rich-red scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li className="border-b border-dark-earth/10 last:border-0">
                    <Link
                      href="https://bewild.life/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[2.5px] text-dark-earth hover:text-rich-red transition-all duration-300 block py-4 px-2 relative group/link"
                    >
                      <span className="relative z-10">Bewild</span>
                      <span className="absolute bottom-3 left-2 right-2 h-[1px] bg-rich-red scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://experiences.beforest.co/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs uppercase tracking-[2.5px] text-dark-earth hover:text-rich-red transition-all duration-300 block py-4 px-2 relative group/link"
                    >
                      <span className="relative z-10">Beforest Experiences</span>
                      <span className="absolute bottom-3 left-2 right-2 h-[1px] bg-rich-red scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out"></span>
                    </Link>
                  </li>
               </ul>
            </div>
          </li>

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