import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
export default function CustomerBookings() {

  const navigate = useNavigate();
  const bookingId = sessionStorage.getItem('bookingId');
   
  const[users,setServices]=useState([]);


  const fetchBookings = () => {
  // useEffect(() => {
    const customerId = sessionStorage.getItem('customerId');
    axios.get(`http://localhost:8080/customer/${customerId}/bookings`)
      .then(response => {
        console.log(response.data);
        setServices(response.data);
        
      })
      .catch(error => {
        console.log(error);
      });
  // }, []);
    };

  useEffect(() => {
    fetchBookings();

    const interval = setInterval(() => {
      fetchBookings();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  
  const handleServiceClick = (id) => {
   
    sessionStorage.setItem('bookingId', id);
    navigate(`customer/cancelBookings/${bookingId}`)
  };
  return (
    <div className='container'>
      <div className='py-4'>
        <h4>Your Bookings</h4>
        <Link type='submit' className='btn btn-outline-primary mx-2' to="/CustomerDashboard" style={{ float: 'right' }}>Home</Link><br></br>

      <table className="table border shadow">
  <thead>    
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Booking Date & Time</th>
      <th scope="col">Service</th>
      <th scope="col">Price</th>
      <th scope="col">Paymentid</th>
      <th scope="col">Status</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((user,index)=>(
        <tr key={user.id}>
        {/* <th scope="row" key={index}>{index+1}</th> */}
        <td>{user.id}</td>
        <td>{user.dobooking}</td>
        <td>{user.service_id.sname}</td>   
        <td>{user.service_id.sprice}</td>   
        <td>{user.payment_id}</td>  
        <td>{user.status}</td>        
       
        <td>
        <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleServiceClick(user.id)}
                  >
                    Cancel
                  </button>
          </td>
        
      </tr>
      ))
    }
   
    
  </tbody>
</table>
      </div>
    </div>
  )
}
