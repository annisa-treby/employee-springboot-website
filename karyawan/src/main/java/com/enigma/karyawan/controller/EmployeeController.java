package com.enigma.karyawan.controller;

import com.enigma.karyawan.entity.Employee;
import com.enigma.karyawan.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/employee")
public class EmployeeController {

    @Autowired
    EmployeeService employeeService;

    @PostMapping
    public Employee saveEmployee(@RequestBody Employee employee){
        return employeeService.saveEmployee(employee);
    }

    @GetMapping
    public Page<Employee> employees(@RequestParam(defaultValue = "0", value = "page") Integer page, @RequestParam(defaultValue = "100", value = "size") Integer size){
        Pageable pageable = PageRequest.of(page, size);
        return employeeService.getAllEmployee(pageable);
    }

    @RequestMapping("/{id}")
    public Employee getEmployeeById(@PathVariable String id){
        return employeeService.getEmployeeById(id);
    }

    @PutMapping
    public Employee updateEmployee(@RequestBody Employee employee){
        return employeeService.updateEmployee(employee);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployee(@PathVariable String id){
        employeeService.deleteEmployee(id);
    }

    @GetMapping("/idNumber/{idNumber}")
    public Employee getEmployeeByIdNumber(@PathVariable String idNumber){
        return employeeService.getEmployeeByIdNumber(idNumber);
    }
}
