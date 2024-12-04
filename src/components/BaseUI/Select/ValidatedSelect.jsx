import Box from "../Box";
import Title from "../Title";

const ValidatedSelect = () => {
  const isValid = true;
  const isInValid = true;
  return (
    <Box>
      <Title title="Validated Select" />
      <div className="space-y-4">
        {/* valid select */}
        <select
          className={`h-10 w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter ${isValid ? "border-green-600 focus:border-green-600 dark:border-green-600 dark:focus:border-green-600" : ""}`}
        >
          <option value="">Select a fruits</option>
          <option value="Apple">Apple</option>
          <option value="Banana">Banana</option>
          <option value="Orange">Orange</option>
          <option value="Grape">Grape</option>
          <option value="Mango">Mango</option>
        </select>
        <span className="text-xs font-medium text-green-500">Goods</span>

        {/* in-valid select */}
        <select
          className={`h-10 w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter ${isInValid ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-400" : ""}`}
        >
          <option value="">Select a fruits</option>
          <option value="Apple">Apple</option>
          <option value="Banana">Banana</option>
          <option value="Orange">Orange</option>
          <option value="Grape">Grape</option>
          <option value="Mango">Mango</option>
        </select>
        <span className="text-xs font-medium text-red-500">
          This field is required!
        </span>
      </div>
    </Box>
  );
};

export default ValidatedSelect;
