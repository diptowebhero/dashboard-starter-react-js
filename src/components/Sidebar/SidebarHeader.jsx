import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { logo } from "../../assets";

const SidebarHeader = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <div className='sidebar-header relative'>
        <div className='sidebar-logo-icon'>
          <img src={logo} className='h-[47px] object-cover' alt='LOGO' />
        </div>
        <div className='flex flex-col logo-text px-2'>
          <h1 className='text-xl font-semibold'>
            <span className='text-primary-light dark:text-primary-lighter'>
              Dashboard
            </span>
          </h1>
          <span className='whitespace-nowrap capitalize text-xs text-slate-400'>
            simple & customizable
          </span>
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setSidebarOpen(!sidebarOpen);
          }}
          className='hidden lg:flex sidebar-toggle absolute bg-primary-light text-gray-50 size-6  items-center justify-center rounded-full p-1 -right-2 z-[70] dark:text-white'>
          {sidebarOpen ? (
            <ChevronsRight className='size-5' />
          ) : (
            <ChevronsLeft className='size-5' />
          )}
        </button>
      </div>
    </>
  );
};

export default SidebarHeader;
