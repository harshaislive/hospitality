import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import AccommodationSplit from './components/AccommodationSplit';
import ZigZagSection from './components/ZigZagSection';
import WildernessRefined from './components/WildernessRefined';
import EstateGallery from './components/EstateGallery';
import PeekExperience from './components/PeekExperience';
import ExperiencesGrid from './components/ExperiencesGrid';
import TeamSection from './components/TeamSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden text-dark-earth">
      <Header />
      <Hero />
      <Intro />
      <AccommodationSplit />
      
      {/* ZigZag 2: Permaculture (Reversed) */}
      <ZigZagSection 
        category="Bewild Produce"
        title="Forest-Friendly Food"
        description="Meals at Blyton are not sourced; they are gathered. Wild honey, shade-grown coffee, and seasonal fruit from our permaculture forests. This is not just dining; it is participating in the ecosystem."
        linkText="Visit the Shop"
        linkUrl="https://bewild.life/"
        reversed={true}
        accentColor="red"
        slides={[
          "https://images.unsplash.com/photo-1524350876685-274059332603?q=80&w=2071&auto=format&fit=crop",
          "https://ik.imagekit.io/ofgaefbk0/Produce%20Post%20Card.jpg?q=80&w=2080&auto=format&fit=crop",
          "https://ik.imagekit.io/ofgaefbk0/PBR_3280.jpg?q=80&w=2071&auto=format&fit=crop",
          "https://ik.imagekit.io/ofgaefbk0/PBR_0335.jpg?q=80&w=2071&auto=format&fit=crop"
        ]}
      />

      <WildernessRefined />
      <EstateGallery />
      <PeekExperience />
      <ExperiencesGrid />
      <TeamSection />
      <Footer />
    </main>
  );
}