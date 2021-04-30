import Account from "../../../models/accountModel.js";

const updateAccountStatusService = async (accountId, status) => {
  const update = await Account.findByIdAndUpdate(accountId, { active : status });
  if (update._id == accountId) return [200, 'Status da conta modificado'];
  return [400, 'Não foi possível mudar o status da conta'];
}

export default updateAccountStatusService;
