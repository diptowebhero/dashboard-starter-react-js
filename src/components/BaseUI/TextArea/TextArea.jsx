import CommonHeader from "../../common/CommonHeader";
import BasicTextArea from "../../common/forms/textAreas/BasicTextArea";
import TextAreaHelperText from "../../common/forms/textAreas/TextAreaHelperText";
import TextAreaSizes from "../../common/forms/textAreas/TextAreaSizes";
import TextAreaWithLabel from "../../common/forms/textAreas/TextAreaWithLabel";
import ValidateTextArea from "../../common/forms/textAreas/ValidateTextArea";
import Box from "../Box";
import Title from "../Title";

const TextArea = () => {
  return (
    <>
      <CommonHeader
        title="TextArea"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <Box>
          <Title title="Basic TextArea" />
          <BasicTextArea />
        </Box>
        <Box>
          <Title title="TextArea With Label" />
          <TextAreaWithLabel />
        </Box>
        <Box>
          <Title title="TextArea with Helper Text" />
          <TextAreaHelperText />
        </Box>
        <Box>
          <Title title="TextArea Sizes" />
          <TextAreaSizes />
        </Box>
        <Box>
          <Title title="Validated TextArea" />
          <ValidateTextArea />
        </Box>
      </div>
    </>
  );
};

export default TextArea;
