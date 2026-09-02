import pg from "pg";

const { Client } = pg;

const db = new Client({
    user: "postgres",
    host: "localhost",
    database: "employee_management",
    password: "password",
    port: 5432
});

await db.connect();

export default db;