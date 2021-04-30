import createNewAccountService from "./services/account/createNewAccountService.js";
import findAccountBalanceService from "./services/account/findAccountBalanceService.js";
import getAllUserAccountsService from "./services/account/getAllUserAccountsService.js";
import updateAccountService from "./services/account/updateAccountService.js";
import updateAccountStatusService from "./services/account/updateAccountStatusService.js";

export const createNewAccount = async (req, res) => {
  try {
    const { bankName, number } = req.body;
    const id = req.id;
    if (!id || !bankName || !number) return res
      .status(400).send(`Erro: dados incompletos.`);
    const result = await createNewAccountService(id, bankName, number);
    res.status(result[0]).send(result[1]);
  } catch (err) {
    return res.status(400).send(`Erro ao registrar conta: ${ err }`);
  }
}

export const updateAccount = async (req, res) => {
  try {
    const { accountId } = req.body;
    const query = {}
    if (req.body.bankName) query.bankName = req.body.bankName;
    if (req.body.typeOfAccount) query.typeOfAccount = req.body.typeOfAccount;
    if (req.body.number) query.number = req.body.number;
    if (req.body.balance) query.balance = req.body.balance;
    const result = await updateAccountService(accountId, query);
    return res.status(result[0]).send(result[1]);
  } catch(err) {
    return err
  }
}

export const accountStatus = async (req, res) => {
  try {
    const { accountId, status } = req.body;
    const result = await updateAccountStatusService(accountId, status);
    return res.status(result[0]).send(result[1]);
  } catch (err) {
    res.status(400).send("Erro ao alterar estado da conta");
  }
}

export const accountBalance = async (req, res) => {
  try {
    const { accountId } = req.body;
    const result = await findAccountBalanceService(accountId);
    const balance = `${result[1]}` // um curioso bug acontece se result[1] for igual a um código HTTP (200, 400, 404 etc.), portanto convém garantir a conversão para uma string 
    return res.status(result[0]).send(balance);
  } catch (err) {
    return res.status(400).send(err);
  }
}

export const getAllUserAccounts = async (req, res) => {
  if (!req.body.email) return res.status(400).send("Informe o email do usuario");
  try {
    const { email } = req.body;
    const result = await getAllUserAccountsService(email);
    return res.status(result[0]).send(result[1]);
  } catch (err) {
    return res.status(400).send(`Erro: ${err}`);
  }
}
