package com.app.pojos;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "category")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Category extends BaseEntity{
	@Column(length = 20, unique = true)
	private String catName;   

	@Column(length = 300)
	private String cat_image;
	
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "cat_services", joinColumns = @JoinColumn(name = "cat_id"), inverseJoinColumns = @JoinColumn(name = "service_id"))
	private Set<Services> cat_services = new HashSet<Services>();

//	@ManyToMany(mappedBy = "categories",fetch = FetchType.EAGER)
//    private Set<ServiceProvider> serviceProviders = new HashSet<>();
}
