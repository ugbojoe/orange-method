const bookshelf = require('../../../bookshelf');
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

async function seed() {
  await deleteAll(Actor);       // DELETE all of the actors.
  await deleteAll(Movie);       // DELETE all of the movies.
  await deleteAll(Director);    // DELETE all of the directors.

  const [SS, GL, WP] = await Promise.all([
    new Director(directors.spielberg).save(),
    new Director(directors.lucas).save(),
    new Director(directors.petersen).save()
  ]);

  const [RAIDERS, ET, SL, IJ, SW, AF1] = await Promise.all([
    SS.movies().create(new Movie(movies.Raiders)),
    SS.movies().create(new Movie(movies.ET)),
    SS.movies().create(new Movie(movies.Schindlers)),
    SS.movies().create(new Movie(movies.IndianaJones)),
    GL.movies().create(new Movie(movies.StarWars)),
    WP.movies().create(new Movie(movies.AirForceOne))
  ]);

  // CREATE some actors
  const [HF, KA, DB, LN, BK, MH, CF, GC] = await Promise.all([
    new Actor(actors.harrisonFord).save(),
    new Actor(actors.karenAllen).save(),
    new Actor(actors.drewBarrymore).save(),
    new Actor(actors.liamNeeson).save(),
    new Actor(actors.benKingsley).save(),
    new Actor(actors.markHamill).save(),
    new Actor(actors.carrieFisher).save(),
    new Actor(actors.glennClose).save()
  ]);

  await Promise.all([
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
  ]);

  const movieSummarizer = movie => ({
    title: movie.attributes.title,
    director: fullName(movie.relations.director.attributes),
    actors: movie.relations.actors.map(actor => fullName(actor.attributes)).join(', ')
  });

  const moviesData = (await Movie
    .forge()
    .orderBy('id')
    .fetchAll({ withRelated: ['director', 'actors'] })
  ).map(movieSummarizer);
  console.log('\n==== Movies ====');
  console.log(moviesData);

  // disconnect from database
  // process.exit(0);
  bookshelf.knex.destroy().then( () => console.log('db connections destroyed') );
}

try {
  seed();
} catch (err) {
  console.error('ERROR:', err);
  process.exit(1);
}
