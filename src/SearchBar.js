import React from 'react';
import './SearchBar.css';

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
        <div className='search-bar-container'>
            <h1>Search Projects Using Features</h1>
            <input
                type="text"
                className="search-bar-input"
                placeholder="Search features..."
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
            />
            <button className="search-button" onClick={onSearch}>Search</button>
        </div>
    );
};

export default SearchBar;