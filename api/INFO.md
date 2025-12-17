# API Fundamentals – Complete & Simple Guide

## What is an API?

An **API (Application Programming Interface)** is a **communication interface** that allows **two software systems** to interact with each other by exposing specific **functions and data**, without sharing memory or internal implementation.

APIs act as a **bridge** between systems so that they can work together in a controlled and secure way.

---

## Why Do We Need APIs?

Modern software systems are built as **independent processes or services**.  
These processes:

- Run in separate memory spaces
- Cannot directly access each other’s memory
- May be written in different languages
- May run on different machines

APIs solve this problem by providing a **well-defined communication contract**.

### Key reasons APIs are needed:
- Process isolation and security
- Controlled data access
- Scalability (microservices)
- Platform and language independence
- Reusability of functionality

> Without APIs, modern web, mobile, and cloud applications would not be possible.

---

## Real-World Example: Camera Access

A website wants to access the user’s camera.

Direct access is **not allowed** for security reasons.

### Actual flow:
Website (JavaScript)
↓
Browser API (getUserMedia)
↓ (User Permission)
Operating System Camera API
↓
Browser
↓
Website


Here:
- The website talks to the **browser API**
- The browser talks to the **system API**
- Permissions ensure security

This is a real-world example of APIs enabling **safe and controlled access**.

---

## How Does an API Work? (High Level)

1. A **client** sends a request to an API
2. The API validates the request
3. The server processes the request
4. A response is sent back to the client

Example: ```Client → API → Server Logic → API → Client```


The client never knows:
- How data is stored
- How logic is implemented

This is called **abstraction**.

---

## Types of APIs (Based on Access)

### 1. Public APIs
- Open to everyone
- Example: Google Maps API

### 2. Private APIs
- Used internally within an organization
- Not exposed publicly

### 3. Internal APIs
- Used between internal services (microservices)
- Improves modular design

### 4. Partner APIs
- Shared with specific business partners
- Access controlled via authentication

---

## Types of APIs (Based on Communication Style)

> Only a high-level overview is given here.  
> Each type will be covered in detail separately.

### **[REST (Representational State Transfer)](types/REST/INFO.md)**
- Most commonly used
- Uses [HTTP](/networking/protocols/http-https/INFO.md) [protocol](/networking/protocols/INFO.md)
- Stateless (each request is independent)
- Follows client–server architecture
- Mainly used for CRUD operations
- One-directional request–response

### **[WebSockets](types/websockets/INFO.md)**
- Bi-directional communication
- Persistent connection
- Used for real-time updates (chat, live data)

### **[SOAP](types/SOAP/INFO.md)**
- XML-based
- Strict standards
- Used in legacy enterprise systems

### **[gRPC](types/gRPC/INFO.md)**
- High-performance
- Uses Protocol Buffers
- Common in microservices

### **[GraphQL](types/graphQL/INFO.md)**
- Client controls data shape
- Reduces over-fetching

### **[Webhooks](types/webhooks/INFO.md)**
- Event-driven APIs
- Server sends data automatically on events

### **[WebRTC](types/webRTC/INFO.md)**
- Real-time peer-to-peer communication
- Used for audio/video calls

---

## Core Fundamentals of API Security (Overview)

> Detailed security topics will be covered in a separate document.

Basic API security practices include:

- Using **[HTTPS](networking/protocols/http-https/INFO.md)** for encrypted communication
- Authentication & Authorization (OAuth 2.0, tokens)
- Rate limiting to prevent abuse
- API versioning for backward compatibility
- API Gateway for centralized control
- Proper error handling
- Input validation to prevent attacks

Security ensures APIs are:
- Safe
- Reliable
- Scalable

---

## Why APIs Are Important

APIs are the backbone of modern software systems.

They enable:
- Web and mobile applications
- Microservices architecture
- Cloud computing
- Third-party integrations
- Scalable and maintainable systems