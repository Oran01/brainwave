/**
 * Notification Component
 *
 * This component represents a notification UI element, displaying an image, title,
 * a set of user images, and a timestamp.
 */

import { notification1 } from "../assets";
import { notificationImages } from "../constants";

/**
 * Notification Functional Component
 *
 * @param {Object} props - Component properties.
 * @param {string} [props.className] - Additional CSS classes for styling.
 * @param {string} props.title - Title text for the notification.
 *
 * @returns {JSX.Element} - A notification card with an image, title, user icons, and timestamp.
 */
const Notification = ({ className, title }) => {
  return (
    // Notification container with styling
    <div
      className={`${
        className || ""
      } flex items-center p-4 pr-6 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl gap-5`}
    >
      {/* Notification main image */}
      <img
        src={notification1}
        width={62}
        height={62}
        alt="image"
        className="rounded-xl"
      />

      {/* Notification content */}
      <div className="flex-1">
        {/* Notification title */}
        <h6 className="mb-1 font-semibold text-base">{title}</h6>

        {/* Row containing user icons and timestamp */}
        <div className="flex items-center justify-between">
          {/* List of user profile images */}
          <ul className="flex -m-0.5">
            {notificationImages.map((item, index) => (
              <li
                key={index}
                className="flex w-6 h-6 border-2 border-n-12 rounded-full overflow-hidden"
              >
                <img
                  src={item}
                  className="w-full"
                  width={20}
                  height={20}
                  alt={item}
                />
              </li>
            ))}
          </ul>

          {/* Timestamp indicating when the notification was received */}
          <div className="body-2 text-n-13">1m ago</div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
