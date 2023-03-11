package com.app.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

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
import com.app.service.AdminService;
import com.app.service.CustomerService;
import com.app.service.ImageHandlingService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/admin")
public class AdminController {

	@Autowired
	private CustomerService custService;
	
	@Autowired
	private AdminService adminService;
	
	@Autowired
	private ImageHandlingService imageService;



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
	 
		@PostMapping(value="/{catId}/image_upload", consumes = "multipart/form-data")
		public ResponseEntity<?> uploadImageToServerSideFolder(@PathVariable Long catId,
				@RequestParam MultipartFile imageFile) throws IOException{
			System.out.println("in upload img " + catId + " " + imageFile.getOriginalFilename());
			return new ResponseEntity<>(imageService.uploadImage(catId, imageFile), HttpStatus.CREATED);
		}
		
		 @GetMapping("/customers")
			public List<Customer> getAllCustomers() {
				 return adminService.getAllCustomers();
		 }
				 
				 @GetMapping("/serviceproviders")
					public List<ServiceProvider> getAllservice_providers() {
						 return adminService.getAllservice_providers();
				 }


	
}
