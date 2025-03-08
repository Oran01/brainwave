/**
 * Generating Component
 *
 * This component displays a loading indicator with a message indicating that AI is generating content.
 */

import { loading } from "../assets";

/**
 * Generating Functional Component
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 *
 * @returns {JSX.Element} - A styled loading indicator with text.
 */
const Generating = ({ className }) => {
  return (
    // Container with styling and optional custom class
    <div
      className={`flex items-center h-[3.5rem] px-6 bg-n-8/80 rounded-[1.7rem] ${
        className || ""
      } text-base`}
    >
      {/* Loading animation icon */}
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      AI is generating
    </div>
  );
};

export default Generating;
