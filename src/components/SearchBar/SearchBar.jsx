import PropTypes from "prop-types";
import "./SearchBar.css";

const SearchBar = ({ filterText, setFilterText }) => {
  return (
    <div className="searchBarContainer">
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
