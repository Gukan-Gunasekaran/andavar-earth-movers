package com.introvertz_solution.Vehicle_rental_management.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name="orders")
@Data
public class Orders {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long o_id;

    private String c_name;
    private String phone;
    private String street;
    private String city;
    private String taluk;
    private String district;
}
