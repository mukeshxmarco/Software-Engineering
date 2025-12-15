# MAC Address

## What is a MAC Address?

A **MAC Address (Media Access Control Address)** is a **unique hardware identifier** assigned to every **network interface** such as a mobile phone, laptop, Wi-Fi card, or Ethernet card.

- It is stored **permanently in the network hardware**
- Assigned by the device manufacturer (Intel, Broadcom, Qualcomm, etc.)
- Example format: `00:1A:2B:3C:4D:5E`


A MAC address can be thought of as the **fingerprint of a device** within a local network.

---

## Why is a MAC Address Used?

MAC addresses are used to **identify devices inside a local network (LAN)** and to ensure data reaches the **correct physical device**.

Main uses:
- Identifying devices in a local network
- Helping switches forward data to the correct port
- Supporting DHCP for IP address assignment
- Network security (MAC filtering)

> **Without MAC addresses, local network communication is not possible**

---

## Where Does a MAC Address Work?

A MAC address operates at **Layer 2 (Data Link Layer)** of the OSI Model.

It is used in:
- Home Wi-Fi networks
- Office LANs
- Network switches
- ARP (IP to MAC resolution)
- DHCP reservations

⚠️ Important:
- MAC addresses **do not travel across the internet**
- They are only valid **within the local network**

---

## How Does a MAC Address Work?

Example:
- Laptop A wants to send data to Laptop B
- Both devices are connected to the same Wi-Fi network

### Step-by-step flow:
1. Laptop A knows the **IP address** of Laptop B
2. Laptop A uses **ARP** to ask:
 > “What is the MAC address of this IP?”
3. Laptop B replies with its MAC address
4. Laptop A sends data using:
 - Destination MAC = Laptop B’s MAC address
5. The switch forwards the data based on the MAC address

---

## Why is a MAC Address Important?

MAC addresses are important because:
- Network switches work using **MAC addresses, not IPs**
- Local data delivery is impossible without MAC addresses
- They help in network troubleshooting
- Enable device-level security controls
- Provide a **stable identity** for a device

> IP addresses can change, but **MAC addresses usually remain the same**

---

## MAC Address vs IP Address

| Feature | MAC Address | IP Address |
|-------|------------|-----------|
| Type | Hardware address | Logical address |
| OSI Layer | Layer 2 (Data Link) | Layer 3 (Network) |
| Assigned by | Manufacturer | Router / ISP |
| Changes? | Rarely | Frequently |
| Scope | Local network only | Local + Internet |
| Example | 00:1A:2B:3C:4D:5E | 192.168.1.10 |

### Simple analogy:
- **IP Address** = Home address
- **MAC Address** = Room number inside the home

Delivery process:
- Reach the house → IP address
- Reach the correct room → MAC address
