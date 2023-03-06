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

import com.app.dto.SpLoginDto;
import com.app.dto.SpRegistrationDto;
import com.app.pojos.Booking;
import com.app.pojos.ServiceProvider;
import com.app.service.ServiceProviderService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/serviceprovider")
public class ServiceProviderController {

	@Autowired
	private ServiceProviderService spService;
	
	@GetMapping("/{spId}/bookings")
	public List<Booking> getBookingsForSp(@PathVariable Long spId) {
		 return spService.getAllBookingsById(spId);
	}

	@PostMapping
	public ServiceProvider registerdetails(@RequestBody SpRegistrationDto transientproviderdto) {
		return spService.addProviderDetails(transientproviderdto);
	}
	
	@PostMapping("/login")
	public ServiceProvider loginAuthentication(@RequestBody SpLoginDto logindto) {
		return spService.authenticateSp(logindto);
	}
	
	 @PostMapping("/{serviceProviderId}/categories/{categoryId}")
	    public ResponseEntity<Void> addCategoryToServiceProvider(@PathVariable Long serviceProviderId, @PathVariable Long categoryId) {
	        spService.addCategoryToServiceProvider(serviceProviderId, categoryId);
	        return ResponseEntity.ok().build();
	    }
	 
	 
	 @PutMapping("/updateStatus/{bookingId}/{serviceProviderId}")
	 public String updateStatusToAccepted(@RequestBody @PathVariable("bookingId") Long bookingId
			 ,@PathVariable("serviceProviderId") Long serviceProviderId) {
		 spService.updateStatusOfBooking(bookingId,serviceProviderId);
			return "Booking accepted and updated status successfully!!!!!!!";

	 }
}
