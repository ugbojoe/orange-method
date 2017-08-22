const Bookshelf = require('../bookshelf');
require('./movie');

const Director = Bookshelf.Model.extend({
  tableName: 'directors',
  hasTimestamps: true,
  movies() {
    return this.hasMany('Movie', 'director_id');     // <1>
  }
});

module.exports = Bookshelf.model('Director', Director);
