import express from 'express';
import {
  newTransaction,
  alterTransaction,
  removeTransaction,
  alterTransactionStatus,
  clientTransactions
} from '../controllers/transactionController.js';

const transactionRouter = express.Router();

transactionRouter.post('/', newTransaction);

transactionRouter.put('/', alterTransaction);

transactionRouter.delete('/', removeTransaction);

transactionRouter.get('/my-transactions', clientTransactions);

transactionRouter.post('/status/', alterTransactionStatus);

export default transactionRouter;
