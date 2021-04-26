import createNewAccountService from "./services/account/createNewAccountService.js";
import Account from "../models/accountModel.js";
import Transaction from "../models/transactionModel.js";

export const createNewAccount = async (req, res) => {
  try {
    const { email, bankName, number } = req.body;
    if (!email || !bankName || !number) return res
      .status(400).send(`Erro: dados incompletos.`)
    const result = await createNewAccountService(email, bankName, number);
    if (result != 400) return res.status(200).send(result);
  } catch (err) {
    return res.status(400).send(`Erro ao registrar conta: ${ err }`);
  }
}

export const updateAccount = async (req, res) => {
  try {
    const { accountId } = req.body;
    const query = {}
    if (req.body.bankName) query.bankName = req.body.bankName;
    if (req.body.typeOfAccount) query.typeOfAccount = req.body.typeOfAccount;
    if (req.body.number) query.number = req.body.number;
    if (req.body.balance) query.balance = req.body.balance;

    const result = await Account.updateOne({_id: accountId}, query, {
      new: true
    });
    return res.send(result);
  } catch(err) {
    return err
  }
}

export const accountStatus = async (req, res) => {
  try {
    const { accountId, status } = req.body;
    const result = await Account.findByIdAndUpdate(accountId, { active : status });
    if (result) res.status(200).send("Estado alterado");
  } catch (err) {
    res.status(400).send("Erro ao alterar estado da conta");
  }
}

export const accountBalance = async (req, res) => {
  const { accountId } = req.body;
  const tmpArray = [];
  const account = await Account.findById(accountId);
  const accountTransactions = account.transactions;
  if (!accountTransactions) return res.status(400).send("Erro, transações não encontradas")
  accountTransactions.map(acc => {
    tmpArray.push(acc.transactions)
  })

  const transactions = await Transaction.find({
    $and: [
      { _id: accountTransactions },
      { isConfirmed: true }
    ]})
  let balance = 0
  transactions.map(transaction => {
    if (transaction.isInbound == true) {
      balance += transaction.amount;
    } else {
      balance -= transaction.amount;
    }
  })
  console.log(transactions);
  return res.status(200).send("Balanço: "+balance);
}