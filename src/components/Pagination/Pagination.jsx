import PropTypes from "prop-types";
import "./Pagination.css";


/**
 * Composant Pagination pour gérer la pagination des données.
 * 
 * @param {number} rowsPerPage - Nombre de lignes par page.
 * @param {function} setRowsPerPage - Fonction pour définir le nombre de lignes par page.
 * @param {number} currentPage - Page actuelle.
 * @param {function} setCurrentPage - Fonction pour définir la page actuelle.
 * @param {number} totalPages - Nombre total de pages.
 * @param {boolean} showRowsPerPage - Indique si l'option pour afficher les lignes par page est visible.
 */

const Pagination = ({
  rowsPerPage,
  setRowsPerPage,
  currentPage,
  setCurrentPage,
  totalPages,
  showRowsPerPage,
}) => {
  return (
    <div className="paginationContainer">
      {showRowsPerPage && (
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
      )}
      {!showRowsPerPage && (
        <div className="paginationControls">
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
      )}
    </div>
  );
};

Pagination.propTypes = {
  rowsPerPage: PropTypes.number.isRequired,
  setRowsPerPage: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
    showRowsPerPage: PropTypes.bool,
};


export default Pagination;
