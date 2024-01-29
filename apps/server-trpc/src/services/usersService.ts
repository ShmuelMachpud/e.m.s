import { log } from 'console';
import * as Dal from '../Dal/usersDal'
import {generateAuthToken, verifyToken} from '../auth/Providers/jwt'
import jwt, { JwtPayload } from 'jsonwebtoken';
import config from 'config'
import { decode } from 'punycode';
import { Mutation, useMutation } from '@tanstack/react-query';


export const getAllUsers = async() => {
    try {
        const allUsers = await Dal.getAllUsers();
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

export const login = async(loginData) => {
    try{
        const user = await Dal.userByEmail(loginData.input.email)
        // console.log(`user:${JSON.stringify(user)}`);
        if(loginData.input.password === user.password){
            const token = generateAuthToken(user)
            console.log(`token: ${token}`);
            console.log(`user: ${user}`);
            return {user, token}

        }else {
            throw new Error(`The password is incorrect`)
        }
        
    } catch(error){
        throw new Error(`Login failed: ${error}`)
    }
}