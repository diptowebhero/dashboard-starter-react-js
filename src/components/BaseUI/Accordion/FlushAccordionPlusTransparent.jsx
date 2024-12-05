import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Box from "../Box";
import Title from "../Title";
import { accordionItems } from "./accordionItems";

const FlushAccordionPlusTransparent = () => {
  const [activeItem, setActiveItem] = useState(1);

  // Function to handle the toggle of each item
  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Box>
        <Title title="Flush Accordion Plus Transparent" />
        <div className="mx-auto flex flex-col gap-2">
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className={`overflow-hidden border-b-[1px] border-slate-200 dark:border-primary/90`}
            >
              <div
                className={`flex cursor-pointer items-center justify-between bg-transparent py-3 text-sm font-semibold text-black transition-all dark:text-white dark:hover:text-white 2xl:text-base`}
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
                <article className="bg-transparent py-3 text-sm text-slate-600 dark:text-slate-200">
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

export default FlushAccordionPlusTransparent;
