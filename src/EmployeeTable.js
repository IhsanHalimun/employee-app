import Employee from "./Employee";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Table, TableBody, TableHead, TableRow, TableCell, TextField, Grid } from "@mui/material";


const EmployeeTable = (props) => {
    const employees=props.employees
    const setEmployees=props.setEmployees

    const [searchRes, setSearchRes] = useState('') // search results

    const filteredEmployees = employees.filter(employee => {
        return (
            employee.employeeName.toLowerCase().includes(searchRes.toLocaleLowerCase())
        )
    })

    // change handler for search box 
    const searchHandleChange = e => {
        setSearchRes(e.target.value)
    }


    //fetch and set employees and departments with data from the API
    useEffect(() => {
        const fetchEmp = async () => {
            await axios.get(props.employeeURL)
                .then(res => {
                    setEmployees(res.data)
                    console.log(res.data)
                })
                .catch(error => console.log(error))
        }
        fetchEmp()
    }, []);

    //return table of employees
    return (
        <div>
            <TextField className="w-50" label="Search by Name" onChange={searchHandleChange} />

            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Department</TableCell>
                        <TableCell>Hire Date</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*populate Table with rows of Employees*/}
                    {filteredEmployees.map(employee => {
                        return <Employee
                            employeeID={employee.employeeID}
                            employeeName={employee.employeeName}
                            department={employee.department}
                            dateOfJoining={employee.dateOfJoining.toLocaleString()}
                            employees={employees}
                            setEmployees={setEmployees}
                            employeeURL={props.employeeURL}
                        />
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default EmployeeTable;