import Account from "../../../models/accountModel.js";
import Transaction from "../../../models/transactionModel.js";

const getAllClientTransactionsService = async (clientId) => {
  const tmpArray = [];
  const clientAccounts = await Account.find({ userId: clientId });
  clientAccounts.map(acc => {
    tmpArray.push(acc.transactions)
  })
  // transforma o array de arrays em um só array
  const transactionsArray = [].concat.apply([], tmpArray);
  const allTransactions = await Transaction.find({ _id: transactionsArray })
  if (allTransactions) return [200, allTransactions];
  return [400, 'Não foi possível encontrar as transações desse cliente'];
}

export default getAllClientTransactionsService;
