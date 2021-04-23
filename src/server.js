import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import user from './routes/userRoutes.js';
import account from './routes/accountRoutes.js';
import transaction from './routes/transactionRoutes.js';
import parser from 'body-parser';
import connectDB from './configs/db.js';

connectDB();

const app = express();

app.use(parser.json());
app.use('/account', account);
app.use('/transaction', transaction);
app.use('/user', user);

app.listen(process.env.PORT, () => {
  console.log("[Server] Running on port "+process.env.PORT);
})
