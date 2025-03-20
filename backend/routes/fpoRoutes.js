const express = require('express');
const router = express.Router();
const FpoApplication = require('../models/FpoApplication');

// @desc    Submit FPO application
// @route   POST /api/fpo/apply
// @access  Public
router.post('/apply', async (req, res) => {
  try {
    const { name, phone, location, crop } = req.body;

    // Validate required fields
    if (!name || !phone || !location || !crop) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create new application
    const application = await FpoApplication.create({
      name,
      phone,
      location,
      crop
    });

    if (application) {
      res.status(201).json({
        success: true,
        message: 'Application submitted successfully',
        data: application
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid application data'
      });
    }
  } catch (error) {
    console.error(`Error in FPO application: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

// @desc    Get all FPO applications
// @route   GET /api/fpo/applications
// @access  Private (should be restricted in production)
router.get('/applications', async (req, res) => {
  try {
    const applications = await FpoApplication.find({}).sort({ applicationDate: -1 });

    res.status(200).json({
      success: true,
      count: applications.length,
      data: applications
    });
  } catch (error) {
    console.error(`Error fetching applications: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;
