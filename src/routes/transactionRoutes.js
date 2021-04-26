import express from 'express';
import { newTransaction, alterTransaction } from '../controllers/transactionController.js';
const transactionRouter = express.Router();

transactionRouter.post('/', newTransaction);

transactionRouter.put('/', alterTransaction);

transactionRouter.delete('/', (req, res) => {
  res.send("Rota para remover transação");
})

transactionRouter.get('/:client', (req, res) => {
  res.send("Rota para ver transações de um cliente");
})

transactionRouter.post('/status/:id', (req, res) => {
  res.send("Rota para mudar status de uma transação");
})

export default transactionRouter;
