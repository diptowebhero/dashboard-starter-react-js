const ValidateTextArea = () => {
  const isInValid = true;
  const isValid = true;
  return (
    <>
      {/* In-Valid Input */}
      <div>
        <textarea
          type="text"
          className={`min-h-[5rem] w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter ${isInValid ? "border-red-400 focus:border-red-400 focus:ring-1 focus:ring-red-500 dark:border-red-400 dark:focus:border-red-400" : ""}`}
          placeholder="Message"
        />
        <span className="text-xs font-medium text-red-500">
          This field is required
        </span>
      </div>

      {/* Validated textArea */}
      <div className="mt-4">
        <textarea
          type="text"
          className={`min-h-[5rem] w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter ${isValid ? "border-green-600 focus:border-green-600 dark:border-green-600 dark:focus:border-green-600" : ""}`}
          placeholder="Message"
        />
        <span className="text-xs font-medium text-green-500">Goods</span>
      </div>
    </>
  );
};

export default ValidateTextArea;
