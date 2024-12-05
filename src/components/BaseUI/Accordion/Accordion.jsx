import CommonHeader from "../../common/CommonHeader";
import AccordionPlusIcon from "./AccordionPlusIcon";
import FlushAccordionChevronTransparent from "./FlushAccordionChevronTransparent";
import FlushAccordionPlusTransparent from "./FlushAccordionPlusTransparent";
import GridLayout from "./GridLayout";
import SingleTabsAccordion from "./SingleTabsAccordion";
import TableAccordion from "./TableAccordion";
import TableAccordionPlus from "./TableAccordionPlus";

const Accordion = () => {
  return (
    <div>
      <CommonHeader
        title="Accordion"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <SingleTabsAccordion />
          <FlushAccordionChevronTransparent />
          <AccordionPlusIcon />
          <FlushAccordionPlusTransparent />
          <TableAccordion />
          <TableAccordionPlus />
          <GridLayout />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
