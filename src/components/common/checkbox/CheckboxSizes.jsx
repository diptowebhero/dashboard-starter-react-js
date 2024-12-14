const CheckboxSizes = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* checkbox xs */}
      <div className="flex items-center space-x-2">
        <input
          id="checkedXs"
          className={`h-3.5 w-3.5 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-primary/100 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={true}
        />
        <label
          htmlFor="checkedXs"
          className="text-xs font-medium text-slate-800 dark:text-slate-200"
        >
          Checked
        </label>
      </div>
      {/* checkbox sm */}
      <div className="flex items-center space-x-2">
        <input
          id="checkedSm"
          className={`h-4 w-4 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-primary/100 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={true}
        />
        <label
          htmlFor="checkedSm"
          className="text-sm font-medium text-slate-800 dark:text-slate-200"
        >
          Checked
        </label>
      </div>
      {/* checkbox md */}
      <div className="flex items-center space-x-2">
        <input
          id="checkedMd"
          className={`h-5 w-5 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-primary/100 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={true}
        />
        <label
          htmlFor="checkedMd"
          className="text-base font-medium text-slate-800 dark:text-slate-200"
        >
          Checked
        </label>
      </div>
      {/* checkbox lg */}
      <div className="flex items-center space-x-2">
        <input
          id="checkedLg"
          className={`h-6 w-6 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-primary/100 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={true}
        />
        <label
          htmlFor="checkedLg"
          className="text-base font-medium text-slate-800 dark:text-slate-200"
        >
          Checked
        </label>
      </div>
    </div>
  );
};

export default CheckboxSizes;
