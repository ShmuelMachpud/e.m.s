import {Employee} from '../models/employee'
// import {sequelize} from '../configs/connctDB'
import {router, publicProcedure} from './trpc'
// import { z } from "zod";

const appRouter = router({
    allEmployees: publicProcedure.query(async () =>{
        const allEmployees = await Employee.findAll();
        return allEmployees
    })
})

export type AppRouter = typeof appRouter;
// export const appRouter = router({
//     allEmployees:publicProcedure.query(async () => {
//         const data = await sequelize.models.employee.findAll()
//         .then((employees) => {return employees})
//         // console.log(data);
//         return data
//     }),
//     employeeById: publicProcedure
//     .input(z.string())
//     .query(async(firstName) => {
//         const {input} = firstName;
//         const employeeId = await sequelize.models.employee.findByPk(input)
//         return employeeId
//     })
// })

// export type AppRouter = typeof appRouter
