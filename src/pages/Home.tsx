import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import { EquipmentPreview } from "../components/Equipment";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import CTABand from "../components/CTABand";

export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <Services />
      <EquipmentPreview />
      <HowItWorks />
      <Testimonials />
      <CTABand />
    </main>
  );
}
