package com.app.repository;



import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;

import com.app.pojos.Booking;

@Repository
public interface BookingRepository extends JpaRepository<Booking, Long> {




	//int updateStatus(String status, Long bookingId);
	
	
}
