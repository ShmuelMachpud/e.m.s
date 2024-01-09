import express from 'express';
import {sequelize} from './configs/connctDB'
import {appRouter} from './trpc/queryTrpc'
import * as trpcExpress from '@trpc/server/adapters/express';

import {Employee} from './models/employee'
import { error, log } from 'console';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
// app.use(express.json());

// app.use(
//   '/trpc',
//   trpcExpress.createExpressMiddleware({
//     router:appRouter
//   })
// )

sequelize.sync()
  .then(() => {
    console.log('Database synced successfully');
  })
  .catch((error)=>{
    console.error('Error syncing database:', error);
  })

Employee.findAll()
  .then((employees) => {
    console.log('allEmployee:', employees.map((employee)=> employee.toJSON()));
  })
  .catch((error)=>{
    console.log('Error to find all', error);
    
  })


app.listen(port, async() => {
  console.log(`listen in port: ${port}`);

  try {
    await sequelize.authenticate()
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})
