-- SET UP SCHEMA HERE
DROP DATABASE IF EXISTS favorites;


CREATE DATABASE favorites;

USE favorites;


CREATE TABLE movies(
    id int NOT NULL,
    title varchar(255) NOT NULL,
    year int ,
    popularity DECIMAL(18,4) NOT NULL,
    poster varchar(255) NOT NULL,
    UNIQUE (id)
)