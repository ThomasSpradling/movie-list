import React from 'react';
import MovieListEntry from './MovieListEntry.jsx';

const MovieList = ({ query, movies, filter, setMovieList }) => {
  const listView = movies
    .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
    .filter((movie) => {
      return (filter === 'all') ||
             (filter === 'watched' && movie.watched) ||
             (filter === 'not watched' && !movie.watched)
    })
    .map((movie, i) =>
      <MovieListEntry
        key={i}
        movie={movie}
        movieList={movies}
        setMovieList={setMovieList} />
    );

  return (
    <div id='movie-container'>
      <ul>
        {
          listView.length !== 0 ? listView
          : query.length !== 0 ? <span className='not-here'>Cannot find movie with "{query}".</span>
          : <span className='not-here'>There's nothing here.</span>
        }
      </ul>
    </div>
  );
};

export default MovieList;