# Day 5 Final Exercise: Booking Endpoints

## Completed Endpoints

| Method | Endpoint | Successful Status | Purpose |
|---|---|---:|---|
| GET | `/api/bookings` | 200 | Returns all bookings, or an empty array when none exist. |
| GET | `/api/bookings/{id}` | 200 | Returns one booking by ID. An unknown ID returns 404. |
| POST | `/api/bookings` | 201 | Validates and creates a confirmed booking, then reduces the event's available seats. |
| DELETE | `/api/bookings/{id}` | 200 | Cancels a booking and restores its seats to the related event. |

The API also returns `400` for missing or invalid booking data and insufficient seats, `404` for unknown event or booking IDs, and `409` when a booking is already cancelled.

The requests in `rest-basics/requests.http` test all required success and error cases, plus the cancellation challenge.
