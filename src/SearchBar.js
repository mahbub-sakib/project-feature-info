import React from 'react';

const SearchBar = ({ onSearchTermChange, onSearch }) => {
    const handleInputChange = (event) => {
        onSearchTermChange(event.target.value);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            onSearch();
        }
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search features..."
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button onClick={onSearch}>Search</button>
        </div>
    );
};

export default SearchBar;