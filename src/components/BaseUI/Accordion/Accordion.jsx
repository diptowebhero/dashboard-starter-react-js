import CommonHeader from "../../common/CommonHeader";
import DefaultOpenAccordion from "./DefaultOpenAccordion";
import SingleAccordion from "./SingleAccordion";

const Accordion = () => {
  return (
    <div>
      <CommonHeader
        title='Accordion'
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio.'
      />
      <div className='space-y-4'>
        <SingleAccordion />
        <DefaultOpenAccordion />
      </div>
    </div>
  );
};

export default Accordion;
