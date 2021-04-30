import Account from "../../../models/accountModel.js";
import Transaction from "../../../models/transactionModel.js";

const findAccountBalanceService = async (accountId) => {
  const account = await Account.findById(accountId);
  const accountTransactions = account.transactions;
  if (!account) return [404, "Conta não encontrada"];
  if (account && !accountTransactions) {
    return [200, "Nenhuma transação realizada"];
  }
  const tmpArray = [];
  accountTransactions.map(acc => {
    tmpArray.push(acc.transactions)
  })
  const transactions = await Transaction.find({
    $and: [
      { _id: accountTransactions },
      { isConfirmed: true }
    ]})
  let balance = 0;
  transactions.map(transaction => {
    if (transaction.isInbound == true) {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
  })
  return [200, balance];
}

export default findAccountBalanceService;
