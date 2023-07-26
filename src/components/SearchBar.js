function SearchBar({ setSearchTerm }) {
    return (
        <div>
          <h1>Flatiron Bank</h1>
          <p>Search</p>
            <input 
                type="text" 
                placeholder="Search transactions..." 
                onChange={(e) => setSearchTerm(e.target.value)} 
            />
        </div>
    );
  }
  
  export default SearchBar;
