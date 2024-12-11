import { Bell } from "lucide-react";
import Popover from "../../common/Popover";
import Box from "../Box";
import Title from "../Title";

const PopoverNotification = () => {
  const trigger = (
    <div className="relative flex h-10 w-10 items-center justify-center dark:text-slate-400">
      <Bell className="size-5" />
      <span className="absolute -right-3 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-800 p-2 text-sm text-white">
        2
      </span>
    </div>
  );

  const content = (
    <>
      <div className="flex items-baseline justify-between gap-4 border-b px-3 py-2">
        <div className="text-sm font-semibold">Notifications</div>
        <button className="text-xs font-medium hover:underline">
          Mark all as read
        </button>
      </div>
      <div className="px-3 py-2 text-sm">
        <div className="flex items-start space-x-3">
          <div className="flex-1">
            <span className="font-bold">John Doe</span> added new task{" "}
            <span className="font-medium">
              PR #42: Patient appointment booking
            </span>
            <div className="text-xs">5 minutes ago</div>
          </div>
        </div>
      </div>
    </>
  );
  return (
    <Box>
      <Title title="Profile Popover" />
      <Popover trigger={trigger} content={content} className="min-w-[8rem]" />
    </Box>
  );
};

export default PopoverNotification;
