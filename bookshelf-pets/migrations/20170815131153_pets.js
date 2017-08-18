exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('pets', table => {
    table.increments().primary();  // adds an auto incrementing PK column
    table.string('name');
    table.integer('age');
    table.timestamps(true);        // adds created_at and updated_at
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('pets');
};
