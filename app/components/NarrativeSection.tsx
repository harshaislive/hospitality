import Link from 'next/link';
import Image from 'next/image';

export default function NarrativeSection() {
  return (
    <div className="bg-off-white text-dark-earth">
      {/* 2. Poomaale Collective */}
      <section className="py-[120px] px-5 md:px-10 bg-white">
        <div className="max-w-[1000px] mx-auto text-center mb-[60px]">
            <span className="text-[0.7rem] uppercase tracking-[2.5px] font-normal text-forest-green mb-[20px] block">Garland of Flowers</span>
            <h2 className="text-[2.8rem] md:text-[3.5rem] leading-[1.1] mb-[30px] font-serif">Poomaale Collective</h2>
            <p className="text-[1.1rem] leading-[1.8] font-light max-w-[800px] mx-auto">
                The Poomaale Collective, a 300+ acre landscape, nestled in the Brahmagiri foothills encompasses three hillocks and three perennial streams. It is a stellar example of ecological balance and sustainability.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1200px] mx-auto mb-[60px]">
            {/* Column 1: Impact */}
            <div className="flex flex-col gap-6 text-center">
                <div className="relative h-[300px] w-full">
                    <Image 
                        src="https://ik.imagekit.io/ofgaefbk0/PBR_3280.jpg?q=80&w=2071&auto=format&fit=crop"
                        alt="Forest Canopy"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <div>
                    <h3 className="font-serif text-[1.5rem] mb-3 text-dark-earth">Impact Unveiled</h3>
                    <p className="text-[0.95rem] leading-[1.6] text-dark-brown">
                        Over 3 years, the estate has conserved an astounding 60 million liters of water and avoided 400 Tons of chemical fertilizers.
                    </p>
                </div>
            </div>

            {/* Column 2: Coffee */}
            <div className="flex flex-col gap-6 text-center">
                 <div className="relative h-[300px] w-full">
                    <Image 
                        src="https://ik.imagekit.io/ofgaefbk0/PBR_0335.jpg?q=80&w=2071&auto=format&fit=crop"
                        alt="Coffee Plantation"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <div>
                    <h3 className="font-serif text-[1.5rem] mb-3 text-dark-earth">Eco-Friendly Coffee</h3>
                    <p className="text-[0.95rem] leading-[1.6] text-dark-brown">
                        Grown with minimal intervention, achieving an unprecedented 90 on a cupping scale—a first for robusta coffee in India.
                    </p>
                </div>
            </div>

            {/* Column 3: Biodiversity */}
            <div className="flex flex-col gap-6 text-center">
                 <div className="relative h-[300px] w-full">
                    <Image 
                        src="https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=2071&auto=format&fit=crop"
                        alt="Biodiversity"
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>
                <div>
                    <h3 className="font-serif text-[1.5rem] mb-3 text-dark-earth">Biodiversity Rebirth</h3>
                    <p className="text-[0.95rem] leading-[1.6] text-dark-brown">
                        Home to seven species of woodpeckers, dancing frogs, and the elusive Nilgiri martens.
                    </p>
                </div>
            </div>
        </div>
      </section>

      {/* 2. Beforest */}
      <section className="py-[120px] px-5 md:px-10 bg-soft-gray">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
            <div className="flex flex-col justify-center">
                <span className="text-[0.7rem] uppercase tracking-[2.5px] font-normal text-dark-brown mb-[20px]">The Vision</span>
                <h2 className="text-[2.8rem] md:text-[3.5rem] leading-[1.1] mb-[30px] font-serif">Beforest</h2>
                <div className="text-[1.05rem] leading-[1.7] font-light space-y-4 text-dark-earth">
                    <p>
                        Beforest is a passionate advocate for conservation, restoration, and sustainability. Our journey is dedicated to rejuvenating landscapes using the concept of collectives—where urban folks join hands to acquire and rehabilitate vast tracts of land.
                    </p>
                    <p>
                        <strong>Wilderness Collective:</strong> A collective where the singular agenda is to grow a forest. Using permaculture principles and minimal intervention, we design landscapes to promote biodiversity while setting the path for a harmonious coexistence between nature and humanity.
                    </p>
                    <p>
                        Today Beforest runs 6 collectives encompassing 1,300 acres of a variety of landscapes from the Deccan Plateau to the Western Ghats, and it all started here at Poomaale.
                    </p>
                </div>
                <div className="mt-8">
                     <Link
                        href="https://beforest.co/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[0.75rem] uppercase tracking-[2px] font-normal text-dark-earth pb-[3px] border-b border-dark-earth inline-flex items-center gap-[5px] hover:text-forest-green hover:border-forest-green transition-colors"
                        >
                        Explore Beforest <span className="text-[1rem] relative -top-[2px]">↗</span>
                    </Link>
                </div>
            </div>
            <div className="relative h-[600px] w-full">
                <Image 
                  src="/PBR_0963.jpg"
                  alt="Beforest Vision - Trekking in the Rain"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
            </div>
        </div>
      </section>
    </div>
  );
}
