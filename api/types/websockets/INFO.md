# WebSockets

## What are WebSockets?

WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. The WebSocket protocol was standardized by the IETF as RFC 6455 in 2011.

Unlike HTTP, which is request-response (client asks, server answers), WebSockets allow for persistent, bi-directional communication. The server can send data to the client without the client requesting it first.

## How it Works

1.  **Handshake**: The connection starts as a standard HTTP request. The client sends a request with an `Upgrade: websocket` header.
2.  **Upgrade**: If the server supports it, it responds with `101 Switching Protocols`, and the connection is upgraded from HTTP to the WebSocket protocol.
3.  **Persistent Connection**: The TCP connection remains open.
4.  **Frames**: Data is exchanged in "frames". Both client and server can send frames at any time.
5.  **Close**: Either side can send a close frame to terminate the connection.

## Why We Need It & When to Use

HTTP is inefficient for real-time applications because of the overhead of opening a new connection for every request and the inability of the server to push data.

**Use WebSockets when:**
*   **Real-time Chat**: Instant messaging apps (WhatsApp, Slack).
*   **Live Feeds**: Stock tickers, sports scores, news feeds.
*   **Multiplayer Gaming**: Real-time synchronization of game state.
*   **Collaborative Editing**: Tools like Google Docs or Figma where multiple users edit simultaneously.
*   **Notifications**: Pushing alerts to the user immediately.

## Other Options

*   **HTTP Long Polling**: The client keeps a request open until the server has data. Less efficient than WebSockets but works over standard HTTP.
*   **Server-Sent Events (SSE)**: Allows the server to push updates to the client over HTTP. Simpler than WebSockets but strictly one-way (Server -> Client).
*   **gRPC Streaming**: Can achieve similar bi-directional streaming but is typically used for service-to-service, not browser-to-server.

## Pros and Cons

### Pros
*   **Real-time**: True low-latency, bi-directional communication.
*   **Efficiency**: Low overhead per message (no HTTP headers for every message).
*   **Full-Duplex**: Simultaneous sending and receiving.

### Cons
*   **Stateful**: The server must maintain an open connection for every client, which consumes memory and file descriptors. Scaling requires sticky sessions or a pub/sub broker (like Redis).
*   **Firewalls/Proxies**: Some corporate firewalls block non-HTTP traffic or drop long-lived connections.
*   **Complexity**: Handling reconnection logic, heartbeats (ping/pong), and state management is more complex than stateless REST.
