import EmployeeTable from './EmployeeTable';
import EmployeeAddForm from './EmployeeAddForm';
import { useState } from 'react';
import { Grid } from '@mui/material';

function App() {

  const [employees, setEmployees] = useState([]) // employees
  const [departments, setDepartments] = useState([]) // departments
  const employeeURL = "https://localhost:7008/api/Employees/"
  const departmentURL = "https://localhost:7008/api/Departments/"


  return (
    <Grid className="App p-2">

      <nav class="navbar navbar-light navbar-expand-lg bg-light">
        <a class="navbar-brand" href="#">Employee Manager</a>
      </nav>
      <div className="container p-1">
        <div className="container" id="search-form">
          <h2>Employee Table</h2>
          <EmployeeTable
            employees={employees}
            setEmployees={setEmployees}
            departments={departments}
            setDepartments={setDepartments}
            employeeURL={employeeURL}>
          </EmployeeTable>
        </div>
        <div className="container" id="add-employee-form">
          <h2>Add Employee</h2>
          <EmployeeAddForm
            employees={employees}
            setEmployees={setEmployees}
            departments={departments}
            setDepartments={setDepartments} 
            employeeURL={employeeURL}
            departmentURL={departmentURL}
          >
          </EmployeeAddForm>
        </div>
      </div>
    </Grid>
  );
}

export default App;
