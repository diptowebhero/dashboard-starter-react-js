const BasicSelect = () => {
  return (
    <>
      <select className="h-10 w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 focus:border-primary/100 focus:outline-none focus:ring-1 focus:ring-primary-light dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-200 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter">
        <option value="">Select a fruits</option>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Orange">Orange</option>
        <option value="Grape">Grape</option>
        <option value="Mango">Mango</option>
      </select>
    </>
  );
};

export default BasicSelect;
