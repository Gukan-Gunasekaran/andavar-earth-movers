package com.introvertz_solution.Vehicle_rental_management.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="orders")
@Data
public class Orders {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "o_id")
    private Long orderId;
    @Column(name="c_name")
    private String custName;
    private String vehicle;
    private String phone;
    private String street;
    private String city;
    private String taluk;
    private String district;
}
