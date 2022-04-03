import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Department from "./Department";
import { Button, FormControl, TextField } from "@mui/material";

const EmployeeAddForm = (props) => {
    const employees = props.employees
    const setEmployees = props.setEmployees
    const departments = props.departments
    const setDepartments = props.setDepartments
    const [error, setError] = useState('')

    //fetch and set employees and departments with data from the API
    useEffect(() => {
        const fetchDep = async () => {
            await axios.get(props.departmentURL)
                .then(res => {
                    setDepartments(res.data)
                    console.log(res.data)
                })
                .catch(err => console.log(err))
        }
        fetchDep()
    }, []);

    //post employee to database based on text input and select 
    const addEmployee = () => {
        const postEmployee = async () => {
            if (document.getElementById("employee-name").value != '') {
                document.getElementById("name-alert").classList.remove('show')
                if (document.getElementById("department-select").innerText != null) {
                    document.getElementById("department-alert").classList.remove('show')
                    await axios.post(props.employeeURL,
                        {
                            EmployeeName: document.getElementById("employee-name").value,
                            Department: document.getElementById("department-select").innerText,
                            DateOfJoining: Date.now
                        })
                        .then(res => {
                            document.getElementById("api-alert").classList.remove('show')
                            let temp = [...employees]
                            temp.push(res.data)
                            setEmployees(temp)
                        }).catch(err => {
                            setError(err + '')
                            document.getElementById("api-alert").classList.add('show')
                            console.log(error);
                        })
                } else {
                    document.getElementById("department-alert").classList.add('show')
                }
            } else {
                document.getElementById("name-alert").classList.add('show')
            }
        }
        postEmployee()
    }

    //returns form to add an employee 
    return (
        <div>

            <FormControl className="w-50">
                <TextField label="Name" id="employee-name" />
                <Department departments={departments}></Department>
                <Button variant="contained" onClick={addEmployee}>Add Employee</Button>
            </FormControl>
            
            <div className="alert alert-danger alert-dismissible fade hide add-alert" id="name-alert">
                <strong>Error!</strong> Name field cannot be empty.
            </div>

            <div className="alert alert-danger alert-dismissible fade hide add-alert" id="department-alert">
                <strong>Error!</strong> Department must be selected.
            </div>

            <div className="alert alert-danger alert-dismissible fade hide add-alert" id="api-alert">
                <strong>Error!</strong> {error}
            </div>
        </div>
    )
}

export default EmployeeAddForm;