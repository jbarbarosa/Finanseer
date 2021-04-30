import Account from "../../../models/accountModel.js";
import User from "../../../models/userModel.js";

const createNewAccountService = async (id, bankName, number) => {
  const userDocument = await User.findById(id);
  if (!userDocument) return [404, 'Não foi possível localizar o usuário'];
  const { _id, firstName } = userDocument;
  const userId = _id;
  const accountDocument = await Account.create({ bankName, userId, number });
  if (!accountDocument) return [400, 'Não foi possível criar uma nova conta'];
  const update = await User.updateOne({ _id: userId },{$push: {accounts:accountDocument}});
  if (update.ok == 1) return [200, { accountId : accountDocument._id }];
  return [400, 'Não foi possível vincular uma nova conta a este usuário'];
}

export default createNewAccountService;
