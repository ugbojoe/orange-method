const express = require('express');
const Director = require('../models/director');

const router = express.Router();

// INDEX
router.get('/', (req, res) => {
  // Director.fetchAll().then( (directors) => {
  Director.forge().orderBy('last_name').orderBy('first_name').fetchAll()
  .then(directors => {
    res.status(200).json(directors);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// SHOW
router.get('/:id', (req, res) => {
  Director.where({ id: req.params.id }).fetch({ withRelated: ['movies'] })
  .then(director => {
    if (!director) {
      res.status(404).json({ message: 'Director not found' });
    } else {
      res.status(200).json(director);
    }
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// CREATE
router.post('/', (req, res) => {
  Director.forge(req.body).save().then(director => {
    res.status(200).json(director);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// UPDATE
router.put('/:id', (req, res) => {
  Director.forge({ id: req.params.id }).save(req.body)
  .then(director => {
    res.status(200).json(director);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

// DESTROY
router.delete('/:id', (req, res) => {
  Director.where({ id: req.params.id }).fetch().then(director => {
    if (!director) {
      res.status(404).json({ message: 'Director not found' });
    } else {
      director
      .destroy()
      .then(() => {
        res.status(200).json({ message: 'Director deleted' });
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
    }
  });
});

module.exports = router;
