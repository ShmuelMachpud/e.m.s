import {router, publicProcedure} from '../trpc/trpc'
import * as employeesService from '../services/employeesService'

export const appRouter = router({
    allEmployees: publicProcedure.query(employeesService.getAllEmployees),
    employeeById: publicProcedure.query(async() =>{

    }),
    addEmployee: publicProcedure.query(employeesService.addEmployee)
  })