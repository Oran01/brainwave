/**
 * Section Component
 *
 * This component serves as a reusable wrapper for sections of the website.
 * It includes customizable paddings, borders, and optional background decorations.
 */

import SectionSvg from "../assets/svg/SectionSvg";

/**
 * Section Functional Component
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {string} [props.id] - ID for linking to this section.
 * @param {boolean} [props.crosses] - Whether to include cross decorations.
 * @param {string} [props.crossesOffset] - Custom offset for cross decorations.
 * @param {boolean} [props.customPaddings] - Enables custom padding instead of default spacing.
 * @param {ReactNode} props.children - The content inside the section.
 *
 * @returns {JSX.Element} - A styled section wrapper with optional decorations.
 */
const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}) => {
  return (
    // Wrapper div with customizable styling and optional decorations
    <div
      id={id}
      className={`
      relative 
      ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}`
      } 
      ${className || ""}`}
    >
      {/* Content inside the section */}
      {children}

      {/* Left and Right vertical border lines */}
      <div className="hidden absolute top-0 left-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:left-7.5 xl:left-10" />
      <div className="hidden absolute top-0 right-5 w-0.25 h-full bg-stroke-1 pointer-events-none md:block lg:right-7.5 xl:right-10" />

      {/* Optional cross decorations */}
      {crosses && (
        <>
          <div
            className={`hidden absolute top-0 left-7.5 right-7.5 h-0.25 bg-stroke-1 ${
              crossesOffset && crossesOffset
            } pointer-events-none lg:block xl:left-10 right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      )}
    </div>
  );
};

export default Section;
