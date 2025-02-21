import React, { useState,useEffect } from 'react';
import axios from 'axios';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/employees/list')
      .then((res) => {
        console.log('response:', res.data);
        setEmployees(res.data);
      })
      .catch((error) => {
        console.error('error:', error);
      });
  }, []);
  

  const handleDelete = (id) => {
    setEmployees(employees.filter(emp => emp.id !== id));
  };


  return (
    <div className="container">
      <h2>Employee List</h2>
      <button className="create-button" onClick={() => {/* Add create logic */}}>
        Create +
      </button>
      
      <table className="employee-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>Date of Joining</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{new Date(employee.dob).toLocaleDateString()}</td>
              <td>{employee.gender}</td>
              <td>{new Date(employee.dateOfJoining).toLocaleDateString()}</td>
              <td>
                <button className="action-btn read">Read</button>
                <button className="action-btn edit">Edit</button>
                <button 
                  className="action-btn delete"
                  onClick={() => handleDelete(employee.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;