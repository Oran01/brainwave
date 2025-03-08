/**
 * LeftLine & RightLine Components
 *
 * These components render horizontal decorative lines on the left and right sides of a section.
 * They are used to enhance the visual layout of the UI.
 */

import { lines } from "../../assets";

/**
 * LeftLine Functional Component
 *
 * @returns {JSX.Element} - A left-aligned decorative line image.
 */
export const LeftLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 right-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};

/**
 * RightLine Functional Component
 *
 * @returns {JSX.Element} - A right-aligned decorative line image (mirrored version of LeftLine).
 */
export const RightLine = () => {
  return (
    <div className="hidden lg:block absolute top-1/2 left-full w-[92.5rem] h-[11.0625rem] -translate-y-1/2 -scale-x-100 pointer-events-none">
      <img
        className="w-full"
        src={lines}
        width={1480}
        height={177}
        alt="Lines"
      />
    </div>
  );
};
