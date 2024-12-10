import { RadioButton } from "../../common/RadioButton";
import Box from "../Box";
import Title from "../Title";

const BasicRadio = () => {
  return (
    <Box>
      <Title title="Basic Radio" />
      <div className="flex gap-4">
        <RadioButton id="js" label="JS" defaultChecked />
        <RadioButton id="react" label="React" />
        <RadioButton id="next" label="Next" />
      </div>
    </Box>
  );
};

export default BasicRadio;
