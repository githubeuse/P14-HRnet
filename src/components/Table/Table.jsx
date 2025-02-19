import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import PropTypes from "prop-types";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";

import "./Table.css";

/**
 * Composant Table pour afficher et gérer une table de données avec pagination et filtrage.
 */

const Table = () => {
  const employees = useSelector((state) => state.employees);
  const [filterText, setFilterText] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortedData, setSortedData] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState("asc");

  //Utilisation de useEffect pour filtrer et trier les données à chaque changement des dépendances
  useEffect(() => {
    let formattedEmployees = employees.map((employee) => ({
      ...employee,
      startDate: format(new Date(employee.startDate), "MM/dd/yyyy"),
      dateOfBirth: format(new Date(employee.dateOfBirth), "MM/dd/yyyy"),

      value: employee.state?.value || "N/A",
      label:
        employee.department?.label ||
        `${employee.firstName} ${employee.lastName}`,
      abbreviation: employee.state?.abbreviation || "N/A",
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
        const aValue =
          sortColumn === "state"
            ? typeof a.state === "string"
              ? a.state
              : a.state?.abbreviation
            : sortColumn === "department"
            ? typeof a.department === "string"
              ? a.department
              : a.department?.value
            : a[sortColumn];

        const bValue =
          sortColumn === "state"
            ? typeof b.state === "string"
              ? b.state
              : b.state?.abbreviation
            : sortColumn === "department"
            ? typeof b.department === "string"
              ? b.department
              : b.department?.value
            : b[sortColumn];

        if (!aValue || !bValue) return 0; 

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

  //Fonction pour gérer le tri des colonnes
  const handleSort = (column) => {
    const direction =
      sortColumn === column && sortDirection === "asc" ? "desc" : "asc";
    setSortColumn(column);
    setSortDirection(direction);
  };

  // Calcul des indices de début et de fin pour la pagination
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const displayedData = sortedData.slice(startIndex, endIndex);

  // Calcul du nombre total de pages
  const totalPages = Math.ceil(sortedData.length / rowsPerPage);

  return (
    <div>
      <div className="upperContainer">
        <Pagination
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          showRowsPerPage={true}
        />
        <SearchBar filterText={filterText} setFilterText={setFilterText} />
      </div>

      <table>
        <thead>
          <tr className="tableHeader">
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
        <tbody className="tableBody">
          {sortedData.length === 0 && (
            <tr>
            <td className="noResults">❌ No data available in table</td>
            </tr>
          )}
          {displayedData.map((employee, index) => (
            <tr key={employee.id || index}>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.startDate}</td>
              <td>
                {typeof employee.department === "object"
                  ? employee.department.value
                  : employee.department || "N/A"}
              </td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.street}</td>
              <td>{employee.city}</td>
              <td>
                {typeof employee.state === "object"
                  ? employee.state.abbreviation
                  : employee.state || "N/A"}
              </td>
              <td>{employee.zipCode}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="bottomContainer">
        <div className="entriesInfo">
          Showing {startIndex + 1} to {Math.min(endIndex, sortedData.length)} of{" "}
          {sortedData.length} entries
        </div>
        <Pagination
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          showRowsPerPage={false}
        />
      </div>
    </div>
  );
};

Table.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      dateOfBirth: PropTypes.string.isRequired,
      street: PropTypes.string.isRequired,
      city: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
      zipCode: PropTypes.string.isRequired,
    })
  ),
};

export default Table;
