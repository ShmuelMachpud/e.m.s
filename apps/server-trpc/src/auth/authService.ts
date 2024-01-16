import {verifyToken} from './Providers/jwt'
import config from 'config'

const tokenGenerator = config.get('TOKEN_GENERATOR') || 'jwt';

export const auth = (req, res, next) => {
    if(tokenGenerator === 'jwt') {
        try{
            const tokenFromClient = req.header('x-auth-token')
            if(!tokenFromClient) throw new Error('Authentication Error: Please Login');

            const userInfo = verifyToken(tokenFromClient);
            if(!userInfo) throw new Error('Authentication Error: Unauthorize user');

            req.user = userInfo;
            return next()
        } catch(error) {
            return ('error')
        }
    }

    if(tokenGenerator === 'not_jwt')
    return ('error')
}
