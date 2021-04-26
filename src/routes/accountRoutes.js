import express from 'express';
import { accountStatus, createNewAccount, updateAccount } from '../controllers/accountController.js';
import { accountBalance } from '../controllers/accountController.js';
import { authenticator } from '../middlewares/auth.js';
const accountRouter = express.Router();

accountRouter.use(authenticator);

accountRouter.post('/', createNewAccount);

accountRouter.put('/', updateAccount);

accountRouter.put('/status', accountStatus);

accountRouter.get('/balance', accountBalance);

export default accountRouter;
