import Link from 'next/link';

export default function Intro() {
  return (
    <section className="text-center py-[100px] px-5 max-w-[850px] mx-auto">
      <h2 className="text-[2.8rem] mb-[35px] text-dark-earth">We do not build resorts. We restore forests.</h2>
      <p className="text-dark-earth text-[1.05rem] leading-[1.8] mb-[40px]">
        And in the midst of that restoration, we invite you to stay. This is hospitality without the footprint—a way to live with nature, not just look at it. Experiencing the wild, honest and untamed.
      </p>
      <Link href="#" className="inline-block px-8 py-[14px] border border-rich-red uppercase text-[0.7rem] tracking-[2px] font-normal bg-transparent text-rich-red transition-all duration-300 hover:bg-rich-red hover:text-off-white hover:italic hover:scale-105 cursor-pointer">
        The Philosophy
      </Link>
    </section>
  );
}
