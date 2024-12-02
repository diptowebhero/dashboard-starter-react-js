import { motion } from "framer-motion";
import { useState } from "react";
import Box from "../Box";
import Title from "../Title";
import { accordionItems } from "./accordionItems";

const SingleAccordion = () => {
  const [activeItem, setActiveItem] = useState(null);

  // Function to handle the toggle of each item
  const toggleItem = (id) => {
    setActiveItem(activeItem === id ? null : id);
  };
  return (
    <>
      <Box>
        <Title title='Single Accordion' />
        <div className='flex gap-2 flex-col  mx-auto'>
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
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  className={`lucide lucide-chevron-down transition-transform ${
                    activeItem === item.id ? "rotate-180" : ""
                  }`}>
                  <path d='m6 9 6 6 6-6'></path>
                </svg>
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
      </Box>
    </>
  );
};

export default SingleAccordion;
