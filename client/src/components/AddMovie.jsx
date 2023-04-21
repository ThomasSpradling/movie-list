import React from 'react';
import _ from 'underscore';
import Parse from '../parse';

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
          const row = data.results[0];
          getMovie(row.id, (movieData) => {
            const movie = {
              title: movieData.title,
              year: Number(row.release_date.substring(0, 4)),
              runtime: movieData.runtime,
              status: movieData.status,
              votes: Number(row.vote_average),
              poster: row.poster_path,
              watched: 0
            };
            const t = movie;
            t.showDetails = false;

            temp.push(t);

            setMovieList(temp);
            setTitleText('');

            Parse.create(movie, () => {
              Parse.readAll(data => {
                setMovieList(data);
              });
            });
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