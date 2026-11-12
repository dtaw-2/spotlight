# Spotlight

Spotlight is a social media website for hairstylists and customers. The goal of the website is to make it easier for customers to find hairstylists based on things such as name, location, and specialty.

Hairstylists will eventually be able to create profiles, list their specialties and services, and manage their information. Customers will be able to search through stylists and view their profiles.

For Milestone 2, the original interface is being rebuilt with React and connected to a RESTful Express API.

## Technologies Used

- React
- Vite
- JavaScript
- HTML
- CSS
- Node.js
- Express
- Vitest
- Supertest
- Git
- GitHub

## Project Structure

```text
spotlight-new/
├── docs/
│   └── API_CONTRACT.md
├── public/
├── server/
│   ├── src/
│   │   ├── controllers/
│   │   │   └── stylistsController.js
│   │   ├── data/
│   │   │   └── stylists.js
│   │   ├── routes/
│   │   │   └── stylistsRoutes.js
│   │   ├── tests/
│   │   │   └── stylists.test.js
│   │   ├── app.js
│   │   └── server.js
│   ├── package.json
│   └── package-lock.json
├── src/
├── index.html
├── package.json
└── vite.config.js
```

## Frontend

The frontend is built with React and Vite.

To install the frontend dependencies, run:

```bash
npm install
```

To start the frontend development server, run:

```bash
npm run dev
```

Vite will display the local address for the frontend in the terminal.

## Spotlight API

The backend is built with Express and is located inside the `server` folder.

For Milestone 2, stylist data is stored in memory instead of using a database. Database persistence and authentication can be added in a later milestone.

### Run the Backend

Move into the server folder:

```bash
cd server
```

Install the backend dependencies:

```bash
npm install
```

Start the Express server:

```bash
npm start
```

The API runs at:

`http://localhost:3000`

## API Resource

The main API resource is a hairstylist.

A stylist contains information such as:

```json
{
  "id": 1,
  "name": "Berry Hands",
  "location": "Sharon, MA",
  "specialties": ["Braids"],
  "bio": "Protective styling and braiding services."
}
```

The full API contract can be found in:

`docs/API_CONTRACT.md`

## API Routes

### Get All Stylists

```text
GET /api/stylists
```

Returns all stylist profiles.

### Get One Stylist

```text
GET /api/stylists/:id
```

Returns a stylist based on their ID.

Example:

```text
GET /api/stylists/1
```

### Create a Stylist

```text
POST /api/stylists
```

Creates a new stylist profile.

Example request:

```json
{
  "name": "Nia Styles",
  "location": "Boston, MA",
  "specialties": ["Braids", "Natural Hair"],
  "bio": "Braiding and natural hair services."
}
```

### Update a Stylist

```text
PATCH /api/stylists/:id
```

Updates one or more fields for an existing stylist.

Example:

```json
{
  "location": "Cambridge, MA",
  "specialties": ["Braids", "Locs"]
}
```

### Delete a Stylist

```text
DELETE /api/stylists/:id
```

Deletes a stylist based on their ID.

## HTTP Status Codes

The API uses status codes that match the result of the request.

- `200 OK` - Request was successful
- `201 Created` - A new stylist was successfully created
- `204 No Content` - A stylist was successfully deleted
- `400 Bad Request` - The request contains missing or invalid information
- `404 Not Found` - The requested stylist does not exist

Errors are returned as structured JSON.

Example:

```json
{
  "error": {
    "code": "NOT_FOUND",
    "message": "Stylist not found."
  }
}
```

## Backend Tests

The backend uses Vitest and Supertest for route testing.

To run the tests:

```bash
cd server
npm test
```

The current route test checks that:

```text
GET /api/stylists
```

returns a successful `200` response and returns stylist data as an array.

## Current Backend Features

The Express API currently supports full CRUD functionality for stylists:

- Create a stylist
- Read all stylists
- Read one stylist
- Update a stylist
- Delete a stylist
- Handle invalid requests
- Handle missing stylist IDs
- Return structured JSON responses

## Git Workflow

Development work is completed on feature branches before being merged into the team development branch.

Examples of Milestone 2 branches include:

```text
feature/api-contract
feature/stylists-api
```

The API contract and backend are kept separate so changes can be reviewed before being merged into the main project.

## Team

Spotlight is being developed as a team project for CSC3050.

The project is being divided between frontend React development and backend/API development so both parts can later be connected into one application.