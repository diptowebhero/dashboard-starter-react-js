import { Search } from "lucide-react";

const SearchComponent = () => {
  return (
    <>
      <div className='sm:hidden'>
        <button
          type='button'
          data-trigger='search-modal'
          className='flex items-center justify-center rounded-full text-slate-500 transition-colors duration-150 hover:text-primary-500 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300'>
          <Search className='size-5' />
        </button>
      </div>
      <button
        type='button'
        data-trigger='search-modal'
        className='hidden h-10 w-72 items-center overflow-hidden rounded-primary bg-slate-100 px-3 shadow-sm dark:border-transparent dark:bg-slate-700 sm:flex rounded'>
        <Search className='size-5 text-slate-400' />
        <span className='ml-2 text-sm text-slate-400'>Search</span>
      </button>
    </>
  );
};

export default SearchComponent;
