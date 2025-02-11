import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import SearchBar from "../SearchBar/SearchBar";

import "./Table.css";

const Table = () => {
  const employees = useSelector((state) => state.employees);
  const [filterText, setFilterText] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedData, setSortedData] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  useEffect(() => {
    let formattedEmployees = employees.map((employee) => ({
      ...employee,
      startDate: format(new Date(employee.startDate), "MM/dd/yyyy"),
      dateOfBirth: format(new Date(employee.dateOfBirth), "MM/dd/yyyy"),
    }));

    let filteredData = formattedEmployees.filter((item) =>
      Object.values(item).some(
        (value) =>
          value &&
          value.toString().toLowerCase().includes(filterText.toLowerCase())
      )
    );

    if (sortColumn) {
      filteredData = filteredData.sort((a, b) => {
        const aValue = a[sortColumn]?.toString().toLowerCase();
        const bValue = b[sortColumn]?.toString().toLowerCase();

        if (aValue < bValue) {
          return sortDirection === "asc" ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortDirection === "asc" ? 1 : -1;
        }
        return 0;
      });
    }

    setSortedData(filteredData);
  }, [employees, filterText, sortColumn, sortDirection]);

  const handleSort = (column) => {
    const direction =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(direction);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = sortedData.slice(startIndex, endIndex);

  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  return (
    <div>
      <div className="viewPerPageContainer">
        <div>
          <label htmlFor="rowsPerPage">Show </label>
          <select
            id="rowsPerPage"
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setCurrentPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>{" "}
          entries
        </div>
        <SearchBar filterText={filterText} setFilterText={setFilterText} />
      </div>
      <table>
        <thead>
          <tr>
            {[
              "firstName",
              "lastName",
              "startDate",
              "department",
              "dateOfBirth",
              "street",
              "city",
              "state",
              "zipCode",
            ].map((column) => (
              <th key={column} onClick={() => handleSort(column)}>
                <div className="thContainer">
                  <span>
                    {column
                      .replace(/([A-Z])/g, " $1")
                      .replace(/^./, (str) => str.toUpperCase())}
                  </span>
                  <div className="sortIconContainer">
                    <span
                      className={`sortIcon ${
                        sortColumn === column && sortDirection === "asc"
                          ? "active"
                          : ""
                      }`}
                    >
                      ▲
                    </span>
                    <span
                      className={`sortIcon ${
                        sortColumn === column && sortDirection === "desc"
                          ? "active"
                          : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {displayedData.map((employee, index) => (
            <tr key={index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>{employee.department}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>{employee.state}</td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="paginationContainer">
        <div>
          Showing {startIndex + 1} to {Math.min(endIndex, sortedData.length)} of{" "}
          {sortedData.length} entries
        </div>
        <div>
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setCurrentPage(i + 1)}
              disabled={currentPage === i + 1}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Table;
