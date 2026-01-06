"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

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
    <>
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

        {/* Desktop Navigation */}
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
                 <ul
                   className="shadow-2xl flex flex-col gap-0 p-6"
                   style={{ backgroundColor: '#ffffff', border: '1px solid #e5e7eb' }}
                 >
                    <li style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <Link
                        href="https://beforest.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-[2.5px] transition-all duration-300 block py-4 px-2 relative group/link"
                        style={{ color: '#111827' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#b91c1c'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
                      >
                        <span className="relative z-10">Beforest</span>
                        <span className="absolute bottom-3 left-2 right-2 h-[1px] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" style={{ backgroundColor: '#b91c1c' }}></span>
                      </Link>
                    </li>
                    <li style={{ borderBottom: '1px solid #e5e7eb' }}>
                      <Link
                        href="https://bewild.life/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-[2.5px] transition-all duration-300 block py-4 px-2 relative group/link"
                        style={{ color: '#111827' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#b91c1c'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
                      >
                        <span className="relative z-10">Bewild</span>
                        <span className="absolute bottom-3 left-2 right-2 h-[1px] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" style={{ backgroundColor: '#b91c1c' }}></span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://experiences.beforest.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs uppercase tracking-[2.5px] transition-all duration-300 block py-4 px-2 relative group/link"
                        style={{ color: '#111827' }}
                        onMouseEnter={(e) => e.currentTarget.style.color = '#b91c1c'}
                        onMouseLeave={(e) => e.currentTarget.style.color = '#111827'}
                      >
                        <span className="relative z-10">Beforest Experiences</span>
                        <span className="absolute bottom-3 left-2 right-2 h-[1px] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 ease-out" style={{ backgroundColor: '#b91c1c' }}></span>
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

        {/* Mobile Burger Button */}
        <button
          className={`md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 border-none cursor-pointer focus:outline-none transition-all duration-300 ${
            mobileMenuOpen ? 'fixed top-4 right-5 z-[1002]' : 'relative z-[1001]'
          }`}
          style={{ backgroundColor: 'transparent', color: mobileMenuOpen ? '#342e29' : 'currentColor' }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileMenuOpen}
        >
          <span
            className={`w-6 h-[2px] transition-all duration-300 ${
              mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
            }`}
            style={{ backgroundColor: mobileMenuOpen ? '#342e29' : 'currentColor' }}
          />
          <span
            className={`w-6 h-[2px] transition-all duration-300 ${
              mobileMenuOpen ? 'opacity-0' : ''
            }`}
            style={{ backgroundColor: mobileMenuOpen ? '#342e29' : 'currentColor' }}
          />
          <span
            className={`w-6 h-[2px] transition-all duration-300 ${
              mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
            style={{ backgroundColor: mobileMenuOpen ? '#342e29' : 'currentColor' }}
          />
        </button>
      </header>

      {/* Mobile Menu Overlay - Editorial Style */}
      <div
        className={`fixed inset-0 md:hidden z-[1000] transition-all duration-500 ease-[cubic-bezier(0.77,0,0.175,1)] ${
          mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ backgroundColor: mobileMenuOpen ? '#fdfbf7' : 'transparent' }}
      >
        <div className="h-full flex flex-col justify-center px-8 py-20">
          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            <Link
              href="https://hospitality.beforest.co/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[2.5rem] leading-tight font-serif text-dark-earth hover:text-rich-red transition-colors duration-300 py-2"
            >
              Home
            </Link>

            <div className="h-px bg-dark-earth/20 my-4"></div>

            <div className="flex flex-col gap-4 pl-4">
              <p className="text-[0.7rem] uppercase tracking-[3px] text-dark-brown/70 mb-2">Explore</p>

              <Link
                href="https://beforest.co/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[1.8rem] leading-tight font-serif text-dark-earth hover:text-rich-red transition-colors duration-300"
              >
                Beforest
              </Link>

              <Link
                href="https://bewild.life/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[1.8rem] leading-tight font-serif text-dark-earth hover:text-rich-red transition-colors duration-300"
              >
                Bewild
              </Link>

              <Link
                href="https://experiences.beforest.co/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[1.8rem] leading-tight font-serif text-dark-earth hover:text-rich-red transition-colors duration-300"
              >
                Beforest Experiences
              </Link>
            </div>

            <div className="h-px bg-dark-earth/20 my-4"></div>

            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[2.5rem] leading-tight font-serif text-dark-earth hover:text-rich-red transition-colors duration-300 py-2"
            >
              Contact
            </Link>
          </nav>

          {/* Footer Info */}
          <div className="mt-auto pt-12">
            <p className="text-[0.7rem] uppercase tracking-[2px] text-dark-brown/60">
              © 2025 Beforest
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
