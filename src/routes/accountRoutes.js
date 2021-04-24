import express from 'express';
import { createNewAccount } from '../controllers/accountController.js';
import { authenticator } from '../middlewares/auth.js';
const accountRouter = express.Router();

accountRouter.use(authenticator);

accountRouter.post('/', createNewAccount);

accountRouter.put('/', (req, res) => {
  res.send("Rota para alterar uma conta bancária");
});

accountRouter.delete('/', (req, res) => {
  res.send("Rota para desativar conta bancária");
});

accountRouter.get('/:account', (req, res) => {
  res.send("Rota para exibir saldo de uma conta");
});

export default accountRouter;
