package com.app.pojos;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "service_provider")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString(exclude = "spPassword")
public class ServiceProvider extends BaseEntity {
	@Column(length = 20)
	private String spFirstname;
	@Column(length = 20)
	private String spLastname;
	@Column(length = 50)
	private String spEmail;
	@Column(length = 20, nullable = false)
	@JsonProperty(access = Access.WRITE_ONLY)
	private String spPassword;
	private String spAddress;
	@Column(length = 10, unique = true)
	private Long spMobno;
	
//	@ManyToMany(fetch = FetchType.EAGER)
//	@JoinTable(name = "sp_category", joinColumns = @JoinColumn(name = "sp_id"), inverseJoinColumns = @JoinColumn(name = "cat_id"))
//	private Set<Category>categoryList=new HashSet<Category>();
	
	@ManyToMany(cascade = { CascadeType.PERSIST, CascadeType.MERGE },fetch = FetchType.EAGER)
    @JoinTable(name = "sp_category",
            joinColumns = @JoinColumn(name = "sp_id"),
            inverseJoinColumns = @JoinColumn(name = "cat_id"))
    private Set<Category> categories = new HashSet<>();

	@OneToMany(mappedBy = "bookingList", cascade = CascadeType.ALL, orphanRemoval = true,fetch = FetchType.EAGER)
	private List<Booking> bookinglist = new ArrayList<Booking>();

	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name = "sp_services", joinColumns = @JoinColumn(name = "sp_id"), inverseJoinColumns = @JoinColumn(name = "service_id"))
	private Set<Services> services = new HashSet<Services>();

	
}
