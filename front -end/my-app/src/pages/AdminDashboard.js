import React from 'react';
import { Link } from 'react-router-dom';
import "./Admin.css"
 
const AdminDashboard = () => {
    return (
        <div className="admin-dashboard">
            <h2>Admin Dashboard</h2>
            <div className="dashboard-links">
                <Link to="/manage-stock">Manage Stock</Link>
                <Link to="/view-orders">View Orders</Link>
            </div>
        </div>
    );
};

export default AdminDashboard;
