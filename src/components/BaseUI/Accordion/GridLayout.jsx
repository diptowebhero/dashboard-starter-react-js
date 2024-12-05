import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import Box from "../Box";
import Title from "../Title";
import { accordionItems } from "./accordionItems";

const GridLayout = () => {
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle the toggle of each item
  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <>
      <Box>
        <Title title="Grid" />
        <div className="grid grid-cols-1 gap-x-2 gap-y-1 md:grid-cols-2">
          {accordionItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 1, maxHeight: "55px" }}
              animate={{
                opacity: 1,
                maxHeight: activeItem === item.id ? "500px" : "55px",
              }}
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="mb-2 overflow-hidden rounded-lg border-2 border-[#F2F2F2] dark:border-primary/90 dark:bg-[#E0ECFB]"
            >
              <div
                className={`flex cursor-pointer items-center justify-between bg-white p-4 text-sm font-semibold text-black transition-all hover:bg-[#F2F2F2] hover:text-black dark:bg-[#11112b] dark:text-white dark:hover:bg-primary/100 dark:hover:text-white 2xl:text-base ${
                  activeItem === item.id
                    ? "hover:text-black dark:bg-primary/100 dark:text-white"
                    : ""
                }`}
                onClick={() => toggleItem(item.id)}
              >
                <h4 className="text-[15px] font-semibold">{item.title}</h4>
                {activeItem === item.id ? (
                  <ChevronUp className="size-4 transition-all duration-150" />
                ) : (
                  <ChevronDown className="size-4 transition-all duration-150" />
                )}
              </div>
              <div className="overflow-hidden">
                <article className="bg-transparent p-3 text-black">
                  {item.content}
                </article>
              </div>
            </motion.div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default GridLayout;
