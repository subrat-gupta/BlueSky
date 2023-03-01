package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CategoryDto;
import com.app.dto.BookingDto;
import com.app.dto.CustomerLoginDto;
import com.app.dto.CustomerRegistrationDto;
import com.app.pojos.Admin;
import com.app.pojos.Booking;
import com.app.pojos.Category;
import com.app.pojos.Customer;
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
//
//	@PostMapping
//	public Customer registerdetails(@RequestBody CustomerRegistrationDto transientcustomerdto) {
//		return custService.addCustomerDetails(transientcustomerdto);
//	}
//	
//	@PostMapping("/login")
//	public Customer loginAuthentication(@RequestBody CustomerLoginDto logindto) {
//		return custService.authenticateCust(logindto);
//	}
	
	@GetMapping("/category")
	public List<Category>getAllCategory(){
		return custService.getAllCategoryDetails();
	}
	
	@PostMapping("/addCategory")
	public Category addCategory(@RequestBody CategoryDto transientcategorydto) {
		return adminService.addCategoryDetails(transientcategorydto);
	}
}
