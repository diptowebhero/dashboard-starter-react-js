import BasicCheckbox from "../../common/checkbox/BasicCheckbox";
import CheckboxColor from "../../common/checkbox/CheckboxColor";
import CheckboxSizes from "../../common/checkbox/CheckboxSizes";
import CommonHeader from "../../common/CommonHeader";
import Box from "../Box";
import Title from "../Title";

export const CheckboxMain = () => {
  return (
    <>
      <CommonHeader
        title="Checkbox"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Box>
          <Title title="Default Checkbox" />
          <BasicCheckbox />
        </Box>
        <Box>
          <Title title="Colors Checkbox" />
          <CheckboxColor />
        </Box>
        <Box>
          <Title title="Checkbox Sizes" />
          <CheckboxSizes />
        </Box>
      </div>
    </>
  );
};
