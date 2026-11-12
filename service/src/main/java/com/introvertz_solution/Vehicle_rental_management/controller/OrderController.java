package com.introvertz_solution.Vehicle_rental_management.controller;

import com.introvertz_solution.Vehicle_rental_management.entity.Orders;
import com.introvertz_solution.Vehicle_rental_management.service.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/order")
@CrossOrigin(origins = {"https://andavar-earth-movers.vercel.app"})
public class OrderController {
    @Autowired
    OrderService orderService;

    @PostMapping("/save")
    public Orders saveOrder(@RequestBody Orders o){
        return orderService.saveOrder(o);
    }

    @GetMapping("/get")
    public Page<Orders> getOrders(@RequestParam int pNo, @RequestParam String col, @RequestParam String sVal){
        return orderService.getOrders(pNo,col,sVal);
    }

    @PatchMapping("/edit/{orderId}")
    public ResponseEntity<Orders> editOrder(@PathVariable Long orderId,@RequestBody Orders editOrder){
        return ResponseEntity.ok(orderService.updateOrder(orderId,editOrder));
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
