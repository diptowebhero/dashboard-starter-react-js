import Profile from "./Profile";
import SearchComponent from "./SearchComponent";
import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ sidebarOpen, setSidebarOpen, headerVisible }) => {
  return (
    <header
      className={`sticky top-0 z-50 flex w-full flex-col items-center justify-between bg-white drop-shadow-sm transition-all duration-500 ease-in-out dark:bg-dark ${
        headerVisible ? "max-h-16 opacity-100" : "max-h-0 opacity-0"
      }`}
    >
      <div className="relative flex w-full items-center justify-between px-6 xl:px-0">
        <div className="flex items-center space-x-6 overflow-visible">
          {/* Sidebar toggle Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="sidebar-toggle lg:hidden"
          >
            <span className="flex space-x-4">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 24 24"
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </span>
          </button>

          {/* Search */}
          <SearchComponent />
        </div>
        <div className="flex items-center gap-3 px-4 lg:gap-5">
          <ThemeSwitcher />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
