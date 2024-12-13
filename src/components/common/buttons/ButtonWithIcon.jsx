import { CheckCircle, DeleteIcon, Edit, Home, UserPlus } from "lucide-react";

const ButtonWithIcon = () => {
  return (
    <div className="flex items-center gap-3">
      {/* btn-primary */}
      <button className="flex transform cursor-pointer items-center justify-center gap-x-1 rounded-md bg-primary/80 px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:scale-105 hover:bg-primary/70 focus:outline-none">
        <CheckCircle className="size-5" />
        Home
      </button>

      {/* btn-secondary */}
      <button className="bg-secondary-100 text-secondary-500 dark:bg-secondary-500 dark:text-secondary-100 flex transform cursor-pointer items-center justify-center gap-x-1 rounded-md px-6 py-2 text-sm transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none">
        <Home className="size-5" />
        Secondary
      </button>

      {/* btn-danger */}
      <button className="bg-danger-500 flex transform cursor-pointer items-center justify-center gap-x-1 rounded-md px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none">
        <DeleteIcon className="size-5" />
        Delete
      </button>

      {/* btn-warning */}
      <button className="bg-warning-500 flex transform cursor-pointer items-center justify-center gap-x-1 rounded-md px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none">
        <UserPlus className="size-5" />
        Warning
      </button>

      {/* btn-info */}
      <button className="bg-info-500 flex transform cursor-pointer items-center justify-center gap-x-1 rounded-md px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none">
        <Edit className="size-5" />
        Edit
      </button>
    </div>
  );
};

export default ButtonWithIcon;
