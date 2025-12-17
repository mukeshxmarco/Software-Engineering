# GraphQL

## What is GraphQL?

GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It was developed by Facebook to solve the inefficiencies of REST APIs. Unlike REST, where you hit multiple endpoints to gather data, GraphQL allows you to access all your data through a single endpoint.

## How it Works

GraphQL operates on a **schema-first** approach.

1.  **Schema Definition**: You define a strongly typed schema that describes all possible data and operations.
2.  **Single Endpoint**: The API exposes a single endpoint (usually `/graphql`) that accepts POST requests.
3.  **Query Language**: Clients send a query describing exactly the data structure they need.
    *   Example Query:
        ```graphql
        {
          user(id: "123") {
            name
            email
            posts {
              title
            }
          }
        }
        ```
4.  **Resolvers**: On the server, functions called "resolvers" are responsible for fetching the data for each field in the schema.

## Why We Need It & When to Use

GraphQL was designed to solve the "over-fetching" and "under-fetching" problems common in REST.

**Use GraphQL when:**
*   You have complex, nested data relationships (e.g., a social graph).
*   You have mobile clients where bandwidth is expensive (fetch only what is needed).
*   You want to aggregate data from multiple sources (databases, 3rd party APIs) into a single interface.
*   You need rapid frontend iteration without waiting for backend endpoint changes.

## Other Options

*   **REST**: Better for simple, resource-oriented applications and leveraging HTTP caching.
*   **gRPC**: Better for low-latency server-to-server communication.

## Pros and Cons

### Pros
*   **No Over-fetching/Under-fetching**: Clients get exactly what they ask for, nothing more, nothing less.
*   **Strongly Typed**: The schema serves as a contract, allowing for better tooling, validation, and auto-completion.
*   **Single Source of Truth**: One graph for all data access.
*   **Introspection**: You can query the schema itself to understand the API capabilities.

### Cons
*   **Complexity**: Setting up a GraphQL server (schema, resolvers, dataloaders) is more complex than a simple REST API.
*   **Caching**: HTTP caching is harder to implement because everything is a POST request to the same URL. You often need client-side caching (like Apollo Client).
*   **N+1 Problem**: Naive implementations can lead to severe performance issues where one query triggers hundreds of database calls (solved with DataLoaders).
*   **Security**: Allowing clients to query anything can lead to complex, resource-intensive queries that can bring down the server (requires query depth limiting/complexity analysis).
