import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';

function AdminDashboard() {
  const navigate = useNavigate();
  
  const [categories, setCategories] = useState([]);
 
  return (
    <div>
      <h1>Welcome Administrator</h1><br></br><br></br>
      {/* <h3>Select a category to browse services:</h3> */}
      <div>
     <Link type='submit' className='btn btn-outline-primary mx-2' to="/Customers">View All Customer</Link><br></br><br></br>
      <Link type='submit' className='btn btn-outline-primary mx-2' to="/ServiceProviders">View All Service Providers</Link><br></br><br></br>
      <Link type='submit' className='btn btn-outline-primary mx-2' to="/AllBookings">View All Bookings</Link><br></br><br></br>
      <Link type='submit' className='btn btn-outline-primary mx-2' to="/ManageCategories">Manage categories</Link><br></br>
      {/* <Link type='submit' className='btn btn-outline-primary mx-2' to="/CustomerBookings">View All Bookings</Link><br></br> */}

      
      
      
      
      </div>
      <div className="category-cards">
        {categories.map((category) => (
          <div>
         
            {/* <button onClick={() => handleClick(category.id)}>
                View Services
              </button> */}
            <h4>{category.catName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}



export default AdminDashboard