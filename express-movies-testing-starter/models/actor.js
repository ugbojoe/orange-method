const Bookshelf = require('../bookshelf');

const Actor = Bookshelf.Model.extend({
  tableName: 'actors',
  hasTimestamps: true,
  movies() {
    return this.belongsToMany('Movie');     // <1>
  }
});

module.exports = Bookshelf.model('Actor', Actor);
