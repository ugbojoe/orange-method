const Bookshelf = require('../bookshelf');

const Pet = Bookshelf.Model.extend({
  tableName: 'pets',
  hasTimestamps: true
  owner: function(){
    return this.belongsTo('Owner')
  }
});

module.exports = Bookshelf.model('Pet', Pet);
