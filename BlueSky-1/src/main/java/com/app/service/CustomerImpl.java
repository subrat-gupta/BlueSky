package com.app.service;

import java.io.IOException;
import java.util.List;
import javax.annotation.PostConstruct;
import javax.transaction.Transactional;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import com.app.custom_exception.ResourceNotFoundException;
import com.app.dto.CustomerLoginDto;
import com.app.dto.CustomerRegistrationDto;
import com.app.pojos.Booking;
import com.app.pojos.Category;
import com.app.pojos.Customer;
import com.app.pojos.Services;
import com.app.repository.BookingRepository;
import com.app.repository.CategoryRepository;
import com.app.repository.CustomerRepository;
import com.app.repository.ServicesRepository;

@Service
@Transactional //readOnly:false

public class CustomerImpl implements CustomerService{
	
	@Autowired
	private CustomerRepository custRepo;
	
	@Autowired
	private CategoryRepository catRepo;
	
	@Autowired
	private ServicesRepository serviceRepo;
	
	@Autowired
	private BookingRepository bookingRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private ModelMapper mapper;
	
	@PostConstruct
	public void init() {
		
	}

	@Override
	public Customer addCustomerDetails(CustomerRegistrationDto transientCustomerdto) {
		
		String encPassword = passwordEncoder.encode(transientCustomerdto.getCustPassword());
		transientCustomerdto.setCustPassword(encPassword);
		
		Customer cx= mapper.map(transientCustomerdto, Customer.class);
		return custRepo.save(cx);
	}

	@Override
	public Customer authenticateCust(CustomerLoginDto logindto) {
		Customer cx1= custRepo.findByCustEmail(logindto.getCustEmail())
				.orElseThrow(()-> new ResourceNotFoundException("Bad Credentials!!!"));
		
		
		String rawPassword=logindto.getCustPassword();
		if(cx1!=null && passwordEncoder.matches(rawPassword, cx1.getCustPassword()))
				return cx1;
		else throw new ResourceNotFoundException("Wrong Email or Password");

	}

	@Override
	public List<Category> getAllCategoryDetails() {
		
		return catRepo.findAll();
	}
	


	@Override
	public Booking addBooking(Long customerId,Long serviceId) {
		Customer customer=custRepo.findById(customerId)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not found"));
        Services service= serviceRepo.findById(serviceId)
				.orElseThrow(()-> new ResourceNotFoundException("Service Not Found"));
        Booking booking = new Booking();
        booking.setCustdetail(customer);
        booking.setService_id(service);
        return bookingRepo.save(booking);
    }
	

	@Override
	public List<Booking> getAllBookingsById(Long customerId) {
	    Customer customer = custRepo.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("Customer not found"));
	    return customer.getBookings();
//		return null;
	}

	@Override
	public List<Services> getAllServicesByCategoryId(Long categoryId) {
		 return catRepo.findServicesByCategoryId(categoryId);

	}
	
//	public Booking removeBooking(Long customerId,Long serviceId,Long bookingId) {
//	
//        Booking booking = bookingRepo.findById(bookingId)
//				.orElseThrow(() -> new ResourceNotFoundException("Booking not found"));
//        booking.setCustdetail(null);
//        booking.setService_id(null);
//        bookingRepo.delete(booking);
//        return booking;
//    }
	
	@Override
	public String cancelBooking(Long bookingId) {
		
		Booking b=bookingRepo.findById(bookingId).orElseThrow(()->new ResourceNotFoundException("Booking not found"));
		b.setStatus("Cancelled");
		
		bookingRepo.save(b);
//		ServiceProvider sp1=spRepo.findById(serviceProviderId).orElseThrow(()->new ResourceNotFoundException("Service provider not found"));
//		b.setBookingList(sp1);
//		sp1.setId(serviceProviderId);
//		spRepo.save(sp1);
		return "Booking cancelled!!!!!!!";
	}

	
	


	
	
	
	
	
	

}
