import React from 'react';
import MovieEntryDetails from './MovieEntryDetails.jsx';
import Parse from '../parse';

const MovieListEntry = ({ movie, movieList, setMovieList }) => {
  //const [showDetails, setShowDetails] = React.useState(false);

  const handlerWatch = () => {
    const temp = movieList.slice();
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === movie.id) {
        temp[i].watched = !temp[i].watched;

        Parse.update(movie.id, 'watched', Number(temp[i].watched));
      }
    }
    setMovieList(temp);
  }

  const handleShowDetails = () => {
    const temp = movieList.slice();
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].title === movie.title) {
        temp[i].showDetails = !temp[i].showDetails;
      } else {
        temp[i].showDetails = false;
      }
    }
    setMovieList(temp);
  }

  return (
    <li className={movie.showDetails ? 'active' : ''}>
      <span className='entry'>
        {
          <span>
            <span className='title' onClick={handleShowDetails}>{movie.title}</span>
            <button className={movie.watched ? 'watched' : 'not-watched'} onClick={handlerWatch}>{movie.watched ? 'Watched' : 'Not Watched'}</button>
          </span>
        }
        { movie.showDetails && <MovieEntryDetails movie={movie} handlerWatch={handlerWatch}/> }
      </span>
    </li>
  );
};

export default MovieListEntry;