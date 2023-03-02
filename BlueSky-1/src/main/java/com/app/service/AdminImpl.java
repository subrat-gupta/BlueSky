package com.app.service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.app.custom_exception.ResourceNotFoundException;
import com.app.dto.CategoryDto;
import com.app.dto.ServicesDto;
import com.app.pojos.Admin;
import com.app.pojos.Category;
import com.app.pojos.ServiceProvider;
import com.app.pojos.Services;
import com.app.repository.AdminRepository;
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
//	@Override
//	public Customer addCustomerDetails(CustomerRegistrationDto transientCustomerdto) {
//		
//		Customer cx= mapper.map(transientCustomerdto, Customer.class);
//		
//		return custRepo.save(cx);
//	}
//
//	@Override
//	public Customer authenticateCust(CustomerLoginDto logindto) {
//		Customer cx1= mapper.map(logindto, Customer.class);
//		return custRepo.findByCustEmailAndCustPassword(cx1.getCustEmail(),cx1.getCustPassword()).orElseThrow(()-> new ResourceNotFoundException("Bad Credentials!!!"));
//	}
//
//	@Override
//	public List<Category> getAllCategoryDetails() {
//		
//		return catRepo.findAll();
//	}
	
	@Override
	public void addServicesToCategory(Long categoryId, Long serviceId) {
       
        Category category = catRepo.findById(categoryId)
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        Services service = servRepo.findById(serviceId)
                .orElseThrow(() -> new ResourceNotFoundException("Service not found"));
        category.getCat_services().add(service);
        catRepo.save(category);
    }
	
	

}
