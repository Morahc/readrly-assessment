import About from "./components/About";
import Faq from "./components/Faq";
import Hero from "./components/Hero";
import Footer from "./components/layout/footer";
import NewsLetter from "./components/NewsLetter";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Faq />
      <NewsLetter />
      <Footer />
    </main>
  );
}

export default App;
