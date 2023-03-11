import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



// export default function CustomerServices({ categoryId }) {
  const AdminServices = ()=>{
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
  const handleAddServiceClick = () => {
    
    navigate(`admin/addService`)
  };
  return (
    <div className="container">
      <div className="py-4">
        <h4>Services</h4>
        <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => handleAddServiceClick()}
                  >
                    Add Service
                  </button>
                  <Link type='submit' className='btn btn-outline-primary mx-2' to="/AdminDashboard" style={{ float: 'right' }}>Home</Link><br></br>

        <table className="table border shadow">
          <thead>
            <tr>
            <th scope="col">Service Id</th>
              <th scope="col">Services</th>
              <th scope="col">Price</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          {services.map(service => (
          <tr key={service.id}>
            <td>{service.id}</td>
            <td>{service.sname}</td>
            <td>{service.sprice}</td>
            <td>
                  <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleServiceClick(service.id)}
                  >
                    Delete
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

export default AdminServices;