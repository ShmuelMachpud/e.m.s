import {verifyToken} from './Providers/jwt'
import config from 'config'

const tokenGenerator = config.get('TOKEN_GENERATOR');

export const auth = (req) => {
    if(tokenGenerator) {
        try{
            const tokenFromClient = req.header('authorization').split(' ')[1]
            console.log(tokenFromClient);
            
            if(!tokenFromClient) throw new Error('Authentication Error: Please Login');

            const userInfo = verifyToken(tokenFromClient);
            if(!userInfo) throw new Error('Authentication Error: Unauthorize user');

            req.user = userInfo;
            return userInfo
        } catch(error) {
            return ('error')
        }
    }

    // if(tokenGenerator === 'not_jwt')
    // return ('error')
}
