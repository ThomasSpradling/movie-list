import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import searchTMDB from './lib/searchTMDB.js';
import getMovie from './lib/getMovie.js';

ReactDOM.render(<App searchTMDB={searchTMDB} getMovie={getMovie}/>, document.getElementById('app'));