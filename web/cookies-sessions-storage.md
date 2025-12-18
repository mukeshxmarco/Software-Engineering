# Sessions, Cookies, LocalStorage & SessionStorage

## HTTP is Stateless

HTTP is a **stateless protocol**, which means each request is independent and the server does not automatically remember the client.
To maintain user identity across requests, **state management mechanisms** are required.

---

## Sessions (Server-Side State)

A **session** is a server-side mechanism used to **remember user identity** across multiple HTTP requests.

### How Sessions Work

1. User logs in with credentials
2. Server creates a session
3. A unique **session ID** is generated
4. Session ID is sent to the browser via a **cookie**
5. Browser sends this cookie with every request
6. Server validates the session ID and processes the request

### Key Points

* Session data is stored on the **server**
* The cookie contains **only the session ID**, not user data
* Avoids repeated database authentication checks

### Drawbacks

* Memory-intensive on the server
* Not ideal for horizontal scaling
* Requires shared storage (e.g., Redis) in distributed systems

---

## Cookies

Cookies are **small key-value data** stored in the browser.

### Characteristics

* Automatically sent with HTTP requests
* Maximum size ~**4KB**
* Have expiration time
* Scoped to a specific domain

### Common Uses

* Session identification
* Authentication tokens
* User preferences

### Security Flags

* **HttpOnly** – not accessible via JavaScript
* **Secure** – sent only over HTTPS
* **SameSite** – helps prevent CSRF attacks

---

## SessionStorage

SessionStorage is **temporary browser storage**.

### Characteristics

* Data is scoped to a **single tab**
* Cleared when the tab is closed
* Storage size ~**5–10MB**
* Not sent with HTTP requests

### Use Cases

* Temporary UI state
* Form data limited to one tab

---

## LocalStorage

LocalStorage is **persistent browser storage**.

### Characteristics

* Shared across all tabs of the same origin
* Data persists until manually cleared
* Storage size ~**5–10MB**
* Accessible via JavaScript

### Drawbacks

* Vulnerable to XSS attacks
* Not suitable for sensitive data

---

## Comparison Table

| Feature           | Cookies         | SessionStorage | LocalStorage | Sessions       |
| ----------------- | --------------- | -------------- | ------------ | -------------- |
| Stored in         | Browser         | Browser        | Browser      | Server         |
| Sent with request | Yes             | No             | No           | Via cookie     |
| Max size          | ~4KB            | ~5–10MB        | ~5–10MB      | Depends        |
| Persistence       | Expiry-based    | Tab lifetime   | Manual       | Server-defined |
| Security          | High (HttpOnly) | Medium         | Low          | High           |

---

## When to Use What

* **Sessions** – Server-side authentication
* **Cookies** – Auth/session identification
* **SessionStorage** – Tab-specific temporary state
* **LocalStorage** – Non-sensitive persistent data
