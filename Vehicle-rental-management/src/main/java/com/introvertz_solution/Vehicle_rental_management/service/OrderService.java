package com.introvertz_solution.Vehicle_rental_management.service;

import com.introvertz_solution.Vehicle_rental_management.entity.Order;
import com.introvertz_solution.Vehicle_rental_management.repository.OrderRepo;
import org.apache.catalina.connector.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;
    public Order saveOrder(Order o){
        return(orderRepo.save(o));
    }

    public boolean deleteOrder(Long o_id){
        if(orderRepo.existsById(o_id)){
            orderRepo.deleteById(o_id);
            return true;
        }
        return false;
    }
}
