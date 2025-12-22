export default function EstateGallery() {
  return (
    <section className="py-[100px] px-10 bg-off-white">
      <div className="text-center mb-[60px]">
        <h2 className="text-[2.6rem] mb-[15px] text-dark-earth">Inside the Sanctuary</h2>
        <p className="text-[1.05rem] text-dark-earth">Where the lines between the living room and the living forest blur.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-[15px] max-w-[1400px] mx-auto h-auto md:h-[615px]"> 
        {/* Item 1: Span 2 cols, 2 rows */}
        <div className="relative overflow-hidden group h-[300px] md:h-full md:col-span-2 md:row-span-2">
          <img 
            src="https://beforest.co/wp-content/uploads/2023/04/PBR_8377-2.jpg?q=80&w=2000&auto=format&fit=crop" 
            alt="Bungalow Interior" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 block"
          />
        </div>

        {/* Item 2 */}
        <div className="relative overflow-hidden group h-[300px] md:col-span-1">
          <img 
            src="https://ik.imagekit.io/ofgaefbk0/unnamed%20(1).webp?q=80&w=2070&auto=format&fit=crop" 
            alt="Bedroom View" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 block"
          />
        </div>

        {/* Item 3 */}
        <div className="relative overflow-hidden group h-[300px] md:col-span-1">
          <img 
            src="https://ik.imagekit.io/ofgaefbk0/unnamed%20(4).webp?q=80&w=2158&auto=format&fit=crop" 
            alt="Bathroom Detail" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 block"
          />
        </div>

        {/* Item 4: Span 2 cols */}
        <div className="relative overflow-hidden group h-[300px] md:col-span-2">
          <img 
            src="https://ik.imagekit.io/ofgaefbk0/unnamed%20(5).webp?q=80&w=2070&auto=format&fit=crop" 
            alt="Bungalow Exterior" 
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 block"
          />
        </div>
      </div>
    </section>
  );
}
