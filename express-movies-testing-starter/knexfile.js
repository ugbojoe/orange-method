const cfenv = require('cfenv');
const debug = require('debug')('express-movies');

const appEnv = cfenv.getAppEnv();
const credentials = appEnv.getServiceCreds('express-movies-app');

module.exports = {
  development: {
    client: 'postgresql',
    debug: false,
    connection: {
      host: '127.0.0.1',
      // user:     'username',
      // password: 'password'
      database: 'express-movies-db',
      charset: 'utf8'
    },
    pool: {
      min: 2,
      max: 10,
      afterCreate: (conn, done) => {
        debug('We have a connection!');
        done(null, conn);
      }
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/dev'
    }
  },

  test: {
    client: 'postgresql',
    debug: false,
    connection: {
      host: '127.0.0.1',
      // user:     'username',
      // password: 'password'
      database: 'express-movies-test',
      charset: 'utf8'
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/dev'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'express-movies-db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds/staging'
    }
  },

  production: {
    client: 'mysql',
    connection: credentials ? credentials.uri : null,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
