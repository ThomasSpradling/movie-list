import React from 'react';

const SearchBar = ({ query, setQuery, searchText, setSearchText, filter, setFilter }) => {
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault();
        setQuery(searchText);
      }}>
        <span id='filter-buttons'>
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={e => setFilter('all')}>All</button>

          <button
            className={filter === 'watched' ? 'active' : ''}
            onClick={e => setFilter('watched')}>Watched</button>

          <button
            className={filter === 'not watched' ? 'active' : ''}
            onClick={e => setFilter('not watched')}>To Watch</button>
        </span>
        <span id='search-box'>
          <input type="text" placeholder="Search your collection..." value={searchText} onChange={e => setSearchText(e.target.value)}></input>
          <button type="submit">Submit</button>
        </span>
      </form>
    </div>
  );
};

export default SearchBar;