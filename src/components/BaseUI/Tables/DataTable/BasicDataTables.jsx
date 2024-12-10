import { useMemo, useState } from "react";
import { tableData } from "../../../../data/data";
import { generatePageNumbers } from "../../../../utils/utils";
import Box from "../../Box";
import Title from "../../Title";
const headers = ["Name", "Email", "Phone", "Joining Date", "Status"];
const BasicDataTables = () => {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // Memoized filtered data based on the search term
  const filteredData = useMemo(
    () =>
      tableData.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()),
      ),
    [search],
  );

  // Pagination logic
  const totalPages = Math.ceil(filteredData.length / rowsPerPage);
  const paginatedData = useMemo(
    () =>
      filteredData.slice(
        (currentPage - 1) * rowsPerPage,
        currentPage * rowsPerPage,
      ),
    [filteredData, currentPage, rowsPerPage],
  );

  // Page change handler
  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <Box>
      <Title title="Basic Data Table" />
      <div className="min-h-max">
        <div className="rounded-lg p-4 shadow">
          {/* Search and Rows Per Page */}
          <div className="mb-4 flex items-center justify-between">
            <input
              type="text"
              placeholder="Search..."
              className="w-1/3 rounded-lg border px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-primary/80 dark:border-slate-800 dark:bg-slate-700 dark:text-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select
              className="rounded-lg border px-4 py-2 text-sm focus:outline-none dark:border-slate-800 dark:bg-slate-700 dark:text-white"
              value={rowsPerPage}
              onChange={(e) => setRowsPerPage(Number(e.target.value))}
            >
              <option value={5}>Entries: 5</option>
              <option value={10}>Entries: 10</option>
              <option value={15}>Entries: 15</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-max">
              {/* Table */}
              <table className="w-full border-collapse overflow-x-auto border border-gray-200">
                <thead>
                  <tr className="border-b border-slate-200 text-gray-700 dark:border-slate-800 dark:bg-slate-800 dark:text-gray-300">
                    {headers.map((header, i) => (
                      <th
                        key={i}
                        className="border border-gray-200 px-4 py-2 text-sm font-semibold dark:border-slate-600"
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {paginatedData.length > 0 ? (
                    paginatedData.map((item, index) => (
                      <tr
                        key={index}
                        className="border-slate-20 border-b text-slate-700 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700"
                      >
                        <td className="border border-gray-200 px-4 py-2 dark:border-slate-600">
                          <div className="flex items-center">
                            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-blue-100">
                              <span className="font-bold text-blue-600">
                                {item.name[0]}
                              </span>
                            </div>
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">
                                {item.role}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="border border-gray-200 px-4 py-2 dark:border-slate-600">
                          {item.email}
                        </td>
                        <td className="border border-gray-200 px-4 py-2 dark:border-slate-600">
                          {item.phone}
                        </td>
                        <td className="border border-gray-200 px-4 py-2 dark:border-slate-600">
                          {item.joining_date}
                        </td>
                        <td className="border border-gray-200 px-4 py-2 dark:border-slate-600">
                          <span
                            className={`rounded-full px-3 py-1 text-sm ${item.status === "Active" ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600"}`}
                          >
                            {item.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className="py-4 text-center">
                        <h2 className="text-red-400">
                          No results match your <strong>{search}</strong> search
                          query
                        </h2>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Pagination */}
          <div className="mt-4 flex flex-col items-center justify-between gap-y-4 md:flex-row md:gap-y-0">
            <p className="text-sm text-gray-500">
              Showing {(currentPage - 1) * rowsPerPage + 1} to{" "}
              {Math.min(currentPage * rowsPerPage, filteredData.length)} of{" "}
              {filteredData.length} entries
            </p>
            <div className="flex flex-wrap space-x-2 space-y-2 md:space-y-0">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="rounded-lg border px-3 py-1 text-sm dark:text-slate-200"
              >
                Previous
              </button>
              {generatePageNumbers(totalPages, currentPage).map(
                (page, index) => (
                  <button
                    key={index}
                    onClick={() => page !== "..." && handlePageChange(page)}
                    className={`rounded-lg border px-3 py-1 text-sm dark:text-white ${
                      currentPage === page
                        ? "bg-primary-light text-white dark:border-slate-800"
                        : ""
                    }`}
                  >
                    {page === "..." ? "..." : page}
                  </button>
                ),
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="rounded-lg border px-3 py-1 text-sm dark:text-slate-200"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default BasicDataTables;
