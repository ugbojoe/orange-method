SELECT movies.id AS movie_id,
       movies.name,
       release_date,
       first_name,
       last_name
FROM movies
JOIN directors ON movies.director_id = directors.id;


SELECT movies.id AS movie_id,
       actors.id AS actor_id,
       name AS movie_name,
       release_date,
       actors.first_name AS actor_first_name,
       actors.last_name AS actor_last_name,
       directors.first_name AS director_first_name,
       directors.last_name AS director_last_name
FROM actors_movies
JOIN movies ON movies.id = actors_movies.movie_id
JOIN actors ON actors.id = actors_movies.actor_id
JOIN directors ON directors.id = movies.director_id;
