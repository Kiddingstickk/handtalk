import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import BarbersSection from "@/components/BarbersSection";
import GallerySection from "@/components/GallerySection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import StickyBookButton from "@/components/StickyBookButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Blade & Co. | Premium Men's Barbershop in New York</title>
        <meta
          name="description"
          content="Experience precision cuts, modern styling, and classic grooming at Blade & Co. Premium barbershop in New York City. Book your appointment today."
        />
        <meta name="keywords" content="barbershop, men's grooming, haircuts, beard trim, hot towel shave, New York barber" />
        <link rel="canonical" href="https://bladeandco.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blade & Co. | Premium Men's Barbershop" />
        <meta property="og:description" content="Precision cuts, modern style, classic grooming. A premium experience for the modern man." />
        <meta property="og:type" content="website" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BarberShop",
            "name": "Blade & Co.",
            "description": "Premium men's barbershop offering precision cuts, beard services, and classic grooming.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Main Street, Suite 100",
              "addressLocality": "New York",
              "addressRegion": "NY",
              "postalCode": "10001",
              "addressCountry": "US"
            },
            "telephone": "+1-555-123-4567",
            "openingHours": ["Mo-Fr 09:00-20:00", "Sa 09:00-18:00", "Su 10:00-16:00"],
            "priceRange": "$$"
          })}
        </script>
      </Helmet>

      <main>
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <BarbersSection />
        <GallerySection />
        <PricingSection />
        <TestimonialsSection />
        <Footer />
        <StickyBookButton />
      </main>
    </>
  );
};

export default Index;
