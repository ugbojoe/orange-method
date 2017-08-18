const Bookshelf = require('../bookshelf');

const Owner = Bookshelf.Model.extend({
  tableName: 'owners',
  hasTimestamps: true,
  pets: function() {
    return this.hasMany('Pet');
  }
});

module.exports = Bookshelf.model('Owner', Owner);
