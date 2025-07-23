MERN testing
A full-stack MERN (MongoDB, Express.js, React.js, Node.js) application for reporting, tracking, and managing bugs. It supports creating, updating, deleting bugs, and includes testing for both backend and frontend.

Project Setup
1. Clone the Repository

git clone https://github.com/<repo-name>.git
cd mern-testing
2. Install Dependencies
Backend

cd server
npm install
Frontend

cd ../client
npm install
3. Environment Variables
Create a .env file in the server/ folder with the following:


PORT=5000
MONGO_URI=...
JWT_SECRET=...
4. Start the Application
Backend

cd server
npm run dev
Runs the server on http://localhost:5000.

Frontend

cd client
npm run dev
Runs the React app (Vite) on http://localhost:5173 (or another port).

 Running Tests
Backend Tests (Jest & Supertest)

cd server
npm run test
Frontend Tests (React Testing Library)

cd client
npm run test
 Testing Approach
Backend:

Unit tests for validation and helper functions.

Integration tests for API endpoints (create, update, delete bugs).

Mock database calls using jest-mock.

Frontend:

Unit tests for UI components (e.g., bug form, buttons).

Integration tests to ensure correct API calls and UI updates.

Edge case tests for empty lists and error handling.

 Debugging Techniques
Console logs: For debugging variable values and flow.

Chrome DevTools: To inspect network requests and React state.

Node.js inspector: Run node --inspect server.js to debug backend.

React Error Boundaries: For handling crashes gracefully in React components.

 Project Structure

mern-testing/
├── client/             # React Frontend
│   ├── src/
│   │   ├── components/
│   │   ├── tests/
│   │   └── App.jsx
│   └── cypress/
├── server/             # Express Backend
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── middleware/
│   └── tests/
└── README.md
 Coverage
To generate coverage report:


npm run test -- --coverage
