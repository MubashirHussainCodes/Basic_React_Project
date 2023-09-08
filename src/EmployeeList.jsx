import React, { Component } from 'react';

class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      newEmployee: {
        name: '',
        dateOfJoining: '',
        salary: '',
        position: '',
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newEmployee: {
        ...prevState.newEmployee,
        [name]: value,
      },
    }));
  };

  addEmployee = () => {
    this.setState((prevState) => ({
      employees: [...prevState.employees, this.state.newEmployee],
      newEmployee: {
        name: '',
        dateOfJoining: '',
        salary: '',
        position: '',
      },
    }));
  };

  removeEmployee = (index) => {
    this.setState((prevState) => ({
      employees: prevState.employees.filter((_, i) => i !== index),
    }));
  };

  render() {
    return (
      <div>
        <h2>Employee List</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date of Joining</th>
              <th>Salary</th>
              <th>Position/Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.dateOfJoining}</td>
                <td>{employee.salary}</td>
                <td>{employee.position}</td>
                <td>
                  <button onClick={() => this.removeEmployee(index)}>Remove</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Add Employee</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.newEmployee.name}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="dateOfJoining"
            placeholder="Date of Joining"
            value={this.state.newEmployee.dateOfJoining}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="salary"
            placeholder="Salary"
            value={this.state.newEmployee.salary}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="position"
            placeholder="Position/Role"
            value={this.state.newEmployee.position}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addEmployee}>Add Employee</button>
        </div>
      </div>
    );
  }
}

export default EmployeeList;