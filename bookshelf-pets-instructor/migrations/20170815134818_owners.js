exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('owners', table => {
    table.increments().primary();  // adds an auto incrementing PK column
    table.string('name');
    table.string('phone');
    table.timestamps(true);        // adds created_at and updated_at
  })
  .then(() => knex.schema.table('pets', table => {
    table.integer('owner_id').unsigned().index();
    table.foreign('owner_id').references('owners.id');
  }));
};

exports.down = knex => knex.schema.table('pets', table => {
  return table.dropColumn('owner_id');
})
.then(() => knex.schema.dropTableIfExists('owners'));
