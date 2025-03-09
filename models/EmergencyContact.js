const express = require('express');
const EmergencyContact = require('../models/EmergencyContact');
const router = express.Router();

// Add an emergency contact
router.post('/add', async (req, res) => {
  const { name, phone, relationship, userId } = req.body;
  try {
    const contact = new EmergencyContact({ name, phone, relationship, user: userId });
    await contact.save();
    res.status(201).json(contact);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all emergency contacts for a user
router.get('/:userId', async (req, res) => {
  try {
    const contacts = await EmergencyContact.find({ user: req.params.userId });
    res.status(200).json(contacts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
