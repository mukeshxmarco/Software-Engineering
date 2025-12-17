# Webhooks

## What are Webhooks?

Webhooks are often referred to as "reverse APIs" or "push APIs". They are a way for an app to provide other applications with real-time information. A webhook delivers data to other applications as it happens, meaning you get data immediately.

Unlike typical APIs where you would need to poll for data very frequently in order to get it real-time, webhooks let you skip the polling and just receive the data when an event occurs.

## How it Works

1.  **Setup**: The consumer (client) registers a URL (the "hook") with the provider (server).
2.  **Event**: An event occurs in the provider's system (e.g., a payment is received, a code is pushed).
3.  **Notification**: The provider makes an HTTP POST request to the URL configured by the consumer.
4.  **Payload**: The request contains a payload (usually JSON) with details about the event.

## Why We Need It & When to Use

Webhooks are efficient because they eliminate the need for polling.

**Use Webhooks when:**
*   **Event Notifications**: Payment confirmations (Stripe, PayPal), build status updates (CI/CD).
*   **Data Sync**: Syncing data between systems when a change occurs.
*   **Asynchronous Processing**: Triggering a workflow in another system.

## Pros and Cons

| Pros | Cons |
| :--- | :--- |
| **Real-time**: Immediate data delivery when events occur. | **Reliability**: If the receiving server is down, data might be lost unless the provider has a retry mechanism. |
| **Efficiency**: Eliminates the need for constant polling, saving resources on both client and server. | **Debugging**: Can be difficult to test and debug locally (requires tunneling tools like ngrok). |
| **Simplicity**: Easy to implement for consumers (just an HTTP endpoint). | **Security**: Endpoints must be secured to prevent fake events (requires signature verification). |
| **Automation**: Perfect for triggering automated workflows. | **Ordering**: Events may not always arrive in the exact order they occurred. |
