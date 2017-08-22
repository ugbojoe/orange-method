
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTableIfNotExists('movies', table => {
      table.increments('id').primary();  // adds an auto incrementing PK column
      table.string('title').notNullable();
      table.string('genre').notNullable();
      table.date('release_date');
      table.timestamps(true);            // adds created_at and updated_at
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('movies')
  ]);
};
