import React from 'react';

const MovieEntryDetails = ({ movie, handlerWatch }) => {
  const poster_url = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const backdrop_url = `https://image.tmdb.org/t/p/w500${movie.backdrop}`
  return (
    <div className='details' style={{backgroundImage: `url('${backdrop_url}')`}}>
      <img className='poster' height='375' src={ poster_url }/>
      <table className='detailsList'>
        <tr>
          <th>Year</th><td>{ movie.release_date.substring(0, 4) }</td>
        </tr>
        <tr>
          <th>Runtime</th><td>{ movie.runtime } min</td>
        </tr>
        <tr>
          <th>Status</th><td>{ movie.status }</td>
        </tr>
        <tr>
          <th>Vote Average</th><td>{ movie.vote_average } / 10</td>
        </tr>
        <tr>
          <th style={{backgroundColor: 'lightblue'}}>Watched</th><td>{ movie.watched ? 'Yes' : 'No' }</td>
        </tr>
      </table>
      {/* <span className='details-watch'>
        <strong>Watched:</strong>
        <button className={movie.watched ? 'watched' : 'not-watched'} onClick={handlerWatch}>{movie.watched ? 'Watched' : 'Not Watched'}</button>
      </span> */}
    </div>
  );
}

export default MovieEntryDetails;