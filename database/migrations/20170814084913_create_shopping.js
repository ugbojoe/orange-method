exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists("stores", function(table) {
    table.increments().primary();
    table.string('name', 50);
  }).then(function() {
    return knex.schema.createTableIfNotExists("receipts", function(table) {
      table.increments().primary();
      table.integer('store_id').notNull();
      table.foreign('store_id').references('stores.id');
      table.string('item', 50).notNull();
      table.integer('number_of_items').defaultTo(1);
      table.decimal('price').notNull();
      table.date('buy_date').defaultTo(knex.raw('current_date'));
    });
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("receipts").then(function() {
    return knex.schema.dropTableIfExists("stores");
  });
};
