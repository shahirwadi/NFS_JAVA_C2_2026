# NFS_JAVA_C2_2026 | Full-Stack Development with Java, React & MongoDB



## Programme Description



This 20-day programme is designed to help participants build a complete full-stack web application using Java, Spring Boot, React, and MongoDB.



The programme takes learners from programming and web fundamentals to backend API development, frontend interface design, database modelling, authentication, testing, performance improvement, and final capstone presentation.



Throughout the programme, participants will work on practical exercises and gradually build a small but production-like web application. The final outcome is a working capstone project that demonstrates the use of a React frontend, Spring Boot backend, MongoDB database, secure authentication, API documentation, testing practices, and deployment-readiness basics.



AI tools such as Gemini are used as learning accelerators to help scaffold examples, suggest refactoring ideas, draft tests, generate sample data, and support MongoDB query or aggregation design. However, participants are expected to review, verify, understand, and take ownership of all generated code.



---



## Programme Duration



* Duration: 20 training days

* Daily Duration: 7 hours per day

* Total Training Hours: 140 hours

* Mode: Instructor-led training with guided labs, team build activities, review sessions, quizzes, and capstone development



---



## Programme Objectives



By the end of this programme, participants will be able to:



* Understand web fundamentals, HTTP, REST, and JSON.

* Write basic to intermediate Java and JavaScript code.

* Build REST APIs using Spring Boot.

* Apply validation, authentication, authorisation, and error-handling practices.

* Model data effectively using MongoDB.

* Use MongoDB indexes, queries, pagination, and aggregation pipelines.

* Build accessible React user interfaces with routing, forms, state, and data fetching.

* Apply testing practices for backend and frontend development.

* Use AI coding assistants responsibly for learning, refactoring, testing, and documentation.

* Design, build, document, and present a full-stack capstone project.



---





---



## AI-Assisted Learning Guidelines



Participants may use AI tools to:



* Generate README drafts and documentation sections.

* Create API call examples and JSON payload samples.

* Suggest method signatures and edge cases.

* Propose refactoring options.

* Draft test scenarios for backend and frontend features.

* Suggest MongoDB document structures, queries, indexes, and aggregation pipelines.

* Improve demo scripts and presentation notes.



Participants must always review, verify, test, and understand any AI-generated output. No passwords, API keys, tokens, private keys, or confidential data should be placed into AI prompts.

## README reflection
When getCourseById("C004") is called, which file does the request go to first, second, and third?

1. **First → `CourseService.java`**
   The demo class calls `courseService.getCourseById("C004")`.
   The request enters the service layer first.

2. **Second → `CourseRepository.java`**
   `CourseService` calls the repository interface method `findById("C004")`.
   The request passes through the interface contract.

3. **Third → `InMemoryCourseRepository.java`**
   The actual implementation executes the lookup from the in-memory data structure.
   The matching `Course` object is found and returned back up the chain.

Why is InMemoryCourseRepository temporary storage?
- Because it stores data inside a LinkedHashMap that only lives in memory while the program is running. The moment  the application stops, everything is gone. 

What would probably replace it later when we use MongoDB?
- A MongoCourseRepository that implements the same CourseRepository interface, but instead of using a LinkedHashMap, its methods talk to a real MongoDB database. Because both classes implement the same interface.

Why is throwing CourseNotFoundException better than printing inside CourseService?
- Throwing CourseNotFoundException is better than printing inside CourseService because the service has no idea who is calling it or how that caller wants to show the error. A console demo might print a plain message. A Spring Boot REST controller would return a 404 JSON response. A frontend might show a toast notification or a modal. If the service printed the error itself, you'd be locked into one fixed behaviour with no way to change it per caller. By throwing the exception, the service just reports what went wrong, and every caller handles it in whatever way makes sense for its context.