
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("pets", function(table) {
    table.increments().primary();
    table.string('name');
    table.string('species');
    table.integer('age');
    table.timestamps(true, true);
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("pets")
};
