# HTTP/1.1 vs HTTP/2 Performance Comparison

This project demonstrates the performance differences between HTTP/1.1 and HTTP/2 protocols in Node.js.

## Project Details

- **Node.js Version:** 14+
- **Dependencies:** Built-in Node.js modules (http, http2, fs)

## Project Structure

```
.
├── http1.js           # HTTP/1.1 server implementation
├── http2.js           # HTTP/2 server implementation
├── cert.pem          # SSL certificate for HTTP/2
├── key.pem           # SSL private key for HTTP/2
└── README.md         # This file
```

## Concept Overview

### HTTP/1.1 vs HTTP/2

**HTTP/1.1** is the traditional protocol that:
- Uses one request per connection
- Requires multiple connections for parallel requests
- Has head-of-line blocking issues

**HTTP/2** is the modern protocol that:
- Multiplexes multiple requests over a single connection
- Uses binary framing instead of text
- Supports server push and header compression
- Eliminates head-of-line blocking

### Why HTTP/2?

1. **Performance**: Better resource utilization with multiplexing
2. **Efficiency**: Header compression and binary protocol
3. **Modern Web**: Required for modern web features

## Setup

### Prerequisites

- Node.js (v14 or higher)
- OpenSSL (for generating certificates, if needed)

### Generate SSL Certificates (if not present)

```bash
# Generate private key
openssl genrsa -out key.pem 2048

# Generate certificate
openssl req -new -x509 -key key.pem -out cert.pem -days 365
```

## Usage

### Start HTTP/1.1 Server

```bash
node http1.js
```

Server starts on port 3000.

### Start HTTP/2 Server

```bash
node http2.js
```

Server starts on port 3443 (HTTPS).

### Testing

#### HTTP/1.1 Endpoints

- `GET /` - Fast response
- `GET /slow` - Slow response (5 second delay)

#### HTTP/2 Endpoints

- `GET /` - Fast response
- `GET /slow` - Slow response (5 second delay)

### Browser Testing

**HTTP/1.1:**
```
http://localhost:3000/
http://localhost:3000/slow
```

**HTTP/2:**
```
https://localhost:3443/
https://localhost:3443/slow
```

Note: For HTTP/2, your browser will show a security warning since we're using a self-signed certificate. Click "Advanced" and "Proceed to localhost (unsafe)" to continue.

### Load Testing

You can use tools like Apache Bench or curl to test performance:

```bash
# Test HTTP/1.1
curl http://localhost:3000/

# Test HTTP/2
curl -k https://localhost:3443/
```

## Expected Behavior

Both servers implement the same logic:
- Fast responses return immediately
- Slow responses have a 5-second delay

The key difference is in how the protocols handle multiple concurrent requests:
- HTTP/1.1 may block other requests during slow responses
- HTTP/2 can handle multiple requests simultaneously over the same connection

## Code Explanation

### HTTP/1.1 Server (http1.js)

```javascript
const http = require("http");

http.createServer((req, res) => {
    if (req.url === "/slow") {
        setTimeout(() => {
            res.end("SLOW RESPONSE");
        }, 5000);
    } else {
        res.end("FAST RESPONSE");
    }
}).listen(3000, () => {
    console.log("HTTP/1.1 server on port 3000");
});
```

### HTTP/2 Server (http2.js)

```javascript
const http2 = require("http2");
const fs = require("fs");

const server = http2.createSecureServer({
  key: fs.readFileSync("key.pem"),
  cert: fs.readFileSync("cert.pem"),
});

server.on("stream", (stream, headers) => {
  const path = headers[":path"];

  if (path === "/slow") {
    setTimeout(() => {
      stream.end("SLOW H2");
    }, 5000);
  } else {
    stream.end("FAST H2");
  }
});

server.listen(3443, () => {
  console.log("HTTP/2 server on 3443");
});
```

## Key Differences

| Feature | HTTP/1.1 | HTTP/2 |
|---------|----------|--------|
| Protocol | Text-based | Binary |
| Connections | Multiple | Single |
| Multiplexing | No | Yes |
| Header Compression | No | Yes |
| Server Push | No | Yes |
| Security | Optional (HTTPS) | Required (TLS) |

## Cleanup

Stop the servers with `Ctrl+C` in their respective terminals.

## Notes

- HTTP/2 requires HTTPS/TLS
- Self-signed certificates are used for demo purposes
- In production, use proper CA-signed certificates
- HTTP/2 is automatically negotiated by modern browsers