import React from 'react';
import _ from 'underscore';

const AddMovie = ({ titleText, setTitleText, movieList, setMovieList, searchTMDB, getMovie }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault();
        const temp = movieList.slice();
        let newMovie = {
          watched: false,
          showDetails: false,
          title: titleText
        };

        searchTMDB(titleText, (data) => {
          const movie = data.results[0];
          getMovie(movie.id, (movieData) => {
            newMovie = movieData;
            newMovie.watched = false;
            newMovie.showDetails = false;

            temp.push(newMovie);
            console.log(newMovie);

            setMovieList(temp);
            setTitleText('');
          });
        });
      }}>
        <div id='add-movie-bar'>
          <input type='text' placeholder="Type in some movie name..." value={titleText} onChange={e => setTitleText(e.target.value)}></input>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
};

export default AddMovie;