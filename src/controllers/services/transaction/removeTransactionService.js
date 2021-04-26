import Transaction from "../../../models/transactionModel.js"

const removeTransactionService = async (transactionId) => {
  console.log("\nTransactionId: "+transactionId);
  const result = await Transaction.findOneAndDelete({ _id: transactionId })
  return result
}

export default removeTransactionService;
