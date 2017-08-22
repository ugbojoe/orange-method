const Bookshelf = require('../bookshelf');

const Movie = Bookshelf.Model.extend({
  tableName: 'movies',
  hasTimestamps: true
});

// module.exports = Movie;
module.exports = Bookshelf.model('Movie', Movie);
