const express = require('express');
const router = express.Router();
const CropPlan = require('../models/CropPlan');

router.post('/', async (req, res) => {
  try {
    const { cropName, plantingDate, harvestDate, quantity } = req.body;

    // Validate required fields
    if (!cropName || !plantingDate || !harvestDate || !quantity) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields'
      });
    }

    // Create new crop plan
    const cropPlan = await CropPlan.create({
      cropName,
      plantingDate,
      harvestDate,
      quantity,
      // userId: req.user._id  // Uncomment when authentication is implemented
    });

    if (cropPlan) {
      res.status(201).json({
        success: true,
        message: 'Crop plan created successfully',
        data: cropPlan
      });
    } else {
      res.status(400).json({
        success: false,
        message: 'Invalid crop plan data'
      });
    }
  } catch (error) {
    console.error(`Error creating crop plan: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});


router.get('/', async (req, res) => {
  try {
    const cropPlans = await CropPlan.find({}).sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: cropPlans.length,
      data: cropPlans
    });
  } catch (error) {
    console.error(`Error fetching crop plans: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const cropPlan = await CropPlan.findById(req.params.id);

    if (!cropPlan) {
      return res.status(404).json({
        success: false,
        message: 'Crop plan not found'
      });
    }


    await cropPlan.remove();

    res.status(200).json({
      success: true,
      message: 'Crop plan removed'
    });
  } catch (error) {
    console.error(`Error deleting crop plan: ${error.message}`);
    res.status(500).json({
      success: false,
      message: 'Server error',
      error: error.message
    });
  }
});

module.exports = router;
