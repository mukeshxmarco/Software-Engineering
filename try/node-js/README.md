# Node.js Race Conditions and Child Processes

This project demonstrates race conditions in Node.js when using child processes and shared state.

## Project Details

- **Node.js Version:** 12+
- **Dependencies:** Built-in Node.js modules (child_process)

## Project Structure

```
.
├── race.js            # Demonstration of race conditions with child processes
└── README.md          # This file
```

## Concept Overview

### What are Race Conditions?

A race condition occurs when multiple processes or threads access shared data concurrently, and the final outcome depends on the timing of these accesses. In Node.js, this can happen when:

1. Multiple child processes modify shared variables
2. Asynchronous operations complete in unpredictable order
3. Shared resources are accessed without proper synchronization

### Child Processes in Node.js

Node.js provides the `child_process` module to create child processes:

- `fork()`: Creates a new Node.js process
- `spawn()`: Launches external commands
- `exec()`: Executes commands in a shell

### Why This Matters

Understanding race conditions is crucial for:
- Building concurrent applications
- Debugging unpredictable behavior
- Implementing proper synchronization
- Writing reliable multi-process applications

## Current Implementation

The current `race.js` file demonstrates a race condition where:

```javascript
const { fork } = require("child_process");

let total = 0;

for (let i = 0; i < 2; i++) {
  const child = fork("./race.js");
  child.on("message", n => total += n);
}

setTimeout(() => {
  console.log("Final total:", total);
}, 1000);
```

### The Problem

This code has several issues:
1. **Race Condition**: The `total` variable is shared between parent and child processes
2. **Incomplete Logic**: Child processes don't send messages back
3. **Timing Issues**: Using `setTimeout` for synchronization is unreliable

## Expected Behavior

When run correctly, this should demonstrate:
- Unpredictable results due to concurrent access
- Different outputs on multiple runs
- The need for proper synchronization mechanisms

## Running the Demo

```bash
node race.js
```

## Common Race Condition Patterns

### 1. Shared Variable Access

```javascript
let counter = 0;

function increment() {
  counter++; // Not atomic - race condition possible
}
```

### 2. Asynchronous Operations

```javascript
let result;

asyncOperation1().then(() => result = "first");
asyncOperation2().then(() => result = "second");
// result could be either "first" or "second"
```

### 3. File System Operations

```javascript
// Reading and writing files concurrently
fs.readFile("file.txt", (err, data) => {
  // Process data
  fs.writeFile("output.txt", processedData); // Race with other processes
});
```

## Solutions

### 1. Atomic Operations

Use atomic operations when available:

```javascript
const { Mutex } = require('async-mutex');
const mutex = new Mutex();

async function safeIncrement() {
  const release = await mutex.acquire();
  try {
    counter++;
  } finally {
    release();
  }
}
```

### 2. Message Passing

Use proper inter-process communication:

```javascript
// Parent process
const child = fork("child.js");
child.send({ type: "increment", value: 1 });

// Child process
process.on("message", (msg) => {
  if (msg.type === "increment") {
    // Handle increment safely
    process.send(result);
  }
});
```

### 3. Locks and Semaphores

```javascript
const { Semaphore } = require('async-mutex');
const sem = new Semaphore(1);

async function criticalSection() {
  const release = await sem.acquire();
  try {
    // Critical section code
  } finally {
    release();
  }
}
```

## Best Practices

1. **Avoid Shared State**: Use message passing instead of shared memory
2. **Use Locks**: When shared state is necessary, protect it with locks
3. **Atomic Operations**: Use built-in atomic operations when available
4. **Testing**: Test concurrent code thoroughly with different timing scenarios
5. **Monitoring**: Log timing and state changes for debugging

## Further Reading

- [Node.js Child Process Documentation](https://nodejs.org/api/child_process.html)
- [Race Conditions in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop)
- [Concurrency Patterns in Node.js](https://nodejs.org/en/docs/guides/dont-block-the-event-loop/)

## Notes

- This is a simplified demonstration
- Real-world race conditions can be more subtle
- Always consider concurrency when designing multi-process applications
- Use tools like PM2 or clustering for production multi-process deployments