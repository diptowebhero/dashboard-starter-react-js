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
        <Title title='Grid' />
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
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
              className='rounded-lg overflow-hidden mb-2 border-2 dark:border-primary/90 border-[#F2F2F2] dark:bg-[#E0ECFB]'>
              <div
                className={`p-4 cursor-pointer transition-all font-semibold dark:text-white text-black dark:hover:bg-primary/100 hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center dark:bg-[#11112b] bg-white 2xl:text-base text-sm ${
                  activeItem === item.id
                    ? "dark:bg-primary/100 dark:text-white hover:text-black"
                    : ""
                }`}
                onClick={() => toggleItem(item.id)}>
                {item.title}
                {activeItem === item.id ? (
                  <ChevronUp className='transition-all duration-150' />
                ) : (
                  <ChevronDown className='transition-all duration-150' />
                )}
              </div>
              <div className='overflow-hidden'>
                <article className='p-3 bg-transparent text-black'>
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
