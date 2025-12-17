# REST (Representational State Transfer)

## What is REST?

REST (Representational State Transfer) is an architectural style for designing networked applications. It relies on a stateless, client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol is used. REST is an architectural style, not a standard or protocol itself.

RESTful applications use HTTP requests to post data (create and/or update), read data (make queries), and delete data. Thus, REST uses HTTP for all four CRUD (Create/Read/Update/Delete) operations.

## How it Works

REST operates on the concept of **resources**. A resource is any object the API can provide information about (e.g., a user, a product, a tweet).

1.  **Resources & URIs**: Each resource is identified by a unique URI (Uniform Resource Identifier).
    *   Example: `GET /users/123` retrieves the user with ID 123.
2.  **HTTP Methods**: Standard HTTP verbs define the action to be performed on the resource.
    *   `GET`: Retrieve a resource.
    *   `POST`: Create a new resource.
    *   `PUT`: Update an existing resource (full replacement).
    *   `PATCH`: Update an existing resource (partial modification).
    *   `DELETE`: Remove a resource.
3.  **Statelessness**: Each request from client to server must contain all of the information necessary to understand the request, and cannot take advantage of any stored context on the server. Session state is therefore kept entirely on the client.
4.  **Representations**: Resources are decoupled from their representation. A server can send data in JSON, XML, HTML, etc., depending on what the client requests (via `Accept` headers).

## Why We Need It & When to Use

REST has become the de-facto standard for web APIs due to its simplicity and alignment with the way the web works.

**Use REST when:**
*   You are building a public-facing API (easy for developers to understand).
*   You need a simple, scalable, and cacheable architecture.
*   Bandwidth is not a primary constraint (JSON is verbose but readable).
*   You want to leverage existing HTTP infrastructure (caching, proxies, authentication).

## Other Options

*   **GraphQL**: For complex data requirements where clients need to specify exactly what they want.
*   **gRPC**: For high-performance internal microservices communication.
*   **SOAP**: For enterprise environments requiring strict standards and ACID compliance.

## Pros and Cons

### Pros
*   **Scalability**: Statelessness allows for easy load balancing and scaling.
*   **Flexibility**: Decouples client and server; they can evolve independently.
*   **Cacheability**: HTTP caching can be leveraged to improve performance.
*   **Universality**: Supported by almost every language and platform.

### Cons
*   **Over-fetching/Under-fetching**: Endpoints return a fixed data structure. You might get more data than you need (over-fetching) or have to make multiple requests to get related data (under-fetching).
*   **Statelessness Overhead**: Since no state is stored, every request must contain all necessary data (e.g., auth tokens), which can increase packet size.
*   **Lack of Strict Contract**: Unlike SOAP (WSDL) or gRPC (Protobuf), REST doesn't enforce a strict contract, though OpenAPI/Swagger helps bridge this gap.
