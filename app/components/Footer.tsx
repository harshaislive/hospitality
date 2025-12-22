import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-earth text-white py-20 px-5 md:px-[60px] pb-10">
      <div className="flex flex-col md:flex-row justify-between flex-wrap gap-10 max-w-[1200px] mx-auto mb-[60px] border-b border-white/10 pb-[60px]">
        
        {/* Brand Col */}
        <div className="flex-1 min-w-[200px]">
          <div className="font-serif text-[2.2rem] mb-5 italic text-off-white">Beforest</div>
          <p className="text-[0.95rem] text-soft-green max-w-[250px] leading-[1.6]">
            Not just a place to stay. A place to return.
          </p>
        </div>

        {/* Links Cols */}
        <div className="flex-1 min-w-[200px]">
          <h4 className="font-sans text-[0.8rem] uppercase tracking-[2px] mb-[25px] text-white">Quick Links</h4>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Collectives</Link>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Hospitality</Link>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Bewild</Link>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Journal</Link>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h4 className="font-sans text-[0.8rem] uppercase tracking-[2px] mb-[25px] text-white">Company</h4>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">About</Link>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Careers</Link>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Press</Link>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Contact</Link>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h4 className="font-sans text-[0.8rem] uppercase tracking-[2px] mb-[25px] text-white">Follow Us</h4>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Instagram</Link>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">LinkedIn</Link>
          <Link href="#" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Facebook</Link>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto pt-5 text-[0.75rem] text-soft-gray">
        <div className="mb-5 md:mb-0">
          &copy; 2025 Beforest Lifestyle Solutions. All rights reserved.
        </div>
        <div className="flex gap-5">
          <Link href="#" className="text-soft-gray">Privacy Policy</Link>
          <Link href="#" className="text-soft-gray">Terms of Use</Link>
        </div>
      </div>
    </footer>
  );
}
