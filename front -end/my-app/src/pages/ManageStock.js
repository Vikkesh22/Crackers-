import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Stock.css"

const crackerData = [
  { _id: '1', name: 'Sparklers', quantity: 100, price: 156, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXjWw6EPppMHCiYbkZAMtLqxkQRncJMWVC7A&s' },
  { _id: '2', name: 'Flower Pots', quantity: 50, price: 457, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNbaI0xnpqZD_Rgp4Mv-YFUF65P2iyCALmLg&s' },
  { _id: '3', name: 'Chakras', quantity: 75, price: 570, image: 'chakras.jpg' },
  { _id: '4', name: 'Roman Candles', quantity: 60, price: 250, image: 'roman_candles.jpg' },
  { _id: '5', name: 'Fountains', quantity: 80, price: 344, image: 'fountains.jpg' },
  { _id: '6', name: 'Bombs', quantity: 90, price: 300, image: 'bombs.jpg' },
  { _id: '7', name: 'Rocket Assortments', quantity: 440, price: 40, image: 'rocket_assortments.jpg' },
  { _id: '8', name: 'Cracker Packs', quantity: 370, price: 12, image: 'cracker_packs.jpg' },
];

// ManageStock component
const ManageStock = ({ onCrackerUpdate }) => {
  const [crackers, setCrackers] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    fetchCrackers();
  }, []);

  const fetchCrackers = async () => {
    try {
      const res = await axios.get('http://localhost:4000/api/crackers');
      if (res.data.length === 0) {
        setCrackers(crackerData);
      } else {
        setCrackers(res.data);
      }
      if (onCrackerUpdate) {
        onCrackerUpdate(res.data);
      }
    } catch (err) {
      console.error('Failed to fetch crackers:', err.message);
      setCrackers(crackerData);
    }
  };

  const handleAddCracker = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:4000/api/crackers/add-cracker', { name, quantity, price });
      fetchCrackers();
    } catch (err) {
      console.error('Failed to add cracker:', err.message);
    }
  };

  return (
    <div className="manage-stock">
      <h2>Manage Cracker Stock</h2>
      <form onSubmit={handleAddCracker}>
        <input
          type="text"
          placeholder="Cracker Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <button type="submit">Add Cracker</button>
      </form>

      <h3>Current Stock:</h3>
      <ul>
        {crackers.map((cracker) => (
          <li key={cracker._id}>
            <img src={`images/${cracker.image}`} alt={cracker.name} width="50" />
            <span>{cracker.name}</span> - {cracker.quantity} units - ₹{cracker.price}
          </li>
        ))}
      </ul>
<button >
<Link to="/palce-order" >Place to Order </Link>
</button>

    </div>
  );
};
export default ManageStock;
