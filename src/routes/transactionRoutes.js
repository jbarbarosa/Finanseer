import express from 'express';
import { newTransaction, alterTransaction, removeTransaction } from '../controllers/transactionController.js';
const transactionRouter = express.Router();

transactionRouter.post('/', newTransaction);

transactionRouter.put('/', alterTransaction);

transactionRouter.delete('/', removeTransaction)

transactionRouter.get('/all-transactions', (req, res) => {
  res.send("Rota para ver transações de um cliente");
})

transactionRouter.post('/status/', (req, res) => {
  res.send("Rota para mudar status de uma transação");
})

export default transactionRouter;
