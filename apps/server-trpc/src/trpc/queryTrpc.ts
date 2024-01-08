import {employee} from '../models/employee'
import {router, publicProcedure} from './trpc'
import { z } from "zod";

export const appRouter = router({
    allEmployees:publicProcedure.query(async () => {
        const employees = await employee.findAll()
        return employees
    }),
    employeeById: publicProcedure
    .input(z.string())
    .query(async(id) => {
        const {input} = id;
        const employeeId = await employee.findByPk(input)
        return employeeId
    })
})

export type AppRouter = typeof appRouter
