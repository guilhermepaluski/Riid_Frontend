import "react";
import PropTypes from "prop-types";

const SearchBar = ({ onSearch }) => {
    const handleInputChange = (e) => {
        console.log(e.target.value)
        onSearch(e.target.value);
    };

    return (
        <div className="flex flex-col justify-between bg-black">
            <input
                type="text"
                placeholder="Search"
                className="px-2 py-1 rounded bg-white text-black"
                onChange={handleInputChange}
            />
        </div>
    );
};

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default SearchBar;