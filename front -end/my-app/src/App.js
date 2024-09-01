import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import ManageStock from "./pages/ManageStock";
import Login from "./pages/Login"
import CustomerSignup from "./pages/CustomerSingup";
import PlaceOrder from './pages/PlaceOrder';
import AdminDashboard from './pages/AdminDashboard';
import ViewOrders from './pages/ViewOrders';






const App = () => {
  return (
    <Router>

        <Navbar />
  
          <Routes>
     <Route path='/' element={<Homepage />} />
     <Route path='/customer-login'  element={<Login />}/>
     <Route path='/manage-stock' element={< ManageStock />} />
<Route path='/admin-dashboard' element={<AdminDashboard/>}/>
     <Route path='/customer-signup' element={<CustomerSignup />} />
  <Route  path='/view-orders' element={<ViewOrders />}/>
  <Route  path='/palce-order' element={<PlaceOrder/>}/>
    


          </Routes>
      
    </Router>
  );
};

export default App;

