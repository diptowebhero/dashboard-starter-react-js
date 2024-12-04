import Box from "../Box";
import Title from "../Title";

const TextAreaSizes = () => {
  return (
    <Box>
      <Title title="TextArea Sizes" />

      {/* textArea sm */}
      <div>
        <textarea
          type="text"
          className="min-h-[3rem] w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-xs text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          placeholder="Message"
        />
      </div>
      {/* textArea md */}
      <div className="mt-4">
        <textarea
          type="text"
          className="min-h-[5rem] w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          placeholder="Message"
        />
      </div>
      {/* textArea lg */}
      <div className="mt-4">
        <textarea
          type="text"
          className="min-h-[7rem] w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-base text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          placeholder="Message"
        />
      </div>
    </Box>
  );
};

export default TextAreaSizes;
