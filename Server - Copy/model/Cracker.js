// models/Cracker.js
const mongoose = require('mongoose');

const CrackerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
  image: { type: String },
});

module.exports = mongoose.model('Cracker', CrackerSchema);
