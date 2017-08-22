exports.up = function(knex) {
  return knex.schema.createTableIfNotExists('directors', table => {
    table.increments().primary();  // adds an auto incrementing PK column
    table.string('first_name');
    table.string('last_name');
    table.timestamps(true);        // adds created_at and updated_at
  })
  .then(() => knex.schema.table('movies', table => {
    table.integer('director_id').unsigned().index();
    table.foreign('director_id').references('directors.id');
  }));
};

exports.down = knex => knex.schema.table('movies', table => {
  table.dropColumn('director_id');
})
.then(() => knex.schema.dropTableIfExists('directors'));
