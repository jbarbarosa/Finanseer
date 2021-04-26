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