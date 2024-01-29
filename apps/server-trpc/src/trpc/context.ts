import * as trpcNext from '@trpc/server/adapters/next';
import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
// import {auth} from '../auth/authService'
import {verifyToken} from '../auth/Providers/jwt'
import { Mutation } from '@tanstack/react-query';

export const createContext = async ({req, res}:CreateExpressContextOptions) =>{

    const auth = async(req) => {
        
        const tokenFromClient = req.headers.authorization
        console.log(tokenFromClient);
        
        // if(!tokenFromClient) throw new Error('Authentication Error: Please Login');
        const verified = await verifyToken(tokenFromClient)
        return verified
    }
    const user = await auth(req)
    // console.log(`token: ${user}`);
    
    return {
       user
    }
}

export type Context = Awaited<ReturnType<typeof createContext>>;