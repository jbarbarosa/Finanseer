import findAccountBalanceService from "./services/account/findAccountBalanceService.js";
import validateNewAccountBalanceService from "./services/account/validateNewAccountBalanceService.js";
import changeTransactionStatusService from "./services/transaction/changeTransactionStatusService.js";
import createNewTransactionService from "./services/transaction/createNewTransactionService.js";
import getAllClientTransactionsService from "./services/transaction/getAllClientTransactionsService.js";
import getTransactionService from "./services/transaction/getTransactionService.js";
import removeTransactionService from "./services/transaction/removeTransactionService.js";
import updateTransactionService from "./services/transaction/updateTransactionService.js";

export const newTransaction = async (req, res) => {
  try {
    const { accountId, amount, isInbound } = req.body;
    if (!accountId || !amount || !isInbound) return res
      .status(400).send(`Erro: dados incompletos.`);
    const result = await createNewTransactionService(accountId, amount, isInbound);
    return res.status(result[0]).send(result[1]);
  } catch (err) {
    return res.status(400).send(`Erro: ${err}`);
  }
}

export const alterTransaction = async (req, res) => {
  const { transactionId } = req.body;
  const query = {}
  if (req.body.amount) query.amount = req.body.amount;
  if (req.body.isInbound) query.isInbound = req.body.isInbound;

  const result = await updateTransactionService(transactionId, query);
  return res.status(result[0]).send(result[1]);
}

export const removeTransaction = async (req, res) => {
  const { transactionId } = req.body;
  const result = await removeTransactionService(transactionId);
  return res.status(result[0]).send(result[1]);
}

export const alterTransactionStatus = async (req, res) => {
  try {
    const { transactionId } = req.body;
    const { accountId, isInbound, amount, isConfirmed } = await getTransactionService(transactionId);
    if (isConfirmed) return res.status(200).send("Transação já confirmada");
    if (!isInbound) {
      const isValid = await validateNewAccountBalanceService(amount, accountId)
      if (!isValid) return res.status(401).send("Erro: saldo insuficiente");
    }
    const result = await changeTransactionStatusService(transactionId, true);
    return res.status(result[0]).send(result[1]);
  } catch {
    res.status(400).send("Erro, certifique-se de que a conta e a confirmação foram enviadas corretamente");
  }
}

export const clientTransactions = async (req, res) => {
  try {
    const { clientId } = req.body;
    const result = await getAllClientTransactionsService(clientId);
    return res.status(result[0]).send(result[1]);
  } catch (err) {
    return res.status(400).send(`Erro: ${err}`);
  }
}
