import Transaction from "../models/transactionModel.js";
import { createNewTransactionService } from "./services/transaction/createNewTransactionService.js";

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