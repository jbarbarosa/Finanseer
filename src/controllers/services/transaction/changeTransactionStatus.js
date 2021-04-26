import Transaction from "../../../models/transactionModel.js";

const changeTransactionStatus = async (transactionId, isConfirmed) => {
  const result = await Transaction.findByIdAndUpdate(transactionId, { isConfirmed }, {
    new: true
  });
  return result
}

export default changeTransactionStatus;
