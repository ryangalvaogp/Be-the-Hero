// Update with your config settings.
require('dotenv').config();

module.exports= {
  development: {
    client: 'pg',
    connection: {
      host:process.env.POSTGRESQL_ELEPHANT_HOST,
      database:process.env.POSTGRESQL_ELEPHANT_DATABASE,
      user: process.env.POSTGRESQL_ELEPHANT_USER,
      password: process.env.POSTGRESQL_ELEPHANT_PASSWORD,
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: './src/database/test.sqlite'
    },
    migrations: {
      directory: './src/database/migrations'
    },
    useNullAsDefault: true,
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
