package com.app.service;



import java.util.List;

import com.app.dto.CategoryDto;
import com.app.dto.CustomerLoginDto;
import com.app.dto.CustomerRegistrationDto;
import com.app.dto.ServicesDto;
import com.app.dto.SpLoginDto;
import com.app.dto.SpRegistrationDto;
import com.app.pojos.Admin;
import com.app.pojos.Category;
import com.app.pojos.Customer;
import com.app.pojos.ServiceProvider;
import com.app.pojos.Services;

public interface AdminService {


	Category addCategoryDetails(CategoryDto catdto);
	
//	Customer addCustomerDetails(CustomerRegistrationDto transientCustomerdto);
//
//	Customer authenticateCust(CustomerLoginDto logindto);
//	
//	List<Category>getAllCategoryDetails();
//	
//	ServiceProvider addProviderDetails(SpRegistrationDto transientServiceProviderdto);
//
//	ServiceProvider authenticateSp(SpLoginDto logindto);
	
	String deleteCustomer(Long customerId);

	String deleteServiceProvider(Long serviceId);
	
	Services addServiceDetails(ServicesDto serDto);
	
	public void addServicesToCategory(Long categoryId, Long serviceId);
}
