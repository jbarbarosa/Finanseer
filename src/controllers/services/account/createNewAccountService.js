import Account from "../../../models/accountModel.js";
import User from "../../../models/userModel.js";

const createNewAccountService = async (email, bankName, number) => {
  const userDocument = await User.findOne({ email });
  if (!userDocument) return [404, 'Não foi possível localizar o usuário'];
  const { _id, firstName } = userDocument;
  const userId = _id;
  const accountDocument = await Account.create({ bankName, userId, number });
  if (!accountDocument) return [400, 'Não foi possível criar uma nova conta'];
  const update = await User.updateOne({ _id: userId },{$push: {accounts:accountDocument}});
  if (update.ok == 1) return [200, `Nova conta bancária criada para ${firstName}`];
  return [400, 'Não foi possível vincular uma nova conta a este usuário'];
}

export default createNewAccountService;
