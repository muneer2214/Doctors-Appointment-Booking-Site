import React, { useState } from 'react';
import './index.css';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search by name or specialization..."
      value={query}
      onChange={handleInputChange}
    />
  );
};

export default SearchBar;
