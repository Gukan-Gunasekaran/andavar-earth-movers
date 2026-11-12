package com.introvertz_solution.Vehicle_rental_management.service;

import com.introvertz_solution.Vehicle_rental_management.entity.Orders;
import com.introvertz_solution.Vehicle_rental_management.repository.OrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
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

    public Page<Orders> getOrders(int pNo, String col, String sVal) {

        Pageable pageable = PageRequest.of(
                pNo, 10, Sort.by(Sort.Direction.ASC, col)
        );

        Specification<Orders> spec = (root, query, cb) -> {

            if (sVal == null || sVal.isBlank()) {
                return cb.conjunction();
            }

            return cb.like(
                    cb.lower(root.get(col).as(String.class)),
                    sVal.toLowerCase() + "%"
            );
        };

        return orderRepo.findAll(spec, pageable);
    }

    public Orders updateOrder(Long orderId,Orders editOrder){
        Orders order= orderRepo.findById(orderId)
                .orElseThrow(()->new RuntimeException("order not found"));
        if(editOrder.getCustName()!=null && !editOrder.getCustName().isBlank()){
            order.setCustName(editOrder.getCustName());
        }
        if(editOrder.getCity()!=null && !editOrder.getCity().isBlank()){
            order.setCity(editOrder.getCity());
        }
        if(editOrder.getDistrict()!=null && !editOrder.getDistrict().isBlank()){
            order.setDistrict(editOrder.getDistrict());
        }
        if(editOrder.getTaluk()!=null && !editOrder.getTaluk().isBlank()){
            order.setTaluk(editOrder.getTaluk());
        }
        if(editOrder.getPhone()!=null && !editOrder.getPhone().isBlank()){
            order.setPhone(editOrder.getPhone());
        }
        return orderRepo.save(order);
    }
}
