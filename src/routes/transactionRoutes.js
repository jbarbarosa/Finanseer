import express from 'express';
import {
  newTransaction,
  alterTransaction,
  removeTransaction,
  alterTransactionStatus,
  clientTransactions
} from '../controllers/transactionController.js';
import { authenticator } from '../middlewares/auth.js';
import { checkIfMatch } from '../middlewares/checkIfMatch.js';

const transactionRouter = express.Router();

transactionRouter.use(authenticator);

transactionRouter.post('/', checkIfMatch, newTransaction);

transactionRouter.put('/', checkIfMatch, alterTransaction);

transactionRouter.delete('/', checkIfMatch, removeTransaction);

transactionRouter.get('/my-transactions', clientTransactions);

transactionRouter.post('/status/', checkIfMatch, alterTransactionStatus);

export default transactionRouter;
