exports.up = function(knex) {
  return knex.schema.createTable('actors', table => {
    table.increments('id').primary();
    table.string('first_name');
    table.string('last_name');
    table.timestamps(true);       // adds created_at and updated_at
  }).createTable('actors_movies', table => {  // <1>
    table.integer('actor_id').unsigned().references('actors.id').onDelete('CASCADE');
    table.integer('movie_id').unsigned().references('movies.id').onDelete('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('actors_movies')
    .dropTable('actors');
};
