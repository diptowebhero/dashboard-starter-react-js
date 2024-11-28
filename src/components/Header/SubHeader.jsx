import { ChevronDown, ChevronUp } from "lucide-react";

const SubHeader = ({ toggleHeaderVisibility, headerVisible }) => {
  return (
    <div className='hidden lg:flex sticky top-0 z-10 h-16 w-full items-center overflow-visible bg-white drop-shadow-sm dark:bg-dark transition-all duration-700 mb-4 rounded-md'>
      <div className='px-6 w-full flex items-center justify-between'>
        <div className='flex items-center space-x-6 overflow-visible'>
          <h1 className='text-3xl text-bold font-bold text-primary/100 dark:text-white'>
            Welcome John
          </h1>
        </div>

        {/* Toggle button */}
        <div
          className='flex h-9 w-9 min-w-max flex-shrink-0 items-center justify-center gap-3 lg:gap-5 bg-slate-100 border-slate-100 rounded cursor-pointer transition-all duration-150 hover:bg-primary/100 hover:text-white'
          onClick={toggleHeaderVisibility}>
          {headerVisible ? (
            <ChevronUp className='size-5' />
          ) : (
            <ChevronDown className='size-5' />
          )}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
