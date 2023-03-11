import { Route, Routes } from "react-router-dom";
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Login from "./Component/Login";

import Home from "./Component/Home";
import Help from "./Component/Help";
import FooterBar from "./Component/FooterBar";
import HeaderBar from "./Component/HeaderBar";
import EditCustomerProfile from "./Component/EditCustomerProfile";
import EditRecruiterProfile from "./Component/EditRecruiterProfile";
import Contact from "./Component/Contact";
import Register from "./Component/Register";
import CustomerDashboard from "./Component/CustomerDashboard";

import Profile from "./Component/Profile";

import About from "./Component/About";
import RegisterCustomer from "./Component/RegisterCustomer";
import ServiceProviderLogin from "./Component/ServiceProviderLogin";
import AdminLogin from "./Component/AdminLogin";
import RegisterServiceProvider from "./Component/RegisterServiceProvider";
import BookService from "./Component/BookService";
import CustomerServices from "./Component/CustomerServices";
import CustomerBookings from "./Component/CustomerBookings";
import BookingCancelled from "./Component/BookingCancelled";
import ServiceProviderDashboard from "./Component/ServiceProviderDashboard";
import AdminDashboard from "./Component/AdminDashboard";
import AllBookings from "./Component/AllBookings";
import ManageCategories from "./Component/ManageCategories";
import AdminServices from "./Component/AdminServices";
import AddService from "./Component/AddService";
import AddCategory from "./Component/AddCategory";
import AllCustomers from "./Component/AllCustomers";
import AllServiceProvider from "./Component/AllServiceProviders";


function App() {
  return (
    <div className="App">
      <HeaderBar />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>
          <Route path="/Profile/:id" element={<Profile />}></Route>
          <Route path="/Header" element={<HeaderBar></HeaderBar>}></Route>
          <Route path="/CustomerDashboard" element={<CustomerDashboard />}></Route>
        
          <Route path="/EditCustomer/:id" element={<EditCustomerProfile />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/EditRecruiter/:id" element={<EditRecruiterProfile />}></Route>
          <Route path="/RegisterCustomer" element={<RegisterCustomer />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          
          <Route path="/Help" element={<Help />}></Route>
          <Route path="/RegisterServiceProvider" element={<RegisterServiceProvider />}></Route>
          <Route path="/ServiceProviderLogin" element={<ServiceProviderLogin />}></Route>
          <Route path="/AdminLogin" element={<AdminLogin />}></Route>
          <Route path="CustomerDashboard/category/:categoryId/services" element={<CustomerServices/>}></Route>
          <Route path="CustomerDashboard/category/:categoryId/services/customer/:customerId/categories/:serviceId" element={<BookService />}></Route>
          <Route path="/CustomerBookings" element={<CustomerBookings />}></Route>  
          <Route path="/CustomerBookings/customer/cancelBookings/:bookingId" element={<BookingCancelled />}></Route>      
          <Route path="/ServiceProviderDashboard" element={<ServiceProviderDashboard />}></Route> 
          <Route path="/ServiceProviderDashboard/updatestatus/:bookingId/:spId" element={<ServiceProviderDashboard />}></Route>
          <Route path="/AdminDashboard" element={<AdminDashboard />}></Route> 
          <Route path="/AllBookings" element={<AllBookings/>}></Route>
          <Route path="/ManageCategories" element={<ManageCategories/>}></Route>
          <Route path="/ManageCategories/category/:categoryId/services" element={<AdminServices/>}></Route>
          <Route path="/ManageCategories/category/:categoryId/services/admin/addService" element={<AddService/>}></Route>
          <Route path="/admin/addCategory" element={<AddCategory/>}></Route>
          <Route path="/Customers" element={<AllCustomers/>}></Route>
          <Route path="/ServiceProviders" element={<AllServiceProvider/>}></Route>

        
        </Routes>
      </div>
      <FooterBar />
    </div>

  );
}

export default App;
