module.exports = {
  development: {
    client: 'postgresql',
    debug: false,
    connection: {
      host : '127.0.0.1',
      database : 'pets',
      charset  : 'utf8'
    },
    pool: {
      min: 2,
      max: 10,
      afterCreate: (conn, done) => {
        console.log('We have a connection!');
        done(null, conn);
      }
    }
  }
};
