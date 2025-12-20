const express = require("express");
const app = express();

const { Pool, Client } = require("pg");

let oldCount = 0;
let oldSum = 0;
let poolCount = 0;
let poolSum = 0;

// 🔹 Connection Pool
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "marco",
  password: "secret",
  database: "mydb",
  min: 2,
  max: 20,
});

/**
 * ❌ OLD METHOD (new DB connection per request)
 */
app.get("/old", async (req, res) => {
  const start = Date.now();
  oldCount++;

  const client = new Client({
    host: "localhost",
    port: 5432,
    user: "marco",
    password: "secret",
    database: "mydb",
  });

  await client.connect();
  await client.query("SELECT * FROM employees");
  await client.end();

  const elapsed = Date.now() - start;
  oldSum += elapsed;

  res.json({
    elapsed,
    avg: Math.round((oldSum / oldCount) * 100) / 100, // ✅ 2 decimal ms
    method: "old",
  });
});

/**
 * ✅ POOL METHOD (reused connections)
 */
app.get("/pool", async (req, res) => {
  const start = Date.now();
  poolCount++;

  await pool.query("SELECT * FROM employees");

  const elapsed = Date.now() - start;
  poolSum += elapsed;

  res.json({
    elapsed,
    avg: Math.round((poolSum / poolCount) * 100) / 100, // ✅ 2 decimal ms
    method: "pool",
  });
});

app.listen(9000, () => {
  console.log("🚀 Server listening on port 9000");
});