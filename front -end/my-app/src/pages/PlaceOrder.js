import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Placeorder.css"

const PlaceOrder = () => {
  const [crackers, setCrackers] = useState([]);
  const [selectedCrackers, setSelectedCrackers] = useState([]);
  const [customerName, setCustomerName] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerMobileNo, setCustomerMobileNo] = useState('');
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchCrackers();
  }, []);

  const fetchCrackers = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/crackers');
      setCrackers(res.data);
    } catch (err) {
      console.error('Failed to fetch crackers:', err.message);
    }
  };

  const handleSelectCracker = (crackerId, price) => {
    setSelectedCrackers((prev) => {
      const existing = prev.find(item => item.crackerId === crackerId);
      if (existing) {
        return prev.map(item =>
          item.crackerId === crackerId ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { crackerId, quantity: 1, price }];
      }
    });
    setTotalPrice((prev) => prev + price);
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    try {
      const order = {
        customer_name: customerName,
        customer_address: customerAddress,
        customer_mobileNo: customerMobileNo,
        crackers_list: selectedCrackers.map(item => ({
          cracker_id: item.crackerId,
          quantity: item.quantity,
        })),
        totalPrice,
      };
      await axios.post('http://localhost:4000/api/place-order', order);
      alert('Order placed successfully!');
    } catch (err) {
      console.error('Failed to place order:', err.message);
    }
  };

  return (
    <div className="place-order">
      <h2>Place Your Order</h2>
      <form onSubmit={handlePlaceOrder}>
        <input
          type="text"
          placeholder="Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={customerAddress}
          onChange={(e) => setCustomerAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Mobile No"
          value={customerMobileNo}
          onChange={(e) => setCustomerMobileNo(e.target.value)}
          required
        />
        <h3>Select Crackers:</h3>
        {crackers.map((cracker) => (
          <div key={cracker._id}>
            <img src={`images/${cracker.image}`} alt={cracker.name} width="50" />
            <span>{cracker.name} - ₹{cracker.price}</span>
            <button type="button" onClick={() => handleSelectCracker(cracker._id, cracker.price)}>
              Add
            </button>
          </div>
        ))}
        <h3>Total Price:₹{totalPrice}</h3>
        <button type="submit">Place Order</button>
      </form>
    </div>
  );
};


export default PlaceOrder;
