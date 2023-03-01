package com.app.pojos;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "booking")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class Booking extends BaseEntity {

	@CreationTimestamp
	private LocalDateTime dobooking;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "customer_id")
	private Customer custdetail;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name= "sp_id")
	private ServiceProvider bookingList;
	
	@OneToOne
	@JoinColumn(name = "service_id")
	private Services service_id;
	
	@OneToOne
	@JoinColumn(name = "payment_id")
	private Payment payment_id;
	
	private String status="Pending";
}
