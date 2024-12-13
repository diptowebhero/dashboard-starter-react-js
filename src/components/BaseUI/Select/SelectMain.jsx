import CommonHeader from "../../common/CommonHeader";
import BasicSelect from "../../common/forms/selects/BasicSelect";
import MultiSelectMain from "../../common/forms/selects/MultiSelectMain";
import SearchableSelect from "../../common/forms/selects/SearchableSelect";
import SelectSizes from "../../common/forms/selects/SelectSizes";
import ValidatedSelect from "../../common/forms/selects/ValidatedSelect";
import Box from "../Box";
import Title from "../Title";

const SelectMain = () => {
  return (
    <>
      <CommonHeader
        title="Select"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <Box>
          <Title title="Basic Select" />
          <BasicSelect />
        </Box>
        <Box>
          <Title title="Select Sizes" />
          <SelectSizes />
        </Box>
        <Box>
          <Title title="Validated Select" />
          <ValidatedSelect />
        </Box>
        <Box>
          <Title title="Searchable Custom Select" />
          <SearchableSelect />
        </Box>
        <Box>
          <Title title="Custom Multi Select" />
          <MultiSelectMain />
        </Box>
      </div>
    </>
  );
};

export default SelectMain;
