import Transaction from "../../../models/transactionModel.js";

const changeTransactionStatusService = async (transactionId, isConfirmed) => {
  const update = await Transaction.findByIdAndUpdate(transactionId, { isConfirmed }, {
    new: true
  });
  if (update) return [200, 'Status da transação modificado'];
  return [400, 'Não foi possível alterar o status desta transação'];
}

export default changeTransactionStatusService;
