import Box from "../Box";
import Title from "../Title";

const InputSizes = () => {
  return (
    <Box>
      <Title title="Input Sizes" />

      {/*  Input sm*/}
      <div>
        <input
          type="text"
          className="w-full rounded border border-gray-300 bg-transparent px-4 py-1.5 text-xs text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 hover:bg-slate-200 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          placeholder="Email"
        />
      </div>
      {/* Input md */}
      <div className="mt-4">
        <input
          type="text"
          className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 hover:bg-slate-200 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          placeholder="Email"
        />
      </div>
      {/* Input lg */}
      <div className="mt-4">
        <input
          type="text"
          className="w-full rounded border border-gray-300 bg-transparent px-4 py-3 text-base text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 hover:bg-slate-200 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          placeholder="Email"
        />
      </div>
    </Box>
  );
};

export default InputSizes;
