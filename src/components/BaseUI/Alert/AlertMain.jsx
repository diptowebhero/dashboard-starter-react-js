import BasicAlert from "../../common/alert/BasicAlert";
import CommonHeader from "../../common/CommonHeader";
import Box from "../Box";
import Title from "../Title";
import AlertWithIcon from "./../../common/alert/AlertWithIcon";
import ControlledAlert from "./../../common/alert/ControlledAlert";

const AlertMain = () => {
  return (
    <>
      <CommonHeader
        title="Alert"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <Box>
            <Title title="Alert" />
            <BasicAlert />
          </Box>
          <Box>
            <Title title="Alert with icon" />
            <AlertWithIcon />
          </Box>
          <Box>
            <Title title="Controlled Alert" />
            <ControlledAlert />
          </Box>
        </div>
      </div>
    </>
  );
};

export default AlertMain;
