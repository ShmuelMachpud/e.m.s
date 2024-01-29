import {initTRPC, TRPCError } from '@trpc/server'
import {Context} from './context'
import {getAllUsers} from '../services/usersService'
import { log } from 'console'
import { json } from 'sequelize'



const t = initTRPC.context<Context>().create()

export const router = t.router

export const publicProcedure = t.procedure

export const adminProcedure = t.procedure.use(async function (opts) {
    
    const {ctx} = opts
    // console.log(`opts: ${json(opts)}`);
    
  
    if (!ctx.user) {
        throw new TRPCError({ code: 'UNAUTHORIZED' });
    }

    return opts.next()
})

