import ButtonSizes from "../../common/buttons/ButtonSizes";
import ButtonWithIcon from "../../common/buttons/ButtonWithIcon";
import SocialMediaButtons from "../../common/buttons/SocialMediaButtons";
import SocialMediaButtonsWithText from "../../common/buttons/SocialMediaButtonsWithText";
import CommonHeader from "../../common/CommonHeader";
import DefaultButtons from "./../../common/buttons/DefaultButtons";
import Box from "./../Box";
import Title from "./../Title";

const ButtonMain = () => {
  return (
    <>
      <CommonHeader
        title="Button"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <Box>
          <Title title="Default Buttons" />
          <DefaultButtons />
        </Box>
        <Box>
          <Title title="Button Sizes" />
          <ButtonSizes />
        </Box>
        <Box>
          <Title title="Button with icon" />
          <ButtonWithIcon />
        </Box>
        <Box>
          <Title title="Social media icons" />
          <SocialMediaButtons />
        </Box>
        <Box>
          <Title title="Social media icons with text" />
          <SocialMediaButtonsWithText />
        </Box>
      </div>
    </>
  );
};

export default ButtonMain;
