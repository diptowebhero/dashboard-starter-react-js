import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Box from "../Box";
import Title from "../Title";
import { accordionItems } from "./accordionItems";

const AccordionPlusIcon = () => {
  const [activeItem, setActiveItem] = useState(1);

  // Function to handle the toggle of each item
  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Box>
        <Title title="Tabs Accordion With Plus Active BG" />
        <div className="mx-auto flex flex-col gap-2">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden rounded-lg border-2 border-[#F2F2F2] dark:border-primary/90 dark:bg-[#E0ECFB]`}
            >
              <div
                className={`flex cursor-pointer items-center justify-between bg-white p-3 text-sm font-semibold text-black transition-all hover:bg-[#F2F2F2] hover:text-black dark:bg-[#11112b] dark:text-white dark:hover:bg-primary/100 dark:hover:text-white 2xl:text-base ${
                  activeItem === item.id
                    ? "!bg-[#F2F2F2] dark:!bg-primary/100 dark:text-white dark:hover:text-white"
                    : ""
                } `}
                onClick={() => toggleItem(item.id)}
              >
                <h4 className="text-[15px]">{item.title}</h4>
                {activeItem === item.id ? (
                  <Minus className="lucide lucide-chevron-down size-4 transition-transform" />
                ) : (
                  <Plus className="lucide lucide-chevron-down size-4 transition-transform" />
                )}
              </div>
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: activeItem === item.id ? 1 : 0,
                  height: activeItem === item.id ? "auto" : 0,
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut",
                }}
                className="overflow-hidden"
              >
                <article className="bg-transparent p-3 text-sm text-slate-600">
                  {item.content}
                </article>
              </motion.div>
            </div>
          ))}
        </div>
      </Box>
    </>
  );
};

export default AccordionPlusIcon;
