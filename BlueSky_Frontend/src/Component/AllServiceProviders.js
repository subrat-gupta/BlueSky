import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
export default function AllServiceProvider() {

  const navigate = useNavigate();
  // const bookingId = sessionStorage.getItem('bookingId');
  // const spId = sessionStorage.getItem('spId');
  const[users,setTable1]=useState([]);
  const[users1,setTable2]=useState([]);


  const fetchAllBookings = () => {
  // useEffect(() => {
    axios.get(`http://localhost:8080/admin/serviceproviders`)
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
  // const fetchBookings = () => {
  // // useEffect(() => {
  //   const spId = sessionStorage.getItem('spId');
  //   axios.get(`http://localhost:8080/serviceprovider/${spId}/bookings`)
  //     .then(response => {
  //       console.log(response.data);
  //       setTable2(response.data);
        
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // // }, []);
  //   };

  //   useEffect(() => {
  //     fetchBookings();
  
  //     const interval = setInterval(() => {
  //       fetchBookings();
  //     }, 10000);
  
  //     return () => clearInterval(interval);
  //   }, []);
  const handleServiceClick = (id) => {
   
    sessionStorage.setItem('spId', id);
    const spId = sessionStorage.getItem('spId');
    axios.delete(`http://localhost:8080/admin/${spId}/deleteServiceProvider`)
    Swal.fire({
      icon: "success",
      title: "Service Provider Removed",
      text: ""
  })


    // navigate(`/ServiceProviderDashboard`)
  };
  return (
    <>
    <div className='container'>
      <div className='py-4'>
        <h4>All Service Providers</h4>
        <Link type='submit' className='btn btn-outline-primary mx-2' to="/AdminDashboard" style={{ float: 'right' }}>Home</Link><br></br>

      <table className="table border shadow">
  <thead>    
    <tr>
      <th scope="col">Id</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Address</th>
      <th scope="col">Mob. No.</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
      users.map((table1,index)=>(
        <tr key={table1.id}>
        {/* <th scope="row" key={index}>{index+1}</th> */}
        <td>{table1.id}</td>
        <td>{table1.spFirstname}</td>
        <td>{table1.spLastname}</td>   
        <td>{table1.spEmail}</td>   
        <td>{table1.spAddress}</td>  
        <td>{table1.spMobno}</td>        
       
        <td>
        <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleServiceClick(table1.id)}
                  >
                    Delete
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



</>
  )
}
