import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className='flex items-center space-x-4'>
      <span className='cursor-pointer'>
        {theme === "light" ? (
          <button
            className=' w-14 h-14 rounded-full flex items-center justify-center transition-all delay-100 hover:bg-primary'
            onClick={() => setTheme("dark")}>
            <Moon />
          </button>
        ) : (
          <button
            className='text-[#ffec99] w-14 h-14 rounded-full flex items-center justify-center transition-all delay-100 hover:bg-primary'
            onClick={() => setTheme("light")}>
            <Sun />
          </button>
        )}
      </span>
    </div>
  );
};

export default ThemeSwitcher;
