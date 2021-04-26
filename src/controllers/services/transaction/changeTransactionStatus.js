import Transaction from "../../../models/transactionModel.js";

const changeTransactionStatus = async (transactionId, isConfirmed) => {
  const result = await Transaction.findByIdAndUpdate(transactionId, isConfirmed);
  return result
}

export default changeTransactionStatus;
