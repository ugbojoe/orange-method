const data = require('./data');

const directors = data.directors;
const movies = data.movies;

const Director = require('../../../models/director');
const Movie = require('../../../models/movie');

function deleteAll(model) {
  return model.where('id', '!=', 0).destroy();
}

// DELETE all of the movies.
deleteAll(Movie)
// DELETE all of the directors.
.then(() => deleteAll(Director))
// CREATE some directors
.then(() => Promise.all([
  new Director(directors.spielberg).save(),
  new Director(directors.lucas).save(),
  new Director(directors.petersen).save()
]))
// CREATE some movies
.then(([SS, GL, WP]) => Promise.all([
  SS.movies().create(new Movie(movies.Raiders)),
  SS.movies().create(new Movie(movies.ET)),
  SS.movies().create(new Movie(movies.Schindlers)),
  SS.movies().create(new Movie(movies.IndianaJones)),
  GL.movies().create(new Movie(movies.StarWars)),
  WP.movies().create(new Movie(movies.AirForceOne))
]))
// GET all of the movies
.then(() => Movie.fetchAll({ withRelated: ['director'] }))
.then(movies => {
  console.log('\n==== Movies ====');
  movies.forEach(movie => {
    console.log('movie:', movie.toJSON());
  });
  // GET all of the directors
  return Director.fetchAll({ withRelated: ['movies'] });
})
.then(directors => {
  console.log('\n==== Directors ====');
  directors.forEach(director => {
    console.log('director:', director.toJSON());
  });
  process.exit(0);
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
