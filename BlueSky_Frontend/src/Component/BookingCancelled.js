import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';
import { Button } from 'bootstrap';
export default function BookingCancelled() {
 
let navigate=useNavigate();
    const [user,setServices]=useState({
        
    });

    const customerId = sessionStorage.getItem('customerId');
    const serviceId = sessionStorage.getItem('serviceId');
    const categoryId = sessionStorage.getItem('categoryId');
    const bookingId = sessionStorage.getItem('bookingId');
    // const [services, setServices] = useState([]);

    useEffect(() => {
      
      axios.put(`http://localhost:8080/customer/cancelBooking/${bookingId}`)
        .then(response => {
          console.log(response.data);
          // setServices(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);


    // const handleServiceClick = (id) => {
    //   sessionStorage.setItem('serviceId', id);
    //   navigate(`customer/${customerId}/categories/${serviceId}`)
    // };

  return (
    <div className='container'>
      <div className='py-4'>
        <h2>Thankyou!!</h2>
      <table className="table border shadow">
  <thead>    
    <tr>
      <th scope="col">Your Booking has been cancelled.<br/><br/>Status will get updated shortly</th>

    </tr>
  </thead>
  <tbody>
 
        <td>
       
          <Link type='submit' className='btn btn-outline-primary mx-2' to="/CustomerBookings">View Bookings</Link>
          {/* <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    View all Bookings
                  </button> */}
          </td>
 
  </tbody>
</table>
      </div>
    </div>
  )
}

