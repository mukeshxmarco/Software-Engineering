
# Browser Caching

## What is Browser Cache?

Browser cache stores **static resources locally** (HTML, CSS, JavaScript, images, fonts) so that repeated requests **do not hit the server again**.

**Goal:**

* Faster page load
* Lower server load
* Reduced bandwidth usage

---

## Why Browser Cache Matters (Engineering View)

* Improves performance & Core Web Vitals
* Reduces backend traffic
* Saves CDN & server cost
* Critical for scalable web applications

---

## Cache Flow (Simplified)

### First Request (Cache Miss)

Browser → Server → Response + Cache Headers → Stored in Cache

### Next Request (Cache Hit)

Browser → Cache → Response served (No server call)

---

## What Gets Cached?

* CSS and JavaScript bundles
* Images and fonts
* Static HTML pages
* Public GET API responses (if allowed)

**Do NOT cache:**

* Authentication tokens
* User-specific data
* OTPs and sensitive responses

---

## Core HTTP Cache Headers (Must Know)

### Cache-Control (Most Important)

Example:
Cache-Control: public, max-age=3600

Common directives:

* **max-age** → cache duration (in seconds)
* **no-store** → never cache
* **no-cache** → revalidate with server
* **public** → browser + CDN cache
* **private** → browser only

---

### ETag (Revalidation-Based Cache)

Server sends:

* ETag: `"v1.0.3"`

Browser sends:

* If-None-Match: `"v1.0.3"`

Server response:

* **304 Not Modified** → use cached version
* **200 OK** → download new version

Used when content changes frequently and exact version comparison is required.

---

### Last-Modified (Time-Based Validation)

Server:

* Last-Modified: `Tue, 10 Dec 2025 10:00:00 GMT`

Browser:

* If-Modified-Since: same timestamp

Less accurate than ETag but still used.

---

## Hard Cache vs Revalidation Cache

| Cache Type                          | Server Call | Performance |
| ----------------------------------- | ----------- | ----------- |
| Hard Cache (max-age valid)          | No          | Fastest     |
| Revalidation (ETag / Last-Modified) | Yes         | Slower      |

---

## Cache Decision Logic

Request
→ Check cache
→ Is cache valid (max-age)?

* Yes → Serve from cache
* No → Revalidate with server

  * 304 → Use cache
  * 200 → Update cache

---

## API Caching (Basics)

Cache only:

* GET requests
* Public, read-heavy endpoints

Example:

* Cache-Control: public, max-age=60

Never cache:

* Login / auth APIs
* User-specific responses

---

## Common Engineering Mistakes

* Caching authentication responses
* No versioning for JS/CSS files
* Overusing `no-cache`
* Ignoring difference between CDN cache and browser cache

---

## Best Practices

* Version static assets (`app.v2.js`)
* Use long max-age for static files
* Use no-store for sensitive data
* Combine browser caching with CDN caching
