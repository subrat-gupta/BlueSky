package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "payment")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Payment extends BaseEntity {
	
	@CreationTimestamp
	private LocalDate dopay;
	
	
	private Long transactionId;
	
	@OneToOne
	@JoinColumn(name = "booking_id")
	private Booking booking_id;

}
