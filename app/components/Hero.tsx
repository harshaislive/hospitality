import Link from 'next/link';

export default function Hero() {
  return (
    <section className="h-screen relative bg-[url('https://ik.imagekit.io/ofgaefbk0/blyton.jpg')] bg-cover bg-center flex items-start md:items-end pb-5 md:pb-[80px] pt-[100px] md:pt-0">
      {/* Editorial Gradient Overlay: Clear top/center, legible bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
      
      <div className="relative z-[2] w-full max-w-[1400px] mx-auto px-5 md:px-[60px] flex flex-col md:flex-row justify-between items-start md:items-end gap-4 md:gap-20 h-full md:h-auto">
        
        {/* Left Column: Location & Title */}
        <div className="flex-1 text-left w-full">
          <div className="inline-flex items-center gap-[10px] uppercase tracking-[3px] text-xs md:text-sm font-normal mb-[10px] md:mb-[20px] text-warm-yellow">
            <span className="w-[14px] h-[14px] inline-flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            </span>
            <span>Blyton Bungalow, Poomaale Estate</span>
          </div>
          <h1 className="text-[2rem] md:text-[5.5rem] italic leading-[1.1] !text-white max-w-[800px]">
            Silence, interrupted only by the wind.
          </h1>
        </div>

        {/* Right Column: Description & CTA */}
        <div className="flex-1 text-left md:text-right max-w-[500px] w-full mt-auto md:mt-0 flex flex-col justify-end">
          <p className="text-sm md:text-xl font-light leading-[1.6] text-off-white mb-[15px] md:mb-[35px]">
            6 rooms. 128 acres. Infinite quiet. A Kodava-inspired sanctuary where the coffee grows wild and time moves at the speed of nature.
          </p>
          <div className="flex justify-start md:justify-end">
            <Link href="https://live.ipms247.com/booking/book-rooms-blytonbungalow" className="inline-block px-10 py-[16px] bg-white uppercase text-[0.75rem] tracking-[2.5px] font-normal text-rich-red transition-all duration-300 hover:italic hover:scale-105 shadow-lg">
              Reserve Your Stay
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
