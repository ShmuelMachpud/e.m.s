import express from 'express';

import {connectDatabase} from './configs/connectDB'
import {syncDatabase, Employee} from './models/employee'

//import to TRPC!!!!
import {router, publicProcedure} from './trpc/trpc'

// import {appRouter} from './trpc/queryTrpc'
import * as trpcExpress from '@trpc/server/adapters/express';


const appRouter = router({
  allEmployees: publicProcedure.query(async () =>{
      const allEmployees = await Employee.findAll();
      return allEmployees
  })
})

export type AppRouter = typeof appRouter;






const startServer = async() => {
  try {
    await connectDatabase();
    await syncDatabase();

    const employyes = await Employee.findAll();
    console.log(employyes.every(e => e instanceof Employee));
    console.log('Employees:', employyes);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

const app = express();
app.use(express.json());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router:appRouter
  })
)


const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port,startServer)
// app.listen(port, () => {
//   console.log(`Listening on port: ${port}`);
// })
