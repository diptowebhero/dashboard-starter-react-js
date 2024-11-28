import Profile from "./Profile";
import ThemeSwitcher from "./ThemeSwitcher";
const Header = () => {
  return (
    <>
      <header className='sticky top-0 z-50 flex h-16 w-full items-center overflow-visible bg-white drop-shadow-sm dark:bg-dark'>
        {" "}
        <div className='px-6 w-full flex items-center justify-between'>
          <div className='flex items-center space-x-6 overflow-visible'>
            <div className='sm:hidden'>
              <button
                type='button'
                data-trigger='search-modal'
                className='flex items-center justify-center rounded-full text-slate-500 transition-colors duration-150 hover:text-primary-500 focus:text-primary-500 dark:text-slate-400 dark:hover:text-slate-300'>
                <i
                  style={{ width: "22px", height: "22px" }}
                  data-feather='search'></i>
              </button>
            </div>

            <button
              type='button'
              data-trigger='search-modal'
              className='group hidden h-10 w-72 items-center overflow-hidden rounded-primary bg-slate-100 px-3 shadow-sm dark:border-transparent dark:bg-slate-700 sm:flex'>
              <i
                className='text-slate-400'
                style={{ width: "22px", height: "22px" }}
                data-feather='search'></i>
              <span className='ml-2 text-sm text-slate-400'>Search</span>
            </button>
          </div>
          <div className='flex items-center gap-3 lg:gap-5'>
            <ThemeSwitcher />
            <Profile />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
