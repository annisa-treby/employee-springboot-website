package com.enigma.karyawan.service;

import com.enigma.karyawan.entity.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;


public interface EmployeeService {
    public Employee saveEmployee(Employee employee);
    public Employee getEmployeeById(String id);
    public Page<Employee> getAllEmployee(Pageable pageable);
    public Employee updateEmployee(Employee employee);
    public void deleteEmployee(String id);
    public Employee getEmployeeByIdNumber(String idNumber);
}
