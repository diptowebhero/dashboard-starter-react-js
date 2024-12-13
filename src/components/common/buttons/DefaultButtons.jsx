const DefaultButtons = () => {
  return (
    <div className="flex items-center gap-3">
      {/* btn-primary */}
      <button className="inline transform cursor-pointer items-center justify-center gap-2 rounded-md bg-primary/80 px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:scale-105 hover:bg-primary/70 focus:outline-none">
        Primary
      </button>

      {/* btn-secondary */}
      <button className="bg-secondary-100 text-secondary-500 dark:bg-secondary-500 dark:text-secondary-100 inline transform cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-2 text-sm transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none">
        Secondary
      </button>

      {/* btn-danger */}
      <button className="bg-danger-500 inline transform cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none">
        Danger
      </button>

      {/* btn-warning */}
      <button className="bg-warning-500 inline transform cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none">
        Warning
      </button>

      {/* btn-info */}
      <button className="bg-info-500 inline transform cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:scale-105 focus:outline-none">
        Warning
      </button>
    </div>
  );
};

export default DefaultButtons;
