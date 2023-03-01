package com.app.pojos;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "customer")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "custPassword")

public class Customer extends BaseEntity {
	@Column(length = 20)
	private String custFirstName;
	@Column(length = 20)
	private String custLastName;
	@Column(length = 50, unique = true)
	private String custEmail;
	@Column(length = 200, nullable = false)
	//@JsonProperty(access = Access.WRITE_ONLY)
	private String custPassword;
	private String custAddress;
	@Column(length = 10, unique = true)
	private Long custMobNumber;
	
	@OneToMany(mappedBy = "custdetail",cascade = CascadeType.ALL,orphanRemoval = true,fetch = FetchType.EAGER)
	private List<Booking>bookings=new ArrayList<>();

}
