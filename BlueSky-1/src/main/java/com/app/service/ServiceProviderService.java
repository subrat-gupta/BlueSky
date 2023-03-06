package com.app.service;



import java.util.List;

import com.app.dto.SpLoginDto;
import com.app.dto.SpRegistrationDto;
import com.app.pojos.Booking;
import com.app.pojos.ServiceProvider;

public interface ServiceProviderService {

	
	ServiceProvider addProviderDetails(SpRegistrationDto transientServiceProviderdto);

	ServiceProvider authenticateSp(SpLoginDto logindto);
	
	public void addCategoryToServiceProvider(Long serviceProviderId, Long categoryId);
	
	public String updateStatusOfBooking(Long bookingId,Long serviceProviderId);
	
	List<Booking> getAllBookingsById(Long spId);
}
