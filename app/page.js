import Hero from "./components/Hero";
import Services from "./components/Services";
import HowToStart from "./components/HowToStart";
import PartnersMarquee from "./components/PartnersMarquee";
import AboutUs from "./components/AboutUs";
import TestimonialsCarousel from "./components/TestimonialsCarousel";
import WhyChooseUs from "./components/WhyChooseUs";
import FAQ from "./components/FAQ";
import { fetchGoogleReviews } from "./lib/google-reviews";

export default async function Home() {
  const { reviews, isGoogleReviews, averageRating, totalReviewCount } = await fetchGoogleReviews();

  return (
    <>
      <Hero />
      <Services />
      <HowToStart />
      <PartnersMarquee />
      <AboutUs />
      <TestimonialsCarousel 
        reviews={reviews} 
        isGoogleReviews={isGoogleReviews}
        averageRating={averageRating}
        totalReviewCount={totalReviewCount}
      />
      <WhyChooseUs />
      <FAQ />
    </>
  );
}
