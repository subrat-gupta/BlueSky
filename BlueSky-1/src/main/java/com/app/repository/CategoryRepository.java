package com.app.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Category;


public interface CategoryRepository extends JpaRepository<Category, Long> {

Category findByCatName(String catname);	
	

}
