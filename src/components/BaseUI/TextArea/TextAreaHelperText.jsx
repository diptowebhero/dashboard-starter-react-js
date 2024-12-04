import Box from "../Box";
import Title from "../Title";

const TextAreaHelperText = () => {
  return (
    <Box>
      <Title title="TextArea with Helper Text" />

      {/* TextArea with Helper Text*/}
      <div>
        <textarea
          type="text"
          className="min-h-[5rem] w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          placeholder="Message"
        />
        <span className="text-xs font-light text-slate-500 dark:text-slate-400">
          The email must be a valid email address
        </span>
      </div>
    </Box>
  );
};

export default TextAreaHelperText;
