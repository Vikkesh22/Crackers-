import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./singup.css"

function RegisterPage() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'customer',  
    });

    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting form:", formData);
        try {
            const response = await axios.post('http://localhost:4000/api/auth/register', formData);
            console.log("Response:", response.data);
            alert('Registration successful! You can now log in.');
            setFormData({ username: '', email: '', password: '', role: 'customer' }); // Reset form data
            navigate('/');
        } catch (err) {
            console.error("Error:", err.response ? err.response.data.error : err.message);
            alert('Error during registration. Please try again.');
        }
    };
    
    
    return (
        <div className='register-container'>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="username" 
                    value={formData.username} 
                    onChange={handleInputChange} 
                    placeholder="Username" 
                    required 
                />
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="Email" 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleInputChange} 
                    placeholder="Password" 
                    required 
                />
                <select name="role" value={formData.role} onChange={handleInputChange}>
                    <option value="developer">Customer</option>
                    <option value="admin">Admin</option>
                </select>
                <button   type="submit">Register</button>
 
            </form>
        </div>
    );
}

export default RegisterPage;
