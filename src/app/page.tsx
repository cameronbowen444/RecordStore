import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Image from "next/image";
import AboutPage from "@/components/About";
import ServicesPage from "@/components/Services";
import Contact from "@/components/Contact";
import SongOfTheDay from "@/components/SongOfTheDay";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="overflow-x-hidden pt-[92px]">
        <Hero />
        <SongOfTheDay />
        <AboutPage />
        <ServicesPage />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
