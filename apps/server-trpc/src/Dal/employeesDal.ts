import {Employee} from '../models/employee'
import {EmployeeType} from '../types/types'
import {sequelize} from '../configs/connectDB'

export const getAllEmployees =async(): Promise<EmployeeType[]>  =>{
    const allEmployees = await Employee.findAll();
    

    console.log(allEmployees);

    return allEmployees.map((employee:EmployeeType | any) => ({
        id: employee.id,
        first_name: employee.first_name,
        last_name: employee.last_name
    }));
}


export const addEmployee = async()=> {
        const hagai = Employee.build({
            first_name: 'Hagai',
            last_name: 'Morad',
        });
        console.log(hagai instanceof Employee);
        console.log(hagai);
        
        await hagai.save()
        console.log('Hagai was saved to the database!');
}

