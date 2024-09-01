// routes/order.js
const express = require('express');
const Order = require("../model/Order")
const router = express.Router();

// Place a new order
router.post('/place-order', async (req, res) => {
  const { customer_name, customer_address, customer_mobileNo, crackers_list, totalPrice } = req.body;

  try {
    const newOrder = new Order({
      customer_name,
      customer_address,
      customer_mobileNo,
      crackers_list,
      totalPrice,
    });

    await newOrder.save();
    res.json({ msg: 'Order placed successfully!' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all orders
router.get('/orders', async (req, res) => {
  try {
    const orders = await Order.find().populate('crackers_list.cracker_id');
    res.json(orders);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
