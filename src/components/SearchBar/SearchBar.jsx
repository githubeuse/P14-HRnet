import PropTypes from "prop-types";

const SearchBar = ({ filterText, setFilterText }) => {
  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        id="search"
        type="text"
        value={filterText}
        autoComplete="off"
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
};

SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  setFilterText: PropTypes.func.isRequired,
};

export default SearchBar;
