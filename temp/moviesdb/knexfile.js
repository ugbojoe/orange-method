// Update with your config settings.

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'moviesdb',
      host : '127.0.0.1',
      charset  : 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
