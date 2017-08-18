const Bookshelf = require('../bookshelf');
require('./movies')

const Actor = Bookshelf.Model.extend({
  tableName: 'actors',
  hasTimestamps: true,
  movies: function() {
    return this.belongsToMany('Movies');
  },
});

// module.exports = Owner;
module.exports = Bookshelf.model('Actor', Actor);
