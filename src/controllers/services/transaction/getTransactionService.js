import Transaction from "../../../models/transactionModel.js";

const getTransactionService = async (transactionId) => {
  const transaction = await Transaction.findById(transactionId);
  if (transaction) return transaction;
  return false;
}

export default getTransactionService;
