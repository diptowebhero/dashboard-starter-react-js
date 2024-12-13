import CommonHeader from "../../common/CommonHeader";
import BasicInput from "../../common/forms/inputs/BasicInput";
import InputSizes from "../../common/forms/inputs/InputSizes";
import InputWithHelperText from "../../common/forms/inputs/InputWithHelperText";
import InputWithLabel from "../../common/forms/inputs/InputWithLabel";
import PasswordInput from "../../common/forms/inputs/PasswordInput";
import ValidateInput from "../../common/forms/inputs/ValidateInput";
import Box from "../Box";
import Title from "../Title";

const Inputs = () => {
  return (
    <div>
      <CommonHeader
        title="Inputs"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <Box>
          <Title title="Basic Input" />
          <BasicInput />
        </Box>
        <Box>
          <Title title="Input With Label" />
          <InputWithLabel />
        </Box>
        <Box>
          <Title title="Input With Helper Text" />
          <InputWithHelperText />
        </Box>
        <Box>
          <Title title="Input Sizes" />
          <InputSizes />
        </Box>
        <Box>
          <Title title="Validated Input" />
          <ValidateInput />
        </Box>
        <Box>
          <Title title="Password Show/Hide" />
          <PasswordInput />
        </Box>
      </div>
    </div>
  );
};

export default Inputs;
