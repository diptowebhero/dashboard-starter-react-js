export const RadioButton = ({
  id,
  label,
  defaultChecked = false,
  disabled = false,
}) => (
  <div className="flex items-center gap-2">
    <input
      id={id}
      type="radio"
      name="basic-radio"
      className={`h-6 w-6 appearance-none rounded-full border border-slate-400 ring-0 ring-offset-white transition-colors duration-300 ease-in-out checked:border-0 checked:bg-primary/100 focus:outline-none focus:ring-2 focus:ring-primary/80 focus:ring-offset-2 ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
      defaultChecked={defaultChecked}
      disabled={disabled}
    />
    <label
      htmlFor={id}
      className={`text-gray-800 dark:text-slate-300 ${disabled ? "text-gray-500" : ""}`}
    >
      {label}
    </label>
  </div>
);
