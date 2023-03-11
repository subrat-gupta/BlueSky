import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function ServiceProviderDashboard() {

  const navigate = useNavigate();
  const bookingId = sessionStorage.getItem('bookingId');
  const spId = sessionStorage.getItem('spId');
  const[users,setTable1]=useState([]);
  const[users1,setTable2]=useState([]);


  const fetchAllBookings = () => {
  // useEffect(() => {
    axios.get(`http://localhost:8080/serviceprovider/bookings`)
      .then(response => {
        console.log(response.data);
        setTable1(response.data);
        
      })
      .catch(error => {
        console.log(error);
      });
  // }, []);
    };
    useEffect(() => {
      fetchAllBookings();
  
      const interval = setInterval(() => {
        fetchAllBookings();
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  const fetchBookings = () => {
  // useEffect(() => {
    const spId = sessionStorage.getItem('spId');
    axios.get(`http://localhost:8080/serviceprovider/${spId}/bookings`)
      .then(response => {
        console.log(response.data);
        setTable2(response.data);
        
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
      }, 1100);
  
      return () => clearInterval(interval);
    }, []);
  const handleServiceClick = (id) => {
   
    sessionStorage.setItem('bookingId', id);
    const spId = sessionStorage.getItem('spId');
    const bookingId = sessionStorage.getItem('bookingId');
    axios.put(`http://localhost:8080/serviceprovider/updateStatus/${bookingId}/${spId}`)
    Swal.fire({
      icon: "success",
      title: "Booking Accepted",
      text: ""
  })


    navigate(`/ServiceProviderDashboard`)
  };
  return (
    <>
    <div className='container'>
      <div className='py-4'>
        <h4>Service Request Available</h4>
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
      users.map((table1,index)=>(
        <tr key={table1.id}>
        {/* <th scope="row" key={index}>{index+1}</th> */}
        <td>{table1.id}</td>
        <td>{table1.dobooking}</td>
        <td>{table1.service_id.sname}</td>   
        <td>{table1.service_id.sprice}</td>   
        <td>{table1.payment_id}</td>  
        <td>{table1.status}</td>        
       
        <td>
        <button
                    type="button"
                    className="btn btn-success"
                    onClick={() => handleServiceClick(table1.id)}
                  >
                    Accept
                  </button>
          {/* <Link type='submit' className='btn btn-danger mx-2' to="/CustomerServices">Cancel</Link> */}
          </td>
        
      </tr>
      ))
    }
   
    
  </tbody>
</table>
      </div>
    </div>




<div className='container'>
<div className='py-4'>
  <h4>Your Accepted Services</h4>
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
users1.map((table2,index)=>(
  <tr key={table2.id}>
  {/* <th scope="row" key={index}>{index+1}</th> */}
  <td>{table2.id}</td>
  <td>{table2.dobooking}</td>
  <td>{table2.service_id.sname}</td>   
  <td>{table2.service_id.sprice}</td>   
  <td>{table2.payment_id}</td>  
  <td>{table2.status}</td>        
 
  <td>
  {/* <button
              type="button"
              className="btn btn-success"
              onClick={() => handleServiceClick(table2.id)}
            >
              Accept
            </button> */}
    {/* <Link type='submit' className='btn btn-danger mx-2' to="/CustomerServices">Cancel</Link> */}
    </td>
  
</tr>
))
}


</tbody>
</table>
</div>
</div>
</>
  )
}
