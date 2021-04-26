import Transaction from "../../../models/transactionModel";

const changeTransactionStatus = async (transactionId, isConfirmed) => {
  Transaction.findByIdAndUpdate(transactionId, isConfirmed);
}

export default changeTransactionStatus;
