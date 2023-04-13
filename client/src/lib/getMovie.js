import $ from 'jquery';
import { TMDB_API_KEY } from '../../config/config.js';

const getMovie = (id, callback) => {
  const server = `https://api.themoviedb.org/3/movie/${id}`;
  $.ajax(
    {
      url: server,
      contentType: 'text/json',
      data: {
        api_key: TMDB_API_KEY
      },
      success: callback,
      error: (error) => {
        console.error('Failed to load!!');
      }
    }
  );
};

export default getMovie;