import Box from "../Box";
import Title from "../Title";

const ValidateInput = () => {
  const isInValid = true;
  const isValid = true;
  return (
    <Box>
      <Title title="Validated Input" />

      {/* In-Valid Input */}
      <div>
        <input
          type="text"
          className={`w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 hover:bg-slate-200 focus:border-primary/100 focus:outline-none dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter ${isInValid ? "border-red-400 focus:border-red-400 dark:border-red-400 dark:focus:border-red-400" : ""}`}
          placeholder="Email"
        />
        <span className="text-xs font-medium text-red-500">
          This field is required
        </span>
      </div>

      {/* Validated Input */}
      <div className="mt-4">
        <input
          type="text"
          className={`w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 hover:bg-slate-200 focus:border-primary/100 focus:outline-none dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter ${isValid ? "border-green-600 focus:border-green-600 dark:border-green-600 dark:focus:border-green-600" : ""}`}
          placeholder="Email"
        />
        <span className="text-xs font-medium text-green-500">Goods</span>
      </div>
    </Box>
  );
};

export default ValidateInput;
