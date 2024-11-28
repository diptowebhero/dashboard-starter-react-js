import { HelpCircle, LogOut, Settings, User } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { avatar } from "../../assets/index";

const Profile = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef(null); // To detect clicks outside the dropdown
  const profileIconRef = useRef(null); // To detect clicks on the profile icon

  // Toggle dropdown visibility when the profile icon is clicked
  const toggleDropdown = () => {
    setDropdownVisible((prevState) => !prevState);
  };

  // Close the dropdown when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the click is outside the dropdown or profile icon
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        profileIconRef.current &&
        !profileIconRef.current.contains(event.target)
      ) {
        setDropdownVisible(false);
      }
    };

    // Attach event listener for detecting clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener when the component is unmounted
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className='relative'>
      {/* Profile Icon */}
      <div
        ref={profileIconRef}
        className='flex w-10 h-10 overflow-hidden border-2 border-primary-light items-center justify-center rounded-full cursor-pointer'
        onClick={toggleDropdown}>
        <img src={avatar} alt='AVATAR' />
      </div>

      {/* Dropdown Content */}
      <div
        ref={dropdownRef}
        className={`border absolute right-0 border-gray-100 bg-white shadow-lg rounded-md mt-3 w-56 divide-y dark:divide-slate-600 dark:border-slate-600 dark:bg-primary dark:text-slate-200 transition-all duration-300 ease-in-out ${
          dropdownVisible ? "opacity-100 visible" : "opacity-0 invisible"
        }`}>
        <div className='px-4 py-3'>
          <p className='text-sm'>Signed in as</p>
          <p className='truncate text-sm font-medium'>admin@example.com</p>
        </div>
        <div className='py-1 flex flex-col space-y-2'>
          <a
            href='#'
            className='flex items-center gap-x-2 text-sm py-1 px-4 hover:bg-primary'>
            <User className='text-slate-500 size-[18px]' />
            <span>Profile</span>
          </a>
          <a
            href='#'
            className='flex items-center gap-x-2 text-sm py-1 px-4 hover:bg-primary'>
            <Settings className='text-slate-500 size-[18px]' />
            <span>Settings</span>
          </a>
          <a
            href='#'
            className='flex items-center gap-x-2 text-sm py-1 px-4 hover:bg-primary'>
            <HelpCircle className='text-slate-500 size-[18px]' />
            <span>Support</span>
          </a>
        </div>
        <div className=''>
          <form>
            <button
              type='submit'
              className='flex items-center gap-x-2 hover:bg-primary w-full py-2 px-4'>
              <LogOut className='text-slate-500 size-[18px]' />
              <span>Sign out</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
