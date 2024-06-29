import { createPool } from "mysql2";
import { Kysely, MysqlDialect } from "kysely";

// const dialect = new MysqlDialect({
//   pool: createPool({
//     database: "cf_padi",
//     host: "localhost",
//     user: "root",
//     password: "",
//     port: 3306,
//     connectionLimit: 10,
//   }),
// });
const dialect = new MysqlDialect({
  pool: createPool({
    host: process.env.CF_HOST,
    user: process.env.CF_USER,
    password: process.env.CF_PASSWORD,
    database: process.env.CF_DB,
    port: process.env.CF_PORT,
    connectionLimit: 10,
  }),
});

export const db = new Kysely({
  dialect,
});
