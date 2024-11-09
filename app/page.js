import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

export default function Home() {
 

  return(
    <main className="w-full p-4">
      
      <HeroSection />
      <AboutSection />
      <ContactSection />
      
    </main>
  );
}