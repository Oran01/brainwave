/**
 * PricingList Component
 *
 * This component displays a list of pricing plans, including the title, description,
 * price, a call-to-action button, and a list of features for each plan.
 */

import { check } from "../assets";
import { pricing } from "../constants";
import Button from "./Button";

/**
 * PricingList Functional Component
 *
 * @returns {JSX.Element} - A section displaying pricing options with details and features.
 */
const PricingList = () => {
  return (
    // Pricing container with responsive layout
    <div className="flex gap-[1rem] max-lg:flex-wrap">
      {pricing.map((item) => (
        <div
          key={item.id}
          className="w-[19rem] max-lg:w-full h-full px-6 bg-n-8 border border-n-6 rounded-[2rem] lg:w-auto even:py-14 odd:py-8 odd:my-4 [&>h4]:first:text-color-2  [&>h4]:even:text-color-1  [&>h4]:last:text-color-3"
        >
          {/* Plan title */}
          <h4 className="h4 mb-4">{item.title}</h4>

          {/* Plan description */}
          <p className="body-2 min-h-[4rem] mb-3 text-n-1/50">
            {item.description}
          </p>

          {/* Price display section */}
          <div className="flex items-center h-[5.5rem] mb-6">
            {item.price && (
              <>
                <div className="h3">$</div>
                <div className="text-[5.5rem] leading-none font-bold">
                  {item.price}
                </div>
              </>
            )}
          </div>

          {/* Call-to-action button (Get Started or Contact Us) */}
          <Button
            className="w-full mb-6"
            href={item.price ? "/pricing" : "mailto:contact@gmail.pro"}
            white={!!item.price}
          >
            {item.price ? "Get started" : "Contact us"}
          </Button>

          {/* List of features included in the plan */}
          <ul>
            {item.features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start py-5 border-t border-n-6"
              >
                {/* Checkmark icon for each feature */}
                <img src={check} width={24} height={24} alt="Check" />
                <p className="body-2 ml-4">{feature}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PricingList;
