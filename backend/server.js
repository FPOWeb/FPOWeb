const express = require('express');
const dotenv = require('dotenv'); //module that loads that load variables from .env file
const cors = require('cors'); //module that allows for cross-origin resource sharing
const connectDB = require('./config/db');
const path = require('path');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

// Initialize express
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Root route
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the Agricultural Web Application API',
    apiEndpoints: {
      fpo: '/api/fpo',
      crops: '/api/crops'
    }
  });
});

// Define routes
app.use('/api/fpo', require('./routes/fpoRoutes'));
app.use('/api/crops', require('./routes/cropRoutes'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend', 'index.html'));
  });
}

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Server Error',
    error: process.env.NODE_ENV === 'production' ? null : err.message
  });
});

// Set port and start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
