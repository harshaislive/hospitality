export default function TeamSection() {
  const team = [
    {
      name: "Arjun K.",
      role: "Estate Manager",
      desc: "Arjun has lived in Coorg all his life. He manages the delicate balance between hospitality and permaculture farming.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Meera S.",
      role: "Resident Naturalist",
      desc: "An expert in Western Ghats flora, Meera leads our forest walks and helps guests identify rare bird species.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop"
    },
    {
      name: "Rohan D.",
      role: "Head Chef",
      desc: "Rohan specializes in 'zero-mile' cooking, using ingredients foraged or grown right here on the Poomaale estate.",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop"
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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {team.map((member, idx) => (
          <div key={idx} className="group cursor-default">
            <img 
              src={member.img} 
              alt={member.role} 
              className="w-full h-[360px] object-cover grayscale mb-5 transition-all duration-300 group-hover:grayscale-0 block"
            />
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
