import express from 'express';
import {sequelize} from './configs/connctDB'
import {appRouter} from './trpc/queryTrpc'
import * as trpcExpress from '@trpc/server/adapters/express';

const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();
app.use(express.json());

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router:appRouter
  })
)


app.listen(port, async() => {
  console.log(`listen in port: ${port}`);

  try {
    await sequelize.authenticate()
    console.log('Database connected!');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})