package com.introvertz_solution.Vehicle_rental_management.repository;

import com.introvertz_solution.Vehicle_rental_management.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepo extends JpaRepository<Order,Long> {
}
