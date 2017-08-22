exports.seed = function(knex, Promise) {
  // Delete existing entries
  return knex('movies').del()
    .then(() => Promise.all([
      knex('movies').insert({
        title: 'Raiders of the Lost Ark',
        release_date: '1981-06-01',
        genre: 'action'
      }),
      knex('movies').insert({
        title: 'ET',
        release_date: '1982-06-11',
        genre: 'sci-fi'
      }),
      knex('movies').insert({
        title: "Schindler's List",
        release_date: '1993-12-15',
        genre: 'drama'
      }),
      knex('movies').insert({
        title: 'Star Wars',
        release_date: '1977-05-25',
        genre: 'sci-fi'
      }),
      knex('movies').insert({
        title: 'Air Force One',
        release_date: '1997-07-25',
        genre: 'action'
      }),
      knex('movies').insert({
        title: 'Indiana Jones',
        release_date: '2008-05-22',
        genre: 'action'
      })
    ]))
    .then(() => knex('movies').select())
    .then(movies => {
      console.log(movies);
    });
};
