const CommonHeader = ({ title, description }) => {
  return (
    <article className="mb-4 mt-0 rounded-lg border bg-white p-6 dark:border-none dark:bg-dark">
      <div className="space-y-2 rounded-md text-black dark:text-white">
        <h1 className="not-prose mb-0 flex scroll-m-20 items-center gap-2 text-2xl font-bold tracking-tight text-slate-600 dark:text-slate-300">
          <div className="text-primary-foreground grid h-8 w-8 place-content-center rounded-lg bg-primary lg:h-10 lg:w-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-component"
            >
              <path d="M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z"></path>
              <path d="m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z"></path>
              <path d="M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z"></path>
              <path d="m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z"></path>
            </svg>
          </div>
          {title}
        </h1>
        <p className="text-xs sm:text-sm">{description}</p>
      </div>
    </article>
  );
};

export default CommonHeader;
