const mongoose = require('mongoose');

const cropPlanSchema = new mongoose.Schema({
  cropName: {
    type: String,
    required: true
  },
  plantingDate: {
    type: Date,
    required: true
  },
  harvestDate: {
    type: Date,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false  // Can be made required if user authentication is implemented
  }
});

module.exports = mongoose.model('CropPlan', cropPlanSchema);
