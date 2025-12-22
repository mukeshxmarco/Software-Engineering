# Software Engineering Core Learning Roadmap


For every topic, always cover:

* What it is
* Why we need it
* What existed before it
* How it works (end-to-end flow)
* Types / versions
* Problems it solves
* Use cases
* Pros and cons
* Hands-on experiment
* Common mistakes
* Interview and production perspective

---

## Chapter 1: Computer Fundamentals

### 1. Memory

* RAM vs ROM
* Virtual memory
* Stack vs Heap
* Paging and segmentation
* Garbage collection
* Memory leaks

### 2. CPU

* CPU architecture
* Cores vs threads
* Clock cycle
* Context switching
* User mode vs kernel mode

### 3. Process

* What is a process
* Process lifecycle
* Inter-process communication (IPC)

##### 3.1 Multiprocessing

* Fork vs spawn
* Process isolation

##### 3.2 Shared Memory Processes

* Shared memory models
* Race conditions

### 4. Threads

* Thread vs process
* Thread lifecycle

##### 4.1 Multithreading

* Thread safety
* Mutex, locks, semaphores
* Deadlock and starvation

### 5. Cache

* CPU cache (L1, L2, L3)
* Cache lines
* Cache coherence
* Cache misses

---

## Chapter 2: Networking and Internet

### 1. Network and Internet Basics

* What is a network
* How the internet works

##### 1.1 Router and Switch

* Routing vs switching
* NAT
* Load balancing basics

##### 1.2 WiFi and ISP Working

* ISP role
* Bandwidth vs latency


### 2. OSI Model

* All 7 layers
* Mapping protocols to layers


### 3. IP, MAC, and Ports

* IPv4 vs IPv6
* MAC address
* Ports and port ranges

##### 3.1 Data Packets

* Packet structure
* MTU
* Fragmentation


### 4. Protocols

##### 4.1 TCP and UDP

* TCP handshake
* Reliability
* Congestion control

##### 4.2 HTTP and HTTPS

* Request-response cycle
* Status codes
* Headers
* SSL
* TLS

##### 4.3 SSH

* SSH handshake
* Public-private key authentication

##### 4.4 WebSockets

* Persistent connections
* Real-time communication


### 5. Firewall

* Network firewall
* Application firewall


### 6. Proxy

* Forward proxy
* Reverse proxy
* CDN basics


### 7. Data Encryption

##### 7.1 Symmetric Encryption

##### 7.2 Asymmetric Encryption

##### 7.3 Hashing

---

## Chapter 3: Core Backend Concepts

### 1. API

* What is an API

##### 1.1 API Design

* REST principles
* Pagination
* Idempotency

##### 1.2 API Security

* Rate limiting
* CORS
* API keys

##### 1.3 API Testing

* Unit tests
* Integration tests

##### 1.4 API Types

* REST
* SOAP
* GraphQL
* gRPC

##### 1.5 WebSockets and Webhooks


### 2. Authentication and Authorization


### 3. JWT

* Token structure
* Access and refresh tokens
* Security risks


### 4. Sessions and Storage

* Sessions
* Cookies
* LocalStorage
* SessionStorage


### 5. Caching

* Why caching
* Cache invalidation
* LRU and LFU


### 6. Docker

* Containers vs virtual machines
* Docker images
* Dockerfile
* Docker Compose


### 7. Git and GitHub

* Git internals
* Branching strategy
* Merge vs rebase


### 8. Logging and Monitoring

* Logs
* Metrics
* Tracing


### 9. Sync and Async Systems

* Blocking vs non-blocking

##### Message Brokers

* Redis
* Kafka
* RabbitMQ


### 10. Testing

* Unit testing
* Automation testing
* Test pyramid


### 11. Service Workers

* Offline support
* Caching strategies


### 12. Code Quality

* Clean code
* SOLID principles
* Linting
* Code reviews

---

## Chapter 4: Database Internals

### 1. How Databases Work with Disk

* Disk I/O
* Write-ahead logging
* B-tree basics


### 2. CAP Theorem


### 3. ACID Properties


### 4. PostgreSQL vs MongoDB

* Differences
* Use cases


### 5. Database Internals

* Buffers
* Pages
* Isolation levels
* Transactions
* Sharding
* Replication


### 6. Database Monitoring

* Slow queries
* Locks
* Performance bottlenecks


### 7. Table Design

* Normalization
* Denormalization


### 8. Indexing

* B-tree indexes
* Hash indexes
* Composite indexes


### 9. Joins

* Inner join
* Left join
* Right join
* Full join


### 10. Database pooling


## Chapter 5: Advanced


1. Load balancing
2. Horizontal vs vertical scaling
3. Distributed systems basics
4. Event-driven architecture
5. Backpressure
6. Rate limiting algorithms
7. Circuit breaker pattern
8. Database connection pooling
9. Observability
