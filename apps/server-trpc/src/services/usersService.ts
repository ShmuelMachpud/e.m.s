import { log } from 'console';
import * as Dal from '../Dal/usersDal'
import {generateAuthToken, verifyToken} from '../auth/Providers/jwt'
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from 'config'


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

export const userByEmail = async(user) => {
    const email = user.input.email
    const password = user.input.password
    
    
    try{
        const user = await Dal.userByEmail(email)
        console.log(password);
        if(user.password === password){
            const token = generateAuthToken(user)
            if (token) {
                try{
                    const decoded = verifyToken(token)
                    console.log(decoded)
                    user.userId = (decoded as JwtPayload).userId;
                } catch(error){
                    console.log(error);
                }
            }
            return user
        }else {
            throw new Error(`The password is incorrect`)
        }
        
    } catch(error){
        throw new Error(`Login failed: ${error}`)
    }
}