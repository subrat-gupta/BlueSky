package com.app.service;

import javax.annotation.PostConstruct;
import javax.transaction.Transactional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dto.CategoryDto;
import com.app.pojos.Admin;
import com.app.pojos.Category;
import com.app.repository.AdminRepository;
import com.app.repository.CategoryRepository;
import com.app.repository.CustomerRepository;

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
	private ModelMapper mapper;
	
	@PostConstruct
	public void init() {
		
	}

	@Override
	public Category addCategoryDetails(CategoryDto catdto) {
		Category cat= mapper.map(catdto, Category.class);

		return catRepo.save(cat);
		
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
	
	
	
	

}
