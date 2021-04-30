import Account from "../../../models/accountModel.js"
import Transaction from "../../../models/transactionModel.js"

const createNewTransactionService = async (accountId, amount, isInbound) => {
  const account = await Account.findOne({ _id: accountId });
  if (!account) return [404, 'Conta não encontrada'];

  const transaction = await Transaction.create({ accountId, amount, isInbound });
  const update = await Account
    .updateOne({ _id: accountId },{$push: {transactions:transaction}});
  
  if (update) return [200, 'Nova transação adicionada.']
  return [400, 'Não foi possível adiconar uma nova transação'];
}

export default createNewTransactionService;
