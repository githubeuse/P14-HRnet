import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import SearchBar from "../SearchBar/SearchBar";
import Pagination from "../Pagination/Pagination";

import "./Table.css";

/**
 * Composant SearchBar pour filtrer les éléments affichés.
 * 
 * @param {string} filterText - Texte de filtrage actuel.
 * @param {function} setFilterText - Fonction pour mettre à jour le texte de filtrage.
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
      <div className="bottomContainer">
        <div className="entriesInfo">
          Showing {startIndex + 1} to {Math.min(endIndex, sortedData.length)} of {sortedData.length} entries
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

export default Table;