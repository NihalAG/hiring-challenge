# Backend Application

This is the backend application for the Ticket Management System.

## Prerequisites

- Node.js (v14 or above)
- MongoDB

## Getting Started

### 1. Clone the repository:

    ```
        git clone https://github.com/NihalAG/hiring-challenge
    ```
### 2. Install dependencies:
    ```
        cd backend
        npm install
    ```
### 3. Start the server:
Start the server:

Option 1: Using Node.js

    ```
        npm start
    ```
    
The server will start running on http://localhost:8080.

Option 2: Using Docker

```
    docker build -t backend-image .
    docker run -d -p 8080:8080 --name backend-container backend-image
```
    
The server will start running inside a Docker container on http://localhost:8080.

## API Documentation
The backend server provides the following RESTful API endpoints:

`GET /tickets`: Retrieves a list of all tickets sorted by deadline in descending order.
`POST /tickets`: Creates a new ticket.
`PUT /tickets/{id}`: Toggles the ticket status between open and closed.

Each ticket has the following properties: client, issue, status (open or closed), and deadline.