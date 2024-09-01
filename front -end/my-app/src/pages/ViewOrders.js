import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ViewOrders.css';

const ViewOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const res = await axios.get('/api/orders');
                setOrders(res.data);
            } catch (err) {
                console.error('Failed to fetch orders:', err.message);
            }
        };
        fetchOrders();
    }, []);

    return (
        <div className="view-orders">
            <h2>Customer Orders</h2>
            <ul>
                {orders.map(order => (
                    <li key={order._id}>
                        <h3>{order.customer_name}</h3>
                        <p>Address: {order.customer_address}</p>
                        <p>Mobile No: {order.customer_mobileNo}</p>
                        <h4>Crackers Ordered:</h4>
                        <ul>
                            {order.crackers_list.map(item => (
                                <li key={item.cracker_id._id}>
                                    {item.cracker_id.name} - {item.quantity} units
                                </li>
                            ))}
                        </ul>
                        <p>Total Price: ₹{order.totalPrice}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ViewOrders;
