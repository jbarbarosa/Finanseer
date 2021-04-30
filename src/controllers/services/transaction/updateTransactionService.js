import Transaction from "../../../models/transactionModel.js";

const updateTransactionService = async (transactionId, query) => {
  const update = await Transaction.updateOne({ _id: transactionId }, query, {
    new: true
  });
  if (update) return [200, 'Transação modificada com sucesso']
  return [400, 'Erro: Transação não pôde ser modificada'];
}

export default updateTransactionService;
