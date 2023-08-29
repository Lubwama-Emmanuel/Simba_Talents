import Footer from "../components/footer/Footer";
import Hero from "../components/Hero/Hero";
import Mission from "../components/Mission/Mission";
import Newsletter from "../components/Newsletter/Newsletter";
import Why from "../components/Why/Why";

function Homepage() {
  return (
    <div>
      <Hero />
      <Mission />
      <Why />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default Homepage;
