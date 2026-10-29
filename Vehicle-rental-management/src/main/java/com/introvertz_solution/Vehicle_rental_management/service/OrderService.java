package com.introvertz_solution.Vehicle_rental_management.service;

import com.introvertz_solution.Vehicle_rental_management.entity.Orders;
import com.introvertz_solution.Vehicle_rental_management.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;
    public Orders saveOrder(Orders o){
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
