import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
// import Pricing from "../components/Pricing";

function Home() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <HowItWorks />
      {/* <Pricing /> */}
      <Testimonial />
      <Footer />
    </div>
  );
}

export default Home;
