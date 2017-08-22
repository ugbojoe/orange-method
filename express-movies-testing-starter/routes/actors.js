const express = require('express');
const Actor = require('../models/actor');
const Movie = require('../models/movie');

const router = express.Router();

// INDEX
router.get('/', (req, res) => {
  Actor.fetchAll().then(actors => {
    res.status(200).json(actors);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW
router.get('/:id', (req, res) => {
  Actor.where({ id: req.params.id }).fetch({ withRelated: ['movies'] })
  .then(actor => {
    if (!actor) {
      res.status(404).json({ message: 'Actor not found' });
    }
    res.status(200).json(actor);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// CREATE
router.post('/', (req, res) => {
  Actor.forge(req.body).save().then(actor => {
    res.status(200).json(actor);
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  Actor.forge({ id: req.params.id }).save(req.body).then(actor => {
    res.status(200).json(actor);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DESTROY
router.delete('/:id', (req, res) => {
  Actor.where({ id: req.params.id }).fetch().then(actor => {
    if (!actor) {
      res.status(404).json({ message: 'Actor not found' });
    } else {
      actor
      .destroy()
      .then(() => {
        res.status(200).json({ message: 'Actor deleted' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }
  });
});

// Add Movie to Actor
router.post('/:id/movies/:movieId', (req, res) => {
  Promise.all([
    Actor.where({ id: req.params.id }).fetch(),
    Movie.where({ id: req.params.movieId }).fetch()
  ])
  .then(([actor, movie]) => {
    if (!actor) {
      const error = { message: 'Actor not found' };
      res.status(404).json(error);
      return Promise.reject(error);
    } else if (!movie) {
      const error = { message: 'Movie not found' };
      res.status(404).json(error);
      return Promise.reject(error);
    }
    return actor.movies().attach(movie);
  })
  .then(() => Actor.where({ id: req.params.id }).fetch({ withRelated: ['movies'] }))
  .then(actor => res.status(200).send(actor))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// Remove Movie from Actor
router.delete('/:id/movies/:movieId', (req, res) => {
  Promise.all([
    Actor.where({ id: req.params.id }).fetch(),
    Movie.where({ id: req.params.movieId }).fetch()
  ])
  .then(([actor, movie]) => {
    if (!actor) {
      const error = { message: 'Actor not found' };
      res.status(404).json(error);
      return Promise.reject(error);
    } else if (!movie) {
      const error = { message: 'Movie not found' };
      res.status(404).json(error);
      return Promise.reject(error);
    }
    return actor.movies().detach(movie);
  })
  .then(() => Actor.where({ id: req.params.id }).fetch({ withRelated: ['movies'] }))
  .then(actor => {
    res.status(200).send(actor);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
