package com.introvertz_solution.Vehicle_rental_management.service;

import com.introvertz_solution.Vehicle_rental_management.entity.Orders;
import com.introvertz_solution.Vehicle_rental_management.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class OrderService {
    @Autowired
    OrderRepo orderRepo;
    public Orders saveOrder(Orders o){
        return(orderRepo.save(o));
    }

    public List<Orders> getOrders(){
        return orderRepo.findAll();
    }

    public boolean deleteOrder(Long o_id){
        if(orderRepo.existsById(o_id)){
            orderRepo.deleteById(o_id);
            return true;
        }
        return false;
    }

    public List<Orders> sGetOrders(int pNo,String col){
        Pageable pageable= PageRequest.of(pNo,10, Sort.by(Sort.Direction.ASC,col));
        return orderRepo.findAll(pageable).getContent();
    }
}
