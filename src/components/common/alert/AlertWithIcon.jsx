import {
  CircleCheckBig,
  Info,
  SquareCheckBig,
  TriangleAlert,
} from "lucide-react";

const AlertWithIcon = () => {
  return (
    <div className="space-y-4">
      {/* alert-primary */}
      <div
        className="text-primary-500 relative flex items-center gap-2 rounded-md bg-primary/20 p-4 text-sm text-primary-light"
        role="alert"
      >
        <Info className="size-4" />
        <p>This is a primary alert</p>
      </div>

      {/* alert-secondary */}
      <div
        className="bg-secondary-100 text-secondary-500 dark:bg-secondary-500 dark:text-secondary-100 relative flex items-center gap-2 rounded-md p-4 text-sm"
        role="alert"
      >
        <SquareCheckBig className="size-4" />
        <p>This is a secondary alert </p>
      </div>
      {/* alert-info */}
      <div
        className="bg-info-100 text-secondary-500 dark:bg-info-500 dark:text-info-100 relative flex items-center gap-2 rounded-md p-4 text-sm"
        role="alert"
      >
        <CircleCheckBig className="size-4" />
        <p>This is a info alert</p>
      </div>
      {/* alert-warning */}
      <div
        className="bg-warning-100 text-warning-500 dark:bg-warning-500 dark:text-warning-100 relative flex items-center gap-2 rounded-md p-4 text-sm"
        role="alert"
      >
        <TriangleAlert className="size-4" />
        <p>This is a info alert</p>
      </div>
      {/* alert-danger */}
      <div
        className="bg-danger-100 text-danger-500 dark:bg-danger-500 dark:text-danger-100 relative flex items-center gap-2 rounded-md p-4 text-sm"
        role="alert"
      >
        <TriangleAlert className="size-4" />
        <p>This is a danger alert</p>
      </div>
    </div>
  );
};

export default AlertWithIcon;
