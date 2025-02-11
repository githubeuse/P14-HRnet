import PropTypes from "prop-types";

const EntriesInfo = ({ currentPage, rowsPerPage, totalEntries }) => {
  const startEntry = (currentPage - 1) * rowsPerPage + 1;
  const endEntry = Math.min(currentPage * rowsPerPage, totalEntries);

  return (
    <div style={{ marginTop: "10px" }}>
      Showing {startEntry} to {endEntry} of {totalEntries} entries
    </div>
  );
};

EntriesInfo.propTypes = {
  currentPage: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  totalEntries: PropTypes.number.isRequired,
};

export default EntriesInfo;