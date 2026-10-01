import PageHeader from "../components/PageHeader";
import Services from "../components/Services";
import HowItWorks from "../components/HowItWorks";
import Marquee from "../components/Marquee";
import Factoring from "../components/Factoring";
import CTABand from "../components/CTABand";

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Services"
        title="Full service"
        accent="truck support"
        description="Done-for-you logistics coordination — no contracts, no hidden fees. Just consistent loads and smooth operations handled by expert logistics coordinators."
        image="./images/hero-truck.jpg"
      />
      <Services />
      <HowItWorks />
      <Marquee ember reverse />
      <Factoring />
      <CTABand />
    </main>
  );
}
