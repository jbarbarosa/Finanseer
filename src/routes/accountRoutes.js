import express from 'express';
import { accountStatus, createNewAccount, updateAccount, getAllUserAccounts } from '../controllers/accountController.js';
import { accountBalance } from '../controllers/accountController.js';
import { authenticator } from '../middlewares/auth.js';
import { checkIfMatch } from '../middlewares/checkIfMatch.js';
const accountRouter = express.Router();

accountRouter.use(authenticator);

accountRouter.post('/', checkIfMatch, createNewAccount);

accountRouter.put('/', checkIfMatch, updateAccount);

accountRouter.put('/status', checkIfMatch, accountStatus);

accountRouter.get('/balance', accountBalance);

accountRouter.get('/user-accounts', getAllUserAccounts);

export default accountRouter;
