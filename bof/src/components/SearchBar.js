import React from 'react';

function SearchBar({ setSearchTerm }) {
  return (
    <div className="bg-blue-600 p-6 text-white font-inter">
      <h1 className="text-3xl font-bold mb-4">Bank of Flatiron</h1>
      <p className="text-lg mb-4">Search Transactions</p>
      <input
        type="text"
        placeholder="Search transactions..."
        className="w-full p-3 rounded-lg shadow-sm text-lg focus:outline-none focus:ring focus:border-blue-300"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;
