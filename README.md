# **Challenge: Building a Support Ticket System**

Your task is to build a Support Ticket System application that allows users to create Support Tickets. The application should consist of a backend API and a frontend interface.

**Requirements:**

1. Backend:

   - [x] Use TypeScript, MongoDB, Mongoose, and Express.js to create a RESTful API.
   - [x] Implement the following endpoints:
     - [x] GET `/tickets`: Retrieve a list of all tickets sorted by deadline desc.
     - [x] POST `/tickets`: Create a new ticket.
     - [x] PUT `/tickets/{id}`: Update the ticket.
   - [x] Each ticket should have the following properties: `client`, `issue`, `status('open', 'closed')` and `deadline`.

2. Frontend:

   - [x] Use TypeScript, Reactjs, Material UI, and Styled Components to create the user interface.
   - [x] The frontend should display a list of tickets, including their client name, issue message, deadline and status.
   - [x] The ticket status should be an icon with variants in 3 colors depending on the following cases:

     - [x] Green: status = closed
     - [x] Yellow: status = open AND today < deadline
     - [x] Red: status = open AND today > deadline

   - [x] Users should be able to change tickets status using a slider button
   - [x] Include a button that will generate random ticket with dates between now - 2 days and now + 2 days, random client name, random issue message and save it using the REST API everytime it's clicked

     - [x] Extra: Use Debounce to avoid concurrent generation of tickets.
        - [x] Disabled the button to avoid concurrent ticket generation

   **Check the UI images at the end of the requirements.**

3. General Requirements:

   - [x] Use appropriate error handling and validation techniques throughout the application.
   - [x] Write clean and maintainable code, following SOLID principles and design patterns.
   - [x] Provide clear instructions on how to set up and run the application.

4. Extra

   - [ ] Include unit tests for critical parts of the application (e.g., API endpoints, data validation).
   - [x] Containerise both applications using docker
   - [x] Provide a docker compose file to spin up the application locally.

   ![1688398030985](image/README/1688398030985.png)

**Deliverables:**

- Provide a GitHub repository with your code.
- Include a README file with instructions on how to set up and run the application.
   - Backend: https://github.com/NihalAG/hiring-challenge/blob/main/backend/README.md
   - Frontend: https://github.com/NihalAG/hiring-challenge/blob/main/frontend/README.md 
- You can also include any additional documentation or comments to explain your design choices or assumptions.
