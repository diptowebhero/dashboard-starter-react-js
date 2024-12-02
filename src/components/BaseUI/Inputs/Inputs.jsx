import CommonHeader from "../../common/CommonHeader";
import BasicInput from "./BasicInput";
import InputWithHelperText from "./InputWithHelperText";
import InputWithLabel from "./InputWithLabel";
import ValidateInput from "./ValidateInput";

const Inputs = () => {
  return (
    <div>
      <CommonHeader
        title="Inputs"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <BasicInput />
        <InputWithLabel />
        <InputWithHelperText />
        <ValidateInput />
      </div>
    </div>
  );
};

export default Inputs;
