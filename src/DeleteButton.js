import axios from "axios"
import {Button} from '@mui/material';

const DeleteButton = (props) => {
    const employees = props.employees
    const setEmployees = props.setEmployees

    //delete employee via ID
    const deleteEmployee = () => {
        axios.delete(props.employeeURL + props.employeeID)
        .then((res) => {
          console.log('DELETING ' + props.employeeID)
          setEmployees(employees.filter(employee => { return employee.employeeID != props.employeeID}))
        }).catch(error => console.log(error))   
    }

    //return button to delete corresponding employee
    return (
        <Button variant="contained" onClick={deleteEmployee}>Delete</Button>
    )
}

export default DeleteButton;