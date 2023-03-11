import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

// import { useHistory } from 'react-router-dom';

function ManageCategories() {
  const navigate = useNavigate();
  
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/customer/category')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  // const handleClick = categoryId => {
  //   console.log(categoryId);
  //   window.location.href = `category/${categoryId}/services`;
  // };
  // const history = useHistory();
  const handleClick = categoryId => {
    console.log(categoryId);
    sessionStorage.setItem('categoryId', categoryId);
    // history.push('/services');
    navigate(`category/${categoryId}/services`)
  };
  const handleCategoryClick = () => {
    // console.log(categoryId);
    // sessionStorage.setItem('categoryId', categoryId);
    // history.push('/services');
    navigate(`/admin/addCategory`)
  };
  return (
    <div>
      <h1>Welcome to Administrator Dashboard</h1>
      <h3>Select a category to browse services:</h3>
      <button onClick={() => handleCategoryClick()}>
                Add Category
              </button>
      {/* <div>
      <Link type='submit' className='btn btn-outline-primary mx-2' to="/CustomerBookings">View All Bookings</Link>
      </div> */}
      <div className="category-cards">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-card`}>
                <h4>{category.id}</h4>
            {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkYPPDNq4h6X_4N_GJhxhiBCbNmXuQVMKcQw&usqp=CAU"}  */}
           <img src={category.cat_image}
            alt={category.catName} onClick={() => handleClick(category.id)}/>
            <button onClick={() => handleClick(category.id)}>
                View Services
              </button>
              {/* <button onClick={() => handleClick(category.id)}>
                Upload Image
              </button> */}
            <h4>{category.catName}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}



export default ManageCategories