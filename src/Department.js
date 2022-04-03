import {FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const Department = (props) => {
    //return select option containing department name
    return (
        <div>
                <FormControl className="w-100">
                    <InputLabel>Department</InputLabel>
                <Select id="department-select" label="Department">
                    {
                        props.departments.map(department => {
                            return <MenuItem value={department.departmentName}>{department.departmentName}</MenuItem>
                        })
                    }
                    </Select>
                </FormControl>

        </div>)
}

export default Department;