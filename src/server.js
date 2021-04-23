import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import user from './routes/userRoutes.js';
import account from './routes/accountRoutes.js';
import transaction from './routes/transactionRoutes.js';

const app = express();

app.get('/', (req, res) => {
  res.send("Hello World");
})

app.use('/account', account);
app.use('/transaction', transaction);
app.use('/user', user);

app.listen(process.env.PORT, () => {
  console.log("[Server] Running on port "+process.env.PORT);
})
