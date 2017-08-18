
function ownerSummerizer(owner) {
  const pets = owner.relations.pets ? owner.relations.pets.map(petSummarizer) : null;
  return `name: ${owner.attributes.name}, phone: ${owner.attributes.phone},
  pets: ${pets}`;
}

deleteAll(Pet)
.then( () => {
  return deleteAll(Owner);
})
.then( () => {
  return Promise.all([
    new Owner({ name: 'Mike', phone: '123-4567'  }).save(),
    new Owner({ name: 'Jenny', phone: '867-5309' }).save()
  ]);
})
.then( ([mike, jenny]) => {
  return Promise.all([
    mike.pets().create(new Pet({ name: 'Snoopy', age: 7 })),
    jenny.pets().create(new Pet({ name: 'Felix', age: 12 })),
    mike.pets().create(new Pet({ name: 'Meisha', age: 3 }))
  ]);
})
.then( (pets) => {
  return Owner.fetchAll({ withRelated: ['pets'] });
})
.then( (owners) => {
  const ownersData = owners.map(ownerSummerizer);
  console.log('saved owners:\n', ownersData);
})
.then( () => {
  console.log('disconnecting from database');
  // process.exit(0);
  bookshelf.knex.destroy().then( () => console.log('connections destroyed') );
});
