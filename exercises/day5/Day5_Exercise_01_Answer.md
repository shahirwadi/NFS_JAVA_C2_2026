# Day 5 Exercise 5.1: HTTP Investigation

## Investigation Table

| Method | URL | Status Code | Response Type | What Happened? |
|---|---|---:|---|---|
| GET | `http://localhost:8081/api/health` | 200 | Single object | The request succeeded and returned the API health status. |
| GET | `http://localhost:8081/api/course-offerings` | 200 | List | The request succeeded and returned all course offerings. |
| GET | `http://localhost:8081/api/course-offerings/C001` | 200 | Single object | The request succeeded and returned the course offering with the ID `C001`. |
| GET | `http://localhost:8081/api/course-offerings/C999` | 404 | Error object | The request failed because a course offering with the ID `C999` does not exist. |
| POST | `http://localhost:8081/api/course-offerings` | 201 | Single object | The request succeeded because all required values were valid. The API created and returned a new course offering. |
| POST | `http://localhost:8081/api/course-offerings` | 400 | Error object | The request failed validation because the title, instructor, and start date were empty and the capacity was `0`. |

## Questions

1. **Which request returned a successful list response?**

   `GET http://localhost:8081/api/course-offerings` returned the list with status code `200`.

2. **Which request returned a not-found response?**

   `GET http://localhost:8081/api/course-offerings/C999` returned an error object with status code `404` because the course offering does not exist.

3. **Which request returned a validation error?**

   `POST http://localhost:8081/api/course-offerings` with empty required fields and a capacity of `0` returned an error object with status code `400`.

4. **What is the difference between a successful response and an error response?**

   A successful response means the server completed the request and returns the created data. An error response means the server could not complete the request and returns an error status code which indicates the problem.

5. **Why is the status code important for frontend developers?**

   The status code tells the frontend whether a request succeeded or failed. The frontend can then decide whether to display data, confirm that an item was created, show a not-found message, or show validation errors to the user.

## Reflection

I understand that REST response includes more than the response body. The HTTP status code explains the result of the request

## Completion Checklist

- [/] Tested at least five requests
- [/] Included at least one successful list request
- [/] Included at least one not-found request
- [/] Included at least one failed create request
- [/] Recorded the status code for every request
- [/] Explained what each response means
