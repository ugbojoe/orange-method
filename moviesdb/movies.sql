DROP TABLE IF EXISTS actors_movies CASCADE;
DROP TABLE IF EXISTS actors CASCADE;
DROP TABLE IF EXISTS movies CASCADE;
DROP TABLE IF EXISTS directors CASCADE;

-- DROP DATABASE IF EXISTS moviesdb;
-- CREATE DATABASE moviesdb;

CREATE TABLE actors (
  id         SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name  VARCHAR(30)
);

CREATE TABLE directors (
  id         SERIAL PRIMARY KEY,
  first_name VARCHAR(30),
  last_name  VARCHAR(30)
);

CREATE TABLE movies (
  id           SERIAL PRIMARY KEY,
  name         VARCHAR(100) NOT NULL,
  release_date DATE         NOT NULL,
  director_id  INTEGER      NOT NULL,
  created      TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  last_update  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  active       BOOLEAN   DEFAULT TRUE,

  FOREIGN KEY (director_id) REFERENCES directors (id) ON DELETE CASCADE
);

CREATE VIEW movies_view AS
  SELECT *
  FROM movies
  WHERE active = TRUE;

CREATE TABLE actors_movies (
  id       SERIAL PRIMARY KEY,
  actor_id INTEGER NOT NULL,
  movie_id INTEGER NOT NULL,

  FOREIGN KEY (actor_id) REFERENCES actors (id) ON DELETE CASCADE,
  FOREIGN KEY (movie_id) REFERENCES movies (id) ON DELETE CASCADE
);
