const data = require('./data');

const directors = data.directors;
const movies = data.movies;
const actors = data.actors;

const Director = require('../../../models/director');
const Movie = require('../../../models/movie');
const Actor = require('../../../models/actor');

function fullName(person) {
  return `${person.first_name} ${person.last_name}`;
}

function deleteAll(model) {
  return model.where('id', '!=', 0).destroy();
}

// DELETE all of the actors.
deleteAll(Actor)
// DELETE all of the movies.
.then(() => deleteAll(Movie))
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
// CREATE some actors
.then(([RAIDERS, ET, SL, IJ, SW, AF1]) => Promise.all([
  new Actor(actors.harrisonFord).save(),
  new Actor(actors.karenAllen).save(),
  new Actor(actors.drewBarrymore).save(),
  new Actor(actors.liamNeeson).save(),
  new Actor(actors.benKingsley).save(),
  new Actor(actors.markHamill).save(),
  new Actor(actors.carrieFisher).save(),
  new Actor(actors.glennClose).save()
])
// ATTACH the actors to the movies.
.then(([HF, KA, DB, LN, BK, MH, CF, GC]) => Promise.all([
  RAIDERS.actors().attach(HF),  // HF.movies().attach(RAIDERS);
  RAIDERS.actors().attach(KA),
  ET.actors().attach(DB),
  SL.actors().attach(LN),
  SL.actors().attach(BK),
  IJ.actors().attach(HF),
  SW.actors().attach(HF),
  SW.actors().attach(MH),
  SW.actors().attach(CF),
  AF1.actors().attach(HF),
  AF1.actors().attach(GC)
])))
// GET all of the movies
.then(() => Movie.forge().orderBy('id').fetchAll({ withRelated: ['director', 'actors'] }))
.then(moviesData => {
  const movieSummarizer = movie => ({
    title: movie.attributes.title,
    director: fullName(movie.relations.director.attributes),
    actors: movie.relations.actors.map(actor => fullName(actor.attributes)).join(', ')
  });
  console.log('\n==== Movies ====');
  console.log(moviesData.map(movieSummarizer));
  process.exit(0);  // disconnect from database
})
.catch(err => {
  console.error(err);
  process.exit(1);
});
