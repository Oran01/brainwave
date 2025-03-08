/**
 * Heading Component
 *
 * This component displays a section heading with an optional tagline, title, and description.
 * It provides a reusable way to structure headings across different sections of the application.
 */

import React from "react";
import Tagline from "./Tagline";

/**
 * Heading Functional Component
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {string} [props.title] - Main heading title.
 * @param {string} [props.text] - Supporting description text.
 * @param {string} [props.tag] - Optional tagline above the title.
 *
 * @returns {JSX.Element} - A formatted heading section with optional elements.
 */
const Heading = ({ className, title, text, tag }) => {
  return (
    // Container for the heading with default layout styling
    <div
      className={`${className} max-w-50 mx-auto mb-12 lg:mb-20 md:text-center`}
    >
      {/* Display tagline if provided */}
      {tag && <Tagline className="mb-4 md:justify-center">{tag}</Tagline>}

      {/* Display title if provided */}
      {title && <h2 className="h2">{title}</h2>}

      {/* Display supporting text if provided */}
      {text && <p className="body-2 mt-4 text-n-4">{text}</p>}
    </div>
  );
};

export default Heading;
