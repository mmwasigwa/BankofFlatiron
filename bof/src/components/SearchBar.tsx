import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleChange = (e) => {
    onSearch(e.target.value);
  };

  return (
    <div className="mb-4">
      <label htmlFor="search" className="block text-sm font-medium">
        Search by Description
      </label>
      <input
        type="text"
        id="search"
        name="search"
        onChange={handleChange}
        className="border rounded-md px-2 py-1 w-full"
        placeholder="Search..."
      />
    </div>
  );
};

export default SearchBar;
