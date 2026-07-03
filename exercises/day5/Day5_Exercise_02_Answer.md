# Day 5 Exercise 5.2: REST API Design

## API Specification

| Resource | Method | Endpoint | Purpose | Request Body Needed? | Success Status | Possible Error Status |
|---|---|---|---|---|---:|---:|
| Events | GET | `/api/events` | View all available events | No | 200 | 500 |
| Event | GET | `/api/events/{eventId}` | View the details of one event | No | 200 | 404 |
| Bookings | POST | `/api/bookings` | Create a booking for an event | Yes | 201 | 400, 404, 409 |
| Bookings | GET | `/api/bookings` | View all bookings | No | 200 | 500 |
| Booking | GET | `/api/bookings/{bookingId}` | View the details of one booking | No | 200 | 404 |
| Booking | PATCH | `/api/bookings/{bookingId}` | Change a booking's status to cancelled | Yes | 200 | 400, 404, 409 |

## Request Body Planning

| Endpoint | Request Body Description |
|---|---|
| `POST /api/bookings` | The event ID, customer name, customer email, and number of tickets required. |
| `PATCH /api/bookings/{bookingId}` | The new booking status, such as `CANCELLED`. |

GET requests do not need request bodies because they only retrieve existing resources.

## Error Planning

| Error Case | Related Endpoint | Suitable Status Code | Explanation |
|---|---|---:|---|
| The event does not exist | `GET /api/events/{eventId}` | 404 | No event matches the supplied event ID. |
| A required booking field is missing | `POST /api/bookings` | 400 | The submitted booking data is incomplete or invalid. |
| The selected event does not exist | `POST /api/bookings` | 404 | A booking cannot be created for an event that cannot be found. |
| The event is fully booked | `POST /api/bookings` | 409 | The request conflicts with the event's current availability. |
| The booking does not exist | `GET /api/bookings/{bookingId}` or `PATCH /api/bookings/{bookingId}` | 404 | No booking matches the supplied booking ID. |
| The booking is already cancelled | `PATCH /api/bookings/{bookingId}` | 409 | The requested status change conflicts with the booking's current state. |

## Why These Endpoints Follow REST Principles

- The endpoint names represent resources using nouns such as `events` and `bookings`. They do not use action-style names such as `/getEvents`, `/createBooking`, or `/cancelBooking`. The HTTP methods describe the actions: `GET` retrieves resources, `POST` creates a booking, and `PATCH` updates part of an existing booking. Individual resources are identified by IDs in the URL.

## Completion Checklist

- [/] Included at least six endpoints
- [/] Used resource-style URLs
- [/] Used suitable HTTP methods
- [/] Identified when a request body is needed
- [/] Included success status codes
- [/] Included possible error status codes
- [/] Explained at least two error cases
