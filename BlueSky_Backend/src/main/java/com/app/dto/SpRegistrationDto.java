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

public class SpRegistrationDto{

	
	private String spFirstname;
	private String spLastname;
	private String spEmail;
	private String spPassword;
	private String spAddress;
	private Long spMobno;
	
}
