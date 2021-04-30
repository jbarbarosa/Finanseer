import User from "../../../models/userModel.js";

const createNewUserService = async (email, password, firstName, lastName) => {
  const user = await User.create({ email, password, firstName, lastName });
  if (user) return [200, user];
  return [400, "Erro, usuário não pôde ser criado"];
}

export default createNewUserService;
