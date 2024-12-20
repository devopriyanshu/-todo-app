
# Todo Application

This repository contains a full-stack Todo application that adheres to the SOLID principles, ensuring clean, maintainable, and scalable code. The application consists of a Node.js backend and a React frontend, working together seamlessly to provide a secure and efficient user experience. 
## Overview

The Todo application allows users to register, log in, and manage their personal list of tasks. Users can:

Create new todos

Update existing todos

Mark todos as completed

Delete todos

The architecture is designed to respect the SOLID principles, promoting a codebase that's easy to understand, modify, and extend.
## Key Concepts and Principles

SOLID Principles:

Single Responsibility: Each component, service, and route handler has a single, clear purpose.

Open/Closed: The code is structured to allow extension without modifying existing code (e.g., adding new features by extending services or models).

Liskov Substitution: Interchangeable components ensure that functions expecting a certain interface can work with any class implementing that interface.

Interface Segregation: Smaller, more focused interfaces or contracts ensure that components only depend on what they need.

Dependency Inversion: High-level modules do not depend on low-level modules; both depend on abstractions. For example, the backend logic depends on an abstract data model, not directly on a specific database implementation.

Authentication and Authorization:

The backend uses JWT tokens to authenticate requests.
A protect middleware ensures only authenticated users can access protected routes.

Users can only view or modify their own todos, enforcing proper authorization checks.

Separation of Concerns:

Backend: Handles business logic, database interactions, and API endpoints.
Frontend: Handles UI, state management, and user interactions.

This separation ensures each layer can evolve independently.

Client-Server Interaction:

The frontend communicates with the backend via RESTful APIs.

The backend returns JSON responses, allowing the frontend to easily parse and display data.
## Technologies Used

Backend (Node.js/Express)

Node.js: JavaScript runtime for building fast and scalable server-side applications.

Express: A minimalist web framework for handling routing and middleware.
Mongoose: For interacting with MongoDB, providing a schema-based solution for model definitions.

JWT (jsonwebtoken): For secure authentication and authorization.

bcryptjs: For hashing and comparing passwords securely.

Frontend (React)

React: A library for building user interfaces using components.

React Router: For handling client-side routing and protected routes.

React Query (@tanstack/react-query): For managing server state, caching, and re-fetching data efficiently.

Axios: For making HTTP requests to the backend API.

Tailwind CSS: For rapid, utility-first styling of components.

Tooling

ESLint & Prettier: For maintaining code quality and consistency.

dotenv: For managing environment variables (e.g., database URL, JWT secret).
## Technologies Used

Backend (Node.js/Express)

Node.js: JavaScript runtime for building fast and scalable server-side applications.

Express: A minimalist web framework for handling routing and middleware.
Mongoose: For interacting with MongoDB, providing a schema-based solution for model definitions.

JWT (jsonwebtoken): For secure authentication and authorization.

bcryptjs: For hashing and comparing passwords securely.

Frontend (React)

React: A library for building user interfaces using components.

React Router: For handling client-side routing and protected routes.

React Query (@tanstack/react-query): For managing server state, caching, and re-fetching data efficiently.

Axios: For making HTTP requests to the backend API.

Tailwind CSS: For rapid, utility-first styling of components.

Tooling

ESLint & Prettier: For maintaining code quality and consistency.

dotenv: For managing environment variables (e.g., database URL, JWT secret).