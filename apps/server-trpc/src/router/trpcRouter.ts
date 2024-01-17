import {router, publicProcedure} from '../trpc/trpc'
import * as employeesService from '../services/employeesService'
import * as usersService from '../services/usersService'
import z from 'zod'

export const appRouter = router({
    allEmployees: publicProcedure.query(employeesService.getAllEmployees),
    addEmployee: publicProcedure.query(employeesService.addEmployee),
    allUsers: publicProcedure.query(usersService.getAllUsers),
    addUser: publicProcedure.input(z.object({
      first_name: z.string(),
      last_name: z.string(),
      email: z.string(),
      password: z.string()
    }))
    .mutation((newUser) => usersService.addUser(newUser))
    
  })

  export type AppRouter = typeof appRouter;
