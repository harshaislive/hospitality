import Header from './components/Header';
import Hero from './components/Hero';
import Intro from './components/Intro';
import AccommodationSplit from './components/AccommodationSplit';
import NarrativeSection from './components/NarrativeSection';
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
      <NarrativeSection />
      <WildernessRefined />
      <EstateGallery />
      <PeekExperience />
      <ExperiencesGrid />
      <TeamSection />
      <Footer />
    </main>
  );
}