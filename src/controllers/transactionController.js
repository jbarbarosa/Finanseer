import Transaction from "../models/transactionModel.js";
import changeTransactionStatus from "./services/transaction/changeTransactionStatus.js";
import createNewTransactionService from "./services/transaction/createNewTransactionService.js";
import removeTransactionService from "./services/transaction/removeTransactionService.js";

export const newTransaction = async (req, res) => {
  try {
    const { accountId, amount, isInbound } = req.body;
    if (!accountId || !amount || !isInbound) return res
      .status(400).send(`Erro: dados incompletos.`);

    const transaction = await createNewTransactionService(accountId, amount, isInbound);
    if (transaction) {
      return res.status(200).send(`Nova transação criada com sucesso`);
    }
  } catch (err) {
    return res.status(400).send(`Erro: ${err}`);
  }
}

export const alterTransaction = async (req, res) => {
  const { transactionId } = req.body;
  const query = {}
  if (req.body.amount) query.amount = req.body.amount;
  if (req.body.isInbound) query.isInbound = req.body.isInbound;

  const result = await Transaction.updateOne({_id: transactionId}, query, {
    new: true
  });
  return res.send(result);
}

export const removeTransaction = async (req, res) => {
  const { transactionId } = req.body;
  const result = await removeTransactionService(transactionId);
  if (!result) res.status(400).send("Erro: não foi possível remover esta transação")
  return res.send("Transação removida com sucesso");
}

export const alterTransactionStatus = async (req, res) => {
  try {
    const { transactionId, isConfirmed } = req.body;
    const result = await changeTransactionStatus(transactionId, isConfirmed);
    if (result) return res.send("Status da transação alterado com sucesso"+"\n"+result);
  } catch {
    res.status(400).send("Erro, certifique-se de que a conta e a confirmação foram enviadas");
  }
}