package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminLoginDto;
import com.app.dto.AdminRegistrationDto;
import com.app.dto.CategoryDto;
import com.app.dto.ServicesDto;
import com.app.pojos.Admin;
import com.app.pojos.Booking;
import com.app.pojos.Category;
import com.app.pojos.Services;
import com.app.service.AdminService;
import com.app.service.CustomerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private CustomerService custService;
	
	@Autowired
	private AdminService adminService;



	@PostMapping
	public Admin registerdetails(@RequestBody AdminRegistrationDto transientcustomerdto) {
		return adminService.addAdminDetails(transientcustomerdto);
	}
	
	@PostMapping("/login")
	public Admin loginAuthentication(@RequestBody AdminLoginDto logindto) {
		return adminService.authenticateAdmin(logindto);
	}
	
	@GetMapping("/category")
	public List<Category>getAllCategory(){
		return custService.getAllCategoryDetails();
	}
	
	@PostMapping("/addCategory")
	public Category addCategory(@RequestBody CategoryDto transientcategorydto) {
		return adminService.addCategoryDetails(transientcategorydto);
	}
	
	@DeleteMapping("/{customerId}/deleteCustomer")
	public String deleteCustomerById(@PathVariable Long customerId) {
	
		return adminService.deleteCustomer(customerId);
	}
	
	@DeleteMapping("/{serviceId}/deleteServiceProvider")
	public String deleteServiceProviderById(@PathVariable Long serviceId) {
	
		return adminService.deleteServiceProvider(serviceId);
	}
	
	@PostMapping("/addService")
	public Services addServices(@RequestBody ServicesDto transientservicedto) {
		return adminService.addServiceDetails(transientservicedto);
	}
	
	 @PostMapping("/{categoryId}/services/{serviceId}")
	    public ResponseEntity<Void> addServicesToCategory(@PathVariable Long categoryId, @PathVariable Long serviceId ) {
	        adminService.addServicesToCategory(categoryId, serviceId);
	        return ResponseEntity.ok().build();
	    }
	 
	 @GetMapping("/bookings")
		public List<Booking> getAllBookings() {
			 return adminService.getAllBookings();
//		    Customer customer = custRepo.findById(customerId).orElseThrow();
//		    return customer.getBookings();
		    
		}

	
}
