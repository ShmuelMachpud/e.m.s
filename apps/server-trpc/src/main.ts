import express from 'express';
import {connctDB} from './configs/connctDB'

import {employees} from './configs/connctDB'

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  const allEmployees = async ()=> {
    const data = await employees.findAll()
    return data
  }
  res.send(allEmployees)
});


const start = async () => {
  const db = await connctDB()

  app.listen(port, () => {
    console.log(`listen in port: ${port}`);
  });
}

start()
