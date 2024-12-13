const Box = ({ children }) => {
  return (
    <div className="relative mt-1 w-full overflow-hidden rounded-lg border-[1px] border-gray-300 p-6 dark:border-[#1e293b]">
      {children}
    </div>
  );
};

export default Box;
