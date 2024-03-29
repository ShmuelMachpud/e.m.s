import jwt from 'jsonwebtoken'
import config from 'config'

const key = config.get("JWT_KEY")

export const generateAuthToken = (user)=>{
    const {id, email, password} = user;
    const token = jwt.sign({id, email, password}, key)
    return token
}

export const verifyToken = (tokenFromClient) => {
    try {
        const userData = jwt.verify(tokenFromClient, key);
        return userData
    } catch(error) {
        return null;
    }
}