/**
 * Pricing Component
 *
 * This component represents the pricing section of the website.
 * It includes a heading, a list of pricing options, decorative visuals,
 * and a link to detailed pricing information.
 */

import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

/**
 * Pricing Functional Component
 *
 * @returns {JSX.Element} - A section displaying pricing details and visual elements.
 */
const Pricing = () => {
  return (
    // Wrapping the pricing section inside a Section component with overflow hidden
    <Section className="overflow-hidden" id="pricing">
      <div className="container relative z-2">
        {/* Decorative visuals - Sphere and Stars */}
        <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
          <img
            src={smallSphere}
            className="relative z-1"
            width={225}
            height={255}
            alt="Sphere"
          />
          <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <img
              src={stars}
              className="w-full"
              width={950}
              height={400}
              alt="Stars"
            />
          </div>
        </div>

        {/* Heading for the pricing section */}
        <Heading
          tag="Get started with Brainwave"
          title="Pay once, use forever"
        />

        {/* Pricing list and design elements */}
        <div className="relative">
          <PricingList />
          <LeftLine />
          <RightLine />
        </div>

        {/* Link to see full pricing details */}
        <div className="flex justify-center mt-10">
          <a
            className="text-xs font-code font-bold tracking-tighter uppercase border-b"
            href="/pricing"
          >
            See the full details
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
