package com.introvertz_solution.Vehicle_rental_management.controller;

import com.introvertz_solution.Vehicle_rental_management.entity.Order;
import com.introvertz_solution.Vehicle_rental_management.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/order")
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping("/save")
    public Order saveOrder(@RequestBody Order o){
        return orderService.saveOrder(o);
    }

    @DeleteMapping("/delete/{o_id}")
    public ResponseEntity<?> removeOrder(@RequestParam Long o_id){
        boolean deleted=orderService.deleteOrder(o_id);
        if(deleted){
            return ResponseEntity.ok("order deleted");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("order wasn't available"+ o_id);
    }
}
