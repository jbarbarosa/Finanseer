import express from 'express';
const accountRouter = express.Router();

accountRouter.post('/', (req, res) => {
  res.send("Rota para criar nova conta bancária");
})

accountRouter.put('/', (req, res) => {
  res.send("Rota para alterar uma conta bancária");
})

accountRouter.delete('/', (req, res) => {
  res.send("Rota para desativar conta bancária");
})

accountRouter.get('/:account', (req, res) => {
  res.send("Rota para exibir saldo de uma conta");
})

export default accountRouter;
