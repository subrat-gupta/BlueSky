package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString

public class CustomerRegistrationDto{

	
	private String custFirstName;
	private String custLastName;
	private String custEmail;
	private String custPassword;
	private String custAddress;
	private Long custMobNumber;
	
}
