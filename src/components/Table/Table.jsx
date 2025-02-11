import DataTable from "react-data-table-component";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import Pagination from "../Pagination/Pagination";
import EntriesInfo from "../EntriesInfo/EntriesInfo";

/**
 * Composant Table pour afficher une liste d'employés sous forme de tableau.
 * Utilise le composant react-data-table-component pour le rendu du tableau.
 *
 * @param {Array} columns - Les colonnes du tableau.
 * @param {Array} data - Les données à afficher dans le tableau.
 */

const Table = ({ columns, data }) => {
  const [filterText, setFilterText] = useState("");

  const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayedData, setDisplayedData] = useState([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;
    setDisplayedData(data.slice(startIndex, endIndex));
  }, [data, rowsPerPage, currentPage]);

  const filteredItems = displayedData.filter((item) =>
    Object.values(item).some(
      (value) =>
        value &&
        value.toString().toLowerCase().includes(filterText.toLowerCase())
    )
  );

  const totalPages = Math.ceil(data.length / rowsPerPage);

  const subHeaderComponent = (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div>
        <label htmlFor="rowsPerPage">Show </label>
        <select
          id="rowsPerPage"
          value={rowsPerPage}
          onChange={(e) => {
            const newRowsPerPage = Number(e.target.value);
            setRowsPerPage(newRowsPerPage);
            setResetPaginationToggle(!resetPaginationToggle);
          }}
        >
          <option value={10}>10</option>
          <option value={25}>25</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </select>{" "}
        entries
      </div>
      <div
        className="searchZone"
        style={{ display: "flex", alignItems: "baseline" }}
      >
        <label htmlFor="search">Search:</label>
        <input
          id="search"
          type="text"
          placeholder=""
          name="search"
          value={filterText}
          onChange={(e) => setFilterText(e.target.value)}
          style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
        />
      </div>
    </div>
  );

  return (
    <>
      <DataTable
        columns={columns}
        data={filteredItems}
        subHeader
        subHeaderComponent={subHeaderComponent}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <EntriesInfo
          currentPage={currentPage}
          rowsPerPage={rowsPerPage}
          totalEntries={data.length}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </>
  );
};

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
};

export default Table;
