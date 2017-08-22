const express = require('express');
const Movie = require('../models/movie');
const Actor = require('../models/actor');

const router = express.Router();

// INDEX
router.get('/', (req, res) => {
  Movie.forge().orderBy('title').fetchAll().then(movies => {
    res.status(200).json(movies);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW
router.get('/:id', (req, res) => {
  Movie.where({ id: req.params.id })
  .fetch({ withRelated: ['director', 'actors'] })
  .then(movie => {
    if (!movie) {
      res.status(404).json({ message: 'Movie not found' });
    } else {
      res.status(200).json(movie);
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// CREATE
router.post('/', (req, res) => {
  Movie.forge(req.body).save().then(movie => {
    res.status(201).json(movie);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  Movie.forge({ id: req.params.id }).save(req.body).then(movie => {
    res.status(200).json(movie);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DESTROY
router.delete('/:id', (req, res) => {
  Movie.where({ id: req.params.id }).fetch().then(movie => {
    if (!movie) {
      res.status(404).json({ message: 'Movie not found' });
    } else {
      movie
      .destroy()
      .then(() => {
        res.status(200).json({ message: 'Movie deleted' });
      }).catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }
  });
});

// Add Actor to Movie
router.post('/:id/actors/:actorId', (req, res) => {
  Promise.all([
    Movie.where({ id: req.params.id }).fetch(),
    Actor.where({ id: req.params.actorId }).fetch()
  ])
  .then(([movie, actor]) => {
    if (!movie) {
      const error = { message: 'Movie not found' };
      res.status(404).json(error);
      return Promise.reject(error);
    } else if (!actor) {
      const error = { message: 'Actor not found' };
      res.status(404).json(error);
      return Promise.reject(error);
    }
    return movie.actors().attach(actor);
  })
  .then(() => Movie.where({ id: req.params.id }).fetch({ withRelated: ['director', 'actors'] }))
  .then(movie => {
    res.status(200).send(movie);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Remove Actor from Movie
router.delete('/:id/actors/:actorId', (req, res) => {
  Promise.all([
    Movie.where({ id: req.params.id }).fetch(),
    Actor.where({ id: req.params.actorId }).fetch()
  ])
  .then(([movie, actor]) => {
    if (!movie) {
      const error = { message: 'Movie not found' };
      res.status(404).json(error);
      return Promise.reject(error);
    } else if (!actor) {
      const error = { message: 'Actor not found' };
      res.status(404).json(error);
      return Promise.reject(error);
    }
    return movie.actors().detach(actor);
  })
  .then(() => Movie.where({ id: req.params.id }).fetch({ withRelated: ['director', 'actors'] }))
  .then(movie => {
    res.status(200).send(movie);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
