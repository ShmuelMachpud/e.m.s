import {initTRPC, TRPCError } from '@trpc/server'
import {Context} from './context'
import {getAllUsers} from '../services/usersService'
import { log } from 'console'



const t = initTRPC.context<Context>().create()

export const router = t.router

export const publicProcedure = t.procedure

export const adminProcedure = publicProcedure.use(async (opts) => {
    const {ctx} = opts
    console.log(`opts:${opts.next}`);
    console.log(ctx);
    
    if (!ctx) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    return opts.next({
        ctx:{
            getAllUsers
        }
    })
})

