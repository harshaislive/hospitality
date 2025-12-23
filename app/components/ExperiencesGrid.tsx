"use client";

import { useState } from 'react';
import ExperienceModal from './ExperienceModal';

export default function ExperiencesGrid() {
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const experiences = [
    {
      id: "bird-watching",
      src: "https://ik.imagekit.io/ofgaefbk0/PBR_4320%20(1).jpg?q=80&w=2070&auto=format&fit=crop",
      title: "Exquisite Bird Watching",
      displayTitle: <>Exquisite <br /> Bird Watching</>,
      alt: "Exquisite Bird Watching",
      category: "AVIAN SANCTUARY — GUIDED",
      subtitle: "WESTERN GHATS. ENDEMIC SPECIES AND MIGRATORY MARVELS.",
      description: "Wake up to the call of the Malabar Whistling Thrush. Spot the elusive Malabar Hornbill gliding across the canopy. Our naturalist-led walks take you deep into the avian world of Coorg, where every rustle tells a story and every sighting is a privilege.",
      features: ["Guided by expert naturalists", "Early morning & dusk trails", "Photography opportunities"],
      images: [
        "https://ik.imagekit.io/ofgaefbk0/PBR_4320%20(1).jpg?q=80&w=2070&auto=format&fit=crop"
      ],
      ctaLink: "https://live.ipms247.com/booking/book-rooms-blytonbungalow"
    },
    {
      id: "trekking",
      src: "https://cdn.prod.website-files.com/66052e0267febd15266c1c0c/6605573d25c94848ff9fb62f_PBR_8688.jpg?q=80&w=2070&auto=format&fit=crop",
      title: "Guided Trekking Adventures",
      displayTitle: "Guided Trekking Adventures",
      alt: "Guided Trekking Adventures",
      category: "ADVENTURE — EXPLORATION",
      subtitle: "HIDDEN TRAILS. MISTY PEAKS AND UNTOUCHED VALLEYS.",
      description: "Leave the beaten path behind. Traverse through dense shola forests, cross sparkling streams, and stand atop peaks that offer panoramic views of the Western Ghats. This is the wilderness, unfiltered, where the only footprints you see are likely not human.",
      features: ["Customizable difficulty levels", "Packed picnic lunches", "Flora & fauna identification"],
      images: [
        "https://cdn.prod.website-files.com/66052e0267febd15266c1c0c/6605573d25c94848ff9fb62f_PBR_8688.jpg?q=80&w=2070&auto=format&fit=crop"
      ],
      ctaLink: "https://live.ipms247.com/booking/book-rooms-blytonbungalow"
    },
    {
      id: "farm-to-table",
      src: "https://ik.imagekit.io/ofgaefbk0/PBR_4978.jpg?q=80&w=2070&auto=format&fit=crop",
      title: "Farm-to-Table Experiences",
      displayTitle: <>Farm-to-Table <br /> Experiences</>,
      alt: "Farm-to-Table Experiences",
      category: "CULINARY — SUSTAINABILITY",
      subtitle: "PERMACULTURE HARVEST. ZERO MILES FROM SOIL TO PLATE.",
      description: "Taste the difference of food grown with intention. Walk our permaculture gardens, harvest fresh produce, and watch as our chefs transform it into traditional Kodava delicacies. It’s not just a meal; it’s a connection to the earth and a celebration of seasonal abundance.",
      features: ["Harvest your own vegetables", "Cooking demonstrations", "Traditional Kodava recipes"],
      images: [
        "https://ik.imagekit.io/ofgaefbk0/PBR_4978.jpg?q=80&w=2070&auto=format&fit=crop"
      ],
      ctaLink: "https://live.ipms247.com/booking/book-rooms-blytonbungalow"
    },
    {
      id: "coffee-tour",
      src: "https://ik.imagekit.io/ofgaefbk0/PBR_1763.JPG?q=80&w=2070&auto=format&fit=crop",
      title: "Coffee Cultivation Tour",
      displayTitle: <>Coffee <br /> Cultivation Tour</>,
      alt: "Coffee Cultivation",
      category: "HERITAGE — CRAFT",
      subtitle: "SHADE-GROWN LEGACY. THE ART OF THE PERFECT BREW.",
      description: "Walk beneath the canopy where our coffee grows in harmony with the forest. Learn the journey from bean to cup—from the delicate white blossoms to the roasting process that fills the air with that unmistakable aroma. Discover why shade-grown coffee is better for the planet and your palate.",
      features: ["Plantation walkthroughs", "Bean picking (seasonal)", "Tasting sessions"],
      images: [
        "https://ik.imagekit.io/ofgaefbk0/PBR_1763.JPG?q=80&w=2070&auto=format&fit=crop"
      ],
      ctaLink: "https://live.ipms247.com/booking/book-rooms-blytonbungalow"
    }
  ];

  const handleOpenModal = (experience: any) => {
    setSelectedExperience(experience);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="py-[120px] px-10 text-center bg-off-white">
      <div className="max-w-[700px] mx-auto mb-[80px]">
        <h2 className="text-[2.8rem] mb-[20px] text-dark-earth">The Wild, Curated</h2>
        <p className="text-dark-earth font-light">
          For those who want to do more than just look. Trek the Western Ghats. Learn the alchemy of coffee. Or simply sit still and let the forest come to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] max-w-[1400px] mx-auto">
        {experiences.map((exp, idx) => (
          <div 
            key={idx} 
            className="relative h-[350px] overflow-hidden group cursor-pointer"
            onClick={() => handleOpenModal(exp)}
          >
            <img 
              src={exp.src} 
              alt={exp.alt} 
              className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110 block"
            />
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center transition-all duration-500 group-hover:bg-black/20">
              <span className="text-white font-serif text-[1.6rem] md:text-[1.8rem] font-extralight italic leading-tight px-6">
                {exp.displayTitle}
              </span>
            </div>
          </div>
        ))}
      </div>

      <ExperienceModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        data={selectedExperience} 
      />
    </section>
  );
}
