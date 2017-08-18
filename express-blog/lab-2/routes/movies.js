var express = require('express');
var router = express.Router();

const movies = [
  { id: 1, title: 'Star Wars', genre: 'SciFi' },
  { id: 2, title: 'Groundhog Day', genre: 'Comedy' },
  { id: 3, title: 'Robot', genre: 'Cartoon' },
  { id: 4, title: 'Mia and Me', genre: 'Cartoon' }
];

router.get('/', function(req, res, next) {
  res.status(200).json({ movies: movies });
});

router.get('/:id', function(req, res, next) {
  const id = req.params.id;
  const movie = movies.filter( m => m.id == id )[0];
  res.status(200).json({ movie: movie });
});


module.exports = router;
