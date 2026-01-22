import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import OurValues from "@/components/OurValues";
import Services from "@/components/Services";
import Impact from "@/components/Impact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Impact />
      <AboutUs />
      <OurValues />
      <Services />
      <Footer />
    </div>
  );
}
