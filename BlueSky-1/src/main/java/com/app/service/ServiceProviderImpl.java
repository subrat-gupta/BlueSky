package com.app.service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister.NotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dto.SpLoginDto;
import com.app.dto.SpRegistrationDto;
import com.app.pojos.Booking;
import com.app.pojos.Category;
import com.app.pojos.ServiceProvider;
import com.app.repository.BookingRepository;
import com.app.repository.CategoryRepository;
import com.app.repository.ServiceProviderRepository;

@Service
@Transactional //readOnly:false

public class ServiceProviderImpl implements ServiceProviderService{
	
	@Autowired
	private ServiceProviderRepository spRepo;
	
	@Autowired
	private BookingRepository bookRepo;
	
	@Autowired
	private CategoryRepository catRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private ModelMapper mapper;
	
	@PostConstruct
	public void init() {
		
	}

	@Override
	public ServiceProvider addProviderDetails(SpRegistrationDto transientServiceProviderdto) {
		
		String encPassword = passwordEncoder.encode(transientServiceProviderdto.getSpPassword());
		transientServiceProviderdto.setSpPassword(encPassword);
		
		ServiceProvider sp= mapper.map(transientServiceProviderdto, ServiceProvider.class);
		return spRepo.save(sp);
	}

	@Override
	public ServiceProvider authenticateSp(SpLoginDto logindto) {
		
		ServiceProvider sp1=spRepo.findBySpEmail(logindto.getSpEmail())
				.orElseThrow(()-> new ResourceNotFoundException("Bad Credentials!!!"));
		
		String rawPassword=logindto.getSpPassword();
		if(sp1!=null && passwordEncoder.matches(rawPassword, sp1.getSpPassword()))
		return sp1;
		else throw new ResourceNotFoundException("Wrong Email or Password");
		//return spRepo.findBySpEmailAndSpPassword(sp1.getSpEmail(),sp1.getSpPassword()).orElseThrow(()-> new ResourceNotFoundException("Bad Credentials!!!"));
	}
	
//	public Map<String,Object>assignCategoryid(String name,CategoryDto catdto){
//		Category category= catRepo.findByCatName(name);
//		category.getId();
//		
//		
//		
//		
//		return null;
//	}

	@Override
	public void addCategoryToServiceProvider(Long serviceProviderId, Long categoryId) {
        ServiceProvider serviceProvider = spRepo.findById(serviceProviderId)
                .orElseThrow(() -> new ResourceNotFoundException("Service provider not found"));
        Category category = catRepo.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        serviceProvider.getCategories().add(category);
        spRepo.save(serviceProvider);
    }
	

	@Override
	public String updateStatusOfBooking(Long bookingId,Long serviceProviderId) {
		
		Booking b=bookRepo.findById(bookingId).orElseThrow(()->new ResourceNotFoundException("Booking not found"));
		b.setStatus("Accepted");
		bookRepo.save(b);
		ServiceProvider sp1=spRepo.findById(serviceProviderId).orElseThrow(()->new ResourceNotFoundException("Service provider not found"));
		sp1.setId(serviceProviderId);
		spRepo.save(sp1);
		return "Booking accepted and updated status successfully!!!!!!!";
	}

}
