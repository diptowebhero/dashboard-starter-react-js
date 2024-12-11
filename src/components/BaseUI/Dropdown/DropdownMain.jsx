import CommonHeader from "../../common/CommonHeader";
import ActionDropdown from "./ActionDropdown";
import BasicDropdown from "./BasicDropdown";
import MenuWithIcon from "./MenuWithIcon";
import PopoverNotification from "./PopoverNotification";
import PopoverProfile from "./PopoverProfile";

const DropdownMain = () => {
  return (
    <div>
      <CommonHeader
        title="Dropdown & Popover"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          <BasicDropdown />
          <ActionDropdown />
          <MenuWithIcon />
          <PopoverProfile />
          <PopoverNotification />
        </div>
      </div>
    </div>
  );
};

export default DropdownMain;
