/**
 * Tagline Component
 *
 * This component renders a tagline with surrounding bracket icons.
 * It is used to highlight short, important phrases in the UI.
 */

import brackets from "../assets/svg/Brackets";

/**
 * Tagline Functional Component
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {ReactNode} props.children - Content inside the tagline.
 *
 * @returns {JSX.Element} - A styled tagline with bracket decorations.
 */
const Tagline = ({ className, children }) => {
  return (
    // Wrapper for tagline with optional additional classes
    <div className={`tagline flex items-center ${className} || ""`}>
      {/* Left bracket */}
      {brackets("left")}

      {/* Tagline text */}
      <div className="mx-3 text-n-3">{children}</div>

      {/* Right bracket */}
      {brackets("right")}
    </div>
  );
};

export default Tagline;
