import express from 'express';
import {
  newTransaction,
  alterTransaction,
  removeTransaction,
  alterTransactionStatus
} from '../controllers/transactionController.js';

const transactionRouter = express.Router();

transactionRouter.post('/', newTransaction);

transactionRouter.put('/', alterTransaction);

transactionRouter.delete('/', removeTransaction)

transactionRouter.get('/all-transactions', (req, res) => {
  res.send("Rota para ver transações de um cliente");
})

transactionRouter.post('/status/', alterTransactionStatus);

export default transactionRouter;
