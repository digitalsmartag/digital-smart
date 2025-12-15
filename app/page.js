import Hero from "./components/Hero";
import Services from "./components/Services";
import HowToStart from "./components/HowToStart";
import PartnersMarquee from "./components/PartnersMarquee";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <HowToStart />
      <PartnersMarquee />
      <AboutUs />
      <Testimonials />
      <WhyChooseUs />
      <FAQ />
    </>
  );
}
