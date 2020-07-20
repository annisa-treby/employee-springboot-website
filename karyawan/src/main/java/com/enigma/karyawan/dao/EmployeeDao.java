package com.enigma.karyawan.dao;

import com.enigma.karyawan.entity.Employee;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, String> {
    public Employee findEmployeeByIdNumberEquals(String idNumber);
    public Page<Employee> findEmployeeByIsDeleteFalse(Pageable pageable);
}
