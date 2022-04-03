import DeleteButton from "./DeleteButton";
import SwitchDepartmentButton from "./SwitchDepartmentButton";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const Employee = (props) => {
    //return row containing employee information
    return (
        <TableRow>
            <TableCell>{props.employeeName}</TableCell>
            <TableCell>{props.department}</TableCell>
            <TableCell>{props.dateOfJoining}</TableCell>
            <TableCell><DeleteButton
                employeeID={props.employeeID}
                employees={props.employees}
                setEmployees={props.setEmployees}
                employeeURL={props.employeeURL}>
            </DeleteButton></TableCell>
            <TableCell><SwitchDepartmentButton
                employee={props}
                employees={props.employees}
                setEmployees={props.setEmployees}
                employeeURL={props.employeeURL}>
            </SwitchDepartmentButton ></TableCell>
        </TableRow>
    )
}
export default Employee;

//{ employeeID, employeeName,
//department, dateOfJoining, switchDepartments}