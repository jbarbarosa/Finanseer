import Account from "../../../models/accountModel.js";
import User from "../../../models/userModel.js";

export const getAllUserAccountsService = async (email) => {
  const user = await User.findOne({ email });
  const userId = user._id;
  if (!userId) return [400, "Usuário não encontrado"];

  const accounts = await Account.find({ userId });
  if (!accounts) return [200, "Nenhuma conta encontrada"]; // 200 pois a query foi bem sucedida, apenas não encontrou contas registradas neste usuário.
  return [200, accounts];
}

export default getAllUserAccountsService;
