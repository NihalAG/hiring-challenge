# Frontend Application

This is the frontend application for the Ticket Management System.

## Prerequisites

- Node.js (v14 or above)
- Docker

## Getting Started

1. Clone the repository:

    git clone https://github.com/NihalAG/hiring-challenge

### 2. Install dependencies:

    cd frontend
    npm install

### 3. Start the server:
Start the server:

Option 1: Using Node.js

    npm start
    
The server will start running on http://localhost:3000.

Option 2: Using Docker

    docker build -t frontend-image .
    docker run -d -p 3000:3000 --name frontend-container frontend-image
    
The server will start running inside a Docker container on http://localhost:3000.
