package com.app.service;

import java.util.List;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dto.AdminLoginDto;
import com.app.dto.AdminRegistrationDto;
import com.app.dto.CategoryDto;
import com.app.dto.ServicesDto;
import com.app.pojos.Admin;
import com.app.pojos.Booking;
import com.app.pojos.Category;
import com.app.pojos.Customer;
import com.app.pojos.ServiceProvider;
import com.app.pojos.Services;
import com.app.repository.AdminRepository;
import com.app.repository.BookingRepository;
import com.app.repository.CategoryRepository;
import com.app.repository.CustomerRepository;
import com.app.repository.ServiceProviderRepository;
import com.app.repository.ServicesRepository;

@Service
@Transactional //readOnly:false

public class AdminImpl implements AdminService{
	
	@Autowired
	private CustomerRepository custRepo;
	
	@Autowired
	private CategoryRepository catRepo;
	@Autowired
	private BookingRepository bookingRepo;
	@Autowired
	private AdminRepository adminRepo;
	
	@Autowired
	private ServiceProviderRepository spRepo;
	
	@Autowired
	private ServicesRepository servRepo;
	
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private ModelMapper mapper;
	
	@PostConstruct
	public void init() {
		
	}

	@Override
	public Category addCategoryDetails(CategoryDto catdto) {
		Category cat= mapper.map(catdto, Category.class);

		return catRepo.save(cat);
		
	}

	@Override
	public String deleteCustomer(Long customerId) {
		
		custRepo.deleteById(customerId);
		return "Customer deleted successfully!!!";
	}

	@Override
	public String deleteServiceProvider(Long serviceId) {
		
		spRepo.deleteById(serviceId);
		return "Service Provider deleted successfully!!!";
	}

	@Override
	public Services addServiceDetails(ServicesDto servdto) {
		Services service= mapper.map(servdto, Services.class);

		return servRepo.save(service);
		
	}

	
	@Override
	public void addServicesToCategory(Long categoryId, Long serviceId) {
       
        Category category = catRepo.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        Services service = servRepo.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("Service not found"));
        category.getCat_services().add(service);
        catRepo.save(category);
    }

@Override
public List<Booking> getAllBookings() {
	 
	    return  bookingRepo.findAll();
}

@Override
public Admin authenticateAdmin(AdminLoginDto logindto) {
	Admin admin=adminRepo.findByAdminEmail(logindto.getAdminEmail()).orElseThrow(()-> new ResourceNotFoundException("Bad Credentials!!!"));
	
	String rawPassword=logindto.getAdminPassword();
	if(admin!=null && passwordEncoder.matches(rawPassword, admin.getAdminPassword()))
			return admin;
	else throw new ResourceNotFoundException("Wrong Email or Password");

}

@Override
public Admin addAdminDetails(AdminRegistrationDto transientAdmindto) {
	
	String encPassword = passwordEncoder.encode(transientAdmindto.getAdminPassword());
	transientAdmindto.setAdminPassword(encPassword);
	
	Admin admin= mapper.map(transientAdmindto, Admin.class);
	return adminRepo.save(admin);
}

@Override
public List<Customer> getAllCustomers() {
	
	 return  custRepo.findAll();
}

@Override
public List<ServiceProvider> getAllservice_providers() {
	
	 return  spRepo.findAll();
}
	
	
	

}
