const express = require('express');
const SafetyAlert = require('../models/SafetyAlert');
const router = express.Router();

// Send a safety alert
router.post('/send', async (req, res) => {
  const { userId, location } = req.body;
  try {
    const alert = new SafetyAlert({ userId, location });
    await alert.save();
    res.status(201).json(alert);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all safety alerts for a user
router.get('/:userId', async (req, res) => {
  try {
    const alerts = await SafetyAlert.find({ userId: req.params.userId });
    res.status(200).json(alerts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
