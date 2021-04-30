import Account from "../../../models/accountModel.js";

export const updateAccountService = async (accountId, query) => {
  const update = await Account.findByIdAndUpdate(accountId, query, {
    new: true
  });
  if (update._id == accountId) return [200, 'Alterações realizadas'];
  return [400, 'Erro: não foi possível alterar a conta'];
}

export default updateAccountService;
