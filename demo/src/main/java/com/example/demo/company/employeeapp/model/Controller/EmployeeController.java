package com.example.demo.company.employeeapp.model.Controller;

import com.example.demo.company.employeeapp.model.Employee;
import com.example.demo.company.employeeapp.model.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/employees") // Base path for all endpoints in this controller
public class EmployeeController {


    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/{id}") // GET http://localhost:8080/employees/1
    public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
        Employee employee = employeeService.getEmployeeById(id);
        if (employee == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }
        return ResponseEntity.ok(employee);
    }

    @GetMapping("list") // GET http://localhost:8080/employees
    public ResponseEntity<List<Employee>> getAllEmployees() {
        List<Employee> employees = employeeService.getAllEmployees();
        if (employees.isEmpty()) {
            return ResponseEntity.status(HttpStatus.NO_CONTENT).build();
        }
        return ResponseEntity.ok(employees);
    }
}
