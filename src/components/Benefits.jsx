/**
 * Benefits Component
 *
 * This component renders a section showcasing the benefits of the application.
 * It iterates over the `benefits` array and dynamically generates benefit cards
 * with titles, descriptions, icons, and images.
 */

import { benefits } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";

/**
 * Benefits Functional Component
 *
 * @returns {JSX.Element} - A section displaying benefits with icons, descriptions, and background images.
 */
const Benefits = () => {
  return (
    // Wrapping the component inside a Section element with an ID for navigation
    <Section id="features">
      <div className="container relative z-2">
        {/* Heading component displaying the section title */}
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder with Brainwave"
        />

        {/* Container for all benefits, displayed in a flex layout with spacing */}
        <div className="flex flex-wrap gap-10 mb-10">
          {benefits.map((item) => (
            // Individual benefit card with dynamic background image
            <div
              key={item.id} // Unique key for React's list rendering optimization
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
              }}
            >
              {/* Card content container */}
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                {/* Benefit title */}
                <h5 className="h5 mb-5">{item.title}</h5>
                {/* Benefit description */}
                <p className="body-2 mb-6 text-n-3">{item.text}</p>

                {/* Bottom section with icon and action text */}
                <div className="flex items-center mt-auto">
                  {/* Benefit icon */}
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  {/* Action text */}
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  {/* Arrow icon indicating further exploration */}
                  <Arrow />
                </div>
              </div>

              {/* Optional light gradient effect if 'light' property is true */}
              {item.light && <GradientLight />}

              {/* Background overlay with hover effect */}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                {/* Image overlay appearing on hover */}
                <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>

              {/* ClipPath SVG for styling purposes */}
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;
