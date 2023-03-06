package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.app.dto.CustomerLoginDto;
import com.app.dto.CustomerRegistrationDto;
import com.app.pojos.Booking;
import com.app.pojos.Category;
import com.app.pojos.Customer;
import com.app.pojos.Services;

import com.app.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/customer")
public class CustomerController {

	@Autowired
	private CustomerService custService;
	

	@PostMapping
	public Customer registerdetails(@RequestBody CustomerRegistrationDto transientcustomerdto) {
		return custService.addCustomerDetails(transientcustomerdto);
	}
	
	@PostMapping("/login")
	public Customer loginAuthentication(@RequestBody CustomerLoginDto logindto) {
		return custService.authenticateCust(logindto);
	}
	
	@GetMapping("/category")
	public List<Category>getAllCategory(){
		return custService.getAllCategoryDetails();
	}
	
	@GetMapping("/{customerId}/bookings")
	public List<Booking> getBookingsForCustomer(@PathVariable Long customerId) {
		 return custService.getAllBookingsById(customerId);
	}
	
	@GetMapping("/category/{categoryId}/services")
    public List<Services> getServicesByCategoryId(@PathVariable Long categoryId) {
        return custService.getAllServicesByCategoryId(categoryId);
    }

	
	@PostMapping("/{customerId}/categories/{serviceId}")
    public ResponseEntity<Void> addCustomerBooking(@PathVariable Long customerId, @PathVariable Long serviceId) {
        custService.addBooking(customerId, serviceId);
        return ResponseEntity.ok().build();
    }
	
//
//	@DeleteMapping("/{customerId}/cancelBooking/{serviceId}/{bookingId}")
//	 public ResponseEntity<Void> cancelBooking(@PathVariable Long customerId, @PathVariable Long serviceId,@PathVariable Long bookingId) {
//	        custService.removeBooking(customerId, serviceId, bookingId);
//	        return ResponseEntity.ok().build();
//
//	 }
	
	
	@PutMapping("/cancelBooking/{bookingId}")
	 public String cancelBookingById(@PathVariable("bookingId") Long bookingId) {
		custService.cancelBooking(bookingId);
			return "Booking cancelled!!!!!!!";

	 }
}
