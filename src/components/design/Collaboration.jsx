/**
 * RightCurve & LeftCurve Components
 *
 * These components render curved decorative images, positioned on the right and left sides
 * of a section to enhance visual design.
 */

import { curve1, curve2 } from "../../assets";

/**
 * RightCurve Functional Component
 *
 * @returns {JSX.Element} - A right-aligned decorative curve image.
 */
export const RightCurve = () => {
  return (
    <div className="hidden absolute top-1/2 left-full w-[10.125rem] -mt-1 ml-10 pointer-events-none xl:block">
      <img src={curve2} width={162} height={76} alt="Curve 2" />
    </div>
  );
};

/**
 * LeftCurve Functional Component
 *
 * @returns {JSX.Element} - A left-aligned decorative curve image.
 */
export const LeftCurve = () => {
  return (
    <div className="hidden absolute top-1/2 right-full w-[32.625rem] -mt-1 mr-10 pointer-events-none xl:block">
      <img src={curve1} width={522} height={182} alt="Curve 1" />
    </div>
  );
};
