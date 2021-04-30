import Transaction from "../../../models/transactionModel.js"

const removeTransactionService = async (transactionId) => {
  const update = await Transaction.findByIdAndDelete(transactionId)
  console.log(update)
  if (update._id == transactionId) return [200, 'Transação removida'];
  return [400, 'Transação não pôde ser removida'];
}

export default removeTransactionService;
