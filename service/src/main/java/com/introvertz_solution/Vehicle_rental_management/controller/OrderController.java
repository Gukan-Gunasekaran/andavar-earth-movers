package com.introvertz_solution.Vehicle_rental_management.controller;

import com.introvertz_solution.Vehicle_rental_management.entity.Orders;
import com.introvertz_solution.Vehicle_rental_management.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = {"https://andavar-earth-movers.vercel.app", "http://localhost:5173"})
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping("/save")
    public Orders saveOrder(@RequestBody Orders o){
        return orderService.saveOrder(o);
    }

    @GetMapping("/get")
    public List<Orders> sGetOrders(@RequestParam int pNo,@RequestParam String col){
        return orderService.sGetOrders(pNo,col);
    }

    @DeleteMapping("/delete/{d_id}")
    public ResponseEntity<?> removeOrder(@PathVariable Long d_id){
        boolean deleted=orderService.deleteOrder(d_id);
        if(deleted){
            return ResponseEntity.ok("order deleted");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND)
                .body("order wasn't available"+ d_id);
    }
}
