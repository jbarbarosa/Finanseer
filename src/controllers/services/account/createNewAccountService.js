import Account from "../../../models/accountModel.js";
import User from "../../../models/userModel.js";

const createNewAccountService = async (email, bankName, number) => {
  try {
    const userDocument = await User.findOne({ email });
    const { _id, firstName } = userDocument;
    const userId = _id;
    const accountDocument = await Account.create({ bankName, userId, number });
    await User.updateOne({ _id: userId },{$push: {accounts:accountDocument}});
    const message = `Nova conta bancária criada para ${firstName}`;
    return message;
  } catch (err) {
    const message = 400;
    return message;
  }
}

export default createNewAccountService;
