import React from 'react'
import {Link} from "react-router-dom"
import "./Home.css"
const Homepage = () => {
  return (

    <>
  <div className="home-page">
      <h1>Welcome to the Vendor Management System</h1>
      
      
      <p>Manage your cracker stock and customer orders efficiently.</p>
    <img  src='https://img.freepik.com/free-vector/firework-crackers-pyrotechnic-dark-background-poster_1284-19540.jpg' alt='image'/>

    <div className='button-1'> 
<button><Link to="/manage-stock"> Stock </Link></button>
    </div>
    </div>
    
  
    </>
  
  )
}

export default Homepage;