import * as trpcNext from '@trpc/server/adapters/next';
import type { CreateExpressContextOptions } from '@trpc/server/adapters/express';
import {verifyToken} from '../auth/Providers/jwt'
import { Mutation } from '@tanstack/react-query';

export const createContext = async ({req, res}:CreateExpressContextOptions) =>{

    const auth = () => {
        // console.log(`req: ${req}`);
        if (!req.headers.authorization){
            return null
        }
        // console.log(req.headers.authorization);
        
        return req.headers.authorization
    }
    const user = await auth()
    console.log(user);
    
    return {
       user
    }
}

export type Context = Awaited<ReturnType<typeof createContext>>;