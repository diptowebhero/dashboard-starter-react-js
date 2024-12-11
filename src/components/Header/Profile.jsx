import { HelpCircle, LogOut, Settings, User } from "lucide-react";
import { useRef, useState } from "react";
import { avatar } from "../../assets/index";
import { useOutsideClick } from "../../hooks/useOutsideClick";

const Profile = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // To detect clicks outside the dropdown

  // Toggle dropdown visibility when the profile icon is clicked
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };
  // Close dropdown when clicked outside
  useOutsideClick(dropdownRef, () => setDropdownVisible(false));

  return (
    <div className="relative">
      {/* Profile Icon */}
      <div
        ref={dropdownRef}
        className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-primary-light"
        onClick={toggleDropdown}
      >
        <img src={avatar} alt="AVATAR" />
      </div>

      {/* Dropdown Content */}
      <div
        className={`absolute right-0 z-50 mt-3 w-56 divide-y rounded-md border border-gray-100 bg-white shadow-lg transition-all duration-300 ease-in-out dark:divide-slate-600 dark:border-slate-600 dark:bg-darkGray dark:text-slate-200 ${
          dropdownVisible ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="px-4 py-3">
          <p className="text-sm">Signed in as</p>
          <p className="truncate text-sm font-medium">admin@example.com</p>
        </div>
        <div className="flex flex-col space-y-2 py-1">
          <a
            href="#"
            className="flex items-center gap-x-2 px-4 py-1 text-sm hover:bg-primary"
          >
            <User className="size-[18px] text-slate-500" />
            <span>Profile</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 px-4 py-1 text-sm hover:bg-primary"
          >
            <Settings className="size-[18px] text-slate-500" />
            <span>Settings</span>
          </a>
          <a
            href="#"
            className="flex items-center gap-x-2 px-4 py-1 text-sm hover:bg-primary"
          >
            <HelpCircle className="size-[18px] text-slate-500" />
            <span>Support</span>
          </a>
        </div>
        <div className="">
          <form>
            <button
              type="submit"
              className="flex w-full items-center gap-x-2 px-4 py-2 hover:bg-primary"
            >
              <LogOut className="size-[18px] text-slate-500" />
              <span>Sign out</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
