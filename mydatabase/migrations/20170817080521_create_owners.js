
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("owners", function(table) {
    table.increments().primary();
    table.string('name');
    table.integer('age');
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("owners")

};
