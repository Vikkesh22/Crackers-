// routes/cracker.js
const express = require('express');
const Cracker = require("../model/Cracker")

const router = express.Router();

// Get all crackers
router.get('/', async (req, res) => {
  try {
    const crackers = await Cracker.find();
    res.json(crackers);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Add a new cracker
router.post('/add-cracker', async (req, res) => {
  const { name, quantity, price, image } = req.body;

  try {
    const newCracker = new Cracker({ name, quantity, price, image });
    await newCracker.save();
    res.json(newCracker);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
