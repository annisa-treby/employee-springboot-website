package com.enigma.karyawan.service;

import com.enigma.karyawan.dao.EmployeeDao;
import com.enigma.karyawan.entity.Employee;
import com.enigma.karyawan.exceptions.FieldEmpty;
import com.enigma.karyawan.exceptions.FileNotFound;
import com.enigma.karyawan.exceptions.IdNumberAlreadyExistException;
import com.enigma.karyawan.exceptions.PositionUnavailable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class EmployeeServiceImpl implements EmployeeService{

    @Autowired
    EmployeeDao employeeDao;

    @Autowired
    PositionService positionService;

    @Override
    public Employee saveEmployee(Employee employee){

        String positionId = employee.getPosition().getId();
        String idNumber = employee.getIdNumber();

        if (employee.getName() != null && employee.getBirthDate() != null && employee.getGender() != null &&
                employee.getIdNumber() != null && employee.getPosition().getId() != null){
            if (positionService.getPositionById(positionId) == null){
                throw new PositionUnavailable(positionId);
            } else {
                if (employeeDao.findEmployeeByIdNumberEquals(idNumber) == null){
                    employee.setIsDelete(false);
                    return employeeDao.save(employee);
                } else {
                    throw new IdNumberAlreadyExistException(idNumber);
                }
            }
        } else throw new FieldEmpty();
    }

    @Override
    public Employee getEmployeeById(String id) {
        if (employeeDao.findById(id).isPresent()){
            Employee employee = employeeDao.findById(id).get();
            return employee;
        } else throw new FileNotFound(id);

    }

    @Override
    public Page<Employee> getAllEmployee(Pageable pageable) {
        Page<Employee> employees = employeeDao.findEmployeeByIsDeleteFalse(pageable);
        return employees;
    }

    @Override
    public Employee updateEmployee(Employee employee) {
        Employee employee1 = getEmployeeById(employee.getId());
        if (employee1 != null){
            return saveEmployee(employee);
        } else {
            throw new FileNotFound(employee.getId());
        }
    }

    @Override
    public void deleteEmployee(String id) {
        Employee employee = getEmployeeById(id);
        employee.setIsDelete(true);
        employeeDao.save(employee);
    }

    @Override
    public Employee getEmployeeByIdNumber(String idNumber) {
        return employeeDao.findEmployeeByIdNumberEquals(idNumber);
    }
}
