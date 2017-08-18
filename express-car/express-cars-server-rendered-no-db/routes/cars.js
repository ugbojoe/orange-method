var express = require('express');
var router = express.Router();
var carService = require('../models/car');


// INDEX
router.get('/', function(req, res, next) {
  const cars = carService.getCars(req.query);
  res.render('cars/index', { cars: cars, color: req.query.color || '' });
});

// INDEX (json)
router.get('/json', function(req, res, next) {
  res.status(200).json( { cars: carService.getCars(req.query) } );
});

// NEW
router.get('/new', function(req, res, next) {
  res.render('cars/new');
});

// CREATE
router.post('/', function(req, res, next) {
  const car = req.body;
  carService.save(car);
  res.redirect('/cars');
});

// SHOW
router.get('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const found = carService.findById(id);
  if (!found) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
  res.render('cars/show', { car: found } );
});

// EDIT
router.get('/:id/edit', function(req, res, next) {
  const id = Number(req.params.id);
  const found = carService.findById(id);
  if (!found) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
  res.render('cars/edit', { car: found } );
});

// UPDATE
router.put('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const found = carService.findById(id);
  if (!found) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
  let car = req.body;
  car.id = id;
  carService.save(car);
  res.redirect('/cars');
});

// DELETE
router.delete('/:id', function(req, res, next) {
  const id = Number(req.params.id);
  const found = carService.findById(id);
  if (!found) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  }
  carService.destroy(id);
  res.redirect('/cars');
});

module.exports = router;
