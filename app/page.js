import Hero from "./components/Hero";
import Services from "./components/Services";
import PartnersMarquee from "./components/PartnersMarquee";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <PartnersMarquee />
      <Testimonials />
      <WhyChooseUs />
    </>
  );
}
