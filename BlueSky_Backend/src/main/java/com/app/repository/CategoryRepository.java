package com.app.repository;



import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Category;
import com.app.pojos.Services;


public interface CategoryRepository extends JpaRepository<Category, Long> {

Category findByCatName(String catname);	

@Query("SELECT s FROM Category c JOIN c.cat_services s WHERE c.id = :categoryId")
List<Services> findServicesByCategoryId(@Param("categoryId") Long categoryId);

	

}
