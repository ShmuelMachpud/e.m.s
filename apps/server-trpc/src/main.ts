import express from 'express';
import * as trpcExpress from '@trpc/server/adapters/express';
import {connectDatabase} from './configs/connectDB'
import {syncDatabase} from './models/employee'
import {appRouter} from './router/trpcRouter'
import cors from 'cors'


export type AppRouter = typeof appRouter;

const startServer = async() => {
  try {
    await connectDatabase();
    await syncDatabase();
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

const app = express();
app.use(cors());
app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router:appRouter
  })
)


const port = process.env.PORT ? Number(process.env.PORT) : 3000;

app.listen(port,startServer)