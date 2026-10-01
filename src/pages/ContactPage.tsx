import PageHeader from "../components/PageHeader";
import CTA from "../components/CTA";
import Marquee from "../components/Marquee";

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contact"
        title="Let's get you"
        accent="loaded"
        description="Tell us about your equipment and lanes — a dedicated logistics coordinator will reach out the same day with high-paying loads ready to book."
        image="./images/reefer.jpg"
      />
      <CTA />
      <Marquee />
    </main>
  );
}
