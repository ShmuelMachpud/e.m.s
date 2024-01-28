import {Employee} from '../models/employee'
import {EmployeeType} from '../types/types'
import {sequelize} from '../configs/connectDB'

export const getAllEmployees =async(): Promise<EmployeeType[]>  =>{
    const allEmployees = await Employee.findAll();

    return allEmployees.map((employee:EmployeeType | any) => ({
        id: employee.id,
        first_name: employee.first_name,
        last_name: employee.last_name,
        email: employee.email,
        phone_number: employee.phone_number,
        branch_number: employee.branch_number,
        role: employee.role
    }));
}


export const addEmployee = async(newUser)=> {
        const createNewUser = Employee.build({
            first_name: newUser.input.first_name,
            last_name: newUser.input.first_name ,
            email: newUser.input.email ,
            phone_number: newUser.input.phone_number ,
            branch_number: newUser.input. branch_number ,
            role: newUser.input.role ,
        });
        
        await createNewUser.save()
        console.log('Hagai was saved to the database!');
}

