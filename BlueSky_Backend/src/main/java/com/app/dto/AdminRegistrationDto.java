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

public class AdminRegistrationDto{

	
	private String adminFirstName;
	private String adminLastName;
	private String adminEmail;
	private String adminPassword;
	private Long adminMobNumber;
	
}
