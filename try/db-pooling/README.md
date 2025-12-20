# Database Connection Pooling

**Reference Video:** [Database Connection Pooling Explained](https://www.youtube.com/watch?v=GTeCtIoV2Tw&t=335s) by Husain Nasir

This project demonstrates the performance difference between creating new database connections for each request versus using a connection pool in Node.js with PostgreSQL.

## Project Details

- **Package Name:** `postgresnode-pool`
- **Version:** 1.0.0
- **Dependencies:** Express.js, PostgreSQL client (pg)
- **Node.js Version:** 18+ (required by Express 5.x)

## Project Structure

```
.
├── api.js              # Express server with connection pool endpoints
├── load-test.js        # Load testing script for performance comparison
├── docker-compose.yaml # PostgreSQL database configuration
├── package.json        # Project dependencies and scripts
├── pnpm-lock.yaml      # Lock file for pnpm
└── README.md          # This file
```

## Concept Overview

### What is Database Connection Pooling?

Database connection pooling is a technique that maintains a cache of database connections that can be reused for future requests. Instead of opening and closing a new connection for every database operation, applications can borrow a connection from the pool, use it, and return it to the pool when done.

### Why Use Connection Pools?

1. **Performance**: Creating a new connection is expensive (TCP handshake, authentication, etc.)
2. **Resource Management**: Limits the number of concurrent connections to prevent database overload
3. **Scalability**: Handles high traffic more efficiently by reusing connections

### Performance Impact

In this demo, you'll see that:
- **Without pooling**: Each request creates a new connection, leading to higher latency
- **With pooling**: Connections are reused, resulting in much faster response times

## Setup

### Prerequisites

- Node.js (v18 or higher) - required by Express 5.x
- Docker and Docker Compose
- pnpm (or npm/yarn)

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Start PostgreSQL Database

```bash
docker-compose up -d
```

This will start a PostgreSQL container with:
- Database: `mydb`
- User: `marco`
- Password: `secret`
- Port: `5432`

### 3. Create Test Data

Connect to the database and create a test table:

```bash
docker ps  # Find the container name, usually something like 'db-pooling_db_1'
docker exec -it <container_name> psql -U marco -d mydb
```

Then run:

```sql
CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    department VARCHAR(100)
);

INSERT INTO employees (name, department) VALUES
('John Doe', 'Engineering'),
('Jane Smith', 'Marketing'),
('Bob Johnson', 'Sales');
```

## Usage

### Start the Server

```bash
node api.js
```

The server will start on port 9000.

### API Endpoints

- `GET /old` - Uses new connection for each request (slow)
- `GET /pool` - Uses connection pool (fast)

### Load Testing

Run the load test to compare performance:

```bash
pnpm test
```

OR

```bash
npm test
```

OR

```bash
node load-test.js
```

This will:
1. Warm up the connection pool with 50 requests
2. Make 10,000 requests to `/old` endpoint with concurrency of 25
3. Make 10,000 requests to `/pool` endpoint with concurrency of 25
4. Display performance metrics for both approaches

### Manual Testing

You can also test manually from browser console:

```javascript
// Test old method (100 requests)
for (let i = 0; i < 100; i++) {
  fetch("http://localhost:9000/old")
    .then(res => res.json())
    .then(console.log);
}

// Test pool method (100 requests)
for (let i = 0; i < 100; i++) {
  fetch("http://localhost:9000/pool")
    .then(res => res.json())
    .then(console.log);
}
```

## Expected Results

You should see output similar to:

```
🔥 Warming up connection pool...

🚀 Starting test for /old
Total requests: 10000
Concurrency   : 25

✅ /old TEST COMPLETE
Success requests : 10000
Failed requests  : 0
Avg latency      : 45.67 ms
Min latency      : 12.34 ms
Max latency      : 123.45 ms

🚀 Starting test for /pool
Total requests: 10000
Concurrency   : 25

✅ /pool TEST COMPLETE
Success requests : 10000
Failed requests  : 0
Avg latency      : 2.34 ms
Min latency      : 0.56 ms
Max latency      : 15.67 ms

🎯 LOAD TEST FINISHED
```

The pooled version should be significantly faster (often 10-20x improvement).

## Configuration

### Connection Pool Settings

In `api.js`, the pool is configured with:

```javascript
const pool = new Pool({
  host: "localhost",
  port: 5432,
  user: "marco",
  password: "secret",
  database: "mydb",
  min: 2,      // Minimum connections in pool
  max: 20,     // Maximum connections in pool
});
```

### Load Test Configuration

In `load-test.js`, you can adjust:

```javascript
const TOTAL_REQUESTS = 10000;  // Total requests per test
const CONCURRENCY = 25;        // Concurrent requests
```

## Cleanup

Stop the database:

```bash
docker-compose down
```

Remove database volume (optional):

```bash
docker-compose down -v
```

## Notes

- A `.gitignore` file is included to exclude `node_modules/`, logs, and other common files
- The database credentials are for demo purposes only
- In production, use environment variables for sensitive data
- Adjust pool size based on your application needs and database limits