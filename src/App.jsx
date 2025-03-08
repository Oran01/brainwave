/**
 * App Component
 *
 * This component serves as the root of the application, assembling various sections
 * to create the full webpage layout. It includes navigation, content sections,
 * and the footer.
 */

import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";

/**
 * App Functional Component
 *
 * @returns {JSX.Element} - The complete application layout with multiple sections.
 */
const App = () => {
  return (
    <>
      {/* Main content container with proper spacing and overflow control */}
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      {/* Decorative button gradient overlay */}
      <ButtonGradient />
    </>
  );
};

export default App;
