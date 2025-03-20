# Agricultural Web Application

A web application for farmers that includes FPO membership application and crop planning features.

## Features

- FPO (Farmer Producer Organization) membership application submission
- Crop planning tool to manage planting and harvest schedules
- MongoDB database integration for data storage

## Project Structure

```
project/
├── backend/            # Server-side code
│   ├── config/         # Configuration files
│   ├── models/         # MongoDB schemas
│   ├── routes/         # API route handlers
│   ├── .env            # Environment variables
│   └── server.js       # Express server
├── frontend/           # Client-side code
│   ├── css/            # Stylesheets
│   ├── js/             # JavaScript files
│   ├── pages/          # HTML pages
│   └── index.html      # Main page
└── README.md           # Documentation
```

## Prerequisites

- Node.js (v14+)
- MongoDB (local or Atlas)

## Setup and Installation

1. Clone the repository:
   ```
   git clone <repository_url>
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Configure environment variables:
   - Rename `.env.example` to `.env` if needed
   - Update the MongoDB URI in `.env` file

4. Start the backend server:
   ```
   npm run server
   ```

5. Open the frontend in your browser:
   - Navigate to `frontend/index.html` directly in your browser
   - Or run a simple HTTP server:
     ```
     cd frontend
     npx http-server
     ```

## API Endpoints

### FPO Applications
- `POST /api/fpo/apply` - Submit a new FPO membership application
- `GET /api/fpo/applications` - Get all FPO applications

### Crop Planning
- `POST /api/crops` - Create a new crop plan
- `GET /api/crops` - Get all crop plans
- `DELETE /api/crops/:id` - Delete a crop plan

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **ODM**: Mongoose
