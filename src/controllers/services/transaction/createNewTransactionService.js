import Account from "../../../models/accountModel.js"
import Transaction from "../../../models/transactionModel.js"

export const createNewTransactionService = async (accountId, amount, isInbound) => {
  const account = await Account.findOne({ _id: accountId });

  if (!account) {
    const message = "Conta não encontrada";
    return message
  }

  const { _id } = account;
  const transaction = await Transaction.create({ accountId, amount, isInbound });
  const result = await Account
    .updateOne({ _id: accountId },{$push: {transactions:transaction}});
  
  console.log("Transaction "+result)
  return result;
}