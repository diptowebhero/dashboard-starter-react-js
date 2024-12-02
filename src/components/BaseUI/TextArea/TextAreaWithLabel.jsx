import Box from "../Box";
import Title from "../Title";

const TextAreaWithLabel = () => {
  return (
    <Box>
      <Title title="TextArea With Label" />

      {/* TextArea With Label */}
      <div>
        <label
          htmlFor="yourId"
          className="mb-1 inline-block text-sm text-slate-700 dark:text-slate-300"
        >
          Message
        </label>
        <textarea
          type="text"
          className="min-h-[5rem] w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
          placeholder="Message"
        />
      </div>
    </Box>
  );
};

export default TextAreaWithLabel;
