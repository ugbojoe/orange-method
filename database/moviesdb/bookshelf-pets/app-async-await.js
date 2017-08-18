const bookshelf = require('./bookshelf');
const Pet = require('./models/pet');
const Owner = require('./models/owner');

function deleteAll(model) {
  return model.where('id', '!=', 0).destroy();
}

function petSummarizer(pet) {
  return `name: ${pet.attributes.name}, age: ${pet.attributes.age}`;
}

function ownerSummerizer(owner) {
  const pets = owner.relations.pets ? owner.relations.pets.map(petSummarizer) : null;
  return `name: ${owner.attributes.name}, phone: ${owner.attributes.phone},
  pets: ${pets}`;
}

async function seed() {
  await deleteAll(Pet);
  await deleteAll(Owner);
  const [mike, jenny] = await Promise.all([
    new Owner({ name: 'Mike', phone: '123-4567'  }).save(),
    new Owner({ name: 'Jenny', phone: '867-5309' }).save()
  ]);
  const pets = await Promise.all([
    mike.pets().create(new Pet({ name: 'Snoopy', age: 7 })),
    jenny.pets().create(new Pet({ name: 'Felix', age: 12 })),
    mike.pets().create(new Pet({ name: 'Meisha', age: 3 }))
  ]);
  const owners = await Owner.fetchAll({ withRelated: ['pets'] });
  const ownersData = owners.map(ownerSummerizer);
  console.log('saved owners:\n', ownersData);
  console.log('disconnecting from database');
  // process.exit(0);
  bookshelf.knex.destroy().then( () => console.log('connections destroyed') );
};

seed();
