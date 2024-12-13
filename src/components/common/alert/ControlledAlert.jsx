import { Info, X } from "lucide-react";
import { useState } from "react";

const ControlledAlert = () => {
  // State to control the visibility of each alert
  const [isPrimaryVisible, setIsPrimaryVisible] = useState(true);
  const [isSecondaryVisible, setIsSecondaryVisible] = useState(true);
  const [isInfoVisible, setIsInfoVisible] = useState(true);
  const [isWarningVisible, setIsWarningVisible] = useState(true);
  const [isDangerVisible, setIsDangerVisible] = useState(true);

  // Function to handle fade out animation
  const handleClose = (setter) => {
    setter(false);
  };

  return (
    <div className="space-y-4">
      {/* Primary alert */}
      {isPrimaryVisible && (
        <div
          className={`relative flex items-center justify-between gap-2 rounded-md bg-primary/20 p-4 text-sm text-primary-light transition-opacity duration-300 ${
            !isPrimaryVisible ? "translate-y-2 opacity-0" : ""
          }`}
          role="alert"
        >
          <div className="flex items-center gap-2">
            <Info className="size-4" />
            <p>This is a primary alert</p>
          </div>
          <div
            className="flex size-6 items-center justify-center rounded-md hover:bg-primary"
            onClick={() => handleClose(setIsPrimaryVisible)} // Hide alert on click
          >
            <X className="size-4 cursor-pointer" />
          </div>
        </div>
      )}

      {/* Secondary alert */}
      {isSecondaryVisible && (
        <div
          className={`bg-secondary-100 text-secondary-500 dark:bg-secondary-500 dark:text-secondary-100 relative flex items-center justify-between gap-2 rounded-md p-4 text-sm transition-opacity duration-300 ${
            !isSecondaryVisible ? "translate-y-2 opacity-0" : ""
          }`}
          role="alert"
        >
          <div className="flex items-center gap-2">
            <Info className="size-4" />
            <p>This is a secondary alert</p>
          </div>
          <div
            className="hover:bg-secondary-300 flex size-6 items-center justify-center rounded-md"
            onClick={() => handleClose(setIsSecondaryVisible)} // Hide alert on click
          >
            <X className="size-4 cursor-pointer" />
          </div>
        </div>
      )}

      {/* Info alert */}
      {isInfoVisible && (
        <div
          className={`bg-info-100 text-info-500 dark:bg-info-500 dark:text-info-100 relative flex items-center justify-between gap-2 rounded-md p-4 text-sm transition-opacity duration-300 ${
            !isInfoVisible ? "translate-y-2 opacity-0" : ""
          }`}
          role="alert"
        >
          <div className="flex items-center gap-2">
            <Info className="size-4" />
            <p>This is an info alert</p>
          </div>
          <div
            className="hover:bg-info-300 flex size-6 items-center justify-center rounded-md"
            onClick={() => handleClose(setIsInfoVisible)} // Hide alert on click
          >
            <X className="size-4 cursor-pointer" />
          </div>
        </div>
      )}

      {/* Warning alert */}
      {isWarningVisible && (
        <div
          className={`bg-warning-100 text-warning-500 dark:bg-warning-500 dark:text-warning-100 relative flex items-center justify-between gap-2 rounded-md p-4 text-sm transition-opacity duration-300 ${
            !isWarningVisible ? "translate-y-2 opacity-0" : ""
          }`}
          role="alert"
        >
          <div className="flex items-center gap-2">
            <Info className="size-4" />
            <p>This is a warning alert</p>
          </div>
          <div
            className="hover:bg-warning-300 flex size-6 items-center justify-center rounded-md"
            onClick={() => handleClose(setIsWarningVisible)} // Hide alert on click
          >
            <X className="size-4 cursor-pointer" />
          </div>
        </div>
      )}

      {/* Danger alert */}
      {isDangerVisible && (
        <div
          className={`bg-danger-100 text-danger-500 dark:bg-danger-500 dark:text-danger-100 relative flex items-center justify-between gap-2 rounded-md p-4 text-sm transition-opacity duration-300 ${
            !isDangerVisible ? "translate-y-2 opacity-0" : ""
          }`}
          role="alert"
        >
          <div className="flex items-center gap-2">
            <Info className="size-4" />
            <p>This is a danger alert</p>
          </div>
          <div
            className="hover:bg-danger-300 flex size-6 items-center justify-center rounded-md"
            onClick={() => handleClose(setIsDangerVisible)} // Hide alert on click
          >
            <X className="size-4 cursor-pointer" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ControlledAlert;
