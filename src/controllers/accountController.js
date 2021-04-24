import Account from "../models/accountModel.js";
import User from "../models/userModel.js";

export const createNewAccount = async (req, res) => {
  console.log(req.body);
  try {
    const { email, bankName } = req.body;
    const userDocument = await User.findOne({ email });
    const { _id, firstName } = userDocument;
    const userId = _id;

    const accountDocument = await Account.create({ bankName, userId });

    await User.updateOne({ _id: userId },{$push: {accounts:accountDocument}});

    console.log(userDocument);
    res.status(200).send(`Nova conta bancária criada para ${firstName}`);
  } catch (err) {
    return res.status(400).send(`Erro ao registrar conta: ${ err }`);
  }
}