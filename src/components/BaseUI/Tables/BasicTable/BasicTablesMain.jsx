import CommonHeader from "../../../common/CommonHeader";
import BasicTables from "./BasicTables";
import BorderedTable from "./BorderedTable";
import HoverableTableRows from "./HoverableTableRows";
import StripedRowsTable from "./StripedRowstable";

const BasicTablesMain = () => {
  return (
    <div>
      <CommonHeader
        title="Basic Tables"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nesciunt quis aliquam aliquid est ipsam minus dolor ea. Qui omnis quasi iste alias modi facilis ratione placeat, non corporis? Optio."
      />
      <div className="space-y-4">
        {/* <div className="grid grid-cols-1 gap-3 md:grid-cols-2"> */}
        <BasicTables />
        <StripedRowsTable />
        <HoverableTableRows />
        <BorderedTable />
        {/* </div> */}
      </div>
    </div>
  );
};

export default BasicTablesMain;
