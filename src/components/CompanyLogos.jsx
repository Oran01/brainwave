/**
 * CompanyLogos Component
 *
 * This component displays a tagline followed by a list of company logos.
 * It helps showcase partnerships or affiliations.
 */

import React from "react";
import { companyLogos } from "../constants";

/**
 * CompanyLogos Functional Component
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 *
 * @returns {JSX.Element} - A section displaying company logos.
 */
const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      {/* Tagline above the logos */}
      <h5 className="tagline mv-6 text-center text-n-1">
        Helping people create beautiful content at
      </h5>

      {/* List of company logos displayed horizontally */}
      <ul className="flex">
        {companyLogos.map((logo, index) => (
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index} // Using index as key since logos may not have unique IDs
          >
            {/* Logo image */}
            <img src={logo} width={134} height={28} alt={logo} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyLogos;
