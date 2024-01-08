import {initTRPC } from '@trpc/server'

import {Context} from 'vm'



const t = initTRPC.context<Context>().create()

export const router = t.router
console.log(t);

export const publicProcedure = t.procedure
