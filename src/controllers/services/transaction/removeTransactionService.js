import Transaction from "../../../models/transactionModel.js"

const removeTransactionService = async (transactionId) => {
  const update = await Transaction.findOneAndDelete({ _id: transactionId })
  if (update.ok == 1) return [200, 'Transação removida'];
  return [400, 'Transação não pôde ser removida'];
}

export default removeTransactionService;
