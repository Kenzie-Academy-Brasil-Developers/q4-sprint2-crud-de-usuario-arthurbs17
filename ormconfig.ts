export default {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "1234",
  database: "db_crud_node",
  synchronize: true,
  logging: false,
  entities: ["src/entities/**/*.ts"],
  migrations: ["src/migrations/**/*.ts"],
  subscribers: ["src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "src/entities",
    migrationsDir: "src/migrations",
    subscribersDir: "src/subscriber",
  },
};
