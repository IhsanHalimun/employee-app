import axios from "axios";
import { Button } from "@mui/material";

const SwitchDepartmentButton = (props) => {
    const employees = props.employees
    const setEmployees = props.setEmployees

    //switch employee departments
    const switchDeps = () => {
        //deepCopy employee
        let tempEmp = {...props.employee}
        switch (tempEmp.department) {
            case 'IT':
                tempEmp.department = 'Support'
                axios.put(props.employeeURL + tempEmp.employeeID, tempEmp)
                    .catch(error => console.log(error))
                break;
            case 'Support':
                tempEmp.department = 'IT'
                axios.put(props.employeeURL + tempEmp.employeeID, tempEmp)
                    .catch(error => console.log(error))
                break;
            default:
                break;
        }
        //update State
        let temp = [...employees]; //temp copies state array
        let index = temp.indexOf(temp.find(element => element.employeeID==tempEmp.employeeID)) //gets index of item to be replaced
        let temp2 = temp.filter(employee => employee.employeeID!=tempEmp.employeeID)//removes old item
        temp2.splice(index, 0, tempEmp);//inserts new item
        setEmployees(temp2)
    }

    //return button to switch departments
    return (
        <Button variant="contained" onClick={switchDeps}>Switch Departments</Button>
    )
}

export default SwitchDepartmentButton;