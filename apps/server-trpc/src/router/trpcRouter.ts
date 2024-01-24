import {router, publicProcedure, adminProcedure} from '../trpc/trpc'
import {TRPCError} from '@trpc/server'
import * as employeesService from '../services/employeesService'
import * as usersService from '../services/usersService'
import z from 'zod'



export const appRouter = router({
    allUsers: adminProcedure.query(usersService.getAllUsers),
  
    allEmployees: adminProcedure.query(employeesService.getAllEmployees),

    addEmployee: publicProcedure.query(employeesService.addEmployee),

    userByEmail: publicProcedure.input(z.object({
      email: z.string(),
      password: z.string()
    }))
    .mutation((user)=> usersService.userByEmail(user)),

    addUser: publicProcedure.input(z.object({
      first_name: z.string(),
      last_name: z.string(),
      email: z.string(),
      password: z.string()
    }))
    .mutation((newUser) => usersService.addUser(newUser))
    
  })

  export type AppRouter = typeof appRouter;
