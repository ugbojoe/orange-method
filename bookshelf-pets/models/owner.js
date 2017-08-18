const Bookshelf = require('../bookshelf');

const Owner = Bookshelf.Model.extend({
  tableName: 'owners',
  hasTimestamps: true
  owners: function() {
      return this.hasMany(owner);
    }
});

module.exports = Bookshelf.model('Owner', Owner);
