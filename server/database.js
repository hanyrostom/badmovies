const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const db = mysql.createConnection(mysqlConfig);
db.connect();


const getAllFavorites = function(callback) {
  // get favorites from the database
  var queryStr = `SELECT * FROM movies`
  db.query(queryStr,function(err,results){
    callback(err,results);
  })
};

const saveFavorite = function(movie, callback) {
  // save movie to favorites in the database
  // console.log('movie=>',movie)
  var queryStr = `INSERT INTO movies(id,title,year,popularity,poster) VALUES(?,?,?,?,?);`
  var paramsArr = [movie.id,movie.title,movie.release_date.slice(0,4),movie.popularity,movie.poster_path]
  db.query(queryStr,paramsArr,function(err,results){
    callback(err,results);
  })
};

const deleteFavorite = function(id,callback) {
  // delete a movie from favorites in the database
  var queryStr= `DELETE FROM movies WHERE id = ${id};`
  db.query(queryStr,function(err,results){
    callback(err,results);
  })
};




module.exports = {
  getAllFavorites,
  saveFavorite,
  deleteFavorite
};


/*
movie.id,movie.title,movie.release_date.slice(0,4),movie.popularity,movie.poster_path);` */