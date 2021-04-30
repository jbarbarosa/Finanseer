import Account from "../../../models/accountModel.js";

const updateAccountStatusService = async (accountId, status) => {
  const account = await Account.findByIdAndUpdate(accountId, { active : status });
  if (account) return [200, 'Status da conta modificado'];
  return [400, 'Não foi possível mudar o status da conta'];
}

export default updateAccountStatusService;
