module.exports = {
  type: 'postgres',
  url:
    process.env.DATABASE_URL ||
    'postgres://postgres:postgres@localhost:5432/thdproject',
  ssl: process.env.DATABASE_URL ? true : false,
  //extra: { ssl: { rejectUnauthorized: false } },
  entities: ['dist/models/**/*.js'],
  migrations: ['dist/database/migrations/**/*.js'],
  cli: {
    migrationsDir: ['src/database/migrations/'],
    entitiesDir: 'src/models',
  },
};
