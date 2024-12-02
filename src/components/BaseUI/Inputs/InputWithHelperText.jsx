import Box from "../Box";
import Title from "../Title";

const InputWithHelperText = () => {
  return (
    <Box>
      <Title title="Input With Helper Text" />

      {/* Input With Helper Text*/}
      <div>
        <input
          type="text"
          className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 hover:bg-slate-200 focus:border-primary/100 focus:outline-none dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          placeholder="Email"
        />
        <span className="text-xs font-light text-slate-500 dark:text-slate-400">
          The email must be a valid email address
        </span>
      </div>
    </Box>
  );
};

export default InputWithHelperText;
