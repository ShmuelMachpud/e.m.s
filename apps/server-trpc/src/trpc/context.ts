import * as trpcNext from '@trpc/server/adapters/next';
import type { CreateNextContextOptions } from '@trpc/server/adapters/next';
import {verifyToken} from '../auth/Providers/jwt'

export const context = async (opts: CreateNextContextOptions) =>{

    const auth =  (req)=> {
        try {
            const tokenFromClient =  req.query.input
            console.log(tokenFromClient);
            
            if(!tokenFromClient) throw new Error('Authentication Error: Please Login');

            // const userInfo = verifyToken(tokenFromClient);
            // if(!userInfo) throw new Error('Authentication Error: Unauthorize user');

            return tokenFromClient
        } catch(error){
            return 'eee'
        }
    }

    const user =  await auth(opts.req)

    return {
        user
    }
}

export type Context = Awaited<ReturnType<typeof context>>;