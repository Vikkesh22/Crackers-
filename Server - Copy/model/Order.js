
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  customer_name: { type: String, required: true },
  customer_address: { type: String, required: true },
  customer_mobileNo: { type: String, required: true },
  crackers_list: [
    {
      cracker_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Cracker' },
      quantity: { type: Number, required: true },
    },
  ],
  totalPrice: { type: Number, required: true },
  orderDate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Order', OrderSchema);
