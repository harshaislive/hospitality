export default function ExperiencesGrid() {
  const experiences = [
    {
      src: "https://ik.imagekit.io/ofgaefbk0/PBR_4320%20(1).jpg?q=80&w=2070&auto=format&fit=crop",
      title: <>Exquisite <br /> Bird Watching</>,
      alt: "Exquisite Bird Watching"
    },
    {
      src: "https://cdn.prod.website-files.com/66052e0267febd15266c1c0c/6605573d25c94848ff9fb62f_PBR_8688.jpg?q=80&w=2070&auto=format&fit=crop",
      title: "Guided Trekking Adventures",
      alt: "Guided Trekking Adventures"
    },
    {
      src: "https://ik.imagekit.io/ofgaefbk0/PBR_4978.jpg?q=80&w=2070&auto=format&fit=crop",
      title: <>Farm-to-Table <br /> Experiences</>,
      alt: "Farm-to-Table Experiences"
    },
    {
      src: "https://ik.imagekit.io/ofgaefbk0/PBR_1763.JPG?q=80&w=2070&auto=format&fit=crop",
      title: <>Coffee <br /> Cultivation Tour</>,
      alt: "Coffee Cultivation"
    }
  ];

  return (
    <section className="py-[120px] px-10 text-center bg-off-white">
      <div className="max-w-[700px] mx-auto mb-[80px]">
        <h2 className="text-[2.8rem] mb-[20px] text-dark-earth">The Wild, Curated</h2>
        <p className="text-dark-earth">
          For those who want to do more than just look. Trek the Western Ghats. Learn the alchemy of coffee. Or simply sit still and let the forest come to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[2px] max-w-[1400px] mx-auto">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative h-[350px] overflow-hidden group cursor-pointer">
            <img 
              src={exp.src} 
              alt={exp.alt} 
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 block"
            />
            <div className="absolute inset-0 bg-[#002140]/35 flex items-center justify-center transition-colors duration-300 group-hover:bg-[#002140]/25">
              <span className="text-white font-serif text-[1.8rem] italic leading-tight">
                {exp.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
