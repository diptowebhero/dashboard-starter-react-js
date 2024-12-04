import CommonHeader from "../../common/CommonHeader";
import BasicSelect from "./BasicSelect";
import MultiSelectMain from "./MultiSelectMain";
import SearchableSelect from "./SearchableSelect";
import SelectSizes from "./SelectSizes";
import ValidatedSelect from "./ValidatedSelect";

const SelectMain = () => {
  return (
    <>
      <CommonHeader
        title="Select"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <BasicSelect />
        <SelectSizes />
        <ValidatedSelect />
        <SearchableSelect />
        <MultiSelectMain />
      </div>
    </>
  );
};

export default SelectMain;
