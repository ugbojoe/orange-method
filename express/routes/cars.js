var express = require('express');
var router = express.Router();
var carService =
// const cars = [
//   {id:1, make: 'Tesla', model: 'Model S', color: 'black',},
//   {id:2, make: 'Hondaa', model: 'Odyssey', color: 'red',},
//   {id:3, make: 'BMW', model: '328', color: 'silver',},
//   {id:4, make: 'Toyota', model: 'Camry', color: 'white',},
// ];
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cars/index', {carService.getCars()});
});

/* GET home page. */
router.get('/json', function(req, res, next) {
  res.status(200).json({cars: carService.getCars()});
});

// Get a new car form
router.get('/new', function(req, res, next) {
  res.render('cars/new');
});

// GET a specific cars
router.get('/:id', function(req, res, next){
  const id = Number(req.params.id);
  const found = cars.filter(c => c.id === id);
  if  ( found.length <1){
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
}
res.render('car', {car: found});
});


module.exports = router;
