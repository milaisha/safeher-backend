const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String },
  emergencyContacts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'EmergencyContact' }],
});

module.exports = mongoose.model('User', userSchema);
