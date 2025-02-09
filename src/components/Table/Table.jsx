import DataTable from "react-data-table-component";
import PropTypes from "prop-types";

/**
 * Composant Table pour afficher une liste d'employés sous forme de tableau.
 * Utilise le composant react-data-table-component pour le rendu du tableau.
 * 
 * @param {Array} columns - Les colonnes du tableau.
 * @param {Array} data - Les données à afficher dans le tableau.
 */

const Table = ({ columns, data }) => {
    return (
        <DataTable
            columns={columns}
            data={data}
            pagination
        />
    );
};

Table.propTypes = {
    columns: PropTypes.array.isRequired,
    data: PropTypes.array.isRequired,
};

export default Table;