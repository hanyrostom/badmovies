
const request = require('request');
const axios = require('axios');
const { API_KEY } = require('../server/config.js');

// write out logic/functions required to query TheMovieDB.org

// FOR REFERENCE:
// https://www.themoviedb.org/account/signup
// https://developers.themoviedb.org/3/discover/movie-discover
//SEND REQUEST
//https://api.themoviedb.org/3/discover/movie?api_key=57cf780d13cec3b6d202cdfa2b5988fb&language=en-US&sort_by=popularity.asc&include_adult=true&include_video=false&page=1&with_genres=28
// Don't forget to export your functions and require them within your server file