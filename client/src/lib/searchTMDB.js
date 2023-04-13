import $ from 'jquery';
import { TMDB_API_KEY } from '../../config/config.js';

const searchTMDB = (query, callback) => {
  const server = `https://api.themoviedb.org/3/search/movie`;
  console.log(server);
  $.ajax(
    {
      url: server,
      contentType: 'text/json',
      data: {
        api_key: TMDB_API_KEY,
        query: query
      },
      success: callback,
      error: (error) => {
        console.error('Failed to load!!');
      }
    }
  );
};

export default searchTMDB;