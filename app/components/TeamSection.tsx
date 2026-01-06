import Image from 'next/image';

export default function TeamSection() {
  const team = [
    {
      name: "Nishan Changappa",
      role: "Collective Manager",
      desc: "Nishan Changappa manages the functioning of the coffee plantation and estate operations, integrating nature, farming, and day-to-day logistics.",
      img: "/nishan.jpg"
    },
    {
      name: "Aranya",
      role: "Hospitality Manager and Resident Naturalist",
      desc: "Aranya leads guest experience with a balance of thoughtful hospitality and ecological insight, curating stays that are immersive, grounded, and deeply connected to nature.",
      img: "/aranya.png"
    },
    {
      name: "Alphin",
      role: "Property Manager",
      desc: "Alphin is responsible for the smooth functioning of the property, quietly handling operations so guests can relax and feel at home.",
      img: "/alphin.jpeg"
    },
    {
      name: "Sharan",
      role: "Naturalist",
      desc: "Sharan creates gentle, immersive outdoor experiences that encourage curiosity, awareness, and a deeper connection to place.",
      img: "/sharan.jpg"
    }
  ];

  return (
    <section className="py-[110px] px-10 text-center bg-white">
      <div className="max-w-[720px] mx-auto mb-[70px]">
        <h2 className="text-[2.8rem] mb-[20px] text-dark-earth">Guardians of the Forest</h2>
        <p className="text-dark-brown">
          The forest has many voices. These are the people who translate them. Storytellers, caretakers, and naturalists who ensure your stay leaves a mark on you, not the land.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-[1200px] mx-auto">
        {team.map((member, idx) => (
          <div key={idx} className="group cursor-default">
            <div className="relative w-full h-[360px] mb-5">
              <Image 
                src={member.img} 
                alt={member.role} 
                fill
                className="object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
            <div className="font-serif text-[1.3rem] mb-[6px] text-dark-earth">{member.name}</div>
            <div className="uppercase text-[0.75rem] tracking-[2px] text-forest-green mb-[12px]">{member.role}</div>
            <div className="text-[0.95rem] text-dark-brown leading-[1.6]">
              {member.desc}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
