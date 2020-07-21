require("dotenv").config();

module.exports = {
  development: {
    client: "pg",
    connection: "postgresql://localhost",
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  staging: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  testing: {
    client: "pg",
    connection: process.env.DATABASE_URL_TEST,
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: "./database/migrations",
    },
    seeds: {
      directory: "./database/seeds",
    },
  },
};
