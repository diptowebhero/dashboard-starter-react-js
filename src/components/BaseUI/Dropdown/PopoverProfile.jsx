import { HelpCircle, LogOut, Settings, User } from "lucide-react";
import { avatar } from "../../../assets";

import Popover from "../../common/Popover";
import Box from "../Box";
import Title from "../Title";

const PopoverProfile = () => {
  const trigger = (
    <div className="flex h-10 w-10 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-primary-light">
      <img src={avatar} alt="AVATAR" />
    </div>
  );

  const content = (
    <div>
      <div className="border-b px-4 py-3 dark:border-slate-600">
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
      <div className="border-t dark:border-slate-600">
        <form>
          <button
            type="submit"
            className="flex w-full items-center gap-x-2 px-4 py-2 hover:bg-primary"
          >
            <LogOut className="size-[18px] text-slate-500" />
            <span className="text-sm">Sign out</span>
          </button>
        </form>
      </div>
    </div>
  );

  return (
    <Box>
      <Title title="Profile Popover" />
      <Popover trigger={trigger} content={content} />
    </Box>
  );
};

export default PopoverProfile;
