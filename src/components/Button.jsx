/**
 * Button Component
 *
 * A reusable button component that can act as either a clickable button or a hyperlink.
 * Supports custom styling, click handlers, and SVG icons.
 */

import ButtonSvg from "../assets/svg/ButtonSvg";

/**
 * Button Functional Component
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {string} [props.href] - URL for navigation (renders an `<a>` tag if provided).
 * @param {Function} [props.onClick] - Click event handler for button actions.
 * @param {ReactNode} props.children - Content inside the button.
 * @param {string} [props.px] - Custom padding for the button (defaults to `px-7`).
 * @param {boolean} [props.white] - Determines if the button should use white text styling.
 *
 * @returns {JSX.Element} - A styled button or link component.
 */
const Button = ({ className, href, onClick, children, px, white }) => {
  // Define button classes with conditional styling
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""}`;

  // Define span element classes
  const spanClasses = "relative z-10";

  /**
   * Renders a button element with provided styles and event handlers.
   * @returns {JSX.Element} Button element.
   */
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </button>
  );

  /**
   * Renders an anchor (`<a>`) element when `href` is provided.
   * @returns {JSX.Element} Anchor element.
   */
  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  );

  // Conditionally render button or link based on the presence of `href`
  return href ? renderLink() : renderButton();
};

export default Button;
