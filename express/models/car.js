const cars = [
  {id:1, make: 'Tesla', model: 'Model S', color: 'black',},
  {id:2, make: 'Hondaa', model: 'Odyssey', color: 'red',},
  {id:3, make: 'BMW', model: '328', color: 'silver',},
  {id:4, make: 'Toyota', model: 'Camry', color: 'white',},
];
lenextId = 100;

const carService = {
  getCars: function(){
  return cars;
},
  findById: function(id) {
    return cars.filter(c => c.id === id)[0];
  },
  save: function(car){
    car.id= nextId++
    car.push

  }
};
