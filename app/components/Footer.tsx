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
          <Link href="https://beforest.co/about-us/" target="_blank" rel="noopener noreferrer" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">About Us</Link>
          <Link href="https://beforest.co/" target="_blank" rel="noopener noreferrer" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Beforest Home</Link>
          <Link href="https://beforest.co/blogs/" target="_blank" rel="noopener noreferrer" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Blogs</Link>
          <Link href="/contact-us" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Contact</Link>
        </div>

        <div className="flex-1 min-w-[200px]">
          <h4 className="font-sans text-[0.8rem] uppercase tracking-[2px] mb-[25px] text-white">Follow Us</h4>
          <Link href="https://www.instagram.com/blytonbungalow/" target="_blank" rel="noopener noreferrer" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">Instagram</Link>
          <Link href="https://www.youtube.com/@BeforestFarming" target="_blank" rel="noopener noreferrer" className="block text-off-white mb-[12px] text-[0.9rem] opacity-90 hover:text-warm-yellow hover:opacity-100 transition-all duration-300">YouTube</Link>
        </div>

        <div className="flex-1 min-w-[300px]">
          <h4 className="font-sans text-[0.8rem] uppercase tracking-[2px] mb-[25px] text-white">Location</h4>
          <div className="w-full h-[180px] rounded-sm overflow-hidden grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3899.052013867934!2d75.6106229!3d12.244757499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba4516819164faf%3A0xc1ed3d0f2f2eb84!2sBlyton%20Bungalow!5e0!3m2!1sen!2sin!4v1766492216345!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center max-w-[1200px] mx-auto pt-5 text-[0.75rem] text-soft-gray">
        <div className="mb-5 md:mb-0">
          &copy; 2025 Beforest Lifestyle Solutions. All rights reserved.
        </div>
        <div className="flex gap-5 flex-wrap justify-center md:justify-end">
          <Link href="/privacy-policy" className="text-soft-gray hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="/terms-and-conditions" className="text-soft-gray hover:text-white transition-colors">Terms and Conditions</Link>
          <Link href="/return-and-cancellation-policy" className="text-soft-gray hover:text-white transition-colors">Return and Cancellation Policy</Link>
        </div>
      </div>
    </footer>
  );
}
