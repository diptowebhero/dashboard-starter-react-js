const CheckboxColor = () => {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {/* Primary Checkbox */}
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
          Primary
        </label>
      </div>

      {/* Secondary Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          id="secondary"
          className={`h-4 w-4 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-secondary-500 focus:outline-none focus:ring-2 focus:ring-secondary-500 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={true}
        />
        <label
          htmlFor="secondary"
          className="text-base font-medium text-slate-800 dark:text-slate-200"
        >
          Danger
        </label>
      </div>

      {/* Danger Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          id="danger"
          className={`h-4 w-4 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-danger-500 focus:outline-none focus:ring-2 focus:ring-danger-500 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={true}
        />
        <label
          htmlFor="danger"
          className="text-base font-medium text-slate-800 dark:text-slate-200"
        >
          Danger
        </label>
      </div>

      {/* Info Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          id="success"
          className={`h-4 w-4 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-info-500 focus:outline-none focus:ring-2 focus:ring-info-500 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={true}
        />
        <label
          htmlFor="success"
          className="text-base font-medium text-slate-800 dark:text-slate-200"
        >
          Success
        </label>
      </div>

      {/* Warning Checkbox */}
      <div className="flex items-center space-x-2">
        <input
          id="warning"
          className={`h-4 w-4 appearance-none rounded border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-warning-500 focus:outline-none focus:ring-2 focus:ring-warning-500 focus:ring-offset-2`}
          type="checkbox"
          name="basic-checkbox"
          defaultChecked={true}
        />
        <label
          htmlFor="warning"
          className="text-base font-medium text-slate-800 dark:text-slate-200"
        >
          Success
        </label>
      </div>
    </div>
  );
};

export default CheckboxColor;
