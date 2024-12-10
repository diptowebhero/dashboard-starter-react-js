import { Delete, Edit, Ellipsis, View } from "lucide-react";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import Box from "../Box";
import Title from "../Title";

const ActionDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  // Close dropdown when clicked outside
  useOutsideClick(dropdownRef, () => setIsOpen(false));
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Box>
      <Title title="Action Dropdown" />

      <div ref={dropdownRef} className="relative flex flex-col">
        <div
          className="flex cursor-pointer items-center"
          onClick={toggleDropdown}
        >
          <span className="flex items-center gap-1 px-4 py-2 text-sm font-medium dark:border-slate-200 dark:text-slate-200">
            <Ellipsis className="size-8" />
          </span>
        </div>
        <div
          className={`${
            isOpen ? "visible top-10 opacity-100" : "invisible opacity-0"
          } rounded-primary absolute left-0 z-20 block w-2/3 overflow-hidden rounded-md border border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out dark:border-slate-700 dark:bg-slate-800`}
          style={{ transitionProperty: "opacity, top" }}
        >
          <ul>
            <li>
              <a
                href="#"
                className="inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                <View className="size-4" />
                View
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                <Edit className="size-4" />
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="inline-flex w-full cursor-pointer items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-slate-700"
              >
                <Delete className="size-4" />
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Box>
  );
};

export default ActionDropdown;
