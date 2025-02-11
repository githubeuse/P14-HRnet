import PropTypes from "prop-types";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page) => {
    onPageChange(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          onClick={() => handlePageClick(i)}
          style={{
            margin: "0 5px",
            padding: "5px 10px",
            backgroundColor: '#93AD18',
            color: 'white',
            border: i === currentPage ? "2px solid black" : "1px solid #93AD18",
            borderRadius: "3px",
            cursor: "pointer",
          }}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  return (
    <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "10px", alignItems: "baseline" }}>
      <span onClick={handlePrevious} disabled={currentPage === 1} style={{ marginRight: "10px", cursor: "pointer" }}>
        Previous
      </span>
      {renderPageNumbers()}
      <span onClick={handleNext} disabled={currentPage === totalPages} style={{ marginLeft: "10px", cursor: "pointer" }}>
        Next
      </span>
    </div>
  );
};

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;