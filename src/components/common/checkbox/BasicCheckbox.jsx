const BasicCheckbox = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="flex items-center space-x-2">
        <input
          id="checked"
          className={`h-4 w-4 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-primary/100 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={true}
        />
        <label
          htmlFor="checked"
          className="text-base font-medium text-slate-800 dark:text-slate-200"
        >
          Checked
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <input
          id="unchecked"
          className={`h-4 w-4 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-primary/100 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={false}
        />
        <label
          htmlFor="unchecked"
          className="text-base font-medium text-slate-800 dark:text-slate-200"
        >
          unchecked
        </label>
      </div>
    </div>
  );
};

export default BasicCheckbox;
