/**
 * Footer Component
 *
 * This component renders the footer section, including copyright information
 * and social media links.
 */

import React from "react";
import Section from "./Section";
import { socials } from "../constants";

/**
 * Footer Functional Component
 *
 * @returns {JSX.Element} - A footer section containing copyright text and social media icons.
 */
const Footer = () => {
  return (
    // Wrapping the footer inside a Section component with styling
    <Section crosses className="!px-0 !py-10">
      <div className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        {/* Copyright text dynamically updating to the current year */}
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* List of social media icons with external links */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id} // Unique key for each social media item
              href={item.url} // External link to social media profile
              target="_blank" // Opens link in a new tab
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              {/* Social media icon */}
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
