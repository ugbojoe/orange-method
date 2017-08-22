const Bookshelf = require('../bookshelf');

const Movie = Bookshelf.Model.extend({
  tableName: 'movies',
  hasTimestamps: true,
  director() {
    return this.belongsTo('Director');    // <1>
  },
});

module.exports = Bookshelf.model('Movie', Movie);
