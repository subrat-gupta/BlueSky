package com.app.service;

import java.io.IOException;
import java.util.List;
import com.app.dto.CustomerLoginDto;
import com.app.dto.CustomerRegistrationDto;
import com.app.pojos.Booking;
import com.app.pojos.Category;
import com.app.pojos.Customer;
import com.app.pojos.Services;

public interface CustomerService {

	Customer addCustomerDetails(CustomerRegistrationDto transientCustomerdto);

	Customer authenticateCust(CustomerLoginDto logindto);

	List<Category> getAllCategoryDetails();

	Booking addBooking(Long customerId, Long serviceId);

	List<Booking> getAllBookingsById(Long customerId);

	List<Services> getAllServicesByCategoryId(Long categoryId);

//	Booking removeBooking(Long customerId, Long serviceId, Long bookingId);
	
	String cancelBooking(Long bookingId);
	

}
