import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseUs from "./sections/WhyChooseUs";
import TestimonialsSection from "./sections/TestimonialsSection";

const App = () => {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUs />
        <TestimonialsSection />
      </main>

      <Footer />
    </>
  );
};

export default App;
