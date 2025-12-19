# Docker & Docker Compose

## What is Docker?

**Docker** is a containerization platform that allows developers to **package an application along with its dependencies, configuration, and runtime** into a single unit called a **container**, which can run consistently across different systems.

Docker solves the common problem of:

> *“It works on my machine, but not on another system or server.”*

---

## Why Docker is Needed

In real-world projects:

* Different systems have different OS versions
* Different machines have different library versions
* Environment setup is time-consuming and error-prone

Docker solves this by:

* Providing a consistent runtime environment
* Eliminating manual setup steps
* Making applications portable and reproducible

### Key Benefits

* Portable across systems and servers
* Lightweight compared to virtual machines
* Fast startup and shutdown
* Strong ecosystem and community support

---

## What is a Container?

A **container** is an **isolated running process** created from a Docker image.

It includes:

* Application code
* Dependencies
* Runtime environment
* Configuration

Containers are:

* Lightweight
* Isolated
* Easy to create and destroy

---

## Core Docker Concepts

### Docker Image

A **Docker image** is a **read-only blueprint** used to create containers.

* Built using a `Dockerfile`
* Contains instructions, dependencies, and configuration
* Uses layered filesystem

**Image → Container**

---

### Dockerfile

A **Dockerfile** defines **how an image is built**.

It contains steps such as:

* Base image selection
* Installing dependencies
* Copying application code
* Defining how the container runs

---

### Volumes (Persistent Storage)

By default, containers have **temporary storage**.

**Volumes** are used to:

* Persist data beyond container lifecycle
* Share data between containers
* Store database files, uploads, logs

Volumes are **not deleted when containers are removed**.

---

### Docker Networking

Docker provides a **virtual network** inside the host machine.

* Containers can communicate with each other
* Each container gets its own IP
* Containers can access each other using **container/service names**
* Network access can be controlled and isolated

---

## Docker Workflow

1. Write application code
2. Create a Dockerfile
3. Build a Docker image
4. Run a container from the image

```
Code → Image → Container
```

---

## What is Docker Compose?

**Docker Compose** is a tool used to **define and manage multi-container applications** using a single YAML configuration file (`docker-compose.yml`).

It is mainly used when an application requires:

* Backend
* Database
* Cache
* Message queue
* Frontend

All running together.

---

## Why Docker Compose is Needed

Without Docker Compose:

* You must remember long Docker commands
* Managing multiple containers becomes complex

Docker Compose solves this by:

* Defining all services in one file
* Starting everything with a single command
* Making local development easier and cleaner

---

## docker-compose.yml (Concept)

A Compose file defines:

* Services (containers)
* Ports
* Volumes
* Networks
* Environment variables
* Dependencies between services

Each service represents **one container**.

---

## Docker vs Docker Compose

| Feature               | Docker                | Docker Compose           |
| --------------------- | --------------------- | ------------------------ |
| Single container      | Yes                   | Yes                      |
| Multi-container setup | Difficult             | Easy                     |
| Configuration         | CLI + Dockerfile      | YAML file                |
| Best use case         | Single service, CI/CD | Local dev, microservices |

---

## Common Use Cases

### Docker

* Packaging applications
* CI/CD pipelines
* Production deployments

### Docker Compose

* Local development
* Microservices-based projects
* Running backend + DB together

---

## Best Practices

* One main process per container
* Keep images small
* Use `.dockerignore`
* Use environment variables for config
* Do not store secrets inside images
* Use volumes for persistent data
