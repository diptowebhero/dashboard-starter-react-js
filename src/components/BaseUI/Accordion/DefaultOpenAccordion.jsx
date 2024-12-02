import { motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { accordionItems } from "./accordionItems";

const DefaultOpenAccordion = () => {
  const [activeItem, setActiveItem] = useState(1);

  // Function to handle the toggle of each item
  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <div className='my-2'>
        <h2 className='font-semibold text-xl text-gray-900 dark:text-white'>
          Default Open One
        </h2>
      </div>
      <div className='relative mt-1 w-full border-[1px] rounded-lg p-6 border-gray-300 dark:border-[#1e293b]'>
        <div className='flex gap-2 flex-col md:w-3/4 mx-auto'>
          {accordionItems.map((item) => (
            <div
              key={item.id}
              className={`rounded-lg overflow-hidden mb-2 border-2 dark:border-primary/90 border-[#F2F2F2] dark:bg-[#E0ECFB] `}>
              <div
                className={`p-4 cursor-pointer transition-all font-semibold dark:text-white text-black dark:hover:bg-primary/100 hover:bg-[#F2F2F2] dark:hover:text-white hover:text-black flex justify-between items-center dark:bg-[#11112b] bg-white 2xl:text-base text-sm ${
                  activeItem === item.id
                    ? "dark:!bg-primary/100 dark:text-white dark:hover:text-white !bg-[#F2F2F2]"
                    : ""
                } `}
                onClick={() => toggleItem(item.id)}>
                {item.title}
                {activeItem === item.id ? (
                  <Minus className='lucide lucide-chevron-down transition-transform' />
                ) : (
                  <Plus className='lucide lucide-chevron-down transition-transform' />
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
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                className='overflow-hidden'>
                <article className='p-3 bg-transparent text-black'>
                  {item.content}
                </article>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DefaultOpenAccordion;
