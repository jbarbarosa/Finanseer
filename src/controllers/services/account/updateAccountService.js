import Account from "../../../models/accountModel.js";

export const updateAccountService = async (accountId, query) => {
  const update = await Account.updateOne({ _id: accountId }, query, {
    new: true
  });
  if (update.ok == 1) return [200, 'Alterações realizadas'];
  return [400, 'Erro: não foi possível alterar a conta'];
}

export default updateAccountService;
