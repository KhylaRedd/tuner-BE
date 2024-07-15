-- Drop the database if it exists and create a new one
DROP DATABASE IF EXISTS jammaster;
CREATE DATABASE jammaster;
\c jammaster

-- Create the songs table
CREATE TABLE songs (
    id SERIAL PRIMARY KEY,
    songName TEXT NOT NULL,
    artist TEXT NOT NULL,
    album TEXT NOT NULL,
    duration TIME NOT NULL,
    is_favorite BOOLEAN DEFAULT FALSE
);



