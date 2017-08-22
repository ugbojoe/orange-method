exports.seed = function(knex, Promise) {
  // Delete existing entries
  return knex('movies').del()
    .then(() => knex('directors').del())
    .then(() =>
      Promise.all([
        knex('directors').insert({ id: 1, first_name: 'Steven', last_name: 'Spielberg' }),
        knex('directors').insert({ id: 2, first_name: 'George', last_name: 'Lucas' }),
        knex('directors').insert({ id: 3, first_name: 'Wolfgang', last_name: 'Petersen' }),
      ])
    )
    .then(() => knex.raw('ALTER SEQUENCE directors_id_seq RESTART WITH 10'))
    .then(() =>
      Promise.all([
        knex('movies').insert({
          title: 'Raiders of the Lost Ark',
          director_id: 1,
          release_date: '1981-06-01',
          genre: 'action',
        }),
        knex('movies').insert({
          title: 'ET',
          director_id: 1,
          release_date: '1982-06-11',
          genre: 'sci-fi',
        }),
        knex('movies').insert({
          title: "Schindler's List",
          director_id: 1,
          release_date: '1993-12-15',
          genre: 'drama',
        }),
        knex('movies').insert({
          title: 'Star Wars',
          director_id: 2,
          release_date: '1977-05-25',
          genre: 'sci-fi',
        }),
        knex('movies').insert({
          title: 'Air Force One',
          director_id: 3,
          release_date: '1997-07-25',
          genre: 'action',
        }),
        knex('movies').insert({
          title: 'Indiana Jones',
          director_id: 1,
          release_date: '2008-05-22',
          genre: 'action',
        })
      ])
    )
    .then(() => knex('directors').orderBy('id'))
    .then(directors => {
      console.log(directors);
      return knex('movies').orderBy('id');
    })
    .then(movies => {
      console.log(movies);
      return knex('movies')
        .innerJoin('directors', 'movies.director_id', 'directors.id')
        .orderBy('movies.title');
    })
    .then(moviesWithDirectors => {
      console.log(moviesWithDirectors);
    });
};
