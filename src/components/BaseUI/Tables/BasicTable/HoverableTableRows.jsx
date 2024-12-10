import Box from "../../Box";
import Title from "../../Title";

const tableData = [
  {
    id: "01",
    productName: "Dell XPS 13",
    color: "Silver",
    category: "Laptop",
    available: "Yes",
    qty: 2,
    price: "$1299",
  },
  {
    id: "02",
    productName: "Acer Predator XB273K",
    color: "Black",
    category: "Monitor",
    available: "Yes",
    qty: 4,
    price: "$799",
  },
  {
    id: "03",
    productName: "Logitech MX Master 3",
    color: "Graphite",
    category: "Accessories",
    available: "Yes",
    qty: 3,
    price: "$99",
  },
  {
    id: "04",
    productName: "Apple iPad Pro 11”",
    color: "Space Gray",
    category: "Tablet",
    available: "No",
    qty: 0,
    price: "$999",
  },
  {
    id: "05",
    productName: "Sony WH-1000XM4",
    color: "Blue",
    category: "Headphones",
    available: "Yes",
    qty: 6,
    price: "$349",
  },
];

const HoverableTableRows = () => {
  return (
    <Box>
      <Title title="Hoverable Table Rows" />

      {/* Basic Tables */}
      <div className="overflow-x-auto">
        <div className="min-w-max">
          <table className="w-full table-auto border-collapse rounded-md border border-slate-300 text-left shadow-md dark:border-slate-700">
            <thead>
              <tr className="border-b border-slate-200 text-gray-700 dark:bg-slate-800 dark:text-gray-300">
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Product Name</th>
                <th className="px-4 py-2">Color</th>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Available</th>
                <th className="px-4 py-2">Qty</th>
                <th className="px-4 py-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-slate-200 text-slate-700 transition-all duration-200 ease-in-out hover:bg-slate-100 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700"
                >
                  <td className="px-4 py-2">{item.id}</td>
                  <td className="px-4 py-2">{item.productName}</td>
                  <td className="px-4 py-2">{item.color}</td>
                  <td className="px-4 py-2">{item.category}</td>
                  <td className="px-4 py-2">{item.available}</td>
                  <td className="px-4 py-2">{item.qty}</td>
                  <td className="px-4 py-2">{item.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
};

export default HoverableTableRows;
