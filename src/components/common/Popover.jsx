import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const Popover = ({ trigger, content, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();

  // Close the dropdown when clicking outside
  useOutsideClick(dropdownRef, () => setIsOpen(false));

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger element */}
      <div onClick={toggleDropdown} className="cursor-pointer">
        {trigger}
      </div>

      {/* Animate presence for content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute left-0 mt-2 w-full rounded-md bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 ${className}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Popover;
