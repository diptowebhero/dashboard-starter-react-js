import CommonHeader from "../../common/CommonHeader";
import BasicRadio from "./BasicRadio";

const RadioMain = () => {
  return (
    <div>
      <CommonHeader
        title="Radio"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <BasicRadio />
      </div>
    </div>
  );
};

export default RadioMain;
