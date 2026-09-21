import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Passengers from "@/components/sections/Passengers";
import Driver from "@/components/sections/Driver";
import HowItWorks from "@/components/sections/HowItWorks";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Passengers />
        <Driver />
        <HowItWorks />
        <FAQ />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
