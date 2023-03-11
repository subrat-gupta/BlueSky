import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



// export default function CustomerServices({ categoryId }) {
  const CustomerServices = ()=>{
  const navigate = useNavigate();
  const serviceId = sessionStorage.getItem('serviceId');
  const customerId = sessionStorage.getItem('customerId');
  
  const [services, setServices] = useState([]);

  useEffect(() => {
    const categoryId = sessionStorage.getItem('categoryId');
    axios.get(`http://localhost:8080/customer/category/${categoryId}/services`)
      .then(response => {
        console.log(response.data);
        setServices(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleServiceClick = (id) => {
    sessionStorage.setItem('serviceId', id);
    navigate(`customer/${customerId}/categories/${serviceId}`)
  };

  return (
    <div className="container">
      <div className="py-4">
        <h4>Services</h4>
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Services</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {services.map(service => (
          <tr key={service.id}>
            <td>{service.sname}</td>
            <td>{service.sprice}</td>
            <td>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    Book Now
                  </button>
                </td>
          </tr>
        ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CustomerServices;