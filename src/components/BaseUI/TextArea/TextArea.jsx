import CommonHeader from "../../common/CommonHeader";
import BasicTextArea from "./BasicTextArea";
import TextAreaHelperText from "./TextAreaHelperText";
import TextAreaSizes from "./TextAreaSizes";
import TextAreaWithLabel from "./TextAreaWithLabel";
import ValidateTextArea from "./ValidateTextArea";

const TextArea = () => {
  return (
    <>
      <CommonHeader
        title="TextArea"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <BasicTextArea />
        <TextAreaWithLabel />
        <TextAreaHelperText />
        <TextAreaSizes />
        <ValidateTextArea />
      </div>
    </>
  );
};

export default TextArea;
