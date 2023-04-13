import React from 'react';
// import { useState } from React;

import exampleMovieData from '../data/exampleData.js';
import MovieList from './MovieList.jsx';
import SearchBar from './SearchBar.jsx';
import AddMovie from './AddMovie.jsx';

const App = ({ searchTMDB, getMovie }) => {
  const [searchText, setSearchText] = React.useState('');
  const [query, setQuery] = React.useState('');
  const [movieList, setMovieList] = React.useState([]);
  const [titleText, setTitleText] = React.useState('');
  const [filter, setFilter] = React.useState('all');

  return (
    <div>
      <h1>Movie List</h1>
      <div>
        <AddMovie
          titleText={titleText}
          setTitleText={setTitleText}
          movieList={movieList}
          setMovieList={setMovieList}
          searchTMDB={searchTMDB}
          getMovie={getMovie} />
        <div id='wrapper'>
          <SearchBar
            query = {query}
            setQuery={setQuery}
            searchText={searchText}
            setSearchText={setSearchText}
            filter={filter}
            setFilter={setFilter} />

          <MovieList
            query={query}
            movies={movieList}
            setMovieList={setMovieList}
            filter={filter} />
        </div>
      </div>
    </div>
  );
};

export default App;