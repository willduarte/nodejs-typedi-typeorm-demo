module.exports = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  database: "sample_db",
  username: "postgres",
  password: "password",
  logging: true,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
  },
};
