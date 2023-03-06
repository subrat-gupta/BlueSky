package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "admin")

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "adminPassword")

public class Admin extends BaseEntity {
	@Column(length = 20)
	private String adminFirstName;
	@Column(length = 20)
	private String adminLastName;
	@Column(length = 50, unique = true)
	private String adminEmail;
	@Column(length = 200, nullable = false)
	@JsonProperty(access = Access.WRITE_ONLY)
	private String adminPassword;
	@Column(length = 10, unique = true)
	private Long custMobNumber;
}
