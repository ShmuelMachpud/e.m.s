import {sequelize} from '../configs/connectDB'
import {UserType} from '../types/types'
import {User} from '../models/user'

export const getAllUsers = async(): Promise<UserType[]> => {
    const allUsers = await User.findAll();
    
    return allUsers.map((user:UserType | any)=> ({
        id: user.id,
        first_name :user.first_name,
        last_name: user.last_name,
        email: user.email,
        password: user.password
    }))
}

export const addUser = async(newUser) => {
    const createNewUser = User.build({
        first_name: newUser.input.first_name,
        last_name: newUser.input.last_name,
        email: newUser.input.email,
        password: newUser.input.password
    });

    await createNewUser.save()
    
    
    return newUser.input.first_name
}

export const userByEmail = async(email):Promise<UserType |any> => {
    const user = await User.findByPk(email)
    if(!user){

        throw new Error ('User not found!')
        
    } else{
     
        return(user.dataValues);
        
    }
}