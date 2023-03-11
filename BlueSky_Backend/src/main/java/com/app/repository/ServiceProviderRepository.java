package com.app.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.ServiceProvider;

public interface ServiceProviderRepository extends JpaRepository<ServiceProvider, Long> {

	Optional<ServiceProvider> findBySpEmail(String em);
	
//	@Modifying
//	@Query("update Hospital h set h.email=:email,h.address=:address,h.contactNo=:mobile where h.hid=:hid")
//	int updateHospital(String email, String address, long mobile, int hid);
	
	

}
