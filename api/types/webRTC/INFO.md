# WebRTC (Web Real-Time Communication)

## What is WebRTC?

WebRTC is an open-source project that provides web browsers and mobile applications with real-time communication (RTC) capabilities via simple application programming interfaces (APIs). It allows audio and video communication to work inside web pages by allowing direct peer-to-peer communication, eliminating the need to install plugins or download native apps.

## How it Works

WebRTC enables peer-to-peer communication, but it still needs servers to establish the connection.

1.  **Signaling**: Clients exchange metadata (session control messages) to coordinate communication. This is not part of the WebRTC standard and can be done via WebSockets, HTTP, etc.
2.  **ICE Candidates**: Interactive Connectivity Establishment (ICE) is used to find the best path to connect peers.
3.  **STUN/TURN Servers**:
    *   **STUN**: Tells a client what its public IP address is (traversing NAT).
    *   **TURN**: Relays traffic if a direct peer-to-peer connection fails (e.g., strict firewalls).
4.  **Peer-to-Peer Connection**: Once established, media and data flow directly between browsers (DTLS/SRTP).

## Why We Need It & When to Use

WebRTC is the standard for browser-based real-time media.

**Use WebRTC when:**
*   **Video/Audio Conferencing**: Zoom-like apps, Google Meet.
*   **Live Streaming**: Low-latency broadcasting.
*   **P2P File Sharing**: Sending large files directly between users without server storage.

## Pros and Cons

| Pros | Cons |
| :--- | :--- |
| **Low Latency**: Direct peer-to-peer connection minimizes delay, ideal for real-time interaction. | **Complexity**: Setting up the infrastructure (Signaling, STUN, TURN) is complex. |
| **Bandwidth Efficiency**: Reduces server load as media flows directly between users (except when using TURN). | **UDP Reliability**: Uses UDP, so packet loss can occur (video glitches), though it handles congestion well. |
| **Security**: Encryption (DTLS/SRTP) is mandatory and built-in. | **Scalability**: Mesh networking (connecting everyone to everyone) doesn't scale well for large groups; requires SFU/MCU servers. |
| **No Plugins**: Native support in all modern browsers without external software. | **Network Traversal**: Corporate firewalls and NATs can block connections, requiring fallback to expensive TURN servers. |
