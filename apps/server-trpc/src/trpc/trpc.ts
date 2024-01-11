import {initTRPC } from '@trpc/server'

import {Context} from 'vm'


const t = initTRPC.create()

export const router = t.router

export const publicProcedure = t.procedure

