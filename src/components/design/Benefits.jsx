/**
 * GradientLight Component
 *
 * This component renders a radial gradient background effect. It is typically used
 * as a decorative overlay in sections to enhance visual appeal.
 */

/**
 * GradientLight Functional Component
 *
 * @returns {JSX.Element} - A div element with a radial gradient background.
 */
export const GradientLight = () => {
  return (
    // Radial gradient background effect
    <div className="absolute top-0 left-1/4 w-full aspect-square bg-radial-gradient from-[#28206C] to-[#28206C]/0 to-70% pointer-events-none" />
  );
};
