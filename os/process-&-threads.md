# Processes and Threads

## 1. What is a Process?

A **process** is an **instance of a program in execution**.

### Key points:

* A process has its **own isolated memory space**
* Processes are **independent** of each other
* One process **cannot directly access another process’s memory**
* Each process has a unique **Process ID (PID)**

### A process contains:

* Virtual memory (code, heap, stack, data)
* OS resources (PID, scheduling info)
* File descriptors
* Environment variables
* **One or more threads**

### Example:

```
Chrome Browser
 ├── Process 1: Tab A
 ├── Process 2: Tab B
 └── Process 3: GPU Process
```

If one process crashes, other processes usually continue running.

---

## 2. What is a Thread?

A **thread** is the **smallest unit of execution** inside a process.

### Key points:

* Threads live **inside a process**
* Threads **share the process’s memory and resources**
* Threads actually **execute the program logic**

### Threads share:

* Heap memory
* Global variables
* Open files

### Threads have their own:

* Stack
* Program counter
* CPU registers

Threads are **not independent** like processes.

---

## 3. Who Runs on the CPU?

> **The CPU runs threads, not processes.**

* The OS scheduler schedules **threads**
* A process itself never executes instructions
* Threads are the entities that get CPU time

---

## 4. Relationship Between Process and Thread

Think of it like this:

* **Process** → Container / execution environment
* **Thread** → Worker that executes code

Better definition:

> A process provides memory and resources, while threads execute the program logic.

---

## 5. How Many Threads Can Run at the Same Time?

This depends on the **number of CPU cores**.

### Single-core CPU:

* Only **one thread runs at a time**
* Multiple threads use **context switching**
* Appears parallel, but is actually time-sharing

### Multi-core CPU:

If a system has:

```
4 CPU cores
```

Then:

```
4 threads can run truly in parallel
```

### Example:

* 8-core CPU
* 100 threads

Only **8 threads execute simultaneously**. The rest are waiting or scheduled.

---

## 6. Threads vs CPU Cores

| Term        | Meaning                          |
| ----------- | -------------------------------- |
| Thread      | Unit of execution                |
| Core        | Physical execution unit          |
| Parallelism | Threads running at the same time |
| Concurrency | Multiple threads making progress |
