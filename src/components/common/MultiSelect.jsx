import { ChevronDown, X } from "lucide-react";
import { useState } from "react";

const MultiSelect = ({
  options,
  selectedOptions,
  onSelect,
  onDeselect,
  placeholder = "Select options",
  searchPlaceholder = "Search...",
}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleSelectOption = (option) => {
    if (selectedOptions.includes(option)) {
      onDeselect(option); // Deselect the option
    } else {
      onSelect(option); // Select the option
    }
  };

  const handleRemoveSelectedItem = (option) => {
    onDeselect(option); // Remove selected item
  };

  return (
    <div className="relative w-full">
      {/* Selected values box */}
      <div
        className="flex min-h-10 w-full cursor-pointer items-center justify-between rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="space-x-1 space-y-1 text-slate-500 dark:text-slate-200 md:space-y-0">
          {selectedOptions.length > 0
            ? selectedOptions.map((option) => (
                <span
                  key={option}
                  className="inline-flex items-center space-x-2 rounded-full bg-primary px-2 py-1 text-xs text-slate-600 dark:text-slate-200"
                >
                  <span>{option}</span>
                  <X
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveSelectedItem(option);
                    }}
                    className="size-3 cursor-pointer text-red-400"
                  />
                </span>
              ))
            : placeholder}
        </span>
        <ChevronDown className="size-4" />
      </div>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="absolute z-10 mt-1 w-full scale-100 transform rounded-md border border-gray-300 bg-white opacity-100 shadow-lg transition-all duration-300 ease-in-out dark:border-[#1e293b] dark:bg-slate-700"
          style={{ transform: isOpen ? "scale(1)" : "scale(0.95)" }}
        >
          {/* Search input */}
          <div className="px-4 py-2">
            <input
              type="text"
              className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 hover:bg-slate-200 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
              placeholder={searchPlaceholder}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="max-h-48 overflow-y-auto">
            <ul>
              {filteredOptions.map((option, index) => (
                <li
                  key={index}
                  className="cursor-pointer px-4 py-2 text-sm text-slate-700 hover:bg-primary hover:text-primary/100 dark:text-slate-200"
                  onClick={() => handleSelectOption(option)}
                >
                  <span
                    className={`${
                      selectedOptions.includes(option)
                        ? "font-semibold text-primary/100 disabled:cursor-not-allowed"
                        : ""
                    }`}
                    disabled
                  >
                    {option}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
