const data = require('../data');

exports.seed = function(knex, Promise) {
  // Delete existing entries
  return knex('actors').del()
    .then(() => knex('movies').del())
    .then(() => knex('directors').del())
    .then(() => Promise.all([
      knex('directors').insert(data.directors.spielberg),
      knex('directors').insert(data.directors.lucas),
      knex('directors').insert(data.directors.petersen)
    ]))
    .then(() => knex.raw('ALTER SEQUENCE directors_id_seq RESTART WITH 11'))
    .then(() => Promise.all([
      knex('movies').insert(data.movies.Raiders),
      knex('movies').insert(data.movies.ET),
      knex('movies').insert(data.movies.Schindlers),
      knex('movies').insert(data.movies.StarWars),
      knex('movies').insert(data.movies.AirForceOne),
      knex('movies').insert(data.movies.IndianaJones)
    ]))
    .then(() => knex.raw('ALTER SEQUENCE movies_id_seq RESTART WITH 11'))
    .then(() => Promise.all([
      knex('actors').insert(data.actors.harrisonFord),
      knex('actors').insert(data.actors.karenAllen),
      knex('actors').insert(data.actors.drewBarrymore),
      knex('actors').insert(data.actors.liamNeeson),
      knex('actors').insert(data.actors.benKingsley),
      knex('actors').insert(data.actors.markHamill),
      knex('actors').insert(data.actors.carrieFisher),
      knex('actors').insert(data.actors.glennClose)
    ]))
    .then(() => knex.raw('ALTER SEQUENCE actors_id_seq RESTART WITH 11'))
    .then(() => Promise.all([
      knex('actors_movies').insert({ actor_id: 1, movie_id: 1 }),
      knex('actors_movies').insert({ actor_id: 1, movie_id: 4 }),
      knex('actors_movies').insert({ actor_id: 1, movie_id: 5 }),
      knex('actors_movies').insert({ actor_id: 1, movie_id: 6 }),
      knex('actors_movies').insert({ actor_id: 2, movie_id: 1 }),
      knex('actors_movies').insert({ actor_id: 3, movie_id: 2 }),
      knex('actors_movies').insert({ actor_id: 4, movie_id: 3 }),
      knex('actors_movies').insert({ actor_id: 5, movie_id: 3 }),
      knex('actors_movies').insert({ actor_id: 6, movie_id: 4 }),
      knex('actors_movies').insert({ actor_id: 7, movie_id: 4 }),
      knex('actors_movies').insert({ actor_id: 8, movie_id: 5 })
    ]))
    .then(() => knex('movies')
      .select([
        'movies.title', 'movies.genre',
        'directors.first_name as director_first_name',
        'directors.last_name as director_last_name',
        'actors.first_name as actor_first_name',
        'actors.last_name as actor_last_name'
      ])
      .innerJoin('directors', 'directors.id', 'movies.director_id')
      .innerJoin('actors_movies', 'actors_movies.movie_id', 'movies.id')
      .innerJoin('actors', 'actors_movies.actor_id', 'actors.id')
      .orderBy('movies.id'))
    .then(movies => {
      console.log(movies);
    });
};
