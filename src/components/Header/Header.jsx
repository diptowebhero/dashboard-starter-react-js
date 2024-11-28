import { Search } from "lucide-react";
import Profile from "./Profile";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ sidebarOpen, setSidebarOpen, headerVisible }) => {
  return (
    <header
      className={`sticky top-0 z-50 flex flex-col items-center justify-between w-full overflow-hidden bg-white drop-shadow-sm dark:bg-dark transition-all duration-500 ease-in-out ${
        headerVisible ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
      }`}>
      <div className='px-6 xl:px-0 w-full flex items-center justify-between'>
        <div className='flex items-center space-x-6 overflow-visible'>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className='sidebar-toggle lg:hidden'>
            <span className='flex space-x-4'>
              <svg
                stroke='currentColor'
                fill='none'
                strokeWidth='0'
                viewBox='0 0 24 24'
                height='24'
                width='24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'></path>
              </svg>
            </span>
          </button>
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
        </div>
        <div className='flex items-center gap-3 lg:gap-5 px-4'>
          <ThemeSwitcher />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
