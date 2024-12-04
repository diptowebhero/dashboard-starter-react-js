import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Box from "../Box";
import Title from "../Title";

const SearchableSelect = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const fruits = ["Apple", "Banana", "Orange", "Grape", "Mango", "Papaya"];

  const filteredFruits = fruits.filter((fruit) =>
    fruit.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <Box>
      <Title title="Searchable Custom Select" />
      <div className="relative w-full">
        {/* Selected value box */}
        <div
          className="flex h-10 w-full cursor-pointer items-center justify-between rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-slate-500 dark:text-slate-200">
            {selectedOption || "Select a fruit"}
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
                placeholder="Search fruits"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* options */}
            <div className="max-h-48 overflow-y-auto">
              <ul>
                {filteredFruits.map((fruit, index) => (
                  <li
                    key={index}
                    className="cursor-pointer px-4 py-2 text-sm text-slate-700 hover:bg-primary hover:text-primary/100 dark:text-slate-200"
                    onClick={() => {
                      setSelectedOption(fruit);
                      setSearchTerm("");
                      setIsOpen(false);
                    }}
                  >
                    {fruit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </Box>
  );
};

export default SearchableSelect;
