import React from 'react'
import { Link,useNavigate  } from 'react-router-dom'; 
import "./Navbar.css"
const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); // Remove the token from local storage
    navigate('/customer-login'); // Redirect to the login page
  };
  return (
<nav className='navbar'>
    <div className='navbar-brand'>Vendor Management</div>
    <ul className='navbar-links'>
<li><Link to="/">Home  </Link></li>

<li><Link to="/manage-stock">Manage Stock </Link></li>

<li><Link to="/customer-signup">Customer Register</Link></li>
<li><Link to="/customer-login">Customer Login</Link></li>

<li><Link to="/palce-order">Place Order</Link></li>
<li><button onClick={handleLogout} className='logout-button'>Logout</button></li>


    </ul>
</nav>
  )
}

export default Navbar;