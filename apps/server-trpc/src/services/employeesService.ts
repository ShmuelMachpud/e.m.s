import * as Dal from '../Dal/employeesDal'

export const getAllEmployees = async () =>{
    try {
        const allEmployees = await Dal.getAllEmployees();
        if (!allEmployees){
            throw new Error('data not found')
        }
        return allEmployees
    } catch (error) {
        throw new Error(`fetch all employees errror: ${error}`)
    }
}

export const addEmployee = async(newUser)=>{
    try{
        await Dal.addEmployee(newUser)
        return (`${newUser.last_name} was saved to the database!`)
    } catch(error) {
        throw new Error(`add employee errror: ${error}`)
    }
     
}