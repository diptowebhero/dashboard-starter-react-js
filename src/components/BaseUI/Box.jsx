const Box = ({ children }) => {
  return (
    <div className='relative mt-1 w-full border-[1px] rounded-lg p-6 border-gray-300 dark:border-[#1e293b]'>
      {children}
    </div>
  );
};

export default Box;
