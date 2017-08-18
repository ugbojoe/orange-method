exports.seeds = function(knex, Promise) {
  // Deletes
  return knex('pets').del()
    .then(function () {
      return knex('pets').insert([
        {id: 1,
          name: "Snoopy",
          species: "dog",
          age: 87
    }])
  }
}
