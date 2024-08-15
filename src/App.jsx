import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

// Component imports
import Navbar from "./components/Navbar/Navbar";
import Hero from './components/Hero/Hero';
import ServicesOffered from './components/ServicesOffer/ServicesOffered';
import Portfolio from './components/Portfolio/Portfolio';
import About from './components/About/About';
import Services from './components/Services/Services';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import ScrollToTopButton from './components/ScrollToTopButton/ScrollToTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles

const App = () => {
  // dark mode start
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
      easing: 'ease-in-sine',
      delay: 100,
      once: true,
    });
    AOS.refresh();

    // Adding the chatbot script
    const script = document.createElement("script");
    script.defer = true;
    script.src = "/";
    script.setAttribute("data-bot-id", "clxs3f30p07twr9bb7dlek2qc");
    document.body.appendChild(script);

    // Adding responsive styles for the chatbot
    const style = document.createElement("style");
    style.textContent = `
      @media (max-width: 600px) {
        .fastbots-chatbot {
          width: 100% !important;
          height: 100% !important;
        }
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(style);
    };
  }, []);

  // dark mode end
  return (
    <div>
      <Helmet>
        <title>Template</title>
        <meta name="description" content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam." />
      </Helmet>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero theme={theme} />
      <ServicesOffered />
      <About />
      <Services />
      <Portfolio />
      <Testimonial />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};

export default App;
