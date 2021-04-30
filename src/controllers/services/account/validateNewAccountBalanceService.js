import findAccountBalanceService from "./findAccountBalanceService.js";

const validateNewAccountBalanceService = async (amount, accountId) => {
  const output = await findAccountBalanceService(accountId);
  if (output[1] - amount < 0) return false;
  return true
}

export default validateNewAccountBalanceService;
