import {Employee} from '../models/employee'
import {EmployeeType} from '../types/types'

export const getAllEmployees =async() : Promise<EmployeeType[]> =>{
    const allEmployees = await Employee.findAll();
    return allEmployees.map((employee:EmployeeType | any) => ({
        id: employee.id,
        firstName: employee.firstName,
        lastName: employee.lastName

    }));
}