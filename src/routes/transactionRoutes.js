import express from 'express';
const transactionRouter = express.Router();

transactionRouter.post('/', (req, res) => {
  res.send("Rota para criar nova transação");
})

transactionRouter.put('/', (req, res) => {
  res.send("Rota para alterar uma transação");
})

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
