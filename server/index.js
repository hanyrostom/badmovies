var express = require('express');
var bodyParser = require('body-parser');
var request = require('request')
var app = express();
const { API_KEY } = require('../server/config.js');
var apiHelpers = require('./apiHelpers.js');

app.use(bodyParser.json());

// Due to express, when you load the page, it doesn't make a get request to '/', it simply serves up the dist folder
app.use(express.static(__dirname + '/../client/dist'));

app.get('/search', function(req, response) {
    // get the search genre  
    var genreID = req.query.id;
    console.log('id>>>?',req.query.id)   
//https://api.themoviedb.org/3/discover/movie?api_key=57cf780d13cec3b6d202cdfa2b5988fb&language=en-US&sort_by=popularity.asc&include_adult=true&include_video=false&page=1&with_genres=28
    // https://www.themoviedb.org/account/signup
    request(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.asc&include_adult=true&include_video=false&page=1&with_genres=${genreID}`,function(err,res,body){
        if(err) console.error(err);
        else {
            console.log('statusCode:', res.statusCode)
            // console.log(JSON.parse(body).results)
            response.send(JSON.parse(body).results);
        }
    })
    // use this endpoint to search for movies by genres, you will need an API key

    // https://api.themoviedb.org/3/discover/movie

    // and sort them by horrible votes using the search parameters in the API
});

app.get('/genres', function(req, res) {
    // make an axios request to get the list of official genres
    
    // use this endpoint, which will also require your API key: https://api.themoviedb.org/3/genre/movie/list

    // send back
});

app.post('/favorites', function(req, res) {

});

app.post('/delete', function(req, res) {

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
