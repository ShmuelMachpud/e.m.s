import * as Dal from '../Dal/usersDal'
import {generateAuthToken} from '../auth/Providers/jwt'

export const getAllUsers = async() => {
    try {
        const allUsers = await Dal.getAllUsers();
        console.log(allUsers);
        if(!allUsers){
            throw new Error(`data not found`)
        }
        return allUsers
    } catch(error) {
        throw new Error(`fetch all users errror: ${error}`)
    }
}

export const addUser = async(newUser) => {
    try {
        const nameUser = await Dal.addUser(newUser);
        return (`${nameUser} Your registration has been successfully completed!`)
    }catch(error) {
        throw new Error(`Registration failed ${error}`)
    }
}