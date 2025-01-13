
# API REST avec Node.js et MongoDB

The purpose of this project is to create a RESTful API for managing tasks (Todos) using Node.js, Express.js, and MongoDB. The application allows users to perform CRUD operations on their todos while leveraging JSON Web Tokens (JWT) for authentication.

## Features

- JWT-based authentication.

- CRUD operations for todos:

Create: Add new todos.

Read: Retrieve all todos or a specific todo by ID.

Update: Modify an existing todo by ID.

Delete: Remove a todo by ID.


## Folder Structure
```
project-root
|-- models
|   |-- todoModel.js  # Mongoose schema for todos
|   |-- userModel.js  # Mongoose schema for users
|
|-- routes
|   |-- todosRouter.js  # API routes for todos
|
|-- controllers
|   |-- todosController.js  # Functions to handle business logic
|
|-- middlewares
|   |-- authMiddleware.js  # Middleware for JWT authentication
|
|-- .gitignore  # Git ignore file
|-- server.js  # Main server file
|-- package.json  # Node.js dependencies
|-- .env  # Environment variables
```

## Prerequisites

- Node.js

- MongoDB

- Git

## Installation

 1. Clone the repository:
```bash
git clone <repository_url>
cd todoApp
```
 2. Install dependencies:
```bash
npm install
```
 3. Create a .env file in the root directory and add the following:

MONGO_URI=<Your MongoDB Connection String>
JWT_SECRET=<Your Secret Key>

 4. Start the server:
```
npm start
```
Or use Nodemon for development:
```
npx nodemon server.js
```
## API Endpoints

#### Base URL: http://localhost:3000


## Additional Notes

 - Ensure MongoDB is running locally or via a cloud provider (e.g., MongoDB Atlas).

 - Use strong, unique values for JWT_SECRET in the .env file.

 - Validate user input properly to prevent invalid or malicious data entries.

## License

This project is licensed under the MIT License.
